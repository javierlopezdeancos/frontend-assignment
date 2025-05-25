export type EnglishDaysOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export type SpanishDayOfWeek = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes" | "Sábado" | "Domingo";

const translationDaysOfWeek: Record<EnglishDaysOfWeek, SpanishDayOfWeek> = {
  Monday: "Lunes",
  Tuesday: "Martes",
  Wednesday: "Miércoles",
  Thursday: "Jueves",
  Friday: "Viernes",
  Saturday: "Sábado",
  Sunday: "Domingo"
} as const

function getSpanishDayOfWeek(englishDayOfWeek: EnglishDaysOfWeek): SpanishDayOfWeek {
  return translationDaysOfWeek[englishDayOfWeek]
}

export default getSpanishDayOfWeek
