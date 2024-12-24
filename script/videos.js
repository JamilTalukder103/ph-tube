const loadData = () => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`)
        .then(res => res.json())
        .then(data => loadDisplayData(data.categories))
}

const loadDisplayData = (categories) => {
    const categoriesContainer = document.getElementById('categories')
    categories.forEach(item => {
        const button = document.createElement('button');
        button.classList = 'btn bg-slate-200';
        button.innerText = item.category;
        categoriesContainer.appendChild(button)
    });
}

// load videos
loadData()