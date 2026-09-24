import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  print("testing")

  return ( 
    <div class = "body">
      <div class = "void"></div>
      <div class = "article_wrapper">
        <article class = "article_header">
          <img class = "article_img" src ="/pot.jpg" alt="title img" />
          <p class = "article_title">
            Pottery for palestine (this will behandwritten?)
          </p>
          <div class = "p_wrapper">
            <p class = "p1">
              100% of each item’s price goes to the World Food Program’s Palestine fund, which has been declared an emergency. 
            </p>
            <p class = "p2">
              Each $100 donated provides around 135 emergency meals, focused primarily in Gaza but also supporting the West Bank.
            </p>
            <p class = "p3">
              Proof of donation will be uploaded on this website and posted on <a class = "button" href="https://www.instagram.com/ayla_drawss/">ayla_drawss</a> on instagram.
            </p>
            <p class = "p4">
              For more information or to donate yourself, visit&nbsp; 
              <a class = "button" href="https://www.wfp.org/emergencies/palestine-emergency">WFP’sPalestine page.</a>
            </p>
          </div>
        </article> 
        <article class = "article_body">
          <p class = "body_header_green">
            Inspired by Palestinian Tatreez, a traditional embroidery style 

          </p>
          <p class = "body_header">Learn more at&nbsp;
            <a class = "button" href="https://www.tatreezandtea.com/">tatreezandtea</a>
            &ensp;and&nbsp; 
              <a class = "button" href="https://tatreeztraditions.com/">tatreeztraditions</a>
          </p>

          <div class = "body_total_wrapper">
            <div class = "cubes_wrapper">
              <div class = "top_cube"></div>
              <div class = "bot_cube"></div>
            </div>
            <article class = "body_wrapper">
            <p class = "body_title body_header_green">Coffee Bean Motif</p>
            <p class = "body_article">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ea.
            </p>
            </article>
          </div>

          <div class = "body_total_wrapper body_total_wrapper_two">
            <article class = "body_wrapper">
            <p class = "body_title body_header_green">Damascus Rose Motif</p>
            <p class = "body_article">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ea.
            </p>
            </article>
             <div class = "cubes_wrapper cubes_wrapper_L">
              <div class = "top_cube top_cube_L"></div>
              <div class = "bot_cube bot_cube_L"></div>
            </div>
         </div>


          <div class = "body_total_wrapper">
            <div class = "cubes_wrapper">
              <div class = "top_cube"></div>
              <div class = "bot_cube"></div>
            </div>
            <article class = "body_wrapper">
            <p class = "body_title body_header_green">Other Motif</p>
            <p class = "body_article">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, ea.
            </p>
            </article>
          </div>

        </article>
      </div>
      <div class = "void"></div>
    </div>
  )
}

export default App
