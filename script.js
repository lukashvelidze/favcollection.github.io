let movies = [];

const movieForm = document.getElementById("movieForm");
const movieTableBody = document.getElementById("movieTable").getElementsByTagName("tbody")[0];

movieForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const year = document.getElementById("year").value;

    const newMovie = { title, director, year };
    movies.push(newMovie);

    addMovieToTable(newMovie);
    movieForm.reset();
});

function addMovieToTable(movie) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${movie.title}</td>
        <td>${movie.director}</td>
        <td>${movie.year}</td>
    `;

    movieTableBody.appendChild(row);
}
