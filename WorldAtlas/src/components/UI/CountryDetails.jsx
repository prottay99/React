import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router";
import { Loader } from "../UI/Loader";
import { getCountryIndData } from "../../api/postApi";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);

      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="country-detail-page">
      <div className="grid grid-two-cols container">
        {country && (
          <>
            <div className="country_img">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                width={300}
              />
            </div>
            <div className="country_details">
              <h2 className="card_heading">{country.name.official}</h2>
              <div className="card_details">
                <p>
                  <span>Native Name: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span>Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
                <p>
                  <span>Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((key) => country.currencies[key].name)
                    .join(", ")}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital[0]}
                </p>
                <p>
                  <span>Population: </span>
                  {country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Sub-Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Top lavel domain: </span>
                  {country.tld}
                </p>
              </div>
              <div className="back_btn">
                <NavLink to="/country">
                  <button className="btn btn-darken">Go Back</button>
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
