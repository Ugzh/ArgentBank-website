import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useRef } from "react";
export default function SignIn() {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current[0].value);
    console.log(formRef.current[1].value);
    console.log(formRef.current[2].value);
  };
  return (
    <body>
      <Header></Header>
      <main className={"main bg-dark"}>
        <section className={"sign-in-content"}>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form ref={formRef} onClick={(event) => handleSubmit(event)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
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
