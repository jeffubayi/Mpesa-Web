import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3, 0),
  color: "black",
  backgroundColor: "#FFF"
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
  color:  "#11E2F6",
  backgroundImage: `linear-gradient(135deg, ${alpha("#11E2F6", 0)} 0%, ${alpha(
    "#11E2F6",
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------


export default function AppNewUsers() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <PhonelinkRingIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        AIR TIME
      </Typography>
    </RootStyle>
  );
}
