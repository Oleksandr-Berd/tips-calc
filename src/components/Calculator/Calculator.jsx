import * as SC from "./CalculatorStyled";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormObserver from "../../utils/FormObserver";
import usdIcon from "../../assets/images/icon-dollar.svg"
import peopleIcon from "../../assets/images/icon-person.svg"

const validationSchema = Yup.object().shape({
  bill: Yup.number()
    .typeError("Amount must be a number")
    .min(0)
    .required("Can't be a zero"),
  people: Yup.number()
    .typeError("Must be a number")
    .min(0)
    .required("Can't be a zero"),
});

const Calculator = ({ handleAmount, formKey }) => {

  return (
    <div>
      <Formik
        key={formKey}
        initialValues={{ bill: 0, tips: 0, people: 0 }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ values }) => {
         
          return (
            <Form>
              <FormObserver onChange={handleAmount} />
              <SC.AmountFieldCon>
                <label htmlFor="bill">Bill</label>
                <SC.AmountField type="number" name="bill" />
                <img src={usdIcon} alt="usdIcon"/>
                <SC.ErrorCustom name="bill" component="div" className="error" />
              </SC.AmountFieldCon>
              <div>
                <h3>Select tips %</h3>
                <SC.RadioCon>
                  {[
                    { label: "5%", value: "0.05" },
                    { label: "10%", value: "0.1" },
                    { label: "15%", value: "0.15" },
                    { label: "25%", value: "0.25" },
                    { label: "50%", value: "0.5" },
                  ].map(({ label, value }) => (
                    <SC.RadioFieldCon
                      key={value}
                      className={values.tips === value ? "selected" : ""}
                    >
                      <SC.RadioField type="radio" name="tips" value={value} />
                      {label}
                    </SC.RadioFieldCon>
                  ))}

                  <SC.RadioFieldCon className="disabled">
                    <SC.RadioField
                      type="radio"
                      name="tips"
                      value="custom"
                      disabled
                    />
                    Custom
                  </SC.RadioFieldCon>
                </SC.RadioCon>
              </div>
              <SC.AmountFieldCon>
                <label htmlFor="people">Number of People</label>
                <SC.AmountField type="number" name="people" />
                <img src={peopleIcon} alt="peopleIcon"/>
                <SC.ErrorCustom
                  name="people"
                  component="people"
                  className="error"
                />
              </SC.AmountFieldCon>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Calculator;
