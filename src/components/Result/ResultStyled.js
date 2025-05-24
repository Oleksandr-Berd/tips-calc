import styled from "@emotion/styled";

export const ResultCon = styled.div`
padding-top: 36px;
padding-bottom: 24px;
padding-left: 24px;
padding-right: 24px;

background-color: #00474B;

border-radius: 24px;
`

export const SummaryCon = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

&:not(:last-child){
    margin-bottom: 20px;
}
`

export const Title = styled.p`
&:first-of-type{
    font-size: 16px;
    font-family: "space";

    color: #fff;
}

&:last-child{
    font-size: 13px;
    font-family: "space";

    color: #7F9D9F;
}
`

export const Amount = styled.p`
font-size: 32px;
font-family: "space";

color: #26C2AE;
`

export const Reset = styled.button`
width: 100%;

padding-top: 8px;
padding-bottom: 8px;

font-size: 20px;
font-family: "space";

background-color: #26C2AE;
color: #00474B;

border-radius: 12px;
`