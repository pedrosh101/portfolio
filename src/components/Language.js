import React, { useState } from "react";
import i18next from "i18next";
import "./Main.css"



const languages = [
  {
    code: "pt",
    name: "PT",
    country_code: "pt",
  },
  {
    code: "en",
    name: "EN",
    country_code: "gb",
  },
];


function Language() {
  
  const [style, setStyle] = useState(0);
  
  const changeStyle = (index) => {   
    setStyle(index);
  };

  return (
    <>
      <ul className="lang">
        {languages.map(({ code, name, country_code }, i) => ( 
          <li key={country_code}>
            <h4 onClick={() => {i18next.changeLanguage(code); changeStyle(i)}} className={style === i ? "cont" : "cont2"}>{name}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Language;
