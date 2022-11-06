import { PaletteMode } from "@mui/material";
import * as locales from "@mui/material/locale";
import i18next from "i18next";
import React from "react";
import Cookie from 'cookie-universal'

export enum ActionType {
    APP_ALL = 'APP_ALL',
    CHANGE_MODE = 'CHANGE_MODE',
    CHANGE_LANG = 'CHANGE_LANG'

}
export type IAction = {
    type: ActionType,
    lang?: SupportedLocales,
    mode?: PaletteMode
}
export interface IAppContext {
    state: typeof initialAppState
    dispatch: React.Dispatch<IAction>
}
export type SupportedLocales = keyof typeof locales;

let _lang: SupportedLocales = localStorage.getItem("lang") as SupportedLocales || "viVN";
let _mode: PaletteMode = localStorage.getItem("mode") as PaletteMode || "light";


const cookies = Cookie()
let _uuid: String = cookies.get("uuid");


export const initialAppState: {
    lang: SupportedLocales,
    mode: PaletteMode,
    uuid: String,
} = {
    lang: _lang,
    mode: _mode,
    uuid: _uuid

};
function reducerApp(state: typeof initialAppState, action: IAction) {
    switch (action.type) {
        case 'APP_ALL':
            return state;
        case 'CHANGE_MODE': {
            localStorage.setItem("mode", action.mode || state.mode)
            state.mode = localStorage.getItem("mode") as PaletteMode || state.mode;
            return { ...state }
        }
        case 'CHANGE_LANG': {
            localStorage.setItem("lang", action.lang || state.lang)
            state.lang = localStorage.getItem("lang") as SupportedLocales || state.lang;
            i18next.changeLanguage(state.lang)
            return { ...state }
        }
        default:
            throw new Error();
    }
}


const AppProvider = React.createContext<IAppContext>({
    state: initialAppState,
    dispatch: () => { }
});




export { AppProvider, reducerApp }