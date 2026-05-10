# Feature Build Playbook

Use when adding a new feature.

## Brief

Write a short implementation brief:

- user goal
- target behavior
- non-goals
- affected files
- test plan
- open questions

## Build Rules

- Start with the smallest useful version.
- Match existing repo patterns.
- Add abstractions only when they remove real complexity.
- Prefer focused tests over broad churn.
- Update docs when usage changes.

## Review Gates

- Does the feature solve the stated goal?
- Are failure states handled?
- Is there a clear verification path?
- Can another developer understand where the feature lives?
