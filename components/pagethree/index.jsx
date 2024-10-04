"use client";
import "../pagethree/pagethree.css"
export default function PageThree({ errorsState }) {
  return (
    <div className="radio">
      <label htmlFor="taskCompleted">
        <p>Ödevi Tamamladı mı?</p>
        <div className="bir">
          <input type="radio" name="taskCompleted" value={"evet"} />
          <p>Evet</p>
          <label htmlFor="taskCompleted"></label>
          <input type="radio" name="taskCompleted" value={"hayır"} />
          <p>Hayır</p>
        </div>
      </label>
      {errorsState?.errors?.taskCompleted && (
        <p className="eror">{errorsState?.errors?.taskCompleted}</p>
      )}

      <label htmlFor="attendedClass">
        <p>Derse katılım sağladı mı?</p>
        <div className="bir">
          <input type="radio" name="attendedClass" value={"evet"} />
          <p>Evet</p>
          <input type="radio" name="attendedClass" value={"hayır"} />
          <p>Hayır</p>
        </div>
      </label>
      {errorsState?.errors?.attendedClass && (
        <p className="eror">{errorsState?.errors?.attendedClass}</p>
      )}

      <label htmlFor="developedProject">
        <p>Öğrenci eğitmenleri söylemediği halde proje geliştirdi mi?</p>
        <div className="bir">
          <input type="radio" name="developedProject" value={"evet"} />
          <p>Evet</p>
          <input type="radio" name="developedProject" value={"hayır"} />
          <p>Hayır</p>
        </div>
      </label>
      {errorsState?.errors?.developedProject && (
        <p className="eror">{errorsState?.errors?.developedProject}</p>
      )}

      <label htmlFor="onTime">
        <p>Öğrenci derse her zaman tam saatinde geldi mi?</p>
        <div className="bir">
          <input type="radio" name="onTime" value={"evet"} />
          <p>Evet</p>
          <input type="radio" name="onTime" value={"hayır"} />
          <p>Hayır</p>
        </div>
      </label>
      {errorsState?.errors?.onTime && <p className="eror">{errorsState?.errors?.onTime}</p>}

      <label htmlFor="focused">
        <p>Öğrenci ders esnasında sadece derse odaklandı mı?</p>
        <div className="bir">
          <input type="radio" name="focused" value={"evet"} />
          <p>Evet</p>
          <input type="radio" name="focused" value={"hayır"} />
          <p>Hayır</p>
        </div>
      </label>
      {errorsState?.errors?.focused && <p className="eror">{errorsState?.errors?.focused}</p>}

      <label htmlFor="deservesCertificate">
        <p>Öğrenci sertifika almayı hak ediyor mu?</p>
        <div className="bir">
          <input type="radio" name="deservesCertificate" value={"evet"} />
          <p>Evet</p>
          <input type="radio" name="deservesCertificate" value={"hayır"} />
          <p>Hayır</p>
        </div>
      </label>
      {errorsState?.errors?.deservesCertificate && <p className="eror">{errorsState?.errors?.deservesCertificate}</p>}
    </div>
  );
}
