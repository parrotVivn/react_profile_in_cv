import { combineReducers } from '@reduxjs/toolkit';
// TODO cofig store redux
const rootReducer = combineReducers({
    // auth: auth.reducer,
    // products: productReducer.reducer,
    // messages: message.reducer
})
// export const _persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
export function* rootSaga() {
   
}