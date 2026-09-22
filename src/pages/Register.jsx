import "./Register.css";

function Register() {
  return (
    <div className="register-page">

      <header className="register-header">
        <h1>SMART CARBO</h1>
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
          <h2>Crie sua conta</h2>
          <p>Comece sua jornada com o Smart Carbo.</p>
        </section>

      </main>

    </div>
  );
}

export default Register;