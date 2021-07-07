import PropTypes from 'prop-types';
// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src="https://www.dailypost.co.ke/wp-content/uploads/2020/06/Mpesa-logo.jpg" sx={{ width: "8.5rem", height: "2.5rem", ...sx }} />;
}
