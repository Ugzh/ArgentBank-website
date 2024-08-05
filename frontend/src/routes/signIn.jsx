import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useRef, useState } from "react";

export default function SignIn() {
  const formRef = useRef();
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Essayer de faire la methode plus proprement, redux ?
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formRef.current[0].value,
        password: formRef.current[1].value,
      }),
    }).then((response) => {
      if (response.ok) {
        if (rememberMe) {
          // Logique pour local storage
          // else logique pour session storage, a voir avec Redux en rentrant
        }
      } else window.alert("Failed to login");
    });
  };
  return (
    <body>
      <Header></Header>
      <main className={"main bg-dark"}>
        <section className={"sign-in-content"}>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(event) => {
                  setRememberMe(event.target.checked);
                }}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
      <Footer></Footer>
    </body>
  );
}
