import "./Login.css";

import { useState } from "react";
import authService from "../services/auth";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resposta = await authService.login(email,password);

      console.log("Login realizado.", resposta);

      localStorage.setItem("user", JSON.stringify(resposta));

      alert("Login realizado com suscesso!");
    } catch (error) {
      console.error("Erro no login:", error);
      alert("E-mail ou senha inválidos.");
    }
  };

  return (
    <div className="login-page">

      {/* LADO ESQUERDO */}
      <section className="login-left">

        <div className="brand">

          <div className="logo-placeholder">
            <span></span>
            <span></span>
          </div>

          <div className="brand-name">
            <h1>SMARTCARBO</h1>
            <p>PLANEJE • TREINE • EVOLUA</p>
          </div>

        </div>

        <div className="brand-text">
          <p>
            Saúde em cada escolha,
            <br />
            mais equilíbrio para o
            <br />
            seu dia a dia.
          </p>
        </div>

      </section>


      {/* LADO DIREITO */}
      <section className="login-right">

        <div className="login-container">

          <div className="login-title">
            <h2>Bem-vindo de volta!</h2>

            <p>
              Faça login para continuar sua jornada.
            </p>
          </div>


          {/* FORMULÁRIO */}
          <form className="login-form" onSubmit={handleLogin}>

            {/* E-MAIL */}
            <div className="form-group">

              <label htmlFor="email">
                E-mail
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                vlaue={email}
                onChange={(e) => setEmail(e.target.ariaValueMin)}
              />

            </div>


            {/* SENHA */}
            <div className="form-group">

              <label htmlFor="password">
                Senha
              </label>

              <div className="password-input">

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.vlaue)}
                />

                <button
                  type="button"
                  className="password-button"
                >
                  ◉
                </button>

              </div>

            </div>


            {/* LEMBRAR / ESQUECI */}
            <div className="login-options">

              <label className="remember-me">

                <input
                  type="checkbox"
                  id="remember"
                />

                <span>
                  Lembrar de mim
                </span>

              </label>

              <a href="#">
                Esqueci minha senha
              </a>

            </div>


            {/* ENTRAR */}
            <button
              type="submit"
              className="login-button"
            >
              Entrar
            </button>

          </form>


          {/* DIVISOR */}
          <div className="divider">

            <span></span>

            <p>ou continue com</p>

            <span></span>

          </div>


          {/* LOGIN SOCIAL */}
          <div className="social-login">

            <button
              type="button"
              className="social-button"
            >
              G
            </button>

            <button
              type="button"
              className="social-button"
            >
              
            </button>

            <button
              type="button"
              className="social-button"
            >
              ⊞
            </button>

          </div>


          {/* CADASTRO */}
          <div className="register">

            <span>
              Ainda não tem uma conta?
            </span>

            <a href="/cadastro">
              Criar conta
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Login;