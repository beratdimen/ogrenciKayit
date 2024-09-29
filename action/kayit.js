"use server";

export async function KayitAction(prevState, formData) {
  const formObj = Object.fromEntries(formData);
  console.log(formObj);

  const errors = {
    name: !formObj.name && "İsim boş olamaz",
    surname: !formObj.surname && "Soyad boş olamaz",
    phone: !formObj.birthDate && "doğum tarihi Boş olamaz",
    tcno: !formObj.tcno && "tckn Boş olamaz",
    cinsiyet: !formObj.cinsiyet && "cinsiyet boş olamaz",
  };

  return { errors };
}
