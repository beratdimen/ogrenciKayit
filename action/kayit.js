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
      interviewscore: !values.interviewscore ? "puan boş olamaz" : null,
      interviewnotes: !values.interviewnotes ? "not boş olamaz" : null,
      successful: !values.successful ? "birini seçiniz" : null,
    };

    for (const key in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, key)) {
        const element = errors[key];
        if (element) return { errors };
      }
    }
  }

  if (values.step == 3) {
    errors = {
      taskCompleted: !values.taskCompleted ? "birini seçiniz" : null,
      attendedClass: !values.attendedClass ? "birini seçiniz" : null,
      developedProject: !values.developedProject ? "birini seçiniz" : null,
      onTime: !values.onTime ? "birini seçiniz" : null,
      focused: !values.focused ? "birini seçiniz" : null,
      deservesCertificate: !values.deservesCertificate ? "birini seçiniz" : null,
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
