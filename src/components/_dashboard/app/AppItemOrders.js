import PaymentIcon from '@material-ui/icons/Payment';
// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: "black",
  backgroundColor: '#FFFF',
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: "#036ECC",
  backgroundImage: `linear-gradient(135deg, ${alpha('#036ECC', 0)} 0%, ${alpha(
    '#036ECC',
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------


export default function AppItemOrders() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <PaymentIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="subtitle2" >
        PAY
      </Typography>
    </RootStyle>
  );
}
