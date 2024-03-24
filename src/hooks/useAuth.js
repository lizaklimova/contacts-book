import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsAuthLoading,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthLoading = useSelector(selectIsAuthLoading);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    isAuthLoading,
  };
};
