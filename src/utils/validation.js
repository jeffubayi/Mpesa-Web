import * as Yup from "yup";
//Yup validation schema for rendering form error messages
export const validationSchema = Yup.object().shape({
  orders: Yup.array().of(
    Yup.object().shape({
      pin: Yup.number().required("Mpesa Pin is required"),
      number: Yup.number().required("Number is required"),
      amount: Yup.number().required("Amount is required"),
    })
  ),
});


export const initialValues = {
    number: "",
    amount: "",
    pin: "",
}
