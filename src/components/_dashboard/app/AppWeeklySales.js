import SendIcon from '@material-ui/icons/Send';

// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: "black",
  backgroundColor:"#FFFF"
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
  color: "#00AB55",
  backgroundImage: `linear-gradient(135deg, ${alpha("#00AB55", 0)} 0%, ${alpha(
    "#00AB55",
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------


export default function AppWeeklySales() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <SendIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        SEND & REQUEST
      </Typography>
    </RootStyle>
  );
}
