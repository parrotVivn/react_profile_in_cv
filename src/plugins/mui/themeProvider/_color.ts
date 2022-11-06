import { amber, deepOrange, grey } from "@mui/material/colors";

const colorLight = {
    primary: {
        light: '#f0e7db',
        main: '#BBF246',
        dark: '#A4E910',
        contrastText: '#000',
        bg: "#f0e7db"
    },
    Secondary: {
        light: '#f48d8d',
        main: '#ed4747',
        dark: '#e01616',
        contrastText: '#BBF246',
    },
    divider: amber[200],
    text: {
        primary: grey[900],
        secondary: grey[800],
    },
}
const colorDark = {
    primary: {
        bg: "#202023",
        light: "#202023",
        main: deepOrange[700],
        dark: deepOrange[700],
        contrastText: "#fff",
    },
    divider: deepOrange[700],
    background: {
        default: deepOrange[900],
        paper: deepOrange[900],
    },
    text: {
        primary: '#fff',
        secondary: grey[500],
    },
}


const color = {
    light: { ...colorLight },
    dark: { ...colorDark },
}
export default color;