import styled from "@emotion/styled";
import { ErrorMessage, Field, Form } from "formik";

export const FormCustom = styled(Form)`
  @media (min-width: 1280px) {
    width: 400px;

    margin-right: 48px;
  }
`;

export const AmountFieldCon = styled.div`
  margin-bottom: 32px;
  position: relative;

  & > label {
    display: block;

    margin-bottom: 8px;

    font-size: 16px;
    font-family: "space";

    color: #5e7a7d;
  }

  & img {
    position: absolute;
    top: 65%;
    left: 0;

    transform: translateX(20px) translateY(-50%);
  }
`;

export const ErrorCustom = styled(ErrorMessage)`
  position: absolute;

  bottom: 0;
  left: 0;

  transform: translateY(100%);

  font-family: "space";
  font-style: italic;
  font-size: 12px;

  color: red;
`;

export const AmountField = styled(Field)`
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;

  text-align: right;

  font-size: 24px;
  font-family: "space";

  background-color: #f3f9fa;
  color: #00474b;

  box-shadow: none;
  outline: none;
  border: 1px solid rgba(0,0,0,0);
  border-radius: 12px;
 
  transition: border-color 0.3s linear;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid #26c2ae;
    cursor: pointer;

    transition: border-color 0.3s linear;
  }

  &.errorField{
    border: 1px solid #FF0000;
  }
`;

export const RadioCon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  margin-top: 16px;
  margin-bottom: 32px;
`;

export const RadioFieldCon = styled.div`
  position: relative;

  padding-top: 8px;
  padding-bottom: 8px;

  text-align: center;

  font-size: 24px;
  font-family: "space";

  background-color: #00474b;
  color: #fff;

  border-radius: 12px;

  transition: background-color 0.3s linear, color 0.3s linear;

  &.disabled {
    background-color: #f3f9fa;
    color: #547878;
  }

  &.selected {
    background-color: #26c2ae;
    color: #00474b;
  }

  &:active, &:focus, &:hover{
    background-color: #26c2ae;
    color: #00474b;
    cursor: pointer;
    transition: background-color 0.3s linear, color 0.3s linear;

  }
`;

export const RadioField = styled(Field)`
  position: absolute;

  width: 100%;
  height: 100%;

  opacity: 0;
`;
