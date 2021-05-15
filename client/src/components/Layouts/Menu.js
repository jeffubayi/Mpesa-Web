import * as React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import logo from './Logo.png';

const useStyles = makeStyles({
    img: {
        maxWidth: "60px",
        margin: "1rem 0 1rem",
      },
    logo: {
        display: "grid",
        gap:"3rem",
        justifyItems: "center",
      },
});


const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    const classes = useStyles();
    return (
                    
        <div>
            <div className={classes.logo} >
              <img src={logo} alt="logo" className={classes.img} />
            </div>
            {resources.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={resource.options && resource.options.label || resource.name}
                    leftIcon={createElement(resource.icon)}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
            {isXSmall && logout}
        </div>
    );
}

export default withRouter(Menu);