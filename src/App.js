import logo from './logo.svg';
import styles from './App.module.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';


function App() {
  const [countries, setCountries] = useState([])
  const getAllCountries = async () => {
    let response = await axios.get("https://restcountries.com/v3.1/allsa")
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.data
        }
        throw new Error('API Failed')
      })
      .catch((e) => {
        console.log('Milan ka error : ' + e)
        return null
      });
    if (response !== null) setCountries(response);
  }

  useEffect(() => {
    getAllCountries();
  }, [])
  return (
    <div className={styles.container}>

      {/* <div> */}
      {countries.map((val) => {
        return (
          <div className={styles.card}>
            <img src={val.flags.png} alt={val.flags.alt} className={styles.cardImage}/>
            <p className={styles.cardText}>{val.name.official}</p>
          </div>
        )
      })}
      {/* <img src="https://flagcdn.com/w320/ad.png" alt="The flag of Andorra features three equal vertical bands of blue, yellow and red, with the coat of arms of Andorra centered in the yellow band." />
          <p className={styles.cardText}>Principality of Andorra</p> */}
      {/* </div> */}

    </div>
  );
}

export default App;
