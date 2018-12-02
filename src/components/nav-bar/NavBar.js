import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import FlightIcon from '@material-ui/icons/Flight';
import CreateIcon from '@material-ui/icons/Create';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
});

class NavBar extends Component {

    state = {
        open: false,
    };

    handleToogle = () => {
        this.setState({ open: !this.state.open });
    };

    handleCloseDrawerMenu = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu"
                            onClick={this.handleToogle}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            DaKar, a journey on your imagination
                </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <MenuList>
                        <MenuItem component={Link} to="/" onClick={this.handleCloseDrawerMenu}>
                            <ListItemIcon className={classes.icon}>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
                        </MenuItem>
                        <MenuItem component={Link} to="/createJourney" onClick={this.handleCloseDrawerMenu}>
                            <ListItemIcon className={classes.icon}>
                                <CreateIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary }} inset primary="Create a journey" />
                        </MenuItem>
                        <MenuItem component={Link} to="/journeyDisplay" onClick={this.handleCloseDrawerMenu}>
                            <ListItemIcon className={classes.icon}>
                                <FlightIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary }} inset primary="See a specific journey" />
                        </MenuItem>
                        <MenuItem component={Link} to="/journeys" onClick={this.handleCloseDrawerMenu}>
                            <ListItemIcon className={classes.icon}>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary }} inset primary="See all journeys" />
                        </MenuItem>
                    </MenuList>
                </Drawer>

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                </main>
            </div>
        )
    }
}
NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);