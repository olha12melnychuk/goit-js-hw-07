const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createGallery = pictureParms => {
  const galleryItem = document.createElement("li");

  galleryItem.classList.add(`gallery-item`);
  const galleryImg = document.createElement("img");
  galleryImg.src = pictureParms.url
  galleryImg.alt = pictureParms.alt;

  galleryItem.append(galleryImg);

  return galleryItem;
}



const galleryArr = images.map(imgParam => createGallery(imgParam));

const galleryList = document.querySelector('.gallery');
console.log(galleryList)

galleryList.append(...galleryArr);

