import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { IUser } from '../../models';
import api from '../../services/api';
import { Container, PageInfo, Logo, SearchFeature, MoreIcon, PopUpWrapper, PopUp, CloseIcon, UsersList, User, Names} from './styles';

const Header: React.FC = () => {
  const [popUpDisplay, setPopUpDisplay] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('/users');
      setUsers(response.data);
    }
    loadUsers()
  }, []);
  
  const openPopUp = useCallback (() => {
    setPopUpDisplay(true)
  }, [])

  const closePopUp = useCallback (() => {
    setPopUpDisplay(false)
  }, [])

  return (
    <Container>
      <PageInfo>
        <Logo />
        <strong>Página Inicial</strong>
      </PageInfo>

      <button id="more" type="submit"><MoreIcon /></button>

      <SearchFeature>
        <button onClick={openPopUp}>Buscar</button>
      </SearchFeature>

      <PopUpWrapper isOpen={popUpDisplay}>
        <PopUp >
          <input type="text" onChange={(e) => {setSearch(e.target.value)}} value={search} placeholder='Buscar' />
        
          <UsersList>
            {users.map((user: IUser) => {
             if(
                search === '' 
             || user.username.toLowerCase().includes(search.toLowerCase()) 
             || user.first_name.toLowerCase().includes(search.toLowerCase())
             || user.last_name.toLowerCase().includes(search.toLowerCase())
             ) {
              return (
                <User key={user.id}>
                  <img src={user.photo} alt="" />
                  <Names>
                    <strong>{user.first_name} {user.last_name}</strong>
                    <span>@{user.username}</span>
                  </Names>
                </User>
              )
             }
            })}
          </UsersList>

          <button onClick={closePopUp}><CloseIcon /></button>
        </PopUp>
      </PopUpWrapper>
    </Container>
  );
}

export default Header;