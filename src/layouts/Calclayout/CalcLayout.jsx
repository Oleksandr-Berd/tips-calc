import * as SC from "./CalcLayoutStyled"

import Calculator from "../../components/Calculator/Calculator";
import { useEffect, useState } from "react";
import Result from "../../components/Result/Result";

const CalcLayout = () => {

    const [amount, setAmount] = useState(null)
    const [summary, setSummary] = useState(null)
    const [formKey, setFormKey] = useState(0);

    const handleAmount = ({bill, tips, people}) => {
        setAmount({bill, tips, people})
    }

const handleSummary = (amount) => {
const {bill, tips, people} = amount || {}
let tipPerPerson
let totalTips

if (bill, tips, people){
tipPerPerson = parseFloat((bill / people * tips).toFixed(2));
totalTips = parseFloat((tipPerPerson * people).toFixed(2))

setSummary({tipPerPerson, totalTips})
}
}    

useEffect(()=>{
    handleSummary(amount)
}, [amount])

const handleReset = ()=> {
    setSummary(null)
    setFormKey(prev => prev + 1)
}

    return ( <SC.CalcLayoutCustom>
        <Calculator handleAmount={handleAmount} formKey={formKey}/>
        <Result summary={summary} handleReset = {handleReset}/>
    </SC.CalcLayoutCustom> );
}
 
export default CalcLayout;