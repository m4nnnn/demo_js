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
const categoryFilter = document.getElementById('category-filter')
const colorFilter = document.getElementById('color-filter')
const applyBtn = document.getElementById('apply')


// affichage des produits
function displayProducts(list) {
    productList.innerHTML = '';
    if (list.length === 0) {
        productList.innerHTML = '<li>Aucun produit trouvé</li>'
        return
    }
    list.forEach(p => {
        const li = document.createElement('li')
        li.textContent = `${p.name} - ${p.category} - ${p.color}`
        productList.appendChild(li)
    })
}

// recherche + tri
function searchAndSort() {
    const keyword = searchInput.value.toLowerCase()
    const category = categoryFilter.value
    const color = colorFilter.value
    let result = products

    if (category !== 'tous') {
        result = result.filter(p => p.category === category)
    }

    if (color !== 'tous') {
        result = result.filter(p => p.color === color)
    }

    if (keyword) {
        result = result.filter(p => p.name.toLowerCase().includes(keyword))
    }

    displayProducts(result)
}

searchInput.addEventListener('input', searchAndSort)
applyBtn.addEventListener('click', searchAndSort)

displayProducts(products)




