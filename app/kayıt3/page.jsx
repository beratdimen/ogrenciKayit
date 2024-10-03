"use client";
import { useState } from "react";

export default function EvaluationForm({
  errorState,
  setErrorState,
  page,
  setPage,
}) {
  const [answers, setAnswers] = useState({
    taskCompleted: "",
    attendedClass: "",
    developedProject: "",
    onTime: "",
    focused: "",
    deservesCertificate: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isCertified, setIsCertified] = useState(false);

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.deservesCertificate === "evet") {
      setIsCertified(true);
    }
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div>
        {isCertified ? (
          <h2>Sertifika hazırlanıyor...</h2>
        ) : (
          <h2>İşlem tamamlandı.</h2>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={async (formData) => {
        const formObj = Object.fromEntries(formData);
        const response = await KayitAction(formObj);

        if (response?.errors) {
          setErrorState({
            errors: response?.errors,
          });
          return;
        }
        setPage((prev) => prev + 1);
      }}
    >
      <h1>Öğrenci Değerlendirme Formu</h1>

      <label>
        1- Ödevini tamamladı mı?
        <br />
        <input
          type="radio"
          name="taskCompleted"
          value="evet"
          onChange={handleChange}
        />{" "}
        Evet
        <input
          type="radio"
          name="taskCompleted"
          value="hayır"
          onChange={handleChange}
        />{" "}
        Hayır
      </label>
      <br />

      <label>
        2- Derse katılım sağladı mı?
        <br />
        <input
          type="radio"
          name="attendedClass"
          value="evet"
          onChange={handleChange}
        />{" "}
        Evet
        <input
          type="radio"
          name="attendedClass"
          value="hayır"
          onChange={handleChange}
        />{" "}
        Hayır
      </label>
      <br />

      <label>
        3- Öğrenci eğitmenleri söylemediği halde proje geliştirdi mi?
        <br />
        <input
          type="radio"
          name="developedProject"
          value="evet"
          onChange={handleChange}
        />{" "}
        Evet
        <input
          type="radio"
          name="developedProject"
          value="hayır"
          onChange={handleChange}
        />{" "}
        Hayır
      </label>
      <br />

      <label>
        4-) Öğrenci derse her zaman tam saatinde geldi mi?
        <br />
        <input
          type="radio"
          name="onTime"
          value="evet"
          onChange={handleChange}
        />{" "}
        Evet
        <input
          type="radio"
          name="onTime"
          value="hayır"
          onChange={handleChange}
        />{" "}
        Hayır
      </label>
      <br />

      <label>
        5-) Öğrenci ders esnasında sadece derse odaklandı mı?
        <br />
        <input
          type="radio"
          name="focused"
          value="evet"
          onChange={handleChange}
        />{" "}
        Evet
        <input
          type="radio"
          name="focused"
          value="hayır"
          onChange={handleChange}
        />{" "}
        Hayır
      </label>
      <br />

      <label>
        6-) Öğrenci sertifika almayı hak ediyor mu?
        <br />
        <input
          type="radio"
          name="deservesCertificate"
          value="evet"
          onChange={handleChange}
        />{" "}
        Evet
        <input
          type="radio"
          name="deservesCertificate"
          value="hayır"
          onChange={handleChange}
        />{" "}
        Hayır
      </label>
      <br />

      <button type="submit">TAMAMLA</button>
    </form>
  );
}
