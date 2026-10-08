import { test as base } from '@playwright/test';
import { HomePage } from '../pages/index.js';

/**
 * @typedef {object} CustomFixtures
 * @property {HomePage} homePage
 */

/** @typedef {import('@playwright/test').PlaywrightTestArgs & import('@playwright/test').PlaywrightTestOptions & CustomFixtures} TestArgs */
/** @typedef {import('@playwright/test').PlaywrightWorkerArgs & import('@playwright/test').PlaywrightWorkerOptions} WorkerArgs */

export const test = /** @type {import('@playwright/test').TestType<TestArgs, WorkerArgs>} */ (
  base.extend({
    homePage: async ({ page }, use) => {
      await use(new HomePage(page));
    },
  })
);

export { expect } from '@playwright/test';
