
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import api from '../../services/api';
import { NewPiuWrapper, Text, Counter } from './styles';

const NewPiu: React.FC = () => {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  const [charErrorMessage, setCharErrorMessage] = useState('');
  const { user } = useAuth();

  const counterCheck = () => {
    if (counter > 140) {
      setCharErrorMessage('Não ultrapasse o limite de caracteres')
    }
    else {
      setCharErrorMessage('')
    }
  }

  useEffect(() => {
    setCounter(text.length);
    counterCheck();
  }, [text.length])

  return (
    <NewPiuWrapper>
      <img src={user.photo} alt="Perfil" />
      <Text>
      <textarea onChange={(e) => {setText(e.target.value)}} value={text} placeholder="O que você está pensando?"></textarea>
        <Counter>
          <span>{ charErrorMessage }</span>
          <p id='count'>{ counter }</p>
        </Counter>
      </Text>
      <button type="submit">Piu</button>
    </NewPiuWrapper>
  );
}

export default NewPiu;