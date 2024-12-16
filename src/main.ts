


import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { Map as OlMap, View as OlView } from 'ol';
import { Tile as TileLayerType } from 'ol/layer';
import { OSM as OSMSource } from 'ol/source';

// Initialize the map
const map: OlMap = new Map({
  target: 'map', // ID of the HTML element where the map will render
  layers: [
    new TileLayer({
      source: new OSM() as OSMSource, // Define the OSM source type
    }) as TileLayerType,
  ],
  view: new View({
    center: [0, 0], // Center coordinates of the map
    zoom: 2, // Initial zoom level
  }) as OlView,
});
