const loadCategories = () => {
    const url = "https://fakestoreapi.com/products/categories"
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data))
}

const displayCategories = (categories) => {

    const categoryContainer = document.getElementById("categories-buttons");
    categoryContainer.innerHTML = ''
    categories.forEach(category => {

        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `<button class="btn btn-outline btn-primary category-btn" > ${category}</button>`
        btnDiv.addEventListener("click", () => {
            loadProducts(category)
        })
        categoryContainer.append(btnDiv);
    });
}

const loadProducts = (category) => {
    console.log(category);
    
 const url = `https://fakestoreapi.com/products/category/${category}/`
 fetch(url)
 .then(res => res.json())
 .then(data => displayProducts(data))

}

const displayProducts = (products) =>{
    const productContainer = document.getElementById('product-container');
        productContainer.innerHTML = ''
 
    products.forEach(product=>{
        const productList = document.createElement('div')
        productList.innerHTML = `<div class="product-card"> <div class="product-img"> <img src="${product.image}"> <div>
        </div>`
        productContainer.append(productList)
        
    })
    

}

loadCategories();