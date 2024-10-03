"use client";
import { KayitAction } from "@/action/kayit";
import { useState } from "react";
import FirstPage from "@/components/firstPage";
import SecondPage from "@/components/secondPage";
import { useFormState } from "react-dom";

export default function Kayit() {
  const [errorsState, setErrorsState] = useState({});
  const [step, setStep] = useState(1);
  const [state, action] = useFormState(KayitAction, null);

  return (
    <>
      <h1>Kayıt Sayfası</h1>
      <form
        action={async (formData) => {
          console.log(formData);
          const formObj = Object.fromEntries(formData);
          console.log(formObj);

          setErrorsState({})

          const response = await KayitAction(formObj);
          console.log(response);

          if (response?.errors) {
            setErrorsState({
              errors: response?.errors,
            });
            return;
          }

          setStep((prev) => prev + 1);
        }}
      >
        <input type="hidden" name="step" value={step} />
        {step === 1 && <FirstPage errorsState={errorsState} />}
        {step === 2 && <SecondPage errorsState={errorsState} />}

        <button>{step === 4 ? "Kaydet" : "İlerle"}</button>
      </form>
    </>
  );
}
