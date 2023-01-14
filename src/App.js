import { useEffect, useState } from "react";

import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";

function App() {

  const [series, setSeries] = useState([]);

const loadSeries = async() => {
  const response = await fetch("https://demoapi.com/api/series/howimetyourmother");
  const series = await response.json();
  setTimeout(setSeries(series), 5000);
  console.log(series);
}

useEffect(()=>{
  loadSeries();
}, [])


  return (
    <div className="App">
      <h1>Series Api</h1>
      {series.length===0 && <LoadingMask/>}
      {series.length>0 && series.map((s) =>(
        <Character
          key={s.name}
          name={s.name}
          details={s.details}
        />

      )
      )}  
    </div>
  );
}

export default App;
