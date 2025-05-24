import styled from "@emotion/styled";
import { Field } from "formik";


export const AmountFieldCon = styled.div`
margin-bottom: 32px;

& > label{
    display: block;

    margin-bottom: 8px;

    font-size: 16px;
    font-family: "space";

    color: #5E7A7D;
}
`

export const AmountField = styled(Field)`
width: 100%;

padding-top: 16px;
padding-bottom: 16px;
padding-right: 16px;

text-align: right;

font-size: 24px;
font-family: "space";

background-color: #F3F9FA;
color: #00474B;

box-shadow: none;
outline: none;
border: none;
border-radius: 12px;
`

export const RadioCon = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px;

margin-top: 16px;
margin-bottom: 32px;


`

export const RadioFieldCon = styled.div`
position: relative;

padding-top: 8px;
padding-bottom: 8px;

text-align: center;

font-size: 24px;
font-family: "space";

background-color: #00474B;
color: #fff;

border-radius: 12px;

&.disabled{
    background-color: #F3F9FA;
    color: #547878;
}
`

export const RadioField = styled(Field)`
position: absolute;

width: 100%;
height: 100%;

opacity: 0;
`

