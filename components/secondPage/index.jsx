import "../secondPage/secondpage.css"

export default function SecondPage({ errorsState }) {
  return (
    <>
      <div className="secondpage">
        <p>
          <label htmlFor="interviewscore">
            <input
              type="number"
              name="interviewscore"
              id="interviewscore"
              placeholder="Ön Sınav Puanı"
            />
          </label>
          <br />
          {errorsState?.errors?.interviewscore && (
            <p>{errorsState?.errors?.interviewscore}</p>
          )}
        </p>
        <p>
          <label htmlFor="interviewnotes">
            <textarea
              type="text"
              name="interviewnotes"
              id="interviewnotes"
              placeholder="Mülakat Notları"
            />
          </label>
          {errorsState?.errors?.interviewnotes && (
            <p>{errorsState?.errors?.interviewnotes}</p>
          )}
        </p>
        <p>
          <label className="radio" htmlFor="successful">
            <p>Mülakat puanı mülakattan geçti'mi ?</p>
            <div className="input">
              <div className="bir">
                <input
                  type="radio"
                  name="successful"
                  id="successful"
                />
                <p>Evet</p>
              </div>
              <div className="bir">
                <input type="radio"
                  name="successful"
                  id="successful"
                />
                <p>Hayır</p>
              </div>
            </div>
          </label>
          {errorsState?.errors?.successful && (
            <p>{errorsState?.errors?.successful}</p>
          )}
        </p>
      </div>
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
            value={"evet"}
          />
          <label htmlFor="">Evet</label>
          <input
            type="radio"
            name="gradethere"
            id="gradethere"
            value={"hayır"}
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
