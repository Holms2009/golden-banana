import React, { FormEvent } from "react";
import block from "bem-cn";
import { nanoid } from "nanoid";

import './AddPlayerForm.scss';

import YellowButton from "../YellowButton/YellowButton";
import { addPlayerAndUpdate, loadPlayers } from "../../store/asyncActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectCurrentWeek } from "../../store/getters";

const b = block('AddPlayerForm');

type Props = {
  handleClose?: () => void;
}

const AddPlayerForm = ({ handleClose }: Props) => {
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
          weekNumber: week.current - 1,
          contribution: 0
        },
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
    handleClose && handleClose();
  }

  return (
    <form className={b()} action="POST" onSubmit={handleSubmit}>
      <h3 className={b('title')}>Добавление нового игрока</h3>
      <input className={b('input')} type="text" name="nick" placeholder="Введите ник игрока" required />
      <select className={b('select')} name="rank" placeholder="Выберите ранг игрока" required >
        <option value='officer'>Офицер</option>
        <option value='common' selected>Обычный игрок</option>
      </select>
      <input className={b('input')} type="number" name="contributions" placeholder="Введите вклад игрока" required />
      <YellowButton text="Добавить игрока" type="submit"/>
      <span className={b('close')} onClick={handleClose}></span>
    </form>
  )
}

export default AddPlayerForm;