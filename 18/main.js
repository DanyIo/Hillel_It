const API_Key = "7106edeb";
const movieTitleInputField = document.getElementById("name");
const mainDiv = document.getElementById("main");
const childDiv = document.createElement("div");
mainDiv.append(childDiv);
const buttonSearchFilm = document.getElementById("addbutton");
const navbarList = document.getElementsByClassName("pagination-container");
const navbar = navbarList[0];
let currentPage = 1;
let page = 0;
let counterForSearchButton = 0;
let startPoint = 0;
async function getMovieInfo(movieTitle, page) {
  const response = await axios.get(
    `http://www.omdbapi.com/?s=${movieTitle}&apikey=${API_Key}&page=${page}`
  );
  const json = response.data;
  if (json.Error) {
    movieTitleInputField.value = json.Error;
    return 0;
  }
  let totalNUmberOfPages = +Math.ceil(+json.totalResults / 10);
  displayFilms(json);
  createPagination(totalNUmberOfPages);
}
function createPagination(pagesNumber) {
  if (currentPage == 1) {
    startPoint = currentPage;
  } else {
    startPoint = --currentPage;
  }
  for (let i = +startPoint; i <= +startPoint + 5 && i <= pagesNumber; i++) {
    const paginationStart = document.createElement("button");
    paginationStart.id = i;
    paginationStart.innerHTML = i;
    paginationStart.className = "paginationButton";
    navbar.append(paginationStart);
  }
}
function refresh() {
  if (counterForSearchButton === 1) {
    document.querySelectorAll(".div").forEach((el) => el.remove());
    document.querySelectorAll(".paginationButton").forEach((el) => el.remove());
    counterForSearchButton--;
  }
}
async function displayFilms(movies) {
  for (const index in movies.Search) {
    const imdbID = `${movies.Search[index].imdbID}`;
    const div = document.createElement("div");
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
    moreInfo.setAttribute("id", `${imdbID}`);
    moreInfo.setAttribute("clickedBefore", false);
    moreInfo.className = "moreInfo";
    moreInfo.innerHTML = "View more";
    div.append(moreInfo);
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_Key}`,
      {
        method: "GET",
      }
    );
    const addInfo = response.data;
    const actors = document.createElement("p");
    actors.innerHTML = `Actors: ${addInfo.Actors}`;
    const imdbVotes = document.createElement("p");
    imdbVotes.innerHTML = `imdbVotes: ${addInfo.imdbVotes}`;
    const country = document.createElement("p");
    country.innerHTML = `Country: ${addInfo.Country}`;
    [actors, country, imdbVotes, country].forEach((element) =>
      element.setAttribute("class", `additionalInfo_${imdbID}`)
    );
    div.appendChild(actors);
    div.appendChild(imdbVotes);
    div.appendChild(country);
    document
      .querySelectorAll(`.additionalInfo_${imdbID}`)
      .forEach((element) => element.setAttribute("style", "display:none;"));
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
  if (event.target.getAttribute("class") === "paginationButton") {
    currentPage = event.target.id;
    refresh();
    getMovieInfo(movieTitleInputField.value, +event.target.id);
  }
});
childDiv.addEventListener("click", (event) => {
  if (event.target.getAttribute("class") === "moreInfo") {
    const additionaInfo = document.querySelectorAll(
      `.additionalInfo_${event.target.id}`
    );
    if (event.target.getAttribute("clickedBefore") === "false") {
      additionaInfo.forEach((element) =>
        element.setAttribute("style", "display:block;")
      );
      event.target.setAttribute("clickedBefore", true);
    } else {
      additionaInfo.forEach((element) =>
        element.setAttribute("style", "display:none;")
      );
      event.target.setAttribute("clickedBefore", false);
    }
  }
});
