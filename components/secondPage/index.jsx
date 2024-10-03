export default function SecondPage({ errorsState }) {
  return (
    <>
      <p>
        <label htmlFor="gradeone">
          <input
            type="text"
            name="gradeone"
            id="gradeone"
            placeholder="grade1"
          />
        </label>
        <br />
        {errorsState?.errors?.gradeone && (
          <p>{errorsState?.errors?.gradeone}</p>
        )}
      </p>
      <p>
        <label htmlFor="gradetwo">
          <input
            type="text"
            name="gradetwo"
            id="gradetwo"
            placeholder="grade2"
          />
        </label>
        {errorsState?.errors?.gradetwo && (
          <p>{errorsState?.errors?.gradetwo}</p>
        )}
      </p>
      <p>
        <label htmlFor="gradethere">
          <input
            type="number"
            name="gradethere"
            id="gradethere"
            placeholder="telefon numaranız"
          />
        </label>
        {errorsState?.errors?.gradethere && (
          <p>{errorsState?.errors?.gradethere}</p>
        )}
      </p>
    </>
  );
}
