let page = 1;
let btnBefore = document
  .getElementById("btnBefore")
  .addEventListener("click", () => {
    if (page > 1) {
      page--;
      loadMovies();
    }
  });
let btnAfter = document
  .getElementById("btnAfter")
  .addEventListener("click", () => {
    if (page < 1000) {
      page++;
      loadMovies();
    }
  });

const loadMovies = async () => {
  try {
    const HTML_RESPONSE = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=44ddcc57d192f60e586f358e87812972&language =es-MX&page=${page}`
    );
    console.log(HTML_RESPONSE);

    if (HTML_RESPONSE.status === 200) {
      const data = await HTML_RESPONSE.json();
      let movies = "";
      data.results.map((pelicula) => {
        movies += `
        <div clas="movie" style="
        float: left;
        margin: 1em;
        padding: 1em;
        width: 300px;
        height: 400px;
        
        ">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" style=" 
            width: 200px;
            height: 300px;
            display: block;
            margin: auto;   
            ">
            <h3 class"titulo" style="
            text-align: center;
            color: #fff;
        "> ${pelicula.title} </h3>
        </div>
        
            `;
      });
      document.getElementById("movies").innerHTML = movies;
    }
  } catch (err) {
    console.log(err);
  }
};

loadMovies();
