//exportamos la funcion login
export const login = () => {
  //creamos la  variable container como un div
  const container = document.createElement("div");
  //creamos la variable html para crear html
  const html = `
  
  <div class="titulo">
          <h1 class="welcome">Bienvenido</h1>
          <h2 class="index">Inicia tu sesión</h2>
        
        
        <div class="singIn">
          
            <h2 Class="word">Usuario</h2>
            <input type="text" class="boxOne"></input> 
            
          
            <h2 class="word">Contraseña</h2>
            <input type="password" class="boxTwo"></input>
                    
        </div>
        <button id="btnLogin" class="btnLogin">ingresa</button>
  
  </div>
  
  `;

  //a coontainer le agregamos la variable html y retornamos el container con el html.
  container.innerHTML = html;
  //funcion del botón
  const btnLogin = container.querySelector(".btnLogin");
  btnLogin.addEventListener("click", () => {
    console.log("hola");
  });
  return container;
};
