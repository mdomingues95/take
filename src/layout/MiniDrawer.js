import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Badge,
    Avatar,
    List,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    ListItem,
    IconButton,
    CssBaseline,
    Divider,
    Toolbar,
    Box,
    Typography
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Outlet, useNavigate } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import { PRIMARY_COLOR } from 'config/CONSTANTS';
import { useAuth } from 'navigation/Auth/ProvideAuth';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08)',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function isSelected(route) {
    if (route == "") return false;
    if (window.location.pathname.indexOf(route) >= 0) {
        return true;
    }
    return false;
}



export default function MiniDrawer() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { user, menus } = useAuth();
    const navigate = useNavigate();

    function handleDrawer() {
        setOpen(state => !state);
    };

    function menuItemClick(route) {
        if (route != "") {
            navigate(route);
        };
    }

    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />
            <AppBar elevation={0}
                sx={{ backgroundColor: 'white', color: '#2f2f2f' }} position="fixed">

                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start">
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ width: 1 }} className="flex_row space_between align_center">
                        <Box sx={{ marginLeft: '15px' }} className="flex_row align_center" >

                            <img width="110" height="32" src={require('assets/logo.png')} />

                            <div className="flex_row align_center">
                                <HomeIcon sx={{ margin: '0 15px' }} color="primary" />
                                <Typography variant="caption" display="block">
                                    {user.location}
                                </Typography>
                                <IconButton color="inherit">
                                    <ExpandMoreIcon color="action" />
                                </IconButton>
                            </div>

                        </Box>

                        <div className="flex_row align_center">
                            <Badge badgeContent={4} color="primary">
                                <NotificationsIcon color="action" />
                            </Badge>
                            <IconButton sx={{ margin: "0px 30px 0px 15px" }}
                                color="inherit">
                                <SettingsIcon color="action" />
                            </IconButton>
                            <Avatar sx={{
                                border: '1.5px solid ' + PRIMARY_COLOR
                            }} src={user.image} />
                        </div>
                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={() => {}}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {menus.map((menu, index) => (
                        <ListItem key={index}
                            onClick={() => {menuItemClick(menu.link)}}
                            disablePadding sx={{
                                display: 'block',
                                background: isSelected(menu.link) ? PRIMARY_COLOR : "white",
                                color: isSelected(menu.link) ? "white" : "#1D2C4B;"
                            }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: isSelected(menu.link) ? "white" : "#1D2C4B;"
                                    }}>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText primary={menu.label} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{
                flexGrow: 1, p: 3,
                flexDirection: 'column',
                display: 'flex',
                background: "#F9F9F9", height: '100vh'
            }}>
                <DrawerHeader />
                <div className='flex1'>
                    <Outlet />
                </div>
            </Box>
        </Box >
    );
}
