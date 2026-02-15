import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/UI/CountryCard";
import { nanoid } from "nanoid";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res);
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="country-section container">
      <ul className="grid grid-four-cols country-container">
        {countries.map((country) => {
          return <CountryCard country={country} key={nanoid()} />;
        })}
      </ul>
    </section>
  );
};
