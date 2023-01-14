import { useEffect, useState } from "react";

import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

function App() {

  const [series, setSeries] = useState([]);
  const [showSubscription, setShowSubscription] = useState(false);

const loadSeries = async() => {
  const response = await fetch("https://demoapi.com/api/series/howimetyourmother");
  const series = await response.json();
  setSeries(series);
  console.log(series);
}

useEffect(()=>{
  loadSeries();
  setTimeout(()=> setShowSubscription(true), 10000);
}, [])

const onSubscribed = () => {
  setTimeout(()=>showSubscription(false), 5000);
}


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
      {showSubscription && 
      <Subscription
        onSubscribed={onSubscribed}
      />}
    </div>
  );
}

export default App;
