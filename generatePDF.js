import puppeteer from 'puppeteer';

const generatePDF = async (language, path) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Configurez la page pour aller à l'URL du CV
  await page.goto('http://localhost:5173/curriculum-vitae', { waitUntil: 'networkidle2' });

  // Définissez la langue dans localStorage
  await page.evaluate((language) => {
    localStorage.setItem('i18nextLng', language);
  }, language);

  // Rechargez la page pour que les paramètres de langue prennent effet
  await page.reload({ waitUntil: 'networkidle2' });

  // Attendez que la page soit complètement chargée
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Générez le PDF
  await page.pdf({
    path: path,
    format: 'A4',
    printBackground: true // Active l'inclusion des styles de fond
  });

  await browser.close();
};

(async () => {
  // Générez la version française du CV
  await generatePDF('fr', 'public/cv-Magnanfabrice.pdf');

  // Générez la version anglaise du CV
  await generatePDF('en', 'public/resume-Magnanfabrice.pdf');
})();
