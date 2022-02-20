import block from "bem-cn";

import './CreateContributionsForm.scss';

import { selectCurrentWeek, selectPlayers } from "../../store/getters";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectActivePlayers } from "../../utils/playersSort";
import { FormEvent, MouseEventHandler } from "react";
import { getWeek, loadPlayers, updatePlayerContributions, updateWeekAction } from "../../store/asyncActions";


const b = block('CreateContributionsForm');

type Props = {
  handleClose?: MouseEventHandler;
}

const CreateContributionsForm = ({ handleClose }: Props) => {
  const week: Week = useAppSelector(selectCurrentWeek);
  const dispatch = useAppDispatch();
  let players: Player[] = useAppSelector(selectPlayers);

  players = selectActivePlayers(players);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const data = new FormData(form);
    const newContributions: NewContribution[] = [];
    const currentDate = new Date();
    const newWeek: Week = {
      current: week.current + 1,
      lastUpdate: `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`
    }

    players.forEach(player => {
      const processed: NewContribution = {
        id: player.id,
        nick: player.nick,
        contributionsHistory: player.contributionsHistory.concat({ weekNumber: newWeek.current, contribution: Number(data.get(player.nick)) })
      }

      console.log(processed);
      

      newContributions.push(processed);
    })

    newContributions.forEach(item => {
      dispatch(updatePlayerContributions(item));
    })

    dispatch(updateWeekAction(newWeek));
    dispatch(getWeek());
    dispatch(loadPlayers());
    form.reset();
  }


  return (
    <div className={b()} onClick={handleClose}>
      <form className={b('form')} action="POST" onSubmit={handleSubmit}>
        {
          players.map(player => (
            <label className={b('label')} key={player.id}>
              {player.nick + ':'}
              <input className={b('input')} type="number" name={player.nick} required/>
            </label>
          ))
        }
        <input className={b('submit')} type="submit" />
        <span className={b('close')} onClick={handleClose}></span>
      </form>
    </div>
  )
}

export default CreateContributionsForm;