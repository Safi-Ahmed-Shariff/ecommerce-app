exports.getProducts = (req, res) => {
    const products = [
        { id: 1, name: "Famous Hat", price: 100,image: "E:\Project\ecommerce-app\public\images\hat.jpeg" },
        { id: 2, name: "Comfy Shoe", price: 200, image: "E:\Project\ecommerce-app\public\images\shoe.jpeg" },
    ];
    res.json(products);
};
