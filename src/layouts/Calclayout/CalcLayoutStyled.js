import styled from "@emotion/styled";

export const CalcLayoutCustom = styled.div`
  padding: 32px;

  background-color: #fff;

  border-top-right-radius: 36px;
  border-top-left-radius: 36px;

  @media (min-width: 1280px) {
    width: 64%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-left: auto;
    margin-right: auto;
  }
`;
