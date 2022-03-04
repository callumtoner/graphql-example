const products = [{
    id: 'red shoes',
    description: 'red shoe', 
    price: 42.12,
    reviews: []
}, {
    id: 'blue jeans',
    description: 'blue jeans',
    price: 55.55,
    reviews: []
}]

function getAllProducts() {
    return products; 
}
function getProductByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max; 
    })
}
function getProductById(id) {
    return products.find((product) => {
        return product.id === id; //returns furst product with that id 
    })
}
function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    };
    products.push(newProduct); 
    return newProduct;
}
function addNewProductReview(id, rating, comment) {
    const matchedProduct = products.getProductById(id); 
    if (matchedProduct) {
        const newReview = {
            rating,
            comment,
        }
        matchedProduct.reviews.push(newReview); 

        return newReview;
    }
}

module.exports = {
    getAllProducts,
    getProductByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
}