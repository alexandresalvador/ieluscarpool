<!-- <template>
  <div>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/account-home">
          <img
            src="../assets/LogoIC.png"
            alt=""
            width="200"
            height="100"
            class="d-inline-block align-text-top"
          />
        </a>
        <li class="nav">
          <a class="nav-link active" aria-current="page">
            <h1>Olá, Visitante</h1>
            
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
        <div class="header">
             <h1 class="text-title">Chat Ielusc Carpool </h1>
        </div>
        <br>

        <div class="row m-0 justify-content-between">
          <div id="chat" class="col-12 bg-light rounded"></div>
          <div class="col-3 p-0">
          </div>
        </div>
        <hr>

        <div class="footer">
            <div class="mb-3" id="user-input">
                <label for="username" class="form-label">
                  <b>Digite o seu @Username:</b>
                </label>
                <input
                  id="username"
                  type="text"
                  class="form-control"
                  placeholder="Usuário"
                />
              </div>
              <div class="mb-3" id="msg-input">
                <label for="exampleFormControlTextarea1" class="form-label">
                  <b>Digite a sua mensagem:</b>
                </label>
                <textarea
                  id="mensagem"
                  class="form-control"
                  rows="2"
                  placeholder="Insira uma mensagem"
                ></textarea>
              </div>
              <div class="d-flex justify-content-center">
                <button
                  onclick="enviar()"
                  id="btnEnviar"
                  type="button"
                  class="btn btn-secondary btn-lg"
                >
                  Enviar
                </button>
              </div>
              <br>
              <br>
       </div>
      </div>

  </div>
</template>



  <script src="/socket.io/socket.io.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    <script>
       
        function enviar() {
            const userField = document.getElementById('username');
            const messageField = document.getElementById('mensagem');
            const usuario = userField.value;
            const mensagem = messageField.value;
            const dia = new Date().toLocaleDateString();
            const hora = new Date().toLocaleTimeString().slice(0, 5);
            socket.emit('iniciaChat', { usuario, mensagem, dia, hora });
        }
        socket.on('showMessage', (data) => {
            console.log("Resultado: ", data);
            const chatScreen = document.getElementById('chat')
            const col = document.createElement('div');
        col.classList.add(
          "bg-msg",
          "col",
          "p-1",
          "m-2"
        );
        const cores = [
          "text-primary",
          "text-secondary",
          "text-dark",         
          "text-danger",
          "text-light",    
        ];
        // As cores dos nomes de cada nome de usuário diferente serão geradas randômicamente.
        const randomElement = 
        cores[Math.floor(Math.random() * cores.length)];
            col.innerHTML = 
            `<p class="m-0"> 
            User : <b class="${randomElement}">
            @${data.usuario}</b> 
            <i class="m-0"> - 
            ${data.dia} - 
            ${data.hora}</i><br/> 
            Mensagem : <b> ${data.mensagem}</b> 
            </p>`;
            chatScreen.append(col);
        }); 
</script> -->
