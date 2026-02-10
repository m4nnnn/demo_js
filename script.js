// const products = [
//     {name: "Pomme", category: "fruits", color: "rouge"},
//     {name: "Banane", category: "fruits", color: "jaune"},
//     {name: "Carotte", category: "légumes", color: "orange"},
//     {name: "Brocoli", category: "légumes", color: "vert"},
//     {name: "Kiwi", category: "fruits", color: "vert"},
//     {name: "Tomate", category: "légumes", color: "rouge"},
//     {name: "Prune", category: "fruits", color: "violet"},
//     {name: "Aubergine", category: "légumes", color: "violet"}
// ];

// const searchInput = document.getElementById('search')
// const productList = document.getElementById('product-list')
// const categoryFilter = document.getElementById('category-filter')
// const colorFilter = document.getElementById('color-filter')
// const applyBtn = document.getElementById('apply')


// // affichage des produits
// function displayProducts(list) {
//     productList.innerHTML = '';
//     if (list.length === 0) {
//         productList.innerHTML = '<li>Aucun produit trouvé</li>'
//         return
//     }
//     list.forEach(p => {
//         const li = document.createElement('li')
//         li.textContent = `${p.name} - ${p.category} - ${p.color}`
//         productList.appendChild(li)
//     })
// }

// // recherche + tri
// function searchAndSort() {
//     const keyword = searchInput.value.toLowerCase()
//     const category = categoryFilter.value
//     const color = colorFilter.value
//     let result = products

//     if (category !== 'tous') {
//         result = result.filter(p => p.category === category)
//     }

//     if (color !== 'tous') {
//         result = result.filter(p => p.color === color)
//     }

//     if (keyword) {
//         result = result.filter(p => p.name.toLowerCase().includes(keyword))
//     }

//     displayProducts(result)
// }

// searchInput.addEventListener('input', searchAndSort)
// applyBtn.addEventListener('click', searchAndSort)

// displayProducts(products)


//PAGINATION

const text = document.getElementById('text')
const pagination = document.getElementById('pagination')


//on récupère tout le texte initial
const fullText = text.textContent.trim()

//on découpe en mots pour éviter de couper les mots au milieu
const words = fullText.split(/\s+/)

//nb de mots par page
const wordsPerPage = 300

const totalPages = Math.ceil(words.length / wordsPerPage)
let currentPage = 1


// fonction qui affiche la page précise du texte
function showPage(page) {
    if (page < 1) page = 1
    if (page > totalPages) page = totalPages

    currentPage = page

    const start = (currentPage - 1) * wordsPerPage
    const end = start + wordsPerPage
    const pageWords = words.slice(start, end)

    text.textContent = pageWords.join(' ')

    renderPagination()
}

function renderPagination() {
    pagination.innerHTML = ''

    // btn précedent
    const prevBtn = document.createElement('button')
    prevBtn.textContent = '← Précédent'
    prevBtn.disabled = currentPage === 1
    prevBtn.onclick = () => showPage(currentPage - 1)
    pagination.appendChild(prevBtn)


    // éviter afficher toutes les numéros des pages
    const info = document.createElement('span')
    info.textContent = `Page ${currentPage} / ${totalPages}`
    pagination.appendChild(info)

    // btn page suivante
    const nextBtn = document.createElement('button')
    nextBtn.textContent = 'Suivant →'
    nextBtn.disabled = currentPage === totalPages
    nextBtn.onclick = () => showPage(currentPage + 1)
    pagination.appendChild(nextBtn)
}

showPage(1)