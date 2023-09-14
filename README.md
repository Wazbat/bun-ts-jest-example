# bun-ts-jest-example

Repro of https://github.com/oven-sh/bun/issues/5190

To reproduce the error, run
```bash
bun install
bun run test
```
To get the tests to work, uncomment the transform in `jest.config.ts`. They'll still fail but it'll be because the test is wrong, not because of the import error

Tested with bun `v1.0.1`