import { useRef, useState } from 'react';
// material
import { alpha } from '@material-ui/core/styles';
import { Box, MenuItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
// components
import { Icon } from '@iconify/react';
import MenuPopover from '../../components/MenuPopover';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import {
  AppExpense 
} from "../../components/_dashboard/app";
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en',
    label: 'This Month',
    icon: 'https://image.flaticon.com/icons/png/128/630/630611.png',
    linkTo: '/mpesa/my-spend'
  },
  {
    value: 'de',
    label: 'This Year',
    icon: 'https://image.flaticon.com/icons/png/128/630/630603.png',
    linkTo: '/mpesa/app'
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const getIcon = (name) => <Icon icon={name} width={22} height={22} />;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        {getIcon(pieChart2Fill)}
      </IconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
      
          < AppExpense/>
        
      </MenuPopover>
    </>
  );
}
