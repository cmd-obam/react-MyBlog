import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const HeaderLayout = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Head = styled(Link)`
  font-size: 18px;
  font-weight: bold;

  .my {
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 700;
  font-size: 13px;
  padding: 6px 10px;
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const LightDark = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Menu = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 20px;

  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function Header({ onToggleTheme, mode }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <Head to="/">
        <span className="my"> My</span> <span>Blog</span>
      </Head>
      <Nav>
        <StyledNavLink to="/">홈</StyledNavLink>
        <StyledNavLink to="/write">글쓰기</StyledNavLink>
        {isLoggedIn ? (
          <StyledNavLink
            to="/login"
            onClick={(e) => {
              e.preventDefault();
              logout();
              navigate("/");
            }}
          >
            로그아웃{" "}
          </StyledNavLink>
        ) : (
          <StyledNavLink to="/login">로그인</StyledNavLink>
        )}
        <LightDark type="button" onClick={onToggleTheme}>
          {mode === "light" ? "🌙" : "☀️"}
        </LightDark>
        <Menu>더보기</Menu>
      </Nav>
    </HeaderLayout>
  );
}
