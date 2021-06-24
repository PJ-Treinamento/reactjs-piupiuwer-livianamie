

import { useEffect, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';

import api from '../../services/api';

import { NewPiuWrapper, Text, Textarea, Counter, CounterValue } from './styles';

const NewPiu: React.FC = () => {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(text.length);

  const [errorColor, setErrorColor] = useState(false);
  
  const [charErrorMessage, setCharErrorMessage] = useState('');

  const { user } = useAuth();

  useEffect(() => {
    setCounter(text.length);

    const counterCheck = () => {
      if (text.length > 140) {
        setCharErrorMessage('* Não ultrapasse o limite de caracteres');
        setErrorColor(true);
      }
      else {
        setCharErrorMessage('')
        setErrorColor(false);
      }
    }
    counterCheck();
  }, [text.length])

  const handleNewPiu = async () => {
    await api.post('/pius', { text: text })
    window.location.reload();
  }

  return (
    <NewPiuWrapper>
      <img src={user.photo} alt="Perfil" />
      <Text>
      <Textarea isWrong={errorColor} onChange={(e) => {setText(e.target.value)}} value={text} placeholder="O que você está pensando?"></Textarea>
        <Counter>
          <span>{ charErrorMessage }</span>
          <CounterValue isWrong={errorColor}>{ counter }</CounterValue>
        </Counter>
      </Text>
      <button disabled={text === ' ' || text.length < 1 || text.length > 140} onClick={handleNewPiu}>Piu</button>
    </NewPiuWrapper>
  );
}

export default NewPiu;