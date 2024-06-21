// @ts-check
import { test, expect } from '@playwright/test'
const LOCAL = 'http://localhost:5173'
const URLPREFIX = 'https://cataas.com'

test('pp show text and image', async ({ page }) => {
  await page.goto(LOCAL)
  const paragraph = await page.getByRole('paragraph').first()
  const image = await page.getByRole('img').first()
  const textContent = await paragraph.textContent()
  const imgsource = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgsource?.startsWith(URLPREFIX)).toBeTruthy()
})
