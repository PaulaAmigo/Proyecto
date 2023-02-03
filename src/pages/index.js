export const index = () => {
  const container = document.createElement("div");
  const html = `
    <div>
    <header>soy header</header>
    <body>
    <h1>soy el inicio </h1>
    <button class="btnSearch" >buscar</button>
    <button class="btnForm" >solicitud</button>
    </body>
    </div>
    `;
  //funsion del boton
  //const btnSearch = container.querySelector(".btnSearch");
  //btnSearch.addEventListener("click", () => {
  //console.log("Buscar");
  //});

  //const btnForm = container.querySelector(".btnForm");
  //btnForm.addEventListener("click", () => {
  //console.log("Solicitud");
  // });
  container.innerHTML = html;
  return container;
};
