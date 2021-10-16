import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, Stack, Link, Container, Typography } from '@material-ui/core';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
import { Avatar} from "@material-ui/core";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
  backgroundSize: "cover",
  backgroundImage: `url("https://i1.wp.com/www.mobileworldlive.com/wp-content/uploads/2017/02/mPesa-new.jpg?fit=640%2C426&ssl=1")`
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login | Mpesa">
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 7 }} alignItems="center" >
            <Typography variant="h3" gutterBottom>
            Welcome To Mpesa Web
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>The Future of money .</Typography>
            <Avatar src="https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/c3/e5/58/c3e5585f-8b7d-a0b6-67c8-fc42850cd78f/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
             style={{height:"4.5rem",width:"4.5rem"}} />
          </Stack>
          <LoginForm />
          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Get started
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
