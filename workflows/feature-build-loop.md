# Feature Build Loop

Use this when building a new feature from an idea.

## Phase 1: Shape

Claude Code:

- clarify user story
- identify edge cases
- suggest implementation slices
- name risks and dependencies

Codex:

- inspect repo structure
- identify exact files to edit
- choose the smallest useful first version

## Phase 2: Implement

Codex:

- create the implementation
- add focused tests when useful
- run checks
- keep changes scoped

Claude Code:

- review the implementation plan or diff
- challenge missing states, edge cases, and UX gaps

## Phase 3: Stabilize

Codex:

- apply review fixes
- verify the working path
- update README or usage docs

Claude Code:

- produce release notes or user-facing explanation if needed

## Phase 4: Capture

Record:

- final prompt that worked
- mistakes or false starts
- reusable test commands
- any new playbook-worthy pattern
