import { PaletteMode } from "@mui/material";
import { typography } from "./typography";
import color from "./_color";

const getDesignTokens = (mode: PaletteMode) => ({
    ...typography,
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                ...color.light
            }
            : {
                ...color.dark
            }),
    },

});

const MuiExtension = {
    getMode: getDesignTokens
}
export default MuiExtension;