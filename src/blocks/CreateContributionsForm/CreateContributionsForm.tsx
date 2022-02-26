import block from "bem-cn";
import { FormEvent, useState } from "react";

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

  const [currentStep, setCurrentStep] = useState(10);
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

    if (currentStep < players.length) {
      const processed: NewContribution = {
        id: players[currentStep].id,
        nick: players[currentStep].nick,
        contributionsHistory: players[currentStep].contributionsHistory.concat({ weekNumber: newWeek.current, contribution: Number(formData.get(players[currentStep].nick)) })
      }

      setData(data.concat(processed));
      setCurrentStep(currentStep + 1);
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
        {currentStep < players.length ?
          <label className={b('label')}>
            {players[currentStep].nick + ':'}
            <input className={b('input')} type="number" name={players[currentStep].nick} required />
          </label> :
          data.map((player) => (
            <div className={b('label')} key={player.id}>
              {player.nick + ':'}
              <span className={b('input')}>{player.contributionsHistory[player.contributionsHistory.length - 1].contribution}</span>
            </div>
          ))
        }
        <YellowButton text={currentStep < players.length ? "Следующий игрок" : "Подтвердить"} type="submit" />
        <span className={b('close')} onClick={handleClose}></span>
      </form>
    </div>
  )
}

export default CreateContributionsForm;