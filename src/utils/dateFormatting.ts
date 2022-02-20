function formatDateString(date: string): string {
  return new Date(Date.parse(date)).toLocaleDateString('ru');
}

function changeDate(date: string, multiplier: number): string {
  const result = new Date(Date.parse(date));

  result.setDate(result.getDate() - multiplier * 7);

  return result.toLocaleDateString('ru');
}

export { changeDate, formatDateString };