import { expect, test } from 'vitest'

import getSpanishDayOfWeekHelper from '../../src/helpers/get-spanish-day-of-week-helper.ts'

test('Day of week Monday should be Lunes in Spanish', () => {
  expect(getSpanishDayOfWeekHelper("Monday")).toBe("Lunes")
})

test('Day of week Tuesday should be Martes in Spanish', () => {
  expect(getSpanishDayOfWeekHelper("Tuesday")).toBe("Martes")
})

test('Day of week Wednesday should be Miércoles in Spanish', () => {
  expect(getSpanishDayOfWeekHelper("Wednesday")).toBe("Miércoles")
})

test('Day of week Thursday should be Jueves in Spanish', () => {
  expect(getSpanishDayOfWeekHelper("Thursday")).toBe("Jueves")
})

test('Day of week Friday should be Viernes in Spanish', () => {
  expect(getSpanishDayOfWeekHelper("Friday")).toBe("Viernes")
})

test('Day of week Saturday should be Sábado in Spanish', () => {
  expect(getSpanishDayOfWeekHelper("Saturday")).toBe("Sábado")
})

test('Day of week Sunday should be Domingo in Spanish', () => {
  expect(getSpanishDayOfWeekHelper("Sunday")).toBe("Domingo")
})
