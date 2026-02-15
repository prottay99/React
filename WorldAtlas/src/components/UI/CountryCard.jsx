import { NavLink } from "react-router";

export const CountryCard = ({ country }) => {
  const { capital, flags, name, population, region } = country;
  return (
    <li>
      <div className="card">
        <img src={flags.svg} alt={flags.alt} className="country-flag" />
        <h3 className="card_heading">
          {name.common.length > 10
            ? name.common.slice(0, 10) + " ..."
            : name.common}
        </h3>
        <div className="card_details">
          <p>
            <span>population: </span>
            {population}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Capital: </span>
            {capital[0]}
          </p>
        </div>
        <NavLink to={`/country/${name.common}`}>
          <button className="btn btn-darken mt-2">Read More</button>
        </NavLink>
      </div>
    </li>
  );
};
