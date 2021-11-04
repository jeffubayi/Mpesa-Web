import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Link, Drawer, Typography, Avatar, Stack,IconButton} from '@material-ui/core';
// components
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
import { MHidden } from '../../components/@material-extend';
//
import sidebarConfig from './SidebarConfig';
import account from '../../_mocks_/account';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200]
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
      }}
    >
      <Box sx={{ px: 1, py: 1 }}>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={account.photoURL} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {account.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {account.role}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 7 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{
            p: 2.5,
            pt: 5,
            borderRadius: 2,
            position: 'relative',
            bgcolor: 'grey.200'
          }}
        >
          <Avatar
            alt="img"
            style={{height:"3.5rem",width:"3.5rem"}}
            src="https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/c3/e5/58/c3e5585f-8b7d-a0b6-67c8-fc42850cd78f/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
          />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             The future of money
            </Typography>
          </Box>
          <div style={{ display:"flex",flexDirection:"rows"}}>
          <IconButton color="primary" aria-label="upload picture" component="span">
          <TwitterIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <LanguageIcon  />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <YouTubeIcon/>
        </IconButton>
        </div>
        <Box sx={{ textAlign: 'center' ,marginTop:"-1rem" }}>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
             made by @ubeezy
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default'
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
