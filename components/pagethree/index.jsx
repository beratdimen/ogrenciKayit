"use client";

export default function PageThree({ errorsState }) {
  return (
    <>
      <label htmlFor="taskCompleted">
        <p>Ödevi Tamamladı mı?</p>
    <>
      <label htmlFor="taskCompleted">
        <p>Ödevi Tamamladı mı?</p>
        <br />
        <input type="radio" name="taskCompleted" value={"evet"} />
        Evet
        <label htmlFor="taskCompleted"></label>
        <input type="radio" name="taskCompleted" value={"hayır"} />
        Hayır
      </label>
      <br />

      <label htmlFor="attendedClass">
        <p>2- Derse katılım sağladı mı?</p>
        <br />
        <input type="radio" name="attendedClass" value={"evet"} />
        Evet
        <input type="radio" name="attendedClass" value={"hayır"} />
        Hayır
      </label>
      <br />
      {errorsState?.errors?.attendedClass && (
        <p>{errorsState?.errors?.attendedClass}</p>
      )}

      <label htmlFor="developedProject">
        <p>Öğrenci eğitmenleri söylemediği halde proje geliştirdi mi?</p>
        <br />
        <input type="radio" name="developedProject" value={"evet"} />
        Evet
        <input type="radio" name="developedProject" value={"hayır"} />
        Hayır
      </label>
      <br />
      {errorsState?.errors?.developedProject && (
        <p>{errorsState?.errors?.developedProject}</p>
      )}

      <label htmlFor="onTime">
        <p>Öğrenci derse her zaman tam saatinde geldi mi?</p>
        <br />
        <input type="radio" name="onTime" value={"evet"} />
        Evet
        <input type="radio" name="onTime" value={"hayır"} />
        Hayır
      </label>
      <br />
      {errorsState?.errors?.onTime && (
        <p>{errorsState?.errors?.onTime}</p>
      )}

      <label htmlFor="focused">
        <p> 5-) Öğrenci ders esnasında sadece derse odaklandı mı?</p>
        <br />
        <input type="radio" name="focused" value={"evet"} />
        Evet
        <input type="radio" name="focused" value={"hayır"} />
        Hayır
      </label>
      <br />
      {errorsState?.errors?.focused && (
        <p>{errorsState?.errors?.focused}</p>
      )}

      <label htmlFor="deservesCertificate">
        <p>Öğrenci sertifika almayı hak ediyor mu?</p>
        <br />
        <input type="radio" name="deservesCertificate" value={"evet"} />
        Evet
        <input type="radio" name="deservesCertificate" value={"hayır"} />
        Hayır
      </label>
      <br />
    </>
  );
}
