"use client"

export default function Sinav() {
  return (
    <>
    <form action="">
      <label htmlFor="">
        <p>ön sınav puanı</p>
        <input type="text" name="sinav" id="sinav" placeholder="ön sınav puanı" />
      </label>
      <label htmlFor="">
        <p>mülakat notları</p>
        <textarea name="sinavnot" id="sinavnot" placeholder="mülakat notları"></textarea>
      </label>
      <label htmlFor="">
        <p>mülakat puanı mülakattan geçtimi</p>
        <input name="evet" id="evet" type="radio" />
        <label htmlFor="">Evet</label>
        <input name="hayır" id="hayır" type="radio" />
        <label htmlFor="">Hayır</label>
      </label>
    </form>
    </>
  )
}