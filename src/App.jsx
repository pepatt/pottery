import "./App.css";

function App() {
  return (
    <body>
      <header className="">
        <div className="header_img"></div>
        <section className="header_container">
          <h1 class="header_p">
            100% of each item’s price goes to the World Food Program’s Palestine
            fund, which has been declared an emergency.
          </h1>
          <p class="header_p">
            Each $100 donated provides around 135 emergency meals, focused
            primarily in Gaza but also supporting the West Bank.
          </p>
          <p class="header_p">
            Proof of donation will be uploaded on this website and posted on{" "}
            <a href="https://www.instagram.com/ayla_drawss/">ayla_drawss</a> on
            instagram.
          </p>
          <p class="header_p">
            For more information or to donate yourself, visit&nbsp;
            <a href="https://www.wfp.org/emergencies/palestine-emergency">
              WFP’sPalestine page.
            </a>
          </p>
        </section>
      </header>

      <main class="">
        <section className="main_top">
          <p class="main_title">Inspired by Palestinian Tatreez</p>
          <p>a traditional embroidery style</p>
          <p class="main_article">
            Learn more at&nbsp;
            <a href="https://www.tatreezandtea.com/">tatreezandtea</a>
            &ensp;and&nbsp;
            <a href="https://tatreeztraditions.com/">tatreeztraditions</a>
          </p>
        </section>
      </main>

      <footer>
        <div class="main_card">
          <img class="card_img" src="./coffee_bean_full.png" alt="card_img" />
        </div>
        <div class="main_card">
          <img class="card_img" src="./moon_full.png" alt="card_img" />
        </div>
        <div class="main_card">
          <img class="card_img" src="./rose_full.png" alt="card_img" />
        </div>
      </footer>
    </body>
  );
}

export default App;
