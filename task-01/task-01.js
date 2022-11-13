const categoriesRef = document.querySelector('#categories');

console.log("Number of categories:", categoriesRef.children.length);

const itemRef = document.querySelectorAll('.item h2');
const itemUlRef = document.querySelectorAll('.item ul');

// itemRef.forEach(element => console.log("Category:", element.textContent));
// itemUlRef.forEach(element => console.log("Elements:", element.children.length))

itemRef.forEach(element => console.log("Category:", element.textContent,  "Elements: ", element.nextElementSibling.childElementCount))