// material
import { Stack, Divider, Typography } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import { Link } from "react-router-dom";
// ----------------------------------------------------------------------

export default function LoginForm() {
  return (
    <form autoComplete="off">
      <Stack spacing={3}>
        <Link to="/dashboard/app">
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Login
          </LoadingButton>
        </Link>
        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            OR
          </Typography>
        </Divider>
        <Link to="/register">
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="outlined"
          >
            Register an account
          </LoadingButton>
        </Link>
      </Stack>
    </form>
  );
}
