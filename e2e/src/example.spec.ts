import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('ABDUL RAHMAN');
});
test('has summary', async ({ page }) => {
  await page.goto('/');

  // Expect p to contain a substring.
  expect(await page.locator('p').innerText()).toContain(
    ' expertise in developing dynamic and scalable web applications using React and Next.js. Proficient in production deployments in AWS and adept at using AWS Session Manager to ensure seamless and reliable deployments. Skilled in modern development practices, ensuring optimal performance and exceptional user experiences. Strong collaborator in Agile environments with a commitment to continuous improvement and code quality.'
  );
});
