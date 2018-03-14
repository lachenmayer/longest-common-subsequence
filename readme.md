# longest-common-subsequence

Finds the longest common subsequence of two strings, and the diff between them.

```typescript
function lcs(a: string, b: string): { lcs: string, diff: Array<Diff> }

type Diff =
  | ['keepOld', number] // index in a
  | ['addNew', number] // index in b
  | ['removeOld', number] // index in a
```
