import { styled } from "styled-components";

export const UpdateProfileWrap = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    position: relative;
  }
`;

export const AvatarChangeWrap = styled.div`
  input {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 25px;
    height: 30px;
    border-radius: 50%;
    opacity: 0;

    @media screen and (min-width: 768px) {
      width: 35px;
      height: 30px;
      border-radius: 30%;
    }
  }

  svg {
    position: absolute;
    right: 0;
    bottom: 5px;
    width: 25px;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.accentBlue};
    border-radius: 50%;

    @media screen and (min-width: 768px) {
      bottom: 0;
      width: 35px;
      height: 35px;
    }
  }
`;

export const ChangeNameForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  input {
    width: 200px;
    height: 30px;
    border: none;
    outline: ${({ theme }) => `1px solid ${theme.colors.white}`};
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 35px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    transition: ${({ theme }) => `outline ${theme.transitions.eased}`};

    &:focus {
      outline: ${({ theme }) => `3px solid ${theme.colors.accentBlue}`};
    }

    @media screen and (min-width: 768px) {
      width: 300px;
      height: 40px;
      font-size: 20px;
    }
  }

  svg {
    position: absolute;
    top: 7px;
    right: 10px;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
      top: 10px;
    }
  }

  button {
    width: 200px;
    border-radius: 5px;
    padding: 7px;
    background-color: ${({ theme }) => theme.colors.accentBlue};
    transition: ${({ theme }) =>
      `color ${theme.transitions.eased}, background-color ${theme.transitions.eased}`};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.accentBlue};
      background-color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (min-width: 768px) {
      width: 300px;
      padding: 10px;
      font-size: 18px;
    }
  }
`;
