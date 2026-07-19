# AI Design Loop

Use this as the default operating loop for turning AI help into repeatable work.

Inspired by Ted Lee's How to Claude course: https://tedlee99.pages.dev/

## Core Idea

Strong AI usage is design work:

- design the context
- design the prompt
- design the tools
- design the agent environment
- design the team
- design the verification
- design the measurement

## Loop

### 1. Verify

Do not trust the first result.

- identify factual claims
- identify assumptions
- choose evidence or tests
- mark what needs human judgment

Useful prompt:

- `prompts/codex/verification-brief.md`

### 2. Protect Context

Keep the active context narrow.

- one task per session
- relevant files only
- filtered tool output
- compact handoff when the goal changes

Useful playbook:

- `playbooks/context-management.md`

### 3. Design The Work

Turn the request into an explicit spec.

- goal
- non-goals
- constraints
- expected output
- affected files
- test plan

Useful prompt:

- `prompts/codex/implementation-brief.md`

### 4. Decompose

Break large work into small verifiable steps.

- one step at a time
- verify each step
- avoid carrying failed assumptions forward

Useful playbook:

- `playbooks/feature-build.md`

### 5. Choose The Team Shape

Use multiple agents only when the work shape calls for it.

- chain dependent steps
- parallelize independent steps
- route by input type
- add evaluator loops for high-risk outputs
- use orchestrator-workers for broad ambiguous scope

Useful prompt:

- `prompts/codex/orchestration-planner.md`

Useful playbook:

- `playbooks/multi-agent-orchestration.md`

### 6. Build Trust Gates

Trust the process, not the completion report.

- source checks
- tests
- independent review
- edge cases
- regression comparison

Useful playbook:

- `playbooks/evaluation-gates.md`

### 7. Learn

Promote repeated wins into reusable assets.

- save strong prompts
- turn repeated steps into playbooks
- record failed patterns
- delete workflows that create noise

Useful directory:

- `logs/experiments/`
