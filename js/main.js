// file to import all js files into

let requestURL = 'https://researchscientist.github.io/LingBrainProject/data/dataset.json'
let request = new XMLHttpRequest();

request.open('GET',requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const brainRegiondata = request.response;
  populateHeader(brainRegiondata);
  showRegionData(brainRegiondata);
  console.log(`loaded json ${brainRegiondata}`);
}

function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = obj['name'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = 'Location ' + obj['location'] + ' // Function ' + obj['function'];
  header.appendChild(myPara);
}
