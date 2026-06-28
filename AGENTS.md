# AGENTS Guide for SCC docs

## Scope
- This repo is the SCC documentation site from `https://github.com/CCimen/scc-cli-docs`.
- The sibling source repo is `../scc`.
- Keep docs aligned with current SCC source behavior, commands, configuration, provider support, and security claims.

## Commands
Run from this repo:

```bash
bun install
bun run dev
bun run astro check
```

## Files
- Docs content lives under `src/content/docs/`.
- Site configuration lives in `astro.config.mjs` and `src/content.config.ts`.
- Public assets live under `public/`.

## Code Review Graph
- Use code-review-graph first for broad docs/source orientation, then verify exact docs paths and source behavior directly.
- Use `rg` for exact strings, tiny edits, config/lock files, and final file:line evidence.
- Local embeddings use `ibm-granite/granite-embedding-small-english-r2`; refresh with `CRG_PARSE_EXECUTOR=thread code-review-graph build --repo .` then `code-review-graph embed --repo . --provider local --model ibm-granite/granite-embedding-small-english-r2`.

## Maintainability Review Protocol
- Treat duplicated, stale, or overclaimed docs as product debt.
- Verify command docs against `../scc` CLI help and security/runtime claims against source behavior before recommending changes.
- Use Claude review or the Claude peer loop for non-trivial docs architecture or truthfulness conclusions.
- Prefer deleting duplicate pages or consolidating around one canonical explanation over maintaining parallel near-copies.

## Style
- Use Starlight and Markdown conventions before custom HTML.
- Keep file names kebab-case.
- Use 2-space indentation in JSON and YAML.
- Avoid overstating enforcement or isolation guarantees; security language must match what SCC actually implements.
- If updating command docs, compare against the source CLI help in `../scc`.
