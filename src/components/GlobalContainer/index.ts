import styled from 'styled-components';

const GlobalContainer = styled.div`
  display: grid;
  gap: 40px 0;
  grid-template-columns:
      [full-start] minmax(20px, 1fr)
      [main-start] minmax(0, 768px)
      [main-end] minmax(20px, 1fr) [full-end];
`;

export default GlobalContainer;
