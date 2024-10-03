export default function SecondPage({ errorsState }) {
  return (
    <>
      <p>
        <label htmlFor="gradeone">
        <p>mülakat puanı</p>
          <input
            type="number"
            name="gradeone"
            id="gradeone"
            placeholder="ön sınav puanı"
          />
        </label>
        <br />
        {errorsState?.errors?.gradeone && (
          <p>{errorsState?.errors?.gradeone}</p>
        )}
      </p>
      <p>
        <label htmlFor="gradetwo">
          <p>mülakat notları</p>
          <textarea
            type="text"
            name="gradetwo"
            id="gradetwo"
            placeholder="mülakat notları"
          />
        </label>
        {errorsState?.errors?.gradetwo && (
          <p>{errorsState?.errors?.gradetwo}</p>
        )}
      </p>
      <p>
        <label htmlFor="gradethere">
          <p>mülakat puanı mülakattan geçtimi</p>
          <input
            type="radio"
            name="gradethere"
            id="gradethere"
          />
          <label htmlFor="">Evet</label>
          <input type="radio"
             name="gradethere"
             id="gradethere"
          />
          <label htmlFor="">Hayır</label>
        </label>
        {errorsState?.errors?.gradethere && (
          <p>{errorsState?.errors?.gradethere}</p>
        )}
      </p>
      <p>deneme</p>
    </>
  );
}
