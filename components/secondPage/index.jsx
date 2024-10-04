import "../secondPage/secondpage.css";

export default function SecondPage({ errorsState }) {
  return (
    <>
      <div className="secondpage">
        <p> Ön Sınav Puanı
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
            <p className="eror">{errorsState?.errors?.interviewscore}</p>
          )}
        </p>
        <p> Mülakat Notları
          <label htmlFor="interviewnotes">
            <textarea
              type="text"
              name="interviewnotes"
              id="interviewnotes"
              placeholder="Mülakat Notları"
            />
          </label>
          {errorsState?.errors?.interviewnotes && (
            <p className="eror">{errorsState?.errors?.interviewnotes}</p>
          )}
        </p>
        <p>
          <label className="radio" htmlFor="successful">
            <p>Mülakat puanı mülakattan geçti&apos;mi?</p>
            <div className="input">
              <div className="bir">
                <input
                  type="radio"
                  name="successful"
                  id="successful"
                  value={"evet"}
                />
                <p>Evet</p>
              </div>
              <div className="bir">
                <input
                  type="radio"
                  name="successful"
                  id="successful"
                  value={"hayır"}
                />
                <p>Hayır</p>
              </div>
            </div>
            {errorsState?.errors?.successful && (
            <p className="eror">{errorsState?.errors?.successful}</p>
          )}
          </label>
        </p>
      </div>
    </>
  );
}
