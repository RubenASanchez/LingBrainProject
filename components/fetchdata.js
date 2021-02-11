import { brainRegionsObject } from '../data/dataset.js';

let showInfo = document.getElementById('region-info-card').innerHTML = brainRegionsObject[0];

export { showInfo };