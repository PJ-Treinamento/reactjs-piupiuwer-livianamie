
import { 
  SideMenuWrapper,
  Menu,
  Option,
  HomeIcon,
  SearchIcon,
  NotificationsIcon,
  DMIcon,
  ConfigurationsIcon,
  ProfileInfos,
  Names
} from './styles';

const SideMenu: React.FC = () => {
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
          <ConfigurationsIcon />
          <strong>Configurações</strong>
        </Option>
        <Option>
          <SearchIcon />
          <strong id="menu-search">Buscar</strong>
        </Option>
      </Menu>

      <ProfileInfos>
        <img src="https://pbs.twimg.com/profile_images/1245853589320368133/cRyUvTc5_400x400.jpg" alt="Foto de perfil" />
        <Names>
          <strong>Lívia</strong>
          <span>@livianamie_</span>
        </Names>
      </ProfileInfos>
    </SideMenuWrapper>
  );
}

export default SideMenu;