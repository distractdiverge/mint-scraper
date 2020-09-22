import { PathLike } from 'fs';
import * as puppeteer from 'puppeteer';

const main = async (outputFolder: PathLike) => {
    const browser = await puppeteer.launch({
      defaultViewport: { width: 1920, height: 1080 },
      headless: false, // true = hide screen, false = show screen
      timeout: 60000, // 60 seconds
    });
  
    const page = (await browser.pages())[0];
  
    await page.goto('https://accounts.intuit.com/index.html');
  
    // Take a screenshot of the page and save it into the outputs folder
    await page.screenshot({
        path: `${outputFolder}/login.png`,
    });
  
    // Just close the browser, there is only 1 page so no need for await page.close()
    await browser.close();
  };




//
// TODO: Introduce 'if not an import, execute'
//
main('./outputs/')
  .then(() => {
    console.log('Browser scans complete!');
  })
  .catch((error) => {
    console.log('Browser scans failed with the following error:', error);
  });
