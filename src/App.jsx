import "./App.css";

function App() {
  return (
    <body>
      <div className="original_wrapper">
        <header className="">
          <div className="header_img">
            <section className="header_p_container">
              <img
                class="header_title"
                src="./pottery_for_palestine.png"
                alt="title drawn"
              />
              <p class="header_p">
                <b>100%</b> of each item’s price goes to the World Food
                Program’s Palestine fund, which has been declared an emergency.
              </p>
              <p class="header_p">
                Each <b>$100</b> donated provides around <b>135</b> emergency
                meals, focused primarily in Gaza but also supporting the West
                Bank.
              </p>
              <p class="header_p header_p_bot">
                Proof of donation will be uploaded on this website and posted on{" "}
                <a
                  class="anchor_special"
                  href="https://www.instagram.com/ayla_drawss/"
                >
                  ayla_drawss
                </a>{" "}
                on instagram.
              </p>
              <p class="header_p header_p_bot">
                For more information or to donate yourself, visit:<br></br>
                <a
                  class="anchor_special"
                  href="https://www.wfp.org/emergencies/palestine-emergency"
                >
                  WFP’sPalestine page.
                </a>
              </p>
            </section>
          </div>
          <section className="subheader_container"></section>
        </header>

        <main class="">
          <section className="main_top">
            <p class="main_title">Inspired by Tatreez</p>
            <p class="main_title_accent">
              a traditional Palestinian embroidery style
            </p>
          </section>
          <div className="learn_container">
            <div class="main_text">
              Tatreez is a historical cross stitch style that has been practiced
              for centuries in Palestine. All definitions names, and patterns of
              the designs used here are sourced from&nbsp;
              <a href="https://www.tatreezandtea.com/" className="main_link">
                tatreezandtea.com
              </a>{" "}
              and&nbsp;
              <a href="https://tatreeztraditions.com/" className="main_link">
                tatreedtraditions.com
              </a>
              . To learn more and purchase your own palestinian tatreez, also
              see&nbsp;
              <a
                href="https://www.instagram.com/thetatreezcollective"
                className="main_link"
              >
                @thetatreezcollective
              </a>{" "}
              and&nbsp;
              <a
                href="https://www.instagram.com/tatreezbanatna"
                className="main_link"
              >
                @tatreezbanatna
              </a>{" "}
              on instagram.
            </div>
          </div>
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
      </div>
    </body>
  );
}

export default App;
