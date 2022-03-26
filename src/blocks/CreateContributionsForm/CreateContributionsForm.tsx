import block from "bem-cn";
import React, { FormEvent, useState } from "react";

import './CreateContributionsForm.scss';

import YellowButton from "../YellowButton/YellowButton";
import { selectCurrentWeek, selectPlayers } from "../../store/getters";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectActivePlayers } from "../../utils/playersSort";
import { getWeek, loadPlayers, updatePlayerContributions, updateWeekAction } from "../../store/asyncActions";


const b = block('CreateContributionsForm');

type Props = {
  handleClose?: () => void;
}

const CreateContributionsForm = ({ handleClose }: Props) => {
  const initialState: NewContribution[] = [];

  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialState);

  const dispatch = useAppDispatch();
  const players: Player[] = selectActivePlayers(useAppSelector(selectPlayers));
  const week: Week = useAppSelector(selectCurrentWeek);

  const currentDate = new Date();
  const newWeek: Week = {
    current: week.current + 1,
    lastUpdate: `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const formData = new FormData(form);

    if (step < players.length) {
      const processed: NewContribution = {
        id: players[step].id,
        nick: players[step].nick,
        contributionsHistory: players[step].contributionsHistory.concat({ weekNumber: newWeek.current, contribution: Number(formData.get(players[step].nick)) })
      }

      setData(data.concat(processed));
      setStep(step + 1);
      form.reset();
    } else {

      data.forEach(item => {
        dispatch(updatePlayerContributions(item));
      })

      dispatch(updateWeekAction(newWeek));
      dispatch(getWeek());
      dispatch(loadPlayers());
      form.reset();

      handleClose && handleClose();
    }
  }

  return (
    <div className={b()} onClick={handleClose}>
      <form className={b('form')} action="POST" onSubmit={handleSubmit}>
        {step < players.length ?
          <label className={b('label')}>
            {players[step].nick + ':'}
            <input className={b('input')} type="number" name={players[step].nick} required />
          </label> :
          data.map((player) => (
            <div className={b('label')} key={player.id}>
              {player.nick + ':'}
              <span className={b('input')}>{player.contributionsHistory[player.contributionsHistory.length - 1].contribution}</span>
            </div>
          ))
        }
        <YellowButton text={step < players.length ? "Следующий игрок" : "Подтвердить"} type="submit" />
        <span className={b('close')} onClick={handleClose}></span>
      </form>
    </div>
  )
}

export default CreateContributionsForm;