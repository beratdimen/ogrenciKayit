"use client";

export default function PageFourth({ errorsState }) {
  return (
    <>
      <p>
        <label htmlFor="donemEgitmeni">
          <input
            id="donemEgitmeni"
            type="text"
            name="donemEgitmeni"
            placeholder="Dönem Eğitmeni"
          />
        </label>
        <br />
        {errorsState?.errors?.donemEgitmeni && (
          <p>{errorsState?.errors?.donemEgitmeni}</p>
        )}
      </p>
      <p>
        <label htmlFor="bolum">
          <input
            type="text"
            id="bolum"
            name="bolum"
            placeholder="Bölümünüzü giriniz"
          />
        </label>
        <br />
        {errorsState?.errors?.bolum && <p>{errorsState?.errors?.bolum}</p>}
      </p>
      <p>
        <label htmlFor="sinif">
          <input id="sinif" type="text" name="sinif" placeholder="sınıfı:" />
        </label>
        <br />
        {errorsState?.errors?.sinif && <p>{errorsState?.errors?.sinif}</p>}
      </p>
      <p>
        <label htmlFor="ogrenciNo">
          <input
            id="ogrenciNo"
            type="number"
            name="ogrenciNo"
            placeholder="Öğrenci Numarasını giriniz"
          />
        </label>
        <br />
        {errorsState?.errors?.ogrenciNo && (
          <p>{errorsState?.errors?.ogrenciNo}</p>
        )}
      </p>
    </>
  );
}
