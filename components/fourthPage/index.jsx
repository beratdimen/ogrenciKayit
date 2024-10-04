"use client";
import "../fourthPage/fourth.css"
export default function PageFourth({ errorsState }) {
  return (
    <>
      <p> Dönem eğitmeni
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
          <p className="eror">{errorsState?.errors?.donemEgitmeni}</p>
        )}
      </p>
      <p> Bölümünüzü giriniz
        <label htmlFor="bolum">
          <input
            type="text"
            id="bolum"
            name="bolum"
            placeholder="Bölümünüzü giriniz"
          />
        </label>
        <br />
        {errorsState?.errors?.bolum && <p className="eror">{errorsState?.errors?.bolum}</p>}
      </p>
      <p> Sınıf
        <label htmlFor="sinif">
          <input id="sinif" type="text" name="sinif" placeholder="sınıfı:" />
        </label>
        <br />
        {errorsState?.errors?.sinif && <p className="eror">{errorsState?.errors?.sinif}</p>}
      </p>
      <p> Öğrenci numarasını giriniz
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
          <p className="eror">{errorsState?.errors?.ogrenciNo}</p>
        )}
      </p>
    </>
  );
}
