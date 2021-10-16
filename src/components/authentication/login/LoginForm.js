
// material
import {
  Stack,Divider,Typography
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";

// ----------------------------------------------------------------------

export default function LoginForm() {
  return (
    <>
        <Stack spacing={3}>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={() => window.location.assign(`/dashboard/app`)}
        >
          Login to mpesa
        </LoadingButton>
        <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="outlined"
          onClick={() => window.location.assign(`/register`)}
        >
          Register an account
        </LoadingButton>
        </Stack>
        </>
  );
}
