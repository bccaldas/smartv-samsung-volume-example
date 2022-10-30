import "./App.css";
import CurrentVolume from "./Components/CurrentVolume";
import SmartTvIcon from "./Components/SmartTvIcon";
import VolumeButton from "./Components/VolumeButton";

import { useState } from "react";

function App() {
  const [volume, setVolume] = useState(0);

  return (
    <div className="App">
      <div style={{display: 'inline-block'}}>
        <button onClick={() => volume < 100 ? setVolume(volume + 1) : null}>Aumentar</button>
        <button onClick={() => volume > 0 ? setVolume(volume - 1) : null}>Diminuir</button>
      </div>
      
      <VolumeButton volume={volume + 1 <= 100 ? volume + 1 : ''} />

      <div className="container">
        <SmartTvIcon />
        <CurrentVolume volume={volume} />
      </div>

      <VolumeButton volume={volume - 1 >= 0 ? volume - 1 : ''} />
    </div>
  );
}

export default App;
