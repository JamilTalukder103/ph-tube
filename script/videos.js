const loadData = () => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`)
        .then(res => res.json())
        .then(data => loadDisplayData(data.categories))
}
// load category videos
const loadCategoryVideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => loadDisplayVideos(data.category))
}

const loadDisplayData = (categories) => {
    const categoriesContainer = document.getElementById('categories')
    categories.forEach(item => {
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
         <button onclick="loadCategoryVideos(${item.category_id})" class='btn bg-slate-300'>
             ${item.category}
         </button>
        `;
        categoriesContainer.appendChild(buttonContainer)
    });
}


// load videos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => loadDisplayVideos(data.videos))
}
const loadDisplayVideos = (videos) => {
    const videosContainer = document.getElementById('videos-container')
    videosContainer.innerHTML = '';
    videos.forEach(video => {
        console.log(video)
        const { thumbnail, title, authors } = video
        const card = document.createElement('div');
        card.classList = 'card card-compact bg-base-100'
        card.innerHTML = `
            <figure>
                <img class="h-60 rounded-xl" src="${thumbnail}" />
            </figure>
            <div class="card-body ">
             <div class="flex gap-4">
                <div>
                    <img class="w-10 rounded-full" src="${authors[0].profile_picture}"/>
                </div> 
               <div>
                    <h2 class="card-title">${title}</h2>
                    <p>${authors[0].profile_name}</p>
             </div>
            </div>
        `
        videosContainer.appendChild(card)
    })
}
loadData()
loadVideos()