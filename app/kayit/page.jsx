"use client";

import EvaluationForm from "../kayıt3/page";

export default function Kayit() {
  return (
    <>
      <h1>Kayıt Sayfası</h1>
      <form>
        <label>
          <input type="text" placeholder="isim"/>
        </label>

        <label>
          <input type="text" placeholder="soy isim"/>
        </label>

        <label>
          <input type="date" placeholder="doğum tarihi" />
        </label>

        <label>
          <input type="number" placeholder="tc" />
        </label>

        <label>
          <input type="text" />
        </label>
      </form>
<EvaluationForm/>
    </>
  );
}
