import styled from "@emotion/styled";

export const ResultCon = styled.div`
  padding-top: 36px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #00474b;

  border-radius: 24px;

  @media (min-width: 1280px) {
    width: 400px;

    padding: 40px;
  }
`;

export const SummaryCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:first-of-type {
    margin-bottom: 20px;

    @media (min-width: 1280px) {
      margin-bottom: 40px;
    }
  }

  &:last-of-type {
    margin-bottom: 32px;

    @media (min-width: 1280px) {
      margin-bottom: 120px;
    }
  }
`;

export const Title = styled.p`
  &:first-of-type {
    font-size: 16px;
    font-family: "space";

    color: #fff;
  }

  &:last-child {
    font-size: 13px;
    font-family: "space";

    color: #7f9d9f;
  }
`;

export const Amount = styled.p`
  font-size: 32px;
  font-family: "space";

  color: #26c2ae;

  @media (min-width: 1280px) {
    font-size: 48px;
    letter-spacing: -1px;
  }
`;

export const Reset = styled.button`
  width: 100%;

  padding-top: 8px;
  padding-bottom: 8px;

  font-size: 20px;
  font-family: "space";

  background-color: #26c2ae;
  color: #00474b;

  border-radius: 12px;

  &:disabled {
    background-color: #0d686d;
  }

        transition: background-color 0.3s linear;

  @media (min-width: 1280px){
    &:hover, &:focus, &:active{
        background-color: #26C2AE;
        color: #00474B;
        cursor: pointer;

        transition: background-color 0.3s linear;
    }
  }
`;
