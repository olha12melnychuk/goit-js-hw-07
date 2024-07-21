console.log("Number of categories: ", document.querySelectorAll(".item").length);
const el = document.querySelectorAll("h2");


const elChild = document.querySelectorAll(".item ul");


el.forEach(function (item, index) {
  
  console.log(`Category: ${item.textContent}`);
  console.log(`Elements: ${elChild[index].children.length}`)
})










 
