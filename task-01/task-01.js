const categoriesRef = document.querySelector('#categories');

console.log("Number of categories:", categoriesRef.children.length);

const itemRef = document.querySelectorAll('.item h2');
const itemUlRef = document.querySelectorAll('.item ul');

itemRef.forEach((element) => {
    console.log("Category: " + element.textContent + "\nElements: " + element.nextElementSibling.childElementCount)
});