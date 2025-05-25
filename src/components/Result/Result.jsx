import * as SC from "./ResultStyled";

const Result = ({summary, handleReset}) => {

console.log(summary);


  return (
    <SC.ResultCon>
      <SC.SummaryCon>
        <div>
          <SC.Title>Tip Amount</SC.Title>
          <SC.Title>/ person</SC.Title>
        </div>
        <SC.Amount>{summary ?  "$"+summary.tipPerPerson : "$0.00"} </SC.Amount>
      </SC.SummaryCon>
      <SC.SummaryCon>
        <div>
          <SC.Title>Total</SC.Title>
          <SC.Title>/ person</SC.Title>
        </div>
        <SC.Amount>{summary ?  "$"+summary.totalTips : "$0.00"}</SC.Amount>
      </SC.SummaryCon>
      <SC.Reset onClick={handleReset} disabled={summary ? false : true}>Reset</SC.Reset>
    </SC.ResultCon>
  );
};

export default Result;
