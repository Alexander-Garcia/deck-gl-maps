import DeckGL, { GeoJsonLayer } from 'deck.gl';
import { Map as StaticMap } from 'react-map-gl';
import data from '../data/iowaData.json';

const initial = {
  longitude: -93.598022,
  latitude: 41.619549,
  zoom: 6,
  pitch: 0,
  bearing: 0,
};

const layer = new GeoJsonLayer({
  id: 'geojson-layer',
  data,
  pickable: true,
  stroked: true,
  filled: false,
  lineWidthScale: 20,
  lineWidthMinPixels: 2,
  getLineColor: [255, 149, 200],
  getPointRadius: 100,
  getLineWidth: 1,
});

function Map() {
  return (
    <DeckGL controller initialViewState={initial} layers={[layer]}>
      <StaticMap mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} mapStyle="mapbox://styles/mapbox/streets-v9" />
    </DeckGL>
  );
}

export default Map;
