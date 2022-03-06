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

function formatDateText(text: string, value: number): string {
  let result = '';

  if (text === 'год') {
    switch (defineWordEndingByNumber(value)) {
      case 1:
        result = ' год';
        break;
      case 2:
        result = ' лет';
        break;
      case 3:
        result = ' года';
        break;
    }
  }

  if (text === 'месяц') {
    switch (defineWordEndingByNumber(value)) {
      case 1:
        result = ' месяц';
        break;
      case 2:
        result = ' месяцев';
        break;
      case 3:
        result = ' месяца';
        break;
    }
  }

  if (text === 'день') {
    switch (defineWordEndingByNumber(value)) {
      case 1:
        result = ' день';
        break;
      case 2:
        result = ' дней';
        break;
      case 3:
        result = ' дня';
        break;
    }
  }

  if (text === 'час') {
    switch (defineWordEndingByNumber(value)) {
      case 1:
        result = ' час';
        break;
      case 2:
        result = ' часов';
        break;
      case 3:
        result = ' часа';
        break;
    }
  }

  if (text === 'минута') {
    switch (defineWordEndingByNumber(value)) {
      case 1:
        result = ' минута';
        break;
      case 2:
        result = ' минут';
        break;
      case 3:
        result = ' минуты';
        break;
    }
  }

  if (text === 'секунда') {
    switch (defineWordEndingByNumber(value)) {
      case 1:
        result = ' секунда';
        break;
      case 2:
        result = ' секунд';
        break;
      case 3:
        result = ' секуны';
        break;
    }
  }

  return result;
}

function defineWordEndingByNumber(number: number): number {
  let n = number % 100;

  if (n >= 5 && n <= 20) {
    return 2;
  }

  n = number % 10;

  if (n > 1 && n < 5) {
    return 3;
  }

  if (n === 1) {
    return 1;
  }

  return 2;
}

export { changeDate, formatDateString, formatDateText };