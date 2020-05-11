const assert = require('assert');
const puppeteer = require('puppeteer');

describe('Open ProntoTools Website', () => {

  let browser, page;
  const url = 'http://localhost:8000/test'

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  })

  it('testharness', async () => {

    await page.goto(url);

    // Extract the results from the page
    const results = await page.evaluate(() => {

      const getCellTrimmed = (tr, index) =>
        (tr.children[index].textContent || '').trim();

      const resultsTable = document
        .getElementById('results')
        .querySelectorAll('tbody > tr');

      const results = Array
        .from(resultsTable)
        .map(tr => {
          const result = tr.children[0].textContent;
          const testName = getCellTrimmed(tr, 1);
          const message = getCellTrimmed(tr, 2);
          const passed = result == 'Pass';

          return { result, passed, testName, message, }
        });

      return results;
    });

    results.forEach(result => {
      expect(result.passed).toBe(true);
    })
  });

  afterAll(async () => {
    await browser.close();
  })
})
