"use client";

export default function FirstPage({ errorsState }) {
  return (
    <div className="firstPage">
      <p> Adınız
        <label htmlFor="name">
          <input type="text" name="name" id="name" placeholder="adınız" />
        </label>
        <br />
        {errorsState?.errors?.name && <p className="eror">{errorsState?.errors?.name}</p>}
      </p>
      <p> Soyadınız
        <label htmlFor="surname">
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="soyadınız"
          />
        </label>
        {errorsState?.errors?.surname && <p className="eror">{errorsState?.errors?.surname}</p>}
      </p>
      <p> Telefon numaranız
        <label htmlFor="phone">
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="telefon numaranız"
          />
        </label>
        {errorsState?.errors?.phone && <p className="eror">{errorsState?.errors?.phone}</p>}
      </p>
      <p> TC numaranız
        <label htmlFor="tcno">
          <input
            type="number"
            name="tcno"
            id="tcno"
            placeholder="tc numaranız"
          />
        </label>
        {errorsState?.errors?.tcno && <p className="eror">{errorsState?.errors?.tcno}</p>}
      </p>
      <p> Doğum tarihiniz
        <label htmlFor="">
          <input
            type="date"
            name="dogumTarihi"
            id="dogumTarihi"
            placeholder="Doğum tarihi"
          />
        </label>
      </p>
    </div>
  );
}
