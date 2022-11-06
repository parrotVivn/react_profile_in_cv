import { createTheme } from "@mui/material";

export const typography = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'Roboto',
            '"Segoe UI"',
            'BlinkMacSystemFont',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontFamily: 'Roboto ExtraBold sans-serif',
            fontOpticalSizing: "auto",
            fontWeight: 900,
            fontStyle: "normal",
            fontStretch: "normal",
            fontSize: '2rem',
        },
        h2: {
            fontFamily: 'Roboto Bold sans-serif',
            fontOpticalSizing: "auto",
            fontWeight: 700,
            fontStyle: "normal",
            fontStretch: "normal",
            fontSize: '1.75rem',
        },
        h3: {
            fontFamily: 'Roboto SemiBold sans-serif',
            fontOpticalSizing: "auto",
            fontWeight: 500,
            fontStyle: "normal",
            fontStretch: "normal",
            fontSize: '1.5rem',
        },
        h4: {
            fontFamily: 'Roboto Medium sans-serif',
            fontOpticalSizing: "auto",
            fontWeight: 300,
            fontStyle: "normal",
            fontStretch: "normal",
            fontSize: '1.25rem',
        },
        h5: {
            fontFamily: 'Roboto Regular sans-serif',
            fontOpticalSizing: "auto",
            fontStyle: "normal",
            fontStretch: "normal",
            fontSize: '1rem',
        }

    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});
