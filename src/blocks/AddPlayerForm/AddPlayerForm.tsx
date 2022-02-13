import block from "bem-cn";
import { FormEvent } from "react";
import { nanoid } from "nanoid";

import './AddPlayerForm.scss';
import { addPlayerAndUpdate, loadPlayers } from "../../store/asyncActions";
import { useAppDispatch } from "../../store/hooks";

const b = block('AddPlayerForm');

const AddPlayerForm = () => {
  const dispatch = useAppDispatch();

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
          weekNumber: 1,
          contribution: Number(data.get('contributions-past'))
        },
        {
          weekNumber: 2,
          contribution: Number(data.get('contributions'))
        }
      ],
      isInGuild: true
    }  

    dispatch(addPlayerAndUpdate(newPlayer));
    dispatch(loadPlayers());
    form.reset();
  }

  return (
    <form action="POST" onSubmit={handleSubmit}>
      <input type="text" name="nick" placeholder="Введите ник игрока" required />
      <input type="text" name="rank" placeholder="Введите ранг игрока" required />
      <input type="number" name="contributions" placeholder="Введите вклад игрока" required />
      <input type="number" name="contributions-past" placeholder="Введите ещё вклад игрока" required />
      <input type="submit" name="submit" value="Добавить игрока" />
    </form>
  )
}

export default AddPlayerForm;