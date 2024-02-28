import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/curriculum-vitae', { waitUntil: 'networkidle2' });
  
  // Utilise setTimeout dans une promesse pour attendre
  await new Promise(resolve => setTimeout(resolve, 1000));

  await page.pdf({
    path: 'public/cv-Magnanfabrice.pdf',
    format: 'A4',
    printBackground: true // Active l'inclusion des styles de fond
  });

  await browser.close();
})();
