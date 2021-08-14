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
    path: '/dashboard/app',
    icon: <HomeIcon/>,
  },
  {
    title: 'transact',
    path: '/dashboard/products',
    icon: <AddToHomeScreenIcon/>,
  },
  {
    title: 'discover',
    path: '/dashboard/blog',
    icon: <ExploreIcon/>,
  },
  {
    title: 'my spend',
    path: '/dashboard/user',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'grow',
    path: '/404',
    icon: <TrendingUpIcon/>,
  },
  {
    title: 'settings',
    path: '/404',
    icon: < SettingsIcon/>,
  },
  {
    title: 'logout',
    path: '/login',
    icon: <ExitToAppIcon/>,
  }
];

export default sidebarConfig;
