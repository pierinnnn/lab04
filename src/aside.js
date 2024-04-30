const Aside = () => {
    return <aside>
     <form>
    <img class="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoz6kooEoVx01ee4kOmoEzSB91jIDL7l4NQ&s" alt="" width="420px" height="230px"></img>
    <h1 class="h3 mb-3 fw-normal">Regístrate <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg></h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
      <label for="floatingInput">Correo Electrónico</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
      <label for="floatingPassword">Contraseña</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"></input>
      <label class="form-check-label" for="flexCheckDefault">
        Acepto los términos y condiciones
      </label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Registrar</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2024</p>
  </form>
    </aside>;
}

export default Aside;