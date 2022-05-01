import styled from 'styled-components';
import { colors, fontSize } from 'config/constants';

export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid;
  border-bottom-color: ${colors.background.w200};
  color: ${colors.text.w200};
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding: 20px 0;
`;

export const Title = styled.h1`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  font-size: ${fontSize.lg};
  gap: 2px;
  grid-column: main;
`;

export const SubTitle = styled.p`
  font-size: ${fontSize.xxs};
  font-weight: 400;
`;
