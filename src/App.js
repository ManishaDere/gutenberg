import React from 'react';
import './App.css';

function App() {
  return (
    <div id="App">
      <div id="gutenberg-intro">
        <section className="gutenberg-intro__info container">
          <h1>Gutenberg Project</h1>
          <p>A social cataloging website that allows you to freely search its database of books, annotations, and reviews.</p>
        </section>
      </div>
      <div id="gutenberg-btns">
        <section className="container">
          <div className="row">
            <div className="col-sm-6">
              <button type="button" className="genre-card">
                <div className="btn-images__wrapper">
                  <img src="./images/Fiction.svg" className="btn-images" />
                </div>
                <div className="btn-text">fiction</div>
                <div className="btn-images__wrapper">
                <img src="./images/Next.svg" className="btn-images" />
                </div>
              </button>
              <button type="button" className="genre-card">
                <div className="btn-images__wrapper">
                  <img src="./images/Drama.svg" className="btn-images" />
                </div>
                <div className="btn-text">drama</div>
                <div className="btn-images__wrapper">
                <img src="./images/Next.svg" className="btn-images" />
                </div>
              </button>
              <button type="button" className="genre-card">
                <div className="btn-images__wrapper">
                  <img src="./images/Humour.svg" className="btn-images" />
                </div>
                <div className="btn-text">Humour</div>
                <div className="btn-images__wrapper">
                <img src="./images/Next.svg" className="btn-images" />
                </div>
              </button>
              <button type="button" className="genre-card">
                <div className="btn-images__wrapper">
                  <img src="./images/Politics.svg" className="btn-images" />
                </div>
                <div className="btn-text">Politics</div>
                <div className="btn-images__wrapper">
                <img src="./images/Next.svg" className="btn-images" />
                </div>
              </button>
            </div>
            <div className="col-sm-6">
              <button type="button" className="genre-card">
                <div className="btn-images__wrapper">
                  <img src="./images/Philosophy.svg" className="btn-images" />
                </div>
                <div className="btn-text">Philosophy</div>
                <div className="btn-images__wrapper">
                <img src="./images/Next.svg" className="btn-images" />
                </div>
              </button>
              <button type="button" className="genre-card">
                <div className="btn-images__wrapper">
                  <img src="./images/History.svg" className="btn-images" />
                </div>
                <div className="btn-text">history</div>
                <div className="btn-images__wrapper">
                <img src="./images/Next.svg" className="btn-images" />
                </div>
              </button>
              <button type="button" className="genre-card">
                <div className="btn-images__wrapper">
                  <img src="./images/Adventure.svg" className="btn-images" />
                </div>
                <div className="btn-text">adventure</div>
                <div className="btn-images__wrapper">
                <img src="./images/Next.svg" className="btn-images" />
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
