import { Link as RouterLink } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Link,
  Container,
  Typography,
  Avatar,
  Stack,
} from "@material-ui/core";
// components
import Page from "../components/Page";
import { MHidden } from "../components/@material-extend";
import NumberPin from "../components/authentication/register/NumberPin";
import Checkbox from "@material-ui/core/Checkbox";
import account from "../_mocks_/account";
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
  backgroundSize: "cover",
  backgroundImage: `url("https://i1.wp.com/www.mobileworldlive.com/wp-content/uploads/2017/02/mPesa-new.jpg?fit=640%2C426&ssl=1")`,
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
  marginTop: "-2.5rem",
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Password | Mpesa">
      <MHidden width="mdDown">
        <SectionStyle></SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 7 }} alignItems="center">
            <Avatar
              src={account.photoURL}
              style={{ height: "5rem", width: "5rem" }}
            />
            <Typography variant="subtitle1" gutterBottom>
              {account.displayName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {account.role}
            </Typography>
          </Stack>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
              Enter Mpesa Pin
            </Typography>
          </Box>

          <NumberPin />
          <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
            Keep me logged in
            <Link
              to="/mpesa/app"
              component={RouterLink}
              sx={{ textDecoration: "none" }}
            >
              <Checkbox inputProps={{ "aria-label": "primary checkbox" }} />
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
