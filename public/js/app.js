document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    fetch("http://127.0.0.1:3000/api/products")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            if (data.length === 0) {
                productList.innerHTML = "<p>No products available</p>";
            } else {
                productList.innerHTML = data
                    .map(
                        (product) =>
                            `<div>
                                <h2>${product.name}</h2>
                                <p>Price: $${product.price}</p>
                            </div>`
                    )
                    .join("");
            }
        })
        .catch((error) => {
            const productList = document.getElementById("product-list");
            productList.innerHTML = `<p>Error loading products: ${error.message}</p>`;
            console.error("Error fetching products:", error);
        });
});
