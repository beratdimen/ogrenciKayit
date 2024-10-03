"use client";

export default function PageThree({ errorsState }) {
  return (
    <>
      <label htmlFor="taskCompleted">
        <p>Ödevi Tamamladı mı?</p>
        <br />
        <input
          type="radio"
          name="taskCompleted"
          value="evet"
          id="taskCompleted"
        />
        Evet

        <input
          type="radio"
          name="taskCompleted"
          value="hayır"
          id="taskCompleted"
        />
        Hayır
      </label>
      <br />
      {errorsState?.errors?.taskCompleted && (
        <p>{errorsState?.errors?.taskCompleted}</p>
      )}

      <label htmlFor="attendedClass">
        <p>Derse katılım sağladı mı?</p>
        <br />
        <input
          type="radio"
          name="attendedClass"
          value="evet"
          id="attendedClass"
        />
        Evet
        <input
          type="radio"
          name="attendedClass"
          value="hayır"
          id="attendedClass"
        />
        Hayır
      </label>
      <br />
      {errorsState?.errors?.attendedClass && (
        <p>{errorsState?.errors?.attendedClass}</p>
      )}

      <label htmlFor="developedProject">
        <p>Öğrenci eğitmenleri söylemediği halde proje geliştirdi mi?</p>
        <br />
        <input
          type="radio"
          name="developedProject"
          value="evet"
          id="developedProject"
        />
        Evet
        <input
          type="radio"
          name="developedProject"
          value="hayır"
          id="developedProject"
        />
        Hayır
      </label>
      <br />
      {errorsState?.errors?.developedProject && (
        <p>{errorsState?.errors?.developedProject}</p>
      )}

      <label htmlFor="onTime">
        <p>Öğrenci derse her zaman tam saatinde geldi mi?</p>
        <br />
        <input
          type="radio"
          name="onTime"
          value="evet"
          id="onTimes"
        />
        Evet
        <input
          type="radio"
          name="onTime"
          value="hayır"
          id="onTime"
        />
        Hayır
      </label>
      <br />
      {errorsState?.errors?.onTime && (
        <p>{errorsState?.errors?.onTime}</p>
      )}

      <label htmlFor="focused">
        <p>Öğrenci ders esnasında sadece derse odaklandı mı?</p>
        <br />
        <input
          type="radio"
          name="focused"
          value="evet"
          id="focused"
        />
        Evet
        <input
          type="radio"
          name="focused"
          value="hayır"
          id="focused"
        />
        Hayır
      </label>
      <br />
      {errorsState?.errors?.focused && (
        <p>{errorsState?.errors?.focused}</p>
      )}

      <label htmlFor="deservesCertificate">
        <p>Öğrenci sertifika almayı hak ediyor mu?</p>
        <br />
        <input
          type="radio"
          name="deservesCertificate"
          value="evet"
          id="deservesCertificate"
        />
        Evet
        <input
          type="radio"
          name="deservesCertificate"
          value="hayır"
          id="deservesCertificate"
        />
        Hayır
      </label>
      <br />
      {errorsState?.errors?.deservesCertificate && (
        <p>{errorsState?.errors?.deservesCertificate}</p>
      )}
    </>
  )
}

