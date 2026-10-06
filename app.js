const fruitContainer = document.getElementById("fruitContainer");

const fruitList = [
    {
    name: "Apple",
    price: 1.99
},
    {
    name: "Banana",
    price: 0.99
},

]

fruitList.forEach((fruitItem) =>{
    let fruit = document.createElement("div");
    fruit.classList.add("fruitBox")

    const fruitName = document.createElement("div");
    fruitName.innerText = fruitItem.name

    const fruitPrice = document.createElement("input");
    fruitPrice.type = "number";
    fruitPrice.value = fruitItem.price;

    const del = document.createElement("button");
    del.innerText = "Delete";
    del.addEventListener("click", () => {
        fruitContainer.removeChild(fruit);
    })

    fruit.appendChild(fruitName);
    fruit.appendChild(fruitPrice);
    fruit.appendChild(del);

    fruitContainer.appendChild(fruit)
})

// function renderProducts() {
//     fruitContainer.innerHTML = "";
    
//     const mapped = fruitList.map((fruitItem) => {
//         renderProduct(fruitItem);
//     });
// }