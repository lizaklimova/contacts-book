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
  const isLoading = useSelector(selectIsAuthLoading);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    isLoading,
  };
};
