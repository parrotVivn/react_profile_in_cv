import { PaletteMode } from '@mui/material'
import { Dispatch } from 'react'
import { ActionType, IAction, SupportedLocales } from './app'
const selectAll = (dispatch: Dispatch<IAction>) =>
    dispatch({ type: ActionType.APP_ALL })

const changeMode = (dispatch: Dispatch<IAction>, mode: PaletteMode) =>
    dispatch({ type: ActionType.CHANGE_MODE, mode: mode })

const changeLang = (dispatch: Dispatch<IAction>, lang: SupportedLocales) =>
    dispatch({ type: ActionType.CHANGE_LANG, lang: lang })


export { selectAll, changeMode, changeLang }