import { useState } from "react";
import "./App.css";

const countries = [
  {
    name: "India",
    code: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "United States",
    code: "US",
    cities: ["New York", "Los Angeles"],
  },
  {
    name: "United Kingdom",
    code: "UK",
    cities: ["London", "Manchester"],
  },
];

function App() {
  const [country, setCountry] = useState("");

  function changeCountry(e) {
    const selectedValue = e.target.value;
    const count = countries.find((ele) => ele.code === selectedValue);

    setCountry(count ? count.cities : "");
  }

  return (
    <>
      <div>
        <select id="country" onChange={changeCountry}>
          <option value="">Default</option>
          {countries.map((c, index) => (
            <option value={c.code} key={index}>
              {c.name}
            </option>
          ))}
        </select>
        {country && (
          <div>
            {country.map((ele) => (
              <p>{ele}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
