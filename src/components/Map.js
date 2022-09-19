import DeckGL from 'deck.gl';
import { Map as StaticMap } from 'react-map-gl';

const initial = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

function Map() {
  return (
    <DeckGL controller initialViewState={initial}>
      <StaticMap mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} mapStyle="mapbox://styles/mapbox/streets-v9" />
    </DeckGL>
  );
}

export default Map;
