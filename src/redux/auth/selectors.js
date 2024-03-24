export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectIsAuthLoading = ({ auth }) => auth.isLoading;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
export const selectUser = ({ auth }) => auth.user;
