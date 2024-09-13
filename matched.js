const products = [
    { id: 1, name: 'Vivo Phone', price: 32000 },
    { id: 2, name: 'Oppo phone', price: 34000 },
    { id: 3, name: 'Asus laptop', price: 22000 },
    { id: 4, name: 'dell Laptop', price: 62000 },
    { id: 5, name: 'xiaomi Phone', price: 2000 },
    { id: 6, name: 'htc phone', price: 18000 },
]

// function matchedByName(products, search) {
//     const matched = [];
//     for (const product of products) {
//         if (product.name.toLowerCase().includes(search.toLowerCase())) {
//             matched.push(product)
//         }
//     }
//     return matched;
// }

// const result = matchedByName(products, 'LAPTop');
// console.log(result);


function matchedByPrice(products) {
    let matchedPrice = products[0].price
    for (const product of products) {
        if (product.price < matchedPrice) {
            matchedPrice = product.price
        }
    }
    return matchedPrice
}
const result = matchedByPrice(products);
console.log(result);