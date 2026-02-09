const products = [
    {name: "Pomme", category: "fruits", color: "rouge"},
    {name: "Banane", category: "fruits", color: "jaune"},
    {name: "Carotte", category: "légumes", color: "orange"},
    {name: "Brocoli", category: "légumes", color: "vert"},
    {name: "Kiwi", category: "fruits", color: "vert"},
    {name: "Tomate", category: "légumes", color: "rouge"},
    {name: "Prune", category: "fruits", color: "violet"},
    {name: "Aubergine", category: "légumes", color: "violet"}
];

const searchInput = document.getElementById('search')
const productList = document.getElementById('product-list')


// affichage des produits
function displayProducts(list) {
    productList.innerHTML = '';
    if (list.length === 0) {
        productList.innerHTML = '<li>Aucun produit trouvé</li>'
        return
    }
    list.forEach(p => {
        const li = document.createElement('li')
        li.textContent = p.name;
        productList.appendChild(li)
    })
}

// recherche
function searchProducts() {
    const keyword = searchInput.value.toLowerCase()
    const result = products.filter(p =>
        p.name.toLowerCase().includes(keyword)
    )
    displayProducts(result)
}

searchInput.addEventListener('input', searchProducts)

displayProducts(products)