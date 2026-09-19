#!/usr/bin/env node
// Smoke test added by repocurator (feature 002) -- the repository ships no
// automated tests of its own (no "test" script in package.json, no test
// files anywhere in the tree). `yarn build` (the preceding CI step) only
// proves the app compiles; it does not exercise anything at runtime.
//
// This exercises the one server-side code path the repository actually has
// -- the pages/api/hello.js route -- by requiring Next.js's own compiled
// output for it (.next/server/pages/api/hello.js, produced by the build
// step) and invoking the handler the same way the Next.js server would,
// then checking its real response instead of just printing something.

const assert = require('assert');
const path = require('path');
const fs = require('fs');

const repoRoot = path.resolve(__dirname, '..');
const compiledHandlerPath = path.join(
  repoRoot,
  '.next',
  'server',
  'pages',
  'api',
  'hello.js'
);

assert(
  fs.existsSync(compiledHandlerPath),
  `${compiledHandlerPath} does not exist -- run "yarn build" before this script`
);

const handler = require(compiledHandlerPath).default;
assert(typeof handler === 'function', 'pages/api/hello.js must export a default handler function');

function makeResponse() {
  return {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
  };
}

const res = makeResponse();
handler({}, res);

assert.strictEqual(
  res.statusCode,
  200,
  `expected pages/api/hello.js to answer with status 200, got ${res.statusCode}`
);
assert.ok(
  res.body && typeof res.body === 'object',
  'expected pages/api/hello.js to answer with a JSON object body'
);
assert.strictEqual(
  res.body.name,
  'John Doe',
  `expected { name: "John Doe" }, got ${JSON.stringify(res.body)}`
);

console.log(
  'Smoke test passed: the compiled pages/api/hello.js route answers ' +
    '{ name: "John Doe" } with status 200.'
);
