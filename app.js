// console.log("Hello World!");
let div = document.querySelector(".productColumn")

fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then(data => {
    console.log(data);
    data.products.map((item) => {
        div.innerHTML += `
        <div class="card">
        <img src="${item.images}" width="100%" />
        <h3>Product : ${item.title}</h3>
        <h4>Product : ${item.category}</h4>
        <p>${item.description}</p>
        <h5>Stocks : ${item.stock}</h5>
        <h4>Price : $${item.price}</h4>
        <button class="seeMore" onclick="moreBtn(${item.id})">See More...</button>
        </div>
        `
    })
})
.catch(error => console.error("Here's A new Error Found"))


function moreBtn(id) {
    window.location = "./singleProduct.html"
    localStorage.setItem("id" , id)
}