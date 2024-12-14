exports.getProducts = (req, res) => {
    const products = [
        { id: 1, name: "Product A", price: 100 },
        { id: 2, name: "Product B", price: 200 },
    ];
    res.json(products);
};
