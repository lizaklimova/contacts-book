import { useDispatch } from "react-redux";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from "hooks";
import { logOut } from "../../redux/auth/operations";
import { UserAvatar, UserInfo, LogoutBtn } from "./UserMenu.styled";
import { NavDiv } from "../Navigation/Navigation.styled";

const UserMenu = ({ mob, closeMenu }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());

    if (window.innerWidth < 767) closeMenu();
  };

  return (
    <NavDiv $variant={mob}>
      <UserInfo>
        <UserAvatar
          src={user.avatarURL}
          alt="user avatar"
          width={50}
          height={50}
        />
        <p>{user.name}</p>
      </UserInfo>
      <LogoutBtn type="button" onClick={handleLogout}>
        Logout
        <IoExitOutline size={20} />
      </LogoutBtn>
    </NavDiv>
  );
};
export default UserMenu;
