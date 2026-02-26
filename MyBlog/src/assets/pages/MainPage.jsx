import React from "react";
import styled from "@emotion/styled";
import { cardData } from "../components/common/CardData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopContainer = styled.div`
  width: 800px;
  height: 400px;

  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 30px;

  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
`;

const MainHead = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const Maincontent = styled.p`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MainBTN = styled.div`
  margin-top: 10px;
`;
const MainbtnText = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  width: 120px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.primary};
  color: white;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
const MainEdu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 20px 0 40px 0;
`;

const CardItem = styled.div`
  width: 240px;
  padding: 22px;
  border-radius: 18px;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};

  box-shadow: 0 18px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const CardDesc = styled.div`
  font-size: 13px;
  opacity: 0.75;
  line-height: 1.4;
`;

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <TopContainer>
        <MainHead>리엑트로 만드는 나만의 공간</MainHead>
        <Maincontent>
          공부한 내용을 기록하고 일상을 공유하는 블로그입니다.
          <br />
          리엑트의 다양한 기능을 직접 구현해보며 만들었습니다.
        </Maincontent>
        <MainBTN>
          <MainbtnText type="button" to="/write">
            글쓰기 시작
          </MainbtnText>
        </MainBTN>
      </TopContainer>

      <MainEdu>
        <CardHeader>배운 내용</CardHeader>
        <CardBox>
          {cardData.map((card) => (
            <CardItem
              key={card.id}
              onClick={() => navigate(`/learn/${card.id}`)}
            >
              <CardTitle>{card.title}</CardTitle>
              <CardDesc>{card.desc}</CardDesc>
            </CardItem>
          ))}
        </CardBox>
      </MainEdu>
    </MainContainer>
  );
}
