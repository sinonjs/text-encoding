# Running tests

## In-Browser Tests

These tests are provided as a runnable webpage for running in a browser
using a W3C official test harness.

To run the tests, start a web server that serves the root directory
and open test/index.html.

**(Recommended) With NPM Scripts:**

```bash
# From the top root directory execute these commands
yarn test:serve
```

**With JS:**

```bash
# From the top root directory execute these commands
git submodule init
git submodule update --checkout
npx http-server -p 8000
```

**(Legacy) With Python:**

```bash
# From the top root directory execute these commands
git submodule init
git submodule update --checkout
python -m SimpleHTTPServer &
```

_⚠ This is not really supported anymore and may stop working._

**Then open:** `http://localhost:8000/test`

## In-Node.js Tests

To run only the integration tests (out of the browser) you can use:

```bash
# From the top root directory execute these commands
yarn test:integration
```

Or simply run jest pointing to the folder:

```bash
# From the top root directory execute these commands
jest __tests__
```

These tests are completely rewritten versions of the ones you find in the "/test" folder.
