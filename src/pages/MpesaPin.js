import { Link as RouterLink } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Card, Link, Container, Typography } from "@material-ui/core";
// layouts
import AuthLayout from "../layouts/AuthLayout";
// components
import Page from "../components/Page";
import { MHidden } from "../components/@material-extend";
import { RegisterForm } from "../components/authentication/register";
import NumberPin from "../components/authentication/register/NumberPin";
import Checkbox from "@material-ui/core/Checkbox";
import { LoadingButton } from "@material-ui/lab";
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
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
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Password | Mpesa">
      <MHidden width="mdDown">
        <SectionStyle></SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Enter Mpesa Pin
            </Typography>
          </Box>

          <NumberPin />
          <Typography variant="subtitle2" sx={{ mt: 3, textAlign: "center" }}>
            Keep me logged in
            <Checkbox inputProps={{ "aria-label": "primary checkbox" }} />
          </Typography>
          <Link to="/mpesa/app" component={RouterLink}>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Login
            </LoadingButton>
          </Link>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
