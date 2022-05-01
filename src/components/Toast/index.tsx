import styled from 'styled-components';

import { ToastContainer, toast as toastify } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { colors } from 'config/constants';

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify {
    &__toast {
      background: ${colors.background.w000};
      color: ${colors.text.w200};
    }

    &__close-button {
      color: ${colors.text.w200};
      opacity: 0.9;
    }
  }
`;

export const toast = toastify;
