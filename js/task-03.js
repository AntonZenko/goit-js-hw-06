const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function createGalleryMarkup() {
  const cardListRef = document.querySelector('.gallery');
  const imgMarkup = images.map(image => `<li><img class = "imgItem" src = ${image.url} alt = "${image.alt}" width=300 /></li>`).join('');

  cardListRef.insertAdjacentHTML('afterbegin', imgMarkup);
  
  cardListRef.style.listStyle = "none";
  cardListRef.style.display = "flex";
  cardListRef.style.justifyContent = "center";
  cardListRef.style.padding = "0";

  const imgItems = document.querySelectorAll('.imgItem');
  const imgLi = document.querySelectorAll('.gallery li');

  for (const key of imgLi) {
    key.style.marginRight = '20px';
  }

  for (const key of imgItems) {
    key.style.height = '100%';
    key.style.width = '100%';
    key.style.objectFit = 'cover';
  }
}
createGalleryMarkup();
