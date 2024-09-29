"use client";
import { KayitAction } from "@/action/kayit";
import { useFormState } from "react-dom";

import EvaluationForm from "../kayıt3/page";

export default function Kayit() {
  const [state, action] = useFormState(KayitAction, null);
  return (
    <>
      <h1>Kayıt Sayfası</h1>
      <form action={action}>
        <label htmlFor="">
          <input type="text" name="name" placeholder="isim" />
        </label>
        {state?.errors?.name && <p>{state?.errors?.name}</p>}

        <label htmlFor="">
          <input type="text" name="surname" placeholder="soy isim" />
        </label>
        {state?.errors?.surname && <p>{state?.errors?.surname}</p>}

        <label htmlFor="">
          <input type="date" name="birthDate" placeholder="doğum tarihi" />
        </label>
        {state?.errors?.birthDate && <p>{state?.errors?.birthDate}</p>}

        <label htmlFor="">
          <input type="number" name="tcno" placeholder="tc" />
        </label>
        {state?.errors?.tcno && <p>{state?.errors?.tcno}</p>}

        <select name="cinsiyet" id="cinsiyet">
          <option value=""></option>
          <option value="Erkek">Erkek</option>
          <option value="Kadın">Kadın</option>
          <option value="Diger">Diğer</option>
        </select>
        {state?.errors?.cinsiyet && <p>{state?.errors?.cinsiyet}</p>}
        <button>GO NEXT PAGE</button>
        
      </form>
<EvaluationForm/>
    </>
  );
}
