import "./App.css";

function App() {
  return (
    <body>
      <header className="">
        <div className="header_img">
          <section className="header_p_container">
            <img
              class="header_title"
              src="./pottery_for_palestine.png"
              alt="title drawn"
            />
            <p class="header_p">
              <b>100%</b> of each item’s price goes to the World Food Program’s
              Palestine fund, which has been declared an emergency.
            </p>
            <p class="header_p">
              Each <b>$100</b> donated provides around <b>135</b> emergency
              meals, focused primarily in Gaza but also supporting the West
              Bank.
            </p>
          </section>
        </div>
        <section className="subheader_container">
          <p class="subheader_p">
            Proof of donation will be uploaded on this website and posted on{" "}
            <a href="https://www.instagram.com/ayla_drawss/">ayla_drawss</a> on
            instagram.
          </p>
          <p class="subheader_p subheader_p_right">
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
          <p class="main_title_accent">a traditional embroidery style</p>
          <p class="main_article">
            Learn more at <br></br>
            <a href="https://www.tatreezandtea.com/">tatreezandtea</a>
            <br></br>and<br></br>
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
