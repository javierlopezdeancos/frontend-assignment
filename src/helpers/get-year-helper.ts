function getYearHelper(date?: string): string | undefined {
  if (!date) {
    return;
  }

  return date.split("-")[0];
}

export default getYearHelper
