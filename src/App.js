import "./styles.css";
import data from "./unfaelle.json";

export default function App() {
  const unfaelle = data; // Unfaelle ist ein Array mit Objekten aus der JSON Datei.

  const letzterUnfall = unfaelle[unfaelle.length - 1]; 

  console.log(letzterUnfall); 


  const letzterUnfallSchwere = `${letzterUnfall.id_unfall}:${letzterUnfall.schwere}`;

  console.log(letzterUnfallSchwere);


  const unfaelleNebenstrassen = unfaelle.filter((unfall) => unfall.strasseart === "Nebenstrasse");

  console.log(unfaelleNebenstrassen);

  
  const unfallVeloNov2015 = unfaelle.find((unfall) => unfall.monat === 11 && unfall.jahr === 2015 && unfall.fahrrd_bet === true);

  console.log(unfallVeloNov2015);



  return ( 
    <div className="App">
      <div></div>
      <div>{letzterUnfallSchwere}</div>
        <ol>
          {unfaelle.map((unfall) => (
            <li>{unfall.id_unfall}</li>
          ))}
        </ol>
    </div>
  );
}
