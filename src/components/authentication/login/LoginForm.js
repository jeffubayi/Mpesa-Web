import * as Yup from "yup";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const LoginSchema = Yup.object().shape({
    id: Yup.number().required("National ID/Passport is required"),
    phoneNumber: Yup.number().required("Phone Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      id: "",
      phoneNumber: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate("/dashboard", { replace: true });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPhoneNumber = () => {
    setShowPhoneNumber((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="number"
            label="National ID / Passport"
            {...getFieldProps("id")}
            error={Boolean(touched.id && errors.id)}
            helperText={touched.id && errors.id}
          />

          <TextField
            fullWidth
            autoComplete="current-phoneNumber"
            type="number"
            label="Phone Number"
            {...getFieldProps("phoneNumber")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPhoneNumber} edge="end">
                    <Icon icon={showPhoneNumber ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.phoneNumber && errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
          />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
              />
            }
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot phoneNumber?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
