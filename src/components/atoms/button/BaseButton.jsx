import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none; /* 輪郭線 (outline) に関する様々なプロパティ */
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
