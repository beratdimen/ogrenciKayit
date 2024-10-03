"use client";

export default function FirstPage({ errorsState }) {
  return (
    <>
      <p>
        <label htmlFor="name">
          <input type="text" name="name" id="name" placeholder="adınız" />
        </label>
        <br />
        {errorsState?.errors?.name && <p>{errorsState?.errors?.name}</p>}
      </p>
      <p>
        <label htmlFor="surname">
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="soyadınız"
          />
        </label>
        {errorsState?.errors?.surname && <p>{errorsState?.errors?.surname}</p>}
      </p>
      <p>
        <label htmlFor="phone">
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="telefon numaranız"
          />
        </label>
        {errorsState?.errors?.phone && <p>{errorsState?.errors?.phone}</p>}
      </p>
      <p>
        <label htmlFor="tcno">
          <input
            type="number"
            name="tcno"
            id="tcno"
            placeholder="tc numaranız"
          />
        </label>
        {errorsState?.errors?.tcno && <p>{errorsState?.errors?.tcno}</p>}
      </p>
      <p>
        <label htmlFor="">
          <input
            type="date"
            name="dogumTarihi"
            id="dogumTarihi"
            placeholder="Doğum tarihi"
          />
        </label>
      </p>
    </>
  );
}
