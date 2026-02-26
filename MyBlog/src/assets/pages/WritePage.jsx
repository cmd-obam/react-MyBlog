import React from "react";
import styled from "@emotion/styled";

const WirteBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.surface};
  width: 700px;
  height: 550px;
  padding: 25px;
  gap: 20px;
`;

const WirteTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const WirteMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const WirteText = styled.h3`
  font-size: 16px;
`;

const WirteTitleText = styled.input`
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const WirteMemo = styled.textarea`
  height: 260px;
  resize: none;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const WirteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
`;

export default function WirtePage() {
  return (
    <WirteBox>
      <WirteTitle>새 글 작성</WirteTitle>
      <WirteMain>
        <WirteText>제목</WirteText>
        <WirteTitleText
          type="text"
          placeholder="제목을 입력하세요"
        ></WirteTitleText>
        <WirteText>내용</WirteText>
        <WirteMemo
          type="textarea"
          placeholder="내용을 자유롭게 작성해보세요."
        ></WirteMemo>
      </WirteMain>
      <BtnBox>
        <WirteBtn>저장하기</WirteBtn>
      </BtnBox>
    </WirteBox>
  );
}
