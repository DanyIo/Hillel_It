const API = "7106edeb";
const movieTitleInputField = document.getElementById("name");
const mainDiv = document.getElementById("main");
const childDiv = document.createElement("div");
mainDiv.append(childDiv);
const buttonSearchFilm = document.getElementById("addbutton");
const navbarList = document.getElementsByClassName("pagination-container");
const navbar = navbarList[0];
let counterForMoreInfoButton = 0;
let counterForSearchButton = 0;
let currentPage = 1;
let startPoint = currentPage;
function getMovieInfo(movieTitle, page) {
  fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=${API}&page=${page}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.Error) {
        movieTitleInputField.value = json.Error;
        return 0;
      }
      let totalNUmberOfPages = +Math.ceil(+json.totalResults / 10);
      displayFilms(json);
      createPagination(totalNUmberOfPages);
      childDiv.addEventListener("click", (event) => {
        let divIndex = 0;
        for (let id in json.Search) {
          if (event.target.id === json.Search[id].imdbID) {
            const div = document.getElementById(`${divIndex}`);
            if (counterForMoreInfoButton === 0) {
              fetch(
                `http://www.omdbapi.com/?i=${event.target.id}&apikey=${API}`,
                {
                  method: "GET",
                }
              )
                .then((addres) => addres.json())
                .then((addInfo) => {
                  const actors = document.createElement("p");
                  actors.setAttribute("id", "actors");
                  actors.innerHTML = `Actors: ${addInfo.Actors}`;
                  div.appendChild(actors);
                  const imdbVotes = document.createElement("p");
                  imdbVotes.setAttribute("id", "imdbVotes");
                  imdbVotes.innerHTML = `imdbVotes: ${addInfo.imdbVotes}`;
                  div.appendChild(imdbVotes);
                  const country = document.createElement("p");
                  country.setAttribute("id", "country");
                  country.innerHTML = `Country: ${addInfo.Country}`;
                  div.appendChild(country);
                });
              counterForMoreInfoButton++;
            } else {
              const actors = document.getElementById("actors");
              const imdbVotes = document.getElementById("imdbVotes");
              const country = document.getElementById("country");
              actors.remove();
              imdbVotes.remove();
              country.remove();
              counterForMoreInfoButton--;
            }
          }
          divIndex++;
        }
      });
    })
    .catch((err) => console.error("error:", err));
}
function createPagination(pagesNumber) {
  if (currentPage > 1) {
    startPoint = currentPage - 1;
  } else {
    startPoint = currentPage;
  }
  for (let i = startPoint; i <= currentPage + 5 && i <= pagesNumber; i++) {
    const paginationStart = document.createElement("button");
    paginationStart.id = i;
    paginationStart.innerHTML = i;
    paginationStart.className = "paginationButton";
    navbar.append(paginationStart);
  }
  actualButton();
}
function actualButton() {
  document.querySelectorAll(".paginationButton").forEach((element) => {
    if (element.id === currentPage) {
      element.setAttribute("style", "background-color: yellow;");
    }
  });
}
function refresh() {
  if (counterForSearchButton === 1) {
    document.querySelectorAll(".div").forEach((el) => el.remove());
    counterForSearchButton--;
    document.querySelectorAll(".paginationButton").forEach((el) => el.remove());
  }
}
function displayFilms(movies) {
  for (const index in movies.Search) {
    const div = document.createElement("div");
    div.setAttribute("id", +[index]);
    div.className = "div";
    childDiv.appendChild(div);
    if (movies.Search[index].Poster.length > 4) {
      const img = document.createElement("img");
      img.setAttribute("src", movies.Search[index].Poster);
      div.append(img);
    }
    const title = document.createElement("p");
    title.innerHTML = movies.Search[index].Title;
    div.append(title);
    const year = document.createElement("p");
    year.innerHTML = `Year: ${movies.Search[index].Year}`;
    div.append(year);
    const moreInfo = document.createElement("button");
    moreInfo.setAttribute("id", `${movies.Search[index].imdbID}`);
    moreInfo.className = "moreInfo";
    moreInfo.innerHTML = "View more";
    div.append(moreInfo);
  }
  counterForSearchButton++;
}
buttonSearchFilm.addEventListener("click", () => {
  refresh();
  if (movieTitleInputField.value !== "") {
    getMovieInfo(movieTitleInputField.value, 1);
  }
});
navbar.addEventListener("click", (event) => {
  refresh();
  getMovieInfo(movieTitleInputField.value, +event.target.id);
  currentPage = event.target.id;
});
