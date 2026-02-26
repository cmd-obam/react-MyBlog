import React from "react";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import FooterLayout from "./FooterLayout";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function MainLayout({ onToggleTheme, mode }) {
  return (
    <Layout>
      <Header onToggleTheme={onToggleTheme} mode={mode} />
      <Outlet />
      <FooterLayout />
    </Layout>
  );
}
