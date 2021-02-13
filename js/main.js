import { brainRegionsObject } from '../data/dataset.js';
import { spin } from '../components/settings.js';
//import { showInfo } from '../components/fetchdata.js';

if('serviceWorker' in navigator) {
  console.log('browser can use sw');
  navigator.serviceWorker.register('sw.js').then(registration => {
    console.log('sw register successful',registration);
  })
  .catch(error => {
    console.log('sw register error',error);
  });
}


console.log('region info card index brainRegions 0 name');

const name = brainRegionsObject.brainRegions[0].name;
const namecard = document.getElementById('name');
namecard.textContent = name;

const location = brainRegionsObject.brainRegions[0].location;
const locationcard = document.getElementById('location');
locationcard.textContent = location;

const functions = brainRegionsObject.brainRegions[0].function;
const functioncard = document.getElementById('function');
functioncard.textContent = functions;

// file to import all js files into
//let requestURL = 'https://researchscientist.github.io/LingBrainProject/data/dataset.json'
//let request = new XMLHttpRequest();

/*
request.open('GET',requestURL);
request.responseType = 'json';
console.log('request sent');
request.send();
*/



/*
request.onload = function() {
  const brainRegiondata = request.response;
  populateHeader(brainRegiondata);
  //showRegionData(brainRegiondata);
  console.log(`loaded json ${brainRegiondata}`);
}

const header = document.querySelector('header');

function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = obj['name'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = 'Location ' + obj['location'] + ' // Function ' + obj['function'];
  header.appendChild(myPara);
}
*/