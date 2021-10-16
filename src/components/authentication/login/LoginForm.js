
// material
import {
  Stack,Divider,Typography
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
        >
          Register an account
        </LoadingButton>
        </Stack>
      </form>
  );
}
