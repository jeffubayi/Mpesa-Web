import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField,Divider,Typography,Avatar } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { Link  } from 'react-router-dom';
import Checkbox from "@material-ui/core/Checkbox";
import { Link as RouterLink } from "react-router-dom";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            OR
          </Typography>
        </Divider>
        <Stack sx={{ mb: 1 }} alignItems="center" >
            <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///9StSlJshhOtCJGsRCr2J/G5L54wl+IynCy26ay3KO03aZBsABQtCVLsx1FsQzx+e7B4bh3w1vg8dr6/fjP6cbl8+C636/o9eT7/vq53q5huj9qvkrt9+pbuTWPzXmBx2ie04vc79We04yp2JlvwFGWz4JeujpzwVXI5r2CxmyRzXw0rACMzHW0b3fxAAAJM0lEQVR4nO2d63ayOhCGIcR6+EJCVarWs7Uear3/29tgaz0QyCQkwNprnr8tmJeEmclkEjwPQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRCkWqJB/NJI4s3cgrzNx0II2lCE4Lt4UkpfPGMk9BtMyNliZK5v3heB73PSZBKRYrYx7cCQp49p3W01lm4vHWEBNevGEbuMz3A6MHxCFTBvB5fBynYGF8fsOtRFz3rLLNHjwW8jDdo45jcLQ1eRg+aVJjETd22MdS//DPwbPNC+3j0jct/EMBjqXX4Uj0aZfbhppjHDFXt0Y0SvhZPpsxekn2+O2mpEvODPrlFovUp/ZuZGwEt4VtvsaDYOIS2tO2SeUDpSO5pD3RWDBck2zw9nOvfg0lCN7E2DB6v0aCBrnc/H8Hu8ZQfpz2MSWiPBCVGfyhvn0xf4XWKRcxOf9mt2ja+B5AX6HWIaXv+Y95jSOFzjSVln2GH5Ux2yht/oXfYmX2HrcjOyEsRSE/P38M/wO3WLbuSTWU2u8UPiI+4VduC3KlboB+zdnYxc5rP8d8e2wiR+6FRucF5zfIQjhYlrrDYWHy6FMptiV2HiGrfu9GSQRzFuFaaxuI1cHohtgY9wqNAPgqM7UXdE7dwAxLHCZKSapEd0if3cKMa5wsTgTJ27xrXaxLhUmLjGrjtxCeMZuCmOFCau8cuhaxxxlROsQKFPFq5c4+SsiGIqUugsTTXwtZrhUGHiGg8a02soPbCJqUBh4hpfLeuL2loj1LnCxDUurQr8XRVqkMLU4NhLU03WoDCtYoWJwbG1gjNWzQRrUpgYnLYV1zgK1E5QNohLKwQsd3NePk016QBsKF9IctYlFQbt4jTQL2xXMk21AfxKKDqTl+xALquw70VFqbwrZFZqybhVnGz6aUq6qP1qX2HbS2+rtuEB+WesLz+fff8ML/MZBwpX6R+GAD8cClODEwMeYCh+8r4OFH79/ik/q377Kd8kFk+coPLOiYn5vbUDhdfLxwd1TiEU+rE4aCYo/ioK7Cu8S5m3hNpf0ZlmLP64Ki8nYLdX3IHCu7hzAHjcAdNZMi5ccbnysJrgQOHp/h92gAaxM3jJeLMHOMFHV+tA4WNa7YWrDQ54yXgLCZfIo/VyrhDkukIGyYtHB4ATzIS8DhRmlh+3ANsAmPzHgNEQ0My0xb5CSUHOZqp+e3hYPPmfrAFhGplmh7sDhZIBNzyrDU4oTtkL/5gDHpLPTpJovhqFhXUDtyvzJ/8jph7oXL464kChvM5kDDE4OTUqUQew4kLb8hUuBwrzUhSQlS/alxgcSWla9uGwvAKeChUmc1ZALE4yEQ5kxaVggDtQmD/rGwLyDiF7rMIdTAGjm8pMTB0KPe8dsIDCF3c5nH/KsoNcE+NOYeEq2hsgFr+tp0ZtgBMU/cJFdPsKqaKERuO1ehVGUYxzharJEMg0iq03bgOeBVVugahBoRetIO7tAFmVZ2vlxKsOhZ7XA4QoIWCiBNlZ4EAhZPkMYnCUj4CuIDPnmhR6E8jkv5Cg2Gi7VAisDnoBxOIFUGj5Sn0K08m/cTde0731KISvKvUAk38pOlUdtSoETf6zhFpFq/YVCp1E/eQESNA/EQitPTk1K/S8o67BoTO9Ws7aFXpzrWqRUJ4kKaB+hWmEA7apBnUcDhTq15JAFqxTQtbRXxpvhELPO0EKt7hvUmrcEIWQbKNippt754Yo9OaK9dQgN5mmoDEKPW9bNFLJ3rRyo0EKCxYHQ2peCT+yH7WZ1+UNl/IIh/slKqjsKzTvw4RXyeQ/FKU2azaqD73U4Dzb1JCbFxalOFBY8vyPzuOskS9K3q9xCntsfZfDCdlSFGTsIdhXSMoonKy+k6nRx7UOJ53pbsS+1MawZikc+MHlLf5ZjgnFMu2++ZSV2RjWKIUjNr1215YGf2HosP1dYp9GkxSev/u3BOhgf1c2svv+NHYYzVE4nn7nBy5dxk13FDVG4Ssp3NwWE1BRkQT7CrnRRsM1U9S2DxYMlMTP4KAPDRRGB+arLos+mdH8ohF9mAzBA6B/lsxkl2YTFG4Zg+2F2gq21A5w6lc4XAnwLqEj0S4prl/h24JqnKA29qnuoTB1KzwyMtXplWGbaroN+woDHYUfQuge07cT4kvHbThQCO+SYZ8yjeN+rk1mZK/R7XUqHATE6LTNTUg0Zhs1KhxR092k808C3xVen8KdIMZnnkw6graBL2NdCqMDFRq/k2HLyAJm0mpSuAm5qh5NwZFz2FqwdYVhCFDYFdx4vndlsOAgQ1yLwpMg+/KHuSQDHXKwnwOFKvMxnxGwmShmJ7jaGlevMObc2gEgXaHe+fZetcJ/wvRQbRmxz1UHNNlX6BcqPFMe2jzbdD4l5FD4MlarMEra82n5fNqz4IULCZUq3KjHlAEtWjjuq1T4TgLh4jismAc03zM6UJj3ViS2nbg5Xni+L/A/lfVh1KcKk1CCSYfyvDC1qj4c7Hnh/sKytEQQyBM4FSk8Es7KLVariAWX7+2rRuGW2fWCMsZTImRlb/YVLjIKh18lJrtwhh1BJLWn9hVOn/8nCTuYxuHLJUiGip8ZKu4VxiE3LUnT5kizOzSdK+wlr2B1JwmP9+T5SzKuFZ4YmVZ2xq53yYk/TYslh6pbVHjJN1X8JYgP9ljHWFJhtrTxXmGaSqnyIOgfkpfxfs+HTKFG7JH9NsKdwpjV82Gdt+RlvIUXEoU69f6bAoVdUcHhwVKiFb3ti5Io1EkyDDMFoX8K11SYlRbYYM3o6je+kSnUia/6z/WgvwonbWFwyJU9Xind/5jUrMJwoXOnjLf5UTif0YpOKc9js6f+xaRmFXKtE1Tnz9dfFA4WwkLKtxxRX1xKdLIKmZ75W5OswpiyfgO+h3RiaQlExmUHB73bRH74rLDHan0Fb4zSEC7Th0x3Hvf+9OG16ZqRel/BG5sFO7eeFBpsbDg9GptQlK3Mtkj0+ezOuOYYvdB/eErBqrYvBMlYP7oz7hsZiOVDL25bPaf806I7u7cT1DTd93AKRMM+KXsnMJQeBgbjbcXk35hrDmHAJKe5abA5LyjhPGgmnFB/Vfr46cmmteu0G8nXbhs38huwCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIg/1f+A577uhNbMNBiAAAAAElFTkSuQmCC"
             style={{height:"4.5rem",width:"4.5rem"}} />
          </Stack>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type="text"
            label="Safaricom Number"
            placeholder="0707070707"
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <Typography variant="subtitle2" sx={{ mt: 3, textAlign: "center" }}>
            Keep me logged in
            <Checkbox inputProps={{ "aria-label": "primary checkbox" }} />
          </Typography>
          <Link to="/password" component={RouterLink}>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Next
            </LoadingButton>
          </Link>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
