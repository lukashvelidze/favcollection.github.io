// Array to store movies
let movies = [];

// Reference to form and table body elements
const movieForm = document.getElementById("movieForm");
const movieTableBody = document.getElementById("movieTable").getElementsByTagName("tbody")[0];

// Event listener for form submission
movieForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    // Get values from input fields
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const year = document.getElementById("year").value;

    // Create a new movie object and add it to the array
    const newMovie = { title, director, year };
    movies.push(newMovie);

    // Update the table with the new movie
    addMovieToTable(newMovie);

    // Clear the form fields
    movieForm.reset();
});

// Function to add a movie to the table
function addMovieToTable(movie) {
    // Create a new row and cells
    const row = document.createElement("tr");
    const titleCell = document.createElement("td");
    const directorCell = document.createElement("td");
    const yearCell = document.createElement("td");

    // Set text content for each cell
    titleCell.textContent = movie.title;
    directorCell.textContent = movie.director;
    yearCell.textContent = movie.year;

    // Append cells to the row
    row.appendChild(titleCell);
    row.appendChild(directorCell);
    row.appendChild(yearCell);

    // Append the row to the table body
    movieTableBody.appendChild(row);
}
