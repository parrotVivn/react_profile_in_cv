import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Box, Container, styled, Toolbar, Typography, Grid, Paper, useTheme, Stack, Button, IconButton, Collapse } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { changeLang, changeMode } from "../store/_hookReducerStore/actions";
import { AppProvider } from '../store/_hookReducerStore/app';
import { useTranslation } from 'react-i18next';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import fs from "fs";


import { v4 as uuidv4 } from 'uuid';
const NavDragAndDrop: React.FC<React.HTMLProps<HTMLDivElement>> = ({
    ...props
}) => {
    const _theme = useTheme();
    const { state, dispatch } = React.useContext(AppProvider)
    const { t } = useTranslation();



    const message = [
        { name: "Giao diện", id: 1, order: true, },
        { name: "1", id: 2, order: true, },
        { name: "2", id: 3, order: true, },
        { name: "3", id: 4, order: true, },
        { name: "4", id: 5, order: true, },

    ]
    const dragItem = React.useRef<any>(null);
    const dragOverItem = React.useRef<any>(null);
    const [characters, updateCharacters] = React.useState(message);
    function handleOnDragEnd(e: React.DragEvent<HTMLDivElement>) {
        const _data = message.find(el => el.id = dragItem.current)
        if (!_data?.order) return;
        const items = Array.from(characters)
        const [newOrder] = items.splice(dragItem.current, 1)
        items.splice(dragOverItem.current, 0, newOrder)
        updateCharacters(items);
    }
    const DragContainer: React.FC = () => {
        return (<React.Fragment>
            <React.Suspense fallback={"Lazy box "}>
                {characters.map((el, index) => {
                    return (
                        <Stack
                            style={{ cursor: "-webkit-grab", margin: 4 }}
                            key={el.id}
                        >
                            <Box className="list-item"
                                draggable={el.order}
                                onDragStart={(e) => (dragItem.current = index)}
                                onDragEnter={(e) => (dragOverItem.current = index)}
                                onDragEnd={handleOnDragEnd}
                                onDragOver={(e) => e.preventDefault()} sx={{ backgroundColor: "primary.main", borderRadius: 2, position: "relative", display: "flex", alignItems: "center", p: 2, m: 2 }}>
                                <Typography variant="h5" gutterBottom sx={{ color: "primary.contrastText", m: 0 }}>
                                    {el.name}
                                </Typography>
                                <Box sx={{ position: "absolute", right: 5, zIndex: 999 }}>
                                    <PopupState variant="popover" popupId="demo-popup-menu">
                                        {(popupState) => (
                                            <React.Fragment>
                                                <Button variant="contained" {...bindTrigger(popupState)} sx={{
                                                    boxShadow: "none", borderRadius: 50,
                                                }} disableRipple >
                                                    <MoreVertIcon />
                                                </Button>
                                                <Menu {...bindMenu(popupState)}>
                                                    <MenuItem onClick={() => {
                                                        async function name() {
                                                            const json = await require("../data/json/user.json");



                                                        } name();
                                                        // popupState.close();
                                                    }}>Create new tab</MenuItem>
                                                    <MenuItem onClick={() => {
                                                        updateCharacters(characters.filter((_el, _index) => _index !== index))
                                                        popupState.close();
                                                    }}>Delete tab</MenuItem>
                                                </Menu>
                                            </React.Fragment>
                                        )}
                                    </PopupState>
                                </Box>
                            </Box>
                        </Stack>
                    )
                }
                )
                }
            </React.Suspense >
        </React.Fragment >)
    }
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const drawerWidth = 240;
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
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
            '& .MuiDrawer-paper': {
                position: 'relative',
                whiteSpace: 'nowrap',
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                boxSizing: 'border-box',
                ...(!open && {
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    width: theme.spacing(7),
                    [theme.breakpoints.up('sm')]: {
                        width: theme.spacing(9),
                    },
                }),
            },
        }),
    );


    return (<React.Fragment>
        <AppBar>
            <Toolbar
                sx={{
                    pr: '24px',
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Dashboard
                </Typography>
                <Box sx={{ display: "flex" }}>
                    <Stack  >
                        <AnimatePresence exitBeforeEnter initial={false}>
                            <motion.div
                                style={{ display: 'inline-block' }}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                key={state.lang}
                            >
                                <div onClick={() => {
                                    if (state.lang === "viVN") { changeLang(dispatch, "enUS") } else { changeLang(dispatch, "viVN") }
                                }}>
                                    <Button sx={{ width: 150, m: 1, p: 1, }} variant="contained" startIcon={<LanguageIcon />} >{t("Lang")}  </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </Stack>
                    <Stack>
                        <AnimatePresence exitBeforeEnter initial={false}  >
                            <motion.div
                                style={{ display: 'inline-block' }}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                key={_theme.palette.mode}
                            >
                                <div onClick={() => {
                                    if (_theme.palette.mode === "dark") { _theme.palette.mode = "light"; changeMode(dispatch, "light") } else { _theme.palette.mode = "dark"; changeMode(dispatch, "dark") }

                                }}>
                                    {_theme.palette.mode === "dark" && <Button sx={{ width: 100, m: 1, p: 1, }} variant="contained" startIcon={<DarkModeIcon />} >{t("Dark")}  </Button>}
                                    {_theme.palette.mode === "light" && <Button sx={{ width: 100, m: 1, p: 1, }} variant="contained" startIcon={<WbSunnyIcon />} >{t("Light")}</Button>}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={(e => { })}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <DragContainer />
            </List>
        </Drawer>
        <Box
            component="main"
            sx={{
                backgroundColor: "primary.bg",
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Box
                sx={{
                    mt: 12,
                    p: 2,
                    width: "100%",
                }}
            >
                {props.children}
            </Box>
        </Box>
    </React.Fragment >)

}

export default NavDragAndDrop;
