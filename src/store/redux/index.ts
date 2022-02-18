import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as reducerAuth } from '../auth';
import { reducer as reducerCustomSnackbar } from '../customSnackbar';
import { reducer as reducerGlobalDialog } from '../globalDialog';
import { reducer as reducerNotification } from '../notification';
import { reducer as reducerPlace } from '../place';

const appReducer = combineReducers({
    customSnackbar: reducerCustomSnackbar,
    auth: reducerAuth,
    place: reducerPlace,
    notification: reducerNotification,
    globalDialog: reducerGlobalDialog,
});

// const rootReducer = (state: any, action: any) => {
//     if (action.type === 'auth/logout/fulfilled') {
//         return appReducer(undefined, action);
//     }

//     return appReducer(state, action);
// };

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['storage'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export const makeStore = (context: Context) => store;
export type AppStore = ReturnType<typeof makeStore>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export const wrapper = createWrapper<AppStore>(makeStore);

export const persistor = persistStore(store);

export default makeStore;
