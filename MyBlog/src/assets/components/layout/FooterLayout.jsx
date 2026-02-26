import React from "react";
import styled from "@emotion/styled";

const Footer = styled.div`
  display: flex;
  justify-content: center;

  padding: 30px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: auto;
`;

const FooterName = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default function FooterLayout() {
  return (
    <Footer>
      <FooterName>© 2026 나만의 리엑트 블로그. All rights reserved.</FooterName>
    </Footer>
  );
}
