import block from "bem-cn";
import React, { FormEvent } from "react";
import { nanoid } from "nanoid";

import './AddPlayerForm.scss';
import { addPlayerAndUpdate, loadPlayers } from "../../store/asyncActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { selectCurrentWeek } from "../../store/getters";

const b = block('AddPlayerForm');

type Props = {
  handleClose?: () => void;
}

const AddPlayerForm = ({handleClose}: Props) => {
  const dispatch = useAppDispatch();
  const week: Week = useAppSelector(selectCurrentWeek);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form: HTMLFormElement = evt.currentTarget;
    const data = new FormData(form);

    const newPlayer: Player = {
      nick: String(data.get('nick')),
      rank: String(data.get('rank')),
      id: nanoid(8),
      contributionsHistory: [
        {
          weekNumber: week.current,
          contribution: Number(data.get('contributions-past'))
        }
      ],
      isInGuild: true
    }  

    dispatch(addPlayerAndUpdate(newPlayer));
    dispatch(loadPlayers());
    form.reset();
  }

  return (
    <form className={b()} action="POST" onSubmit={handleSubmit}>
      <h3 className={b('title')}>Добавление нового игрока</h3>
      <input className={b('input')} type="text" name="nick" placeholder="Введите ник игрока" required />
      <input className={b('input')} type="text" name="rank" placeholder="Введите ранг игрока" required />
      <input className={b('input')} type="number" name="contributions" placeholder="Введите вклад игрока" required />
      <input className={b('input')} type="submit" name="submit" value="Добавить игрока" />
      <span className={b('close')} onClick={handleClose}></span>
    </form>
  )
}

export default AddPlayerForm;