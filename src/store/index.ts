import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './_config/rootReducer';

// Config middleware thunk && middleware saga
const sagaMiddleware = createSagaMiddleware();
const middleware = [
    // ...getDefaultMiddleware({
    //     immutableCheck: false,
    //     serializableCheck: false,
    //     thunk: true
    // }),
    sagaMiddleware
];
const store = configureStore({
    reducer: rootReducer,
    middleware,
});

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export default store;