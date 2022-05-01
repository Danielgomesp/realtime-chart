import { createGlobalStyle } from 'styled-components';
import 'config/font-face.css';
import { colors } from './constants';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    border: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1;
    margin: 0;
    padding: 0;
  }
  
  a {
    color: unset;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  * {
    ::selection {
      background-color: ${colors.text.w200};
      color: ${colors.text.w000};
    }
  }
`;
