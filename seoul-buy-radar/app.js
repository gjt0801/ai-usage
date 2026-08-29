const weights = {
  balanced: { value: 0.24, jeonse: 0.2, supply: 0.18, transit: 0.2, livability: 0.18 },
  value: { value: 0.34, jeonse: 0.26, supply: 0.18, transit: 0.12, livability: 0.1 },
  growth: { value: 0.16, jeonse: 0.14, supply: 0.16, transit: 0.3, livability: 0.24 },
  defensive: { value: 0.16, jeonse: 0.26, supply: 0.12, transit: 0.2, livability: 0.26 },
};

const state = {
  districts: [],
  activeId: null,
  watchlist: new Set(JSON.parse(localStorage.getItem("seoul-buy-radar-watchlist") || "[]")),
};

const $ = (selector) => document.querySelector(selector);

const formatPrice = (millionKrw) => {
  if (!millionKrw) return "-";
  const eok = millionKrw / 10000;
  return `${eok.toFixed(eok >= 10 ? 1 : 2)}억`;
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function scoreDistrict(district, strategy) {
  const w = weights[strategy];
  const valueScore = clamp(100 - district.medianPrice / 2600, 35, 95);
  const jeonseScore = clamp((district.jeonseRatio - 45) * 2.1, 30, 95);
  const supplyScore = clamp(100 - district.newSupplyRisk * 12, 25, 95);
  const transitScore = district.transitScore;
  const livabilityScore = district.livabilityScore;

  return Math.round(
    valueScore * w.value +
      jeonseScore * w.jeonse +
      supplyScore * w.supply +
      transitScore * w.transit +
      livabilityScore * w.livability
  );
}

function getFilteredDistricts() {
  const search = $("#searchInput").value.trim().toLowerCase();
  const budget = Number($("#budgetSelect").value);
  const strategy = $("#strategySelect").value;

  return state.districts
    .map((district) => ({ ...district, radarScore: scoreDistrict(district, strategy) }))
    .filter((district) => !search || district.name.toLowerCase().includes(search) || district.keywords.some((keyword) => keyword.toLowerCase().includes(search)))
    .filter((district) => !budget || district.medianPrice <= budget)
    .sort((a, b) => b.radarScore - a.radarScore || a.medianPrice - b.medianPrice);
}

function colorForScore(score) {
  if (score >= 78) return "#1f7a4d";
  if (score >= 70) return "#2667a8";
  if (score >= 62) return "#b86d1d";
  return "#8a4f42";
}

function renderSummary(districts) {
  const count = districts.length || 1;
  const avgScore = Math.round(districts.reduce((sum, item) => sum + item.radarScore, 0) / count);
  const avgPrice = Math.round(districts.reduce((sum, item) => sum + item.medianPrice, 0) / count);
  const avgJeonse = Math.round(districts.reduce((sum, item) => sum + item.jeonseRatio, 0) / count);

  $("#visibleCount").textContent = `${districts.length}개 구`;
  $("#topDistrict").textContent = districts[0] ? `${districts[0].name} ${districts[0].radarScore}점` : "후보 없음";
  $("#avgScore").textContent = districts.length ? `${avgScore}점` : "-";
  $("#avgPrice").textContent = districts.length ? formatPrice(avgPrice) : "-";
  $("#avgJeonse").textContent = districts.length ? `${avgJeonse}%` : "-";
  $("#watchCount").textContent = state.watchlist.size;
}

function renderMap(districts) {
  const map = $("#radarMap");
  map.innerHTML = "";

  districts.forEach((district) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "map-cell";
    button.style.background = colorForScore(district.radarScore);
    button.innerHTML = `<strong>${district.name}</strong><span>${district.radarScore}</span>`;
    button.addEventListener("click", () => selectDistrict(district.id));
    map.appendChild(button);
  });
}

function renderList(districts) {
  const list = $("#districtList");
  list.innerHTML = "";

  districts.forEach((district, index) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = `district-row ${state.activeId === district.id ? "active" : ""}`;
    row.innerHTML = `
      <span class="rank">${index + 1}</span>
      <span>
        <span class="row-title">${district.name}${state.watchlist.has(district.id) ? " · 관심" : ""}</span>
        <span class="row-meta">${formatPrice(district.medianPrice)} · 전세가율 ${district.jeonseRatio}% · ${district.keywords.join(", ")}</span>
      </span>
      <span class="score-pill">${district.radarScore}</span>
    `;
    row.addEventListener("click", () => selectDistrict(district.id));
    list.appendChild(row);
  });
}

function renderDetail(districts) {
  const selected = districts.find((district) => district.id === state.activeId) || districts[0];
  const container = $("#detailContent");

  if (!selected) {
    $("#detailTitle").textContent = "상세 분석";
    $("#detailMeta").textContent = "조건에 맞는 후보가 없습니다";
    container.innerHTML = "";
    return;
  }

  state.activeId = selected.id;
  $("#detailTitle").textContent = selected.name;
  $("#detailMeta").textContent = `${selected.radarScore}점 · ${selected.persona}`;
  container.innerHTML = `
    <div>
      <div class="metric-grid">
        <div class="metric"><span>중위 매매가</span><strong>${formatPrice(selected.medianPrice)}</strong></div>
        <div class="metric"><span>전세가율</span><strong>${selected.jeonseRatio}%</strong></div>
        <div class="metric"><span>공급 리스크</span><strong>${selected.newSupplyRisk}/5</strong></div>
        <div class="metric"><span>교통/인프라</span><strong>${selected.transitScore}/${selected.livabilityScore}</strong></div>
      </div>
      <button class="watch-toggle ${state.watchlist.has(selected.id) ? "saved" : ""}" type="button">
        ${state.watchlist.has(selected.id) ? "관심 후보에서 제거" : "관심 후보에 추가"}
      </button>
    </div>
    <div>
      <ul class="reason-list">
        ${selected.reasons.map((reason) => `<li>${reason}</li>`).join("")}
      </ul>
    </div>
  `;

  container.querySelector(".watch-toggle").addEventListener("click", () => toggleWatch(selected.id));
}

function selectDistrict(id) {
  state.activeId = id;
  render();
}

function toggleWatch(id) {
  if (state.watchlist.has(id)) {
    state.watchlist.delete(id);
  } else {
    state.watchlist.add(id);
  }
  localStorage.setItem("seoul-buy-radar-watchlist", JSON.stringify([...state.watchlist]));
  render();
}

function render() {
  const districts = getFilteredDistricts();
  if (!districts.some((district) => district.id === state.activeId)) {
    state.activeId = districts[0]?.id || null;
  }
  renderSummary(districts);
  renderMap(districts);
  renderList(districts);
  renderDetail(districts);
}

async function init() {
  const response = await fetch("./data/seoul-districts.json");
  state.districts = await response.json();
  ["#searchInput", "#budgetSelect", "#strategySelect"].forEach((selector) => $(selector).addEventListener("input", render));
  $("#resetButton").addEventListener("click", () => {
    $("#searchInput").value = "";
    $("#budgetSelect").value = "0";
    $("#strategySelect").value = "balanced";
    render();
  });
  render();
}

init().catch((error) => {
  console.error(error);
  $("#detailContent").textContent = "데이터를 불러오지 못했습니다.";
});
