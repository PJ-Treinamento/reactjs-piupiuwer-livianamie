
import { useAuth } from '../../hooks/useAuth';
import { 
  SideMenuWrapper,
  Menu,
  Option,
  HomeIcon,
  SearchIcon,
  NotificationsIcon,
  FavoritesIcon,
  DMIcon,
  ConfigurationsIcon,
  ProfileInfos,
  Names
} from './styles';

const SideMenu: React.FC = () => {
  const { user } = useAuth();

  return (
    <SideMenuWrapper>
      <Menu>
        <Option>
          <HomeIcon />
          <strong>Início</strong>
        </Option>
        <Option>
          <NotificationsIcon />
          <strong>Notificações</strong>
        </Option>
        <Option>
          <DMIcon />
          <strong>Mensagens</strong>
        </Option>
        <Option>
          <FavoritesIcon />
          <strong>Favoritos (0)</strong>
        </Option>
        <Option>
          <ConfigurationsIcon />
          <strong>Configurações</strong>
        </Option>
        <Option>
          <SearchIcon />
          <strong id="menu-search">Buscar</strong>
        </Option>
      </Menu>

      <ProfileInfos>
        <img src={user.photo} alt="Foto de perfil" />
        <Names>
          <strong>{user.first_name}</strong>
          <span>@{user.username}</span>
        </Names>
      </ProfileInfos>
    </SideMenuWrapper>
  );
}

export default SideMenu;