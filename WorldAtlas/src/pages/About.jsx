import countryData from "../api/countryData.json";
import { Card } from "../components/UI/Card";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="country_card_section">
          <h1 className="about_heading">
            Here are the Interesting Facts<br></br> we're proud of
          </h1>
          <div className="cards grid grid-three-cols">
            {countryData.map((countryInfo) => {
              return <Card key={countryInfo.id} countryInfo={countryInfo} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
