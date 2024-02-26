import styled from "styled-components";

export const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};

    @media screen and (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }
  }
`;

export const UserAvatar = styled.img`
  width: ${({ $variant }) => ($variant ? "100px" : "50px")};
  height: ${({ $variant }) => ($variant ? "100px" : "50px")};
  border-radius: 50%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: ${({ $variant }) => ($variant ? "130px" : "50px")};
    height: ${({ $variant }) => ($variant ? "130px" : "50px")};
  }

  @media screen and (min-width: 1440px) {
    width: ${({ $variant }) => ($variant ? "150px" : "50px")};
    height: ${({ $variant }) => ($variant ? "150px" : "50px")};
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
