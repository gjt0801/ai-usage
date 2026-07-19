# Context Management Playbook

Use when a task is long, tool-heavy, research-heavy, or spans multiple AI sessions.

Inspired by Ted Lee's How to Claude course: https://tedlee99.pages.dev/

## Principle

Context is a workbench. Keep only the materials needed for the current job on it.

Poor context management creates two problems:

- quality drops because important constraints are buried
- cost rises because irrelevant history and tool output keep accumulating

## Operating Rules

- Use one session per task or phase.
- Start a new session when the goal changes.
- Keep persistent instructions short and stable.
- Put large background knowledge in files, not repeated chat text.
- Prefer targeted file reads over dumping large files.
- Summarize and hand off when a session gets long.

## Tool Output Hygiene

Prefer focused commands:

```bash
rg "pattern" path/
head -n 80 file.log
tail -n 120 file.log
sed -n '120,220p' file
```

Avoid:

```bash
cat huge.log
cat large-generated-file.json
```

If output may be large, filter first.

## Session Handoff

When moving to a new session, write a compact handoff:

```text
Goal:
<current objective>

Done:
<decisions and completed work>

Current state:
<branch, files, tests, known outputs>

Important constraints:
<constraints that must survive>

Open questions:
<what still needs judgment>

Next step:
<smallest useful next action>
```

## When To Use Subagents

Use subagents to isolate exploration when:

- the task requires reading many files
- the result can be summarized compactly
- tool output would otherwise pollute the main context
- independent research threads can run separately

Do not use subagents for tiny tasks where orchestration overhead is larger than the work.

## Long-Running Task Rhythm

1. State the small next goal.
2. Gather only relevant context.
3. Make one scoped change.
4. Verify locally.
5. Summarize the result.
6. Decide whether to continue or hand off.

## Review Gate

Before continuing a long session, ask:

- Is the goal still the same?
- Is old context now irrelevant?
- Are tool outputs too large?
- Should this become a new session with a handoff?
- Can repeated instructions move into a file or prompt?
