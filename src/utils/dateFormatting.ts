function formatDateString(date: string): string {
  const parts = date.split('-');
  return new Date(parts[0] + '/' + parts[1] + '/' + parts[2]).toLocaleDateString('ru');
}

function changeDate(date: string, multiplier: number): string {
  const parts = date.split('-');
  const result = new Date(parts[0] + '/' + parts[1] + '/' + parts[2]);

  result.setDate(result.getDate() - multiplier * 7);

  return result.toLocaleDateString('ru');
}

export { changeDate, formatDateString };