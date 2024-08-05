import Header from "../components/Header.jsx";
import "../index.css";
import HeroBanner from "../components/HeroBanner.jsx";
import Feature from "../components/Feature.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <section className={"features"}>
        <h2 className="sr-only">Features</h2>
        <Feature
          title={"You are our #1 priority"}
          description={
            "Need to talk to a representative? You can get in touch through our\n" +
            "            24/7 chat or through a phone call in less than 5 minutes."
          }
          icon={"Chat"}
          iconSrc={"/src/assets/img/icon-chat.png"}
        />
        <Feature
          title={"More savings means higher rates"}
          description={
            "The more you save with us, the higher your interest rate will be!"
          }
          icon={"Chat"}
          iconSrc={"/src/assets/img/icon-money.png"}
        />
        <Feature
          title={"Security you can trust"}
          description={
            "We use top of the line encryption to make sure your data and money is always safe"
          }
          icon={"Chat"}
          iconSrc={"/src/assets/img/icon-security.png"}
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
