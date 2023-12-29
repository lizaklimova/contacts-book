import styled from "styled-components";

export const UserName = styled.p`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  span {
    height: 90%;
    align-self: flex-end;
  }

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const LogoutBtn = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  transition: ${({ theme }) => `filter ${theme.transitions.eased}`};

  &:hover,
  &:focus {
    filter: ${({ theme }) => `${theme.shadows.drop} ${theme.colors.black})`};
  }

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;
