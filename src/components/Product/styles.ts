import { colors } from 'config/constants';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid;
  border-color: ${colors.background.w100};
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 6px;
  min-width: 200px;
  padding: 20px 10px;
`;

export const Id = styled.div`
  color: ${colors.text.w200};
  font-weight: 600;
`;

export const Temperature = styled.div`
  color: ${colors.text.w100};
`;
