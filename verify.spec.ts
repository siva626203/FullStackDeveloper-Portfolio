
import { test, expect } from '@playwright/test';

test('homepage has a canvas for the 3D portfolio', async ({ page }) => {
  test.setTimeout(60000); // 60 seconds
  const FgRed = "\x1b[31m"
  page.on('console', msg => {
    if (msg.type() === 'error')
      console.log(`${FgRed}${msg.text()}`);
  });

  await page.goto('http://localhost:3000/');

  // Scroll down to the section
  await page.evaluate(() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView();
    }
  });


  // Wait for the canvas to be visible
  const canvas = page.locator('canvas');
  await expect(canvas).toBeVisible();

  // Capture a screenshot
  await page.screenshot({ path: 'portfolio-3d-view.png' });
});
