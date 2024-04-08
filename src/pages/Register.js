import { Link as RouterLink } from "react-router-dom";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Link,
  Container,
  Typography,
  Stack,
  Avatar,
} from "@material-ui/core";
// layouts
import AuthLayout from "../layouts/AuthLayout";
// components
import Page from "../components/Page";
import { MHidden } from "../components/@material-extend";
import { RegisterForm } from "../components/authentication/register";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
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
    <>
      <Typography
        variant="h4"
        style={{ display: "grid", justifyContent: "center" }}
        sx={{ px: 5, mt: 5 }}
      >
        Mpesa Registration Process
      </Typography>
      <RootStyle title="Register | Mpesa">
        <AuthLayout>
          Already have an account? &nbsp;
          <Link
            underline="none"
            variant="subtitle2"
            component={RouterLink}
            to="/login"
          >
            Login
          </Link>
        </AuthLayout>
        <SectionStyle>
          <Box sx={{ px: 5, mt: 2, mb: 5 }}>
            <Stack sx={{ mb: 1 }} alignItems="center">
              <Avatar
                src="https://tradingroom.co.ke/wp-content/uploads/2021/06/Mpesa.png"
                style={{ height: "4.5rem", width: "4.5rem" }}
              />
            </Stack>
            <div style={{ display: "grid", justifyContent: "center" }}>
            <Typography sx={{ color: "text.secondary" }}>
              1. Open Mpesa App on your Phone.
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              2. Tap Menu or settings and select Linked Devices
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              3. Point your phone to the screen to capture the code below
            </Typography>
            </div>
          </Box>
          <div style={{ display: "grid", justifyContent: "center" }}>
            <img
              alt="register"
              src="https://i0.wp.com/tech-ish.com/wp-content/uploads/2020/03/MPESA-QR-CODES-Kenya.png?fit=1920%2C1080&ssl=1"
              style={{ height: "20rem", width: "35rem" }}
            />
          </div>
        </SectionStyle>
        <Container>
          <ContentStyle>
            <RegisterForm />

            <Typography
              variant="body2"
              align="center"
              sx={{ color: "text.secondary", mt: 3 }}
            >
              By registering, I agree to Mpesa&nbsp;
              <Link underline="always" sx={{ color: "text.primary" }}>
                Terms of Service
              </Link>
              &nbsp;and&nbsp;
              <Link underline="always" sx={{ color: "text.primary" }}>
                Privacy Policy
              </Link>
              .
            </Typography>

            <MHidden width="smUp">
              <Typography
                variant="subtitle2"
                sx={{ mt: 3, textAlign: "center" }}
              >
                Already have an account?&nbsp;
                <Link to="/login" component={RouterLink}>
                  Login
                </Link>
              </Typography>
            </MHidden>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
