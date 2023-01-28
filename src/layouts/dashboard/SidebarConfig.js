import HomeIcon from '@material-ui/icons/Home';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import ExploreIcon from '@material-ui/icons/Explore';
import SettingsIcon from '@material-ui/icons/Settings';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


const sidebarConfig = [
  {
    title: 'home',
    path: '/mpesa/app',
    icon: <HomeIcon/>,
  },
  {
    title: 'transact',
    path: '/mpesa/transact',
    icon: <AddToHomeScreenIcon/>,
  },
  {
    title: 'services',
    path: '/mpesa/services',
    icon: <ExploreIcon/>,
  },
  {
    title: 'grow',
    path: '/mpesa/grow',
    icon: <TrendingUpIcon/>,
  },
  {
    title: 'settings',
    path: '/mpesa/settings',
    icon: < SettingsIcon/>,
  },
];

export default sidebarConfig;
