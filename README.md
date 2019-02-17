# e2e-webdriverio-typescript

## Dependencies
* Node.js - Minimum version of 6 on Windows due to an issue with node fibers, 7+ on mac/linux should be fine.
* Java -- Needed to run the selenium server
* Chrome.

## Test execution
To run the tests, clone the latest version of this repo then install the node modules using npm install. Afterwards execute npm run build then npm run test.

To run a test by itself, use ./node_modules/.bin/wdio --spec <path to test> wdio.conf.js.
