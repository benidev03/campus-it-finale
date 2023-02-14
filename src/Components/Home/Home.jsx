import React from 'react';
import './home.css';

function Home() {
    return (
        <section className="home">
            <div className="sectionContainer container">
                
                <div className="homeText">

                    <h1 className="title">
                    Pianifica I Tuoi Studi In Italia Con Campus IT
                    </h1>

                    <p className="subTitle">
                    Andare a studiare nella tua università preferita 
                    rispettando i requisiti!
                    </p>

                    <button className="btn">
                        <a href="#">Esplora Subito</a>
                    </button>
                </div>

                <div className="homeCard grid">

                    <div className="universityDiv">
                        <label htmlFor="university">Università</label>
                        <input type="text" placeholder="Università preferita" />
                    </div>

                    <div className="courseDiv">
                        <label htmlFor="course">Corso</label>
                        <input type="text" placeholder="Corso di studio" />
                    </div>

                    <div className="cityDiv">
                        <label htmlFor="city">Città</label>
                        <input type="text" placeholder="Città" />
                    </div>

                    <button className="btn">
                        Ricerca
                    </button>
                </div>

            </div>
            
        </section>
    );
}

export default Home;