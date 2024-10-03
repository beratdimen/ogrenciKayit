"use client";
import { KayitAction } from "@/action/kayit";
import { useEffect, useState } from "react";
import FirstPage from "@/components/firstPage";
import SecondPage from "@/components/secondPage";
import { useFormState } from "react-dom";
import PageThree from "@/components/pagethree";
import PageFourth from "@/components/fourthPage";

export default function Kayit() {
  const [errorsState, setErrorsState] = useState({});
  const [step, setStep] = useState(1);
  const [state, action] = useFormState(KayitAction, null);
  useEffect(() => {
    if (step > 6) {
      return notFound();
    }
  }, []);
  return (
    <>
      <h1>Kayıt Sayfası</h1>
      <form
        action={async (formData) => {
          console.log(formData);
          const formObj = Object.fromEntries(formData);
          console.log(formObj);

          setErrorsState({});

          const response = await KayitAction(formObj);
          console.log(response);

          if (response?.errors) {
            setErrorsState({
              errors: response?.errors,
            });
            return;
          }
          if (step == 2) {
            if (formObj?.successful == "hayır") {
              setStep(5);
            } else {
              setStep((prev) => prev + 1);
            }
          } else if (step == 4) {
            if (formObj?.deservesCertificate == "hayır") {
              setStep(5);
            } else {
              setStep(6);
            }
          } else {
            setStep((prev) => prev + 1);
          }
        }}
      >
        <input type="hidden" name="step" value={step} />
        {step === 1 && <FirstPage errorsState={errorsState} />}
        {step === 2 && <SecondPage errorsState={errorsState} />}
        {step === 3 && <PageFourth errorsState={errorsState} />}
        {step === 4 && <PageThree errorsState={errorsState} />}
        {step === 5 && <>Form kaydedildi Sertifikayı Çok Beklerssin</>}
        {step === 6 && <>Öğrenci sertifika almaya hak kazandı</>}

        <button
          onClick={() => (step === 6 ? setStep(1) : step === 5 && setStep(1))}
        >
          {step === 6 || step === 5
            ? "Başa Dön"
            : step === 4
            ? "Kaydet"
            : "İlerle"}
        </button>
      </form>
    </>
  );
}
