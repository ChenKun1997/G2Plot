import path from 'path';
import { test } from '@playwright/test';
import { createDiff, getSnapshotName, toHump, sleep, logDiff } from '../utils';

const IMG_DIR = path.resolve(__dirname, '..', process.env.SNAPSHOTS_DIR as string);

const files = getSnapshotName();

test.afterAll(() => {
  createDiff();
  logDiff();
});

test('Plot snapshots', async ({ page }) => {
  for (const filename of files) {
    const [name] = filename.split('.');
    await page.goto(`/?name=${toHump(name)}`);
    await sleep(1000);
    await page.locator('.container').screenshot({ path: `${IMG_DIR}/${name}.png` });
  }
});
