import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Avatar, Box, Button, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import { changeLang, changeMode } from "../store/_hookReducerStore/actions";
import { AppProvider } from '../store/_hookReducerStore/app';
const Nav: React.FC<React.HTMLProps<HTMLDivElement>> = ({
    ...others
}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme();
    const { state, dispatch } = React.useContext(AppProvider)
    const { t } = useTranslation();
    useEffect(() => {
    });
    return (<React.Fragment>
        <Box sx={{ width: "100%", display: 'block', margin: "0 auto", backdropFilter: "blur(3px)", position: "fixed", zIndex: 999 }}>
            <Box sx={{
                width: "100%", display: 'flex', margin: "0 auto", justifyContent: "space-between", maxWidth: theme.breakpoints.values.xl
                , [theme.breakpoints.down('md')]: { width: "100vw", }
            }}>
                <List sx={{
                    display: "flex",
                    [theme.breakpoints.down('md')]: {
                        display: "none",
                    },
                }} >
                    <ListItem >
                        <ListItemText
                            primaryTypographyProps={{
                                fontSize: 36,
                                fontWeight: "medium",
                                letterSpacing: 0,
                            }}>
                            <NavLink to="/">
                                <Avatar sx={{
                                    alignItems: "center", width: 47, height: 47, border: 2, borderColor: "primary.contrastText",
                                    [theme.breakpoints.down('lg')]: {
                                        margin: "0 auto",
                                    }
                                }} alt="Cindy Baker" src="https://wallpaperaccess.com/full/5892964.jpg" />
                            </NavLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <a href="https://github.com/nam-ui" target="_blank" rel="noopener noreferrer" >
                                <Typography variant="h5" gutterBottom sx={{ color: "primary.contrastText" }}>
                                    {t("Source")}
                                </Typography></a>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <NavLink to="/about">
                                <Typography variant="h5" gutterBottom sx={{ color: "primary.contrastText", whiteSpace: "nowrap" }}>
                                    {t("About me")}
                                </Typography>
                            </NavLink>
                        </ListItemText>
                    </ListItem>
                </List>
                <List sx={{
                    display: "flex",
                }}>
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
                                key={theme.palette.mode}
                            >
                                <div onClick={() => {
                                    if (theme.palette.mode === "dark") { theme.palette.mode = "light"; changeMode(dispatch, "light") } else { theme.palette.mode = "dark"; changeMode(dispatch, "dark") }

                                }}>
                                    {theme.palette.mode === "dark" && <Button sx={{ width: 100, m: 1, p: 1, }} variant="contained" startIcon={<DarkModeIcon />} >{t("Dark")}  </Button>}
                                    {theme.palette.mode === "light" && <Button sx={{ width: 100, m: 1, p: 1, }} variant="contained" startIcon={<WbSunnyIcon />} >{t("Light")}</Button>}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </Stack>
                </List>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    disableRipple
                    sx={{
                        color: "primary.contrastText", backgroundColor: 'transparent', display: "none",
                        "&:hover": {
                            backgroundColor: "transparent"
                        },
                        [theme.breakpoints.down('md')]: {
                            display: "inline-block"
                        }
                    }}
                >
                    <MenuIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    sx={{ color: "primary.contrastText" }}
                    transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                >
                    <MenuItem onClick={handleClose}>
                        <a href="https://github.com/nam-ui" target="_blank" rel="noopener noreferrer" >
                            <Typography variant="h5" gutterBottom sx={{ color: "primary.contrastText" }}>
                                {t("Source")}
                            </Typography></a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}> <NavLink to="/about" >
                        <Typography variant="h5" gutterBottom sx={{ color: "primary.contrastText", whiteSpace: "nowrap" }}>
                            {t("About me")}
                        </Typography>
                    </NavLink></MenuItem>
                </Menu>
            </Box>
            <Box component={"div"} sx={{ width: "100%", display: 'flex', margin: "0 auto", justifyContent: "flex-start", maxWidth: theme.breakpoints.values.xl, }}>
            </Box>
        </Box >
    </React.Fragment >)

}

export default Nav;
