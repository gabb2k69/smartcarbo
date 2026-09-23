import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import pantera from "../assets/smartcarbo-pantera.png";
import logoNome from "../assets/smartcarbo-nome.png";
import slogan from "../assets/smartcarbo-slogan.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [errors, setErrors] = useState({});

  function clearError(field) {
    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: "",
      }));
    }
  }

  function validateLogin() {
    const newErrors = {};

    if (email.trim() === "") {
      newErrors.email = "Digite seu e-mail.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
    ) {
      newErrors.email = "Digite um e-mail válido.";
    }

    if (password === "") {
      newErrors.password = "Digite sua senha.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const valid = validateLogin();

    if (!valid) {
      return;
    }

    /*
      POR ENQUANTO:

      O backend ainda não está conectado.
      Quando a API estiver pronta, este trecho
      será substituído pela chamada para o backend.
    */

    alert("Login realizado com sucesso!");

    console.log("Dados do login:", {
      email,
      password,
      remember,
    });
  }

  return (
    <div className="login-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="login-header">

        <Link
          to="/login"
          className="login-header-brand"
        >
          <img
            src={pantera}
            alt="SmartCarbo"
            className="login-header-panther"
          />

          <img
            src={logoNome}
            alt="SmartCarbo"
            className="login-header-logo"
          />
        </Link>

        <img
          src={slogan}
          alt="Disciplina nutre resultados"
          className="login-header-slogan"
        />

      </header>

      {/* =========================================
          CONTEÚDO
      ========================================= */}

      <main className="login-content">

        <section className="login-container">

          {/* =====================================
              LADO DA MARCA
          ===================================== */}

          <div className="login-brand-area">

            <div className="brand-decoration brand-decoration-one"></div>
            <div className="brand-decoration brand-decoration-two"></div>

            <img
              src={pantera}
              alt="Pantera SmartCarbo"
              className="login-panther"
            />

            <img
              src={logoNome}
              alt="SmartCarbo"
              className="login-brand-logo"
            />

            <img
              src={slogan}
              alt="Disciplina nutre resultados"
              className="login-brand-slogan"
            />

            <div className="brand-line"></div>

            <p className="login-brand-text">
              Sua alimentação, seus objetivos,
              seus resultados.
            </p>

          </div>

          {/* =====================================
              FORMULÁRIO
          ===================================== */}

          <div className="login-form-area">

            <div className="login-title">

              <span className="login-label">
                SMARTCARBO
              </span>

              <h1>
                Bem-vindo de volta
              </h1>

              <p>
                Entre na sua conta para continuar
                sua jornada.
              </p>

            </div>

            <form
              className="login-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* =================================
                  E-MAIL
              ================================= */}

              <div className="login-form-group">

                <label htmlFor="login-email">
                  E-mail
                </label>

                <input
                  id="login-email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  autoComplete="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    clearError("email");
                  }}
                  className={
                    errors.email
                      ? "login-input-error"
                      : ""
                  }
                />

                {errors.email && (
                  <p className="login-error">
                    {errors.email}
                  </p>
                )}

              </div>

              {/* =================================
                  SENHA
              ================================= */}

              <div className="login-form-group">

                <div className="login-password-label">

                  <label htmlFor="login-password">
                    Senha
                  </label>

                  <a
                    href="#"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    Esqueci minha senha
                  </a>

                </div>

                <div className="login-password-field">

                  <input
                    id="login-password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Digite sua senha"
                    value={password}
                    autoComplete="current-password"
                    onChange={(event) => {
                      setPassword(
                        event.target.value
                      );

                      clearError("password");
                    }}
                    className={
                      errors.password
                        ? "login-input-error"
                        : ""
                    }
                  />

                  <button
                    type="button"
                    className="login-password-button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >
                    {showPassword
                      ? "Ocultar"
                      : "Mostrar"}
                  </button>

                </div>

                {errors.password && (
                  <p className="login-error">
                    {errors.password}
                  </p>
                )}

              </div>

              {/* =================================
                  LEMBRAR DE MIM
              ================================= */}

              <div className="login-remember">

                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(event) =>
                    setRemember(
                      event.target.checked
                    )
                  }
                />

                <label htmlFor="remember">
                  Lembrar de mim
                </label>

              </div>

              {/* =================================
                  BOTÃO
              ================================= */}

              <button
                type="submit"
                className="login-button"
              >
                <span>Entrar</span>
                <span className="login-button-arrow">
                  →
                </span>
              </button>

            </form>

            {/* =================================
                CADASTRO
            ================================= */}

            <div className="login-register">

              <span>
                Ainda não possui uma conta?
              </span>

              <Link to="/register">
                Criar conta
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="login-footer">

        <span>
          © 2026 SmartCarbo
        </span>

        <span>
          Disciplina nutre resultados.
        </span>

      </footer>

    </div>
  );
}

export default Login;