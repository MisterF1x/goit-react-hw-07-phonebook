import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0
  }
  50% {
    opacity: 1;
  }

`;

export const LoadingStyled = styled.div`
  font-weight: 700;
  text-align: center;
  opacity: 1;
  margin-top: 15px;
  animation: ${fadeInOut} 2s infinite;
`;
