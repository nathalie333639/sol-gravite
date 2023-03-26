// USE THE DATA.JS
import MOVIES from './data.js'



// DOMLOADED
window.addEventListener('DOMContentLoaded', main)



function main() {
  
  // 1. generate the movies from the database
  generateMovies()
  // 2. show the detail of movie that user click on
  const showDetailBtns = document.querySelectorAll('#showDetailBtn')

  // console.log(showDetailBtns)
  showDetailBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log(e.target.dataset.movie)
    })
  })
}


function generateMovies() {
  let displayMovies = MOVIES.map((movie) => {
    return `
    <div class="movie">
        <div class="movie-thumbnail">
          <img src="${movie.cover}" alt="">
        </div>
        <div class="movie-detail">
          <h4>${movie.title}</h4>
          <div class="movie-info">
            <p>
              <ion-icon name="calendar-number"></ion-icon>
              ${movie.releasedDate.toLocaleDateString()}
            </p>
            <p>
              <ion-icon name="alarm"></ion-icon>
              ${movie.duration}
            </p>
            <p>
              <ion-icon name="pricetag"></ion-icon>
              ${movie.category}
            </p>
          </div>
  
          <div class="btn-group">
            <button class="btn btn-main" id="showDetailBtn" data-movie="${movie.id}">SHOW DETAIL</button>
          </div>
  
        </div>
      </div>
    `
  })

  displayMovies = displayMovies.join("")

  const moviesWrapper = document.querySelector('.movies-wrapper')
  moviesWrapper.innerHTML = displayMovies


}