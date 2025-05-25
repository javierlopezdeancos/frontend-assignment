import { expect, test } from 'vitest'

import getYearHelper from '../../src/helpers/get-year-helper.ts'

test('string date 2012-10-10 should have extracted the 2012 year', () => {
  expect(getYearHelper("2012-10-10")).toBe("2012")
})

test('string date 2020-01-28 should have extracted the 2020 year', () => {
  expect(getYearHelper("2020-01-28")).toBe("2020")
})
