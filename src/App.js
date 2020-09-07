import React from 'react';
import './App.css';
import { MAPBOX_CONFIG, MAPBOX_STYLES } from './const.js';
import Map from './Map.js'

function App() {
  return (
    <div className="App">
      <Map
        config={MAPBOX_CONFIG}
        style={MAPBOX_STYLES}/>
    </div>
  );
}

export default App;
