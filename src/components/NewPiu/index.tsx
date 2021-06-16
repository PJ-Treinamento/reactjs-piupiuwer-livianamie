
import { NewPiuWrapper, Text, Counter } from './styles';

const NewPiu: React.FC = () => {
  return (
    <NewPiuWrapper>
      <img src="https://pbs.twimg.com/profile_images/1245853589320368133/cRyUvTc5_400x400.jpg" alt="Perfil" />
      <Text>
      <textarea placeholder="O que você está pensando?"></textarea>
        <Counter>
          <span>Erro</span>
          <p>140</p>
        </Counter>
      </Text>
      <button type="submit">Piu</button>
    </NewPiuWrapper>
  );
}

export default NewPiu;