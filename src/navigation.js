searchFormBtn.addEventListener('click', () => {
  location.hash = `#search=${searchFormInput.value.trim()}`;
});


trendingBtn.addEventListener ("click", ()=>{
  location.hash = "#trends";
})

arrowBtn.addEventListener ("click", ()=>{
  // location.hash = "#home";
  location.hash = window.history.back();
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function smoothscroll(){
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
       window.requestAnimationFrame(smoothscroll);
       window.scrollTo (0,currentScroll - (currentScroll/5));
  }
};

function navigator() {
  console.log({ location });
  
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else {
    homePage();
  }

  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  // window.scrollTo(0, 0);

  smoothscroll();
}


function homePage() {
  console.log('Home!!');

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.add("inactive");
  headerTitle.classList.remove("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");
  
  trendingPreviewSection.classList.remove("inactive");
  categoriesPreviewSection.classList.remove("inactive");
  genericSection.classList.add("inactive");
  movieDetailSection.classList.add("inactive");

  getTrendingMoviesPreview();
  getCategoriesPreview();
}

function categoriesPage() {
  console.log('categories!!');

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive"); 
  searchForm.classList.add("inactive");
  
  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");

  // ['#category', 'id-name']
  const [_, categoryData] = location.hash.split('=');
  console.log(categoryData);
  console.log(_);
  const [categoryId, categoryName] = categoryData.split('-');
  const newName2 = decodeURI(categoryName);


  headerCategoryTitle.innerHTML = newName2;
  
  getMoviesByCategory(categoryId);
  
}

function movieDetailsPage() {
  console.log('Movie!!');

  headerSection.classList.add("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.add("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive"); 
  searchForm.classList.add("inactive");
  
  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.add("inactive");
  movieDetailSection.classList.remove("inactive");

   // ['#movie', '234567']
   const [_, movieId] = location.hash.split('=');
   getMovieById(movieId);

}

function searchPage() {
  console.log('Search!!');

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive"); 
  searchForm.classList.remove("inactive");
  
  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");

   // ['#search', 'platzi']
   const [_, query] = location.hash.split('=');
   getMoviesBySearch(query);
}

function trendsPage() {
  console.log('TRENDS!!');

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive"); 
  searchForm.classList.add("inactive");
  
  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");

  headerCategoryTitle.innerHTML = 'Tendencias';

  getTrendingMovies();

}