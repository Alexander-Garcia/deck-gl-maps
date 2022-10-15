import DeckGL, { GeoJsonLayer } from 'deck.gl';
import { Map as StaticMap } from 'react-map-gl';
import data from '../data/iowaData.json';
import addPropsToData from '../config';

const initial = {
  longitude: -93.598022,
  latitude: 41.619549,
  zoom: 6,
  pitch: 0,
  bearing: 0,
};

function Map() {
  const formattedData = addPropsToData(data);
  const layer = new GeoJsonLayer({
    id: 'geojson-layer',
    data: formattedData,
    pickable: true,
    stroked: true,
    filled: false,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getLineColor: [0, 0, 0],
    getPointRadius: 100,
    getLineWidth: 0.5,
  });

  return (
    <DeckGL controller initialViewState={initial} layers={[layer]}>
      <StaticMap mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} mapStyle="mapbox://styles/mapbox/streets-v9" />
    </DeckGL>
  );
}

export default Map;
