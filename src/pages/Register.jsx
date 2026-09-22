import "./Register.css";

function Register() {
  return (
    <div className="register-page">

      <header className="register-header">
  <div className="logo-placeholder">□</div>
  <h1>SMARTCARBO</h1>
</header>

      <main className="register-content">

        <aside className="register-sidebar">
          <h2>Cadastro</h2>

          <div className="register-step active">
            <span>●</span>
            <p>Dados da conta</p>
          </div>

          <div className="register-step">
            <span>○</span>
            <p>Informações de saúde</p>
          </div>

          <div className="register-step">
            <span>○</span>
            <p>Objetivo</p>
          </div>

          <div className="register-step">
            <span>○</span>
            <p>Preferências</p>
          </div>
        </aside>

      <section className="register-form-area">

  <div className="register-form-header">
    <div>
      <h2>Crie sua conta</h2>
      <p>Comece sua jornada para uma vida mais saudável.</p>
    </div>

    <span>
      Já tem uma conta? <a href="#">Fazer login</a>
    </span>
  </div>

  <form className="register-form">

    <div className="form-group">
      <label htmlFor="name">Nome completo</label>
      <input
        type="text"
        id="name"
        placeholder="Seu nome"
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        placeholder="seuemail@exemplo.com"
      />
    </div>

    <div className="form-group">
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        placeholder="••••••••"
      />
    </div>

    <div className="form-group">
      <label htmlFor="confirmPassword">Confirmar senha</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="••••••••"
      />
    </div>

    <div className="terms">
      <input type="checkbox" id="terms" />

      <label htmlFor="terms">
        Concordo com os <a href="#">Termos de Uso</a> e{" "}
        <a href="#">Política de Privacidade</a>
      </label>
    </div>

    <div className="form-button">
      <button type="submit">
        Continuar →
      </button>
    </div>

  </form>

</section>
      </main>

    </div>
  );
}

export default Register;