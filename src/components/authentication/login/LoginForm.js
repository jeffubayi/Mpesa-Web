
// material
import {
  Stack
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";

// ----------------------------------------------------------------------

export default function LoginForm() {

  return (
      <form autoComplete="off" >
        <Stack spacing={3}>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Login 
        </LoadingButton>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="outlined"
        >
          Register an account
        </LoadingButton>
        </Stack>
      </form>
  );
}
