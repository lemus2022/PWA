const container = document.querySelector(".container")

const imgs = [
  { name: "Rick Sanchez", image: "images/rick.png" },
  { name: "Morty Smith", image: "images/morty.png" },
  { name: "Summer Smith", image: "images/summer.png" },
  { name: "Beth Smith", image: "images/beth.png" },
  { name: "Jerry Smith", image: "images/jerry.png" },
  { name: "Abadango Cluster Princess", image: "images/abadango.png" },
  { name: "Abradolf Lincler", image: "images/abradolf.png" },
  { name: "Adjudicator Rick", image: "images/adjudicator.png" },
  { name: "Agency Director", image: "images/director.png" },
  { name: "Alan Rails", image: "images/alan.png" },
]

const showImgs= () => {
    let output = ""
    imgs.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Details</a>
                </div>
                `)
    )
    container.innerHTML = output
}
  
document.addEventListener("DOMContentLoaded", showImgs);

