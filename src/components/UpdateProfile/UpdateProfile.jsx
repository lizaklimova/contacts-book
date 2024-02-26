import { useDispatch } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { useAuth } from "hooks";
import { UserAvatar } from "components/UserMenu/UserMenu.styled";
import { changeAvatar, updateUserName } from "../../redux/auth/operations";
import {
  UpdateProfileWrap,
  AvatarChangeWrap,
  ChangeNameForm,
} from "./UpdateProfile.styled";

const UpdateProfile = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const onUserDataUpdate = (e) => {
    e.preventDefault();
    const newName = e.target.elements.name.value;

    if (newName !== user.name) {
      dispatch(updateUserName(newName));
    }
  };

  const onAttachingAvatar = (e) => {
    dispatch(changeAvatar(e.target.files[0]));
  };

  return (
    <UpdateProfileWrap>
      <div>
        <UserAvatar $variant="profile" src={user.avatarURL} alt="user avatar" />
        <AvatarChangeWrap>
          <IoMdAdd />
          <input type="file" name="file" onChange={onAttachingAvatar} />
        </AvatarChangeWrap>
      </div>

      <ChangeNameForm onSubmit={onUserDataUpdate}>
        <FaUserEdit />
        <input type="text" name="name" defaultValue={user.name} />
        <button type="submit">Save changes</button>
      </ChangeNameForm>
    </UpdateProfileWrap>
  );
};

export default UpdateProfile;
