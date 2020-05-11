# Running tests

These tests are provided as a runnable webpage for running in a browser
using a W3C official test harness.

To run the tests, start a web server that serves the root directory
and open test/index.html.

```
# From the top root directory execute these commands
git submodule init
git submodule update --checkout
python -m SimpleHTTPServer &
```

Then open `http://localhost:8000/test`



