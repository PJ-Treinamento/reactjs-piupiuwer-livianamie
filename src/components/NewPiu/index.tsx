
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { NewPiuWrapper, Text, Textarea, Counter, CounterValue } from './styles';

const NewPiu: React.FC = () => {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(text.length);

  const [counterColor, setCounterColor] = useState('black');
  const [outlineColor, setOutlineColor] = useState('#BABABA');
  
  const [charErrorMessage, setCharErrorMessage] = useState('');
  const { user } = useAuth();


  useEffect(() => {
    setCounter(text.length);

    const counterCheck = () => {
      if (text.length > 140) {
        setCharErrorMessage('* Não ultrapasse o limite de caracteres');
        setCounterColor('red');
        setOutlineColor('red');
      }
      else {
        setCharErrorMessage('')
        setCounterColor('black');
        setOutlineColor('#BABABA');
      }
    }
    counterCheck();
  }, [text.length])


  return (
    <NewPiuWrapper>
      <img src={user.photo} alt="Perfil" />
      <Text>
      <Textarea style={{outlineColor: `${outlineColor}`}} onChange={(e) => {setText(e.target.value)}} value={text} placeholder="O que você está pensando?"></Textarea>
        <Counter>
          <span>{ charErrorMessage }</span>
          <CounterValue style={{color: `${counterColor}`}}>{ counter }</CounterValue>
        </Counter>
      </Text>
      <button type="submit">Piu</button>
    </NewPiuWrapper>
  );
}

export default NewPiu;