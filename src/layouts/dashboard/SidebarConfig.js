import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import HomeIcon from '@material-ui/icons/Home';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import ExploreIcon from '@material-ui/icons/Explore';
import SettingsIcon from '@material-ui/icons/Settings';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

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
    title: 'my spend',
    path: '/mpesa/my-spend',
    icon: getIcon(pieChart2Fill)
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
  {
    title: 'logout',
    path: '/password',
    icon: <ExitToAppIcon/>,
  }
];

export default sidebarConfig;
