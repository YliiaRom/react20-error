const linksList = [
  {
    "throw new Error":
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw",
  },

  {
    "ErrorBoundary(9.07)":
      "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",
  },
  { Theory: "https://www.youtube.com/live/dWAIK367S7Q" },
  {
    "Стаття: ErrorBoundary":
      "https://www.brandondail.com/posts/fault-tolerance-react",
  },
  {
    "react-error-boundary /бібліотека (11.00)":
      "https://www.npmjs.com/package/react-error-boundary",
  },
  {
    "react-error-boundary + react DOC":
      "https://react.dev/reference/react/use#displaying-an-error-to-users-with-error-boundary",
  },
];
function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <div className="descriptionGrid">
        <p>
          Page404 - маршрут не зареєстрований <br /> Працює: <br /> &#123; path:
          "*" <br />
          Component: Page404 &#125;
        </p>
        <p>
          ErrorPage- неопрацьовані помилки <br />
          помилка сталася при переході <br />
          Працює: <br /> errorElement: &lt;ErrorPage&gt;
        </p>
      </div>
      <ul>
        {linksList.map((obj, index) =>
          Object.entries(obj).map(([keyObj, value]) => (
            <li key={index + keyObj} className="linkBtn">
              <a href={value} target="_blank" rel="noreferrer">
                {keyObj}
              </a>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default HomePage;
