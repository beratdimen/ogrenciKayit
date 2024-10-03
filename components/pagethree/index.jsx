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
        
        />
        Evet
        
        <label htmlFor="taskCompleted"></label>
        
        <input
          type="radio"
          name="taskCompleted"
          value="hayır"
          
        />
        Hayır
      </label>
      <br />

      
      <label htmlFor="attendedClass">
      <p>2- Derse katılım sağladı mı?</p>
        <br />
        <input
          type="radio"
          name="attendedClass"
          value="evet"
        />
        Evet
        <input
          type="radio"
          name="attendedClass"
          value="hayır"
        />
        Hayır
      </label>
      <br />

      <label htmlFor="developedProject">
        <p>3- Öğrenci eğitmenleri söylemediği halde proje geliştirdi mi?</p>
        <br />
        <input
          type="radio"
          name="developedProject"
          value="evet"
        />
        Evet
        <input
          type="radio"
          name="developedProject"
          value="hayır"
        />
        Hayır
      </label>
      <br />

      <label htmlFor="onTime">
        <p> 4-) Öğrenci derse her zaman tam saatinde geldi mi?</p>
        <br />
        <input
          type="radio"
          name="onTime"
          value="evet"
        />
        Evet
        <input
          type="radio"
          name="onTime"
          value="hayır"
        />
        Hayır
      </label>
      <br />

      <label htmlFor="focused">
      <p> 5-) Öğrenci ders esnasında sadece derse odaklandı mı?</p>
        <br />
        <input
          type="radio"
          name="focused"
          value="evet"
        />
        Evet
        <input
          type="radio"
          name="focused"
          value="hayır"
        />
        Hayır
      </label>
      <br />

      <label htmlFor="deservesCertificate">
        <p>6-) Öğrenci sertifika almayı hak ediyor mu?</p>
        <br />
        <input
          type="radio"
          name="deservesCertificate"
          value="evet"
        />
        Evet
        <input
          type="radio"
          name="deservesCertificate"
          value="hayır"
        />
        Hayır
      </label>
      <br />
     </>
)
}
 
