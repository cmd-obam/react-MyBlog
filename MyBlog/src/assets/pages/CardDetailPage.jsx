import React from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import { cardData } from "../components/common/CardData";
import { Link } from "react-router-dom";

const CardContiner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 500px;
  height: 600px;
  padding: 25px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background};
`;
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  gap: 10px;
`;
const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 25px;
  font-weight: 900;
`;
const CardDesc = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 10px;
`;

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const CardMemo = styled.div`
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  padding-left: 12px;
  font-size: 20px;
  font-weight: 700;
`;
const CardDetails = styled.div`
  font-size: 12px;
  line-height: 25px;
`;
const CardSyntax = styled.div`
  border: 1px solid white;
  height: 100px;
  font-size: 14px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  margin-top: 10px;
`;
const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const LinkBTN = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 150px;
  height: 40px;
  text-align: center;
  border: 1px solid white;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  font-size: 12px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const BackBTN = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 150px;
  height: 40px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  font-size: 12px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export default function CardDetailPage() {
  const { id } = useParams();
  const card = cardData.find((item) => item.id === Number(id));

  return (
    <CardContiner>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        <CardDesc>{card.desc}</CardDesc>
      </CardHeader>
      <CardMain>
        <CardMemo>상세 설명</CardMemo>
        <CardDetails>{card.details}</CardDetails>
        <CardMemo>사용 예시</CardMemo>
        <CardSyntax>{card.syntax}</CardSyntax>
      </CardMain>
      <CardFooter>
        <LinkBTN as="a" href={card.link} target="_blank" rel="noreferrer">
          📄 공식 문서 확인하기
        </LinkBTN>
        <BackBTN to="/">목록으로 돌아가기</BackBTN>
      </CardFooter>
    </CardContiner>
  );
}
