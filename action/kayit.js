"use server";

export async function KayitAction(values) {
  let errors = {};
  if (values.step == 1) {
    errors = {
      name: !values.name ? "İsim boş olamaz" : null,
      surname: !values.surname ? "Soyad boş olamaz" : null,
      phone: !values.phone ? "Telefon alanı boş olamaz" : null,
      tcno: !values.tcno ? "TCNO alanı boş olamaz" : null,
    };
  } else if (values.step == 2) {
    errors = {
      gradeone: !values.gradeone ? "puan boş olamaz" : null,
      gradetwo: !values.gradetwo ? "not boş olamaz" : null,
      gradethere: !values.gradethere ? "birini seçiniz" : null,
    };
  } else if (values.step == 3) {
    errors = {
      donemEgitmeni: !values.donemEgitmeni ? "Dönem Eğitmeni boş olamaz" : null,
      bolum: !values.bolum ? "Bölüm boş olamaz" : null,
      sinif: !values.sinif ? "Sınıf alanı boş olamaz" : null,
      ogrenciNo: !values.ogrenciNo ? "Öğrenci numarası alanı boş olamaz" : null,
    };
  }
  for (const key in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, key)) {
      const element = errors[key];
      if (element) return { errors };
    }
  }
}
