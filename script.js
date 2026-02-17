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

const displayProducts = (products) => {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''

    products.forEach(product => {
        const productList = document.createElement('div')
        productList.innerHTML = `<div class="product-cards"><div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="Product">

                    </div>
                    <div class="card-tags">
                        <span class="category">${product.category}</span>
                        <span class="rating">${product.rating.rate}</span>
                    </div>

                    <div class="card-content">
                        <div class="card-info">
                            <h3>${product.title}</h3>
                            <p class="price">Price $ ${product.price}</p>
                        </div>

                        <div class="card-buttons">
                            <button id="modalshow"onclick="loadDetails(${product.id})" class="btn-outline">Details</button>
                            <button class="btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
                </div>`
        productContainer.append(productList)

    })


}

const loadDetails = (id) => {
    console.log("Hi clicked", id);
    const url = `https://fakestoreapi.com/products/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data))

}

const showDetails = (data) => {
    console.log(data);


    const detailContainer = document.createElement('dialog')
    detailContainer.className = "modal modal-bottom sm:modal-middle";
    detailContainer.innerHTML = `<div class="modal-box">
        <h3 class="text-lg font-bold">${data.title}</h3>
        <p class="py-2">${data.description}</p>
        <p class="py-2">Price: $${data.price}</p>
        <div class="modal-action">
          <button class="btn" id="closeModalBtn">Close</button>
        </div>
      </div>`
    document.body.appendChild(detailContainer);


    detailContainer.showModal();
    document.getElementById("closeModalBtn").addEventListener("click", () => {
        detailContainer.close();
        detailContainer.remove();
    });

}

loadCategories();