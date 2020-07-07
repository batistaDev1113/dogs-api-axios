// listen for input change and call function to create images tags
const selected = document.getElementById('list');

// grab where the images lives
let img = document.getElementById('dogImages');

let number = '';
selected.addEventListener('change', () => {
  // remove all images present
  removeImages(img);

  // assign new value passed from select
  number = selected.value;

  if (number === 'select') {
    console.log('is a match');
    return;
  }
  add(selected.value);
});

// make http request to API
function add(val) {
  axios
    .get(`https://dog.ceo/api/breeds/image/random/${val}`)
    .then((res) => addUrl(res.data.message))
    .catch((err) => console.log(err));
}

const addUrl = (url) => {
  let count = 1;
  url.map((ing) => {
    let newImg = document.createElement('img');
    newImg.src = ing;
    newImg.setAttribute('alt', `Dog Image ${count}`);
    console.log(newImg);
    img.appendChild(newImg);
    count++;
  });
};

//remove all images before making new call to add new ones
const removeImages = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
