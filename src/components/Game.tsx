import React, { MouseEventHandler, useState } from 'react';
import { CountryCode, CountryNames } from '../lib/countries';
import { getNames } from '../utils/generateCountryNames';
import { sample } from '../utils/randomizer';

import './Game.css';

type GameState = {
  countryNumber: number | undefined;
  allCountries: CountryNames;
  selectedCountries: CountryCode[];
  correctCountry: CountryCode;
  userGuess: string | undefined;
};

const Game: React.FC = () => {
  // Initial values
  const _countryNumber = 4;
  const _allCountries = getNames('pt-BR');
  let _selectedCountries = sample<CountryCode>(
    Object.keys(_allCountries) as CountryCode[],
    _countryNumber
  );
  let _correct = sample<CountryCode>(_selectedCountries, 1)[0];
  let _userGuess = undefined;

  const [state, setState] = useState<GameState>({
    countryNumber: _countryNumber,
    allCountries: _allCountries,
    selectedCountries: _selectedCountries,
    correctCountry: _correct,
    userGuess: _userGuess,
  });

  const [messages, setMessages] = useState({
    result: '',
  });

  const newRound = () => {
    _selectedCountries = sample<CountryCode>(
      Object.keys(_allCountries) as CountryCode[],
      _countryNumber
    );
    _correct = sample<CountryCode>(_selectedCountries, 1)[0];
    _userGuess = undefined;

    setState({
      ...state,
      selectedCountries: _selectedCountries,
      correctCountry: _correct,
      userGuess: _userGuess,
    });

    setMessages({
      result: '',
    });
  };

  const handleClick: MouseEventHandler<HTMLElement> = (
    ev: React.MouseEvent<HTMLElement>
  ) => {
    if (state.userGuess) {
      // Do nothing if the user already guessed
      return;
    }

    const flag = ev.target as Element;

    if (flag.id === state.correctCountry) {
      setMessages({ ...messages, result: 'Correto' });
      setState({ ...state, userGuess: flag.id });
    } else {
      setMessages({
        ...messages,
        result: `Você selecionou: ${
          (state.allCountries as Record<string, string>)[flag.id]
        }`,
      });
      setState({ ...state, userGuess: flag.id });
    }
  };

  return (
    <div className='Game'>
      <h1 id='title'> Jogo das Bandeiras </h1>
      <h2 id='selectMsg'>
        {' '}
        Selecione o país:{' '}
        {(state.allCountries as Record<string, string>)[state.correctCountry]}
      </h2>
      <button
        className='continue-btn'
        disabled={state.userGuess === undefined}
        onClick={newRound}
      >
        {' '}
        Continuar{' '}
      </button>
      <ol className='flags-container'>
        {/* Show the possible countries in each round, or the results if the user guessed */}
        {state.selectedCountries.map((countryCode, i) => {
          if (
            state.userGuess === undefined ||
            countryCode === state.correctCountry ||
            countryCode === state.userGuess
          ) {
            return (
              <li key={i} className='flag'>
                <img
                  id={countryCode}
                  onClick={handleClick}
                  src={`../../assets/images/${countryCode}.png`}
                />
              </li>
            );
          }
        })}
      </ol>
      <div
        className={
          state.userGuess === undefined
            ? 'answer'
            : state.userGuess === state.correctCountry
            ? 'right answer'
            : 'wrong answer'
        }
      >
        <p> {messages.result} </p>
      </div>
    </div>
  );
};

export default Game;
