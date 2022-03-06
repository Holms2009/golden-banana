import React, { useEffect, useState } from "react";
import block from "bem-cn";

import './Timer.scss';

import { formatDateText } from "../../utils/dateFormatting";

const b = block('Timer');

type Props = {
  to?: Date,
  from?: Date,
  title: string
}

const Timer = ({ to, from, title }: Props) => {
  const [timer, setTimer] = useState(timeCounter());

  function timeCounter() {
    const windowWidth = window.innerWidth;
    const currentTime = new Date();
    let difference;

    if (to && !from) {
      difference = to.getTime() - currentTime.getTime();
    } else if (from && !to) {
      difference = currentTime.getTime() - from.getTime();
    } else if (to && from) {
      difference = to.getTime() - from.getTime();
    }

    if (difference) {
      const years = Math.trunc(difference / 31536e6);
      const months = Math.trunc(difference % 31536e6 / 2628e6);
      const days = Math.trunc(difference % 2628e6 / 864e5);
      const hours = Math.trunc((difference % 864e5) / 36e5)
      const minutes = Math.trunc((difference % 36e5) / 6e4)
      const seconds = Math.trunc((difference % 6e4) / 1000)

      return `
        ${years + formatDateText('год', years)}
        ${months + formatDateText('месяц', months)}
        ${days + formatDateText('день', days)}
      ` + ((windowWidth > 600) ? 
      `
        ${hours < 10 ? '0' + hours : hours} ${formatDateText('час', hours)}
        ${minutes < 10 ? '0' + minutes : minutes} ${formatDateText('минута', minutes)}
        ${seconds < 10 ? '0' + seconds : seconds} ${formatDateText('секунда', seconds)} 
      ` : '');
    } else {
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();

      return `
        ${hours < 10 ? '0' + hours : hours}:
        ${minutes < 10 ? '0' + minutes : minutes}:
        ${seconds < 10 ? '0' + seconds : seconds}
      `;
    }
  }

  useEffect(() => {
    const intervalID = setInterval(() => setTimer(timeCounter()), 1000);

    return () => {
      clearInterval(intervalID);
    }
  })

  return (
    <div className={b()}>
      <h3 className={b('title')}>{title}</h3>
      <p className={b('timer')}>{timer}</p>
    </div>
  )
}

export default Timer;