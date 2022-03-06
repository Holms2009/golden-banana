import React, { useEffect, useState } from "react";
import block from "bem-cn";

import './Timer.scss';

import { formatDateText } from "../../utils/dateFormatting";

const b = block('Timer');

type Props = {
  to?: Date,
  title: string
}

const Timer = ({ to, title }: Props) => {
  const [timer, setTimer] = useState('');

  function timeCounter() {
    const currentTime = new Date();

    if (to) {
      const month = (to.getMonth() || 11) - currentTime.getMonth();
      const date = to.getDate() - currentTime.getDate();
      const hours = (to.getHours() || 23) - currentTime.getHours();
      const minutes = (to.getMinutes() || 59) - currentTime.getMinutes();
      const seconds = (to.getSeconds() || 59) - currentTime.getSeconds();

      setTimer(`
        ${month + formatDateText('месяц', month)}
        ${date + formatDateText('день', date)}
        ${hours < 10 ? '0' + hours : hours} ${formatDateText('час', hours)}
        ${minutes < 10 ? '0' + minutes : minutes} ${formatDateText('минута', minutes)}
        ${seconds < 10 ? '0' + seconds : seconds} ${formatDateText('секунда', seconds)}
      `);
    } else {
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();

      setTimer(`${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`);
    }
  }

  useEffect(() => {
    const intervalID = setInterval(timeCounter, 1000);
    timeCounter();

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