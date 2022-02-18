import slice from './slice';
import thunk from './thunk';

export const { reducer } = slice;

const actions = {
    ...slice.actions,
    ...thunk,
};
const {
    login,
    signup,
    logout,
    forgotPassword,
    resetPassword,
    confirmAccount,
    resendConfirmAccount,
} = actions;

export type TypesActions = typeof slice.actions;
export type TypesState = ReturnType<typeof reducer>;

export {
    login,
    signup,
    logout,
    forgotPassword,
    resetPassword,
    confirmAccount,
    resendConfirmAccount,
};

export default actions;
