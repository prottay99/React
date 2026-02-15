export const Card = ({ countryInfo }) => {
  const { countryName, capital, population, interestingFact } = countryInfo;
  return (
    <div className="card">
      <h3 className="card_heading">{countryName}</h3>
      <div className="card_details">
        <p>
          <span>Capital: </span>
          {capital}
        </p>
        <p>
          <span>population: </span>
          {population}
        </p>
        <p>
          <span>Interesting Fact: </span>
          {interestingFact}
        </p>
      </div>
    </div>
  );
};
