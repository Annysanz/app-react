
import React from "react";
// import ReactDom from "react-dom";
// import "./Home.css";
import angelis from '../../assets/img/angelis.jpeg';
import p1 from '../../assets/img/p1.png';
import p2 from '../../assets/img/p2.png';
import p3 from '../../assets/img/p3.png';
import c1 from '../../assets/img/c1.png';
import c2 from '../../assets/img/c2.png';
import c3 from '../../assets/img/c3.png';
import c4 from '../../assets/img/c4.png';
import c5 from '../../assets/img/c5.png';

const Home = () => {

    return (
        <>
            <div id="container" className="container-fluid">
                <div className="row text-sm-start" id="img">
                    <a href="index.html">
                        <img src={angelis} className="img-fluid rounded-circle" alt="A profile photo o myself" height="70px" width="70px" />
                    </a>
                </div>
                <br />
                <div id="header" className="text-sm-start ">
                    <h1>Angelis Kadiski Sánchez Rodríguez</h1>
                    <h2 className="font-weight-light">Business Manager</h2>
                    <h2 className="font-weight-light">Sobre mí</h2>
                    <hr />
                    <p>Gerente de restaurante con experiencia, eficiente y
                        experta en los aspectos de la gestión de restaurantes.
                        Con varios años de experiencia en el sector y amplios
                        conocimientos en la gestión del personal y de las
                        funciones de los establecimientos de restauración.
                        Equipada con un conjunto de competencias diversas y
                        prometedoras que me permiten crear relaciones de
                        equipo positivas, encaminadas a un perfecto servicio al
                        cliente. Apasionada por el sector de la restauración, y
                        deseosa de aportar mis años de experiencia y
                        crecimiento a un establecimiento en auge.</p>
                    <a href="#form">¡Contáctame!</a>
                </div>
                <hr />
                <div id="projects" className="d-flex flex-row justify-content-space-center alig-items-center">
                    <div id="project1" className="col-xs-4">
                        <div className="text-sm-center">
                            <img src={p1} className="img-thumbnail" alt="A profile photo o myself" height="500px" />
                        </div>
                        <h3 className="text-center">Project1</h3>
                        <p className="text-center">
                            This project is suposed
                            to be an e-comerce, that
                            you can easily jump in
                            section to section to see
                            alll the stuff related with
                            motorcycles the site has
                            to offer.
                        </p>
                        <a href="../Proyecto-1-Portfolio/about.html">
                            <p className="text-center">Sobre mí</p>
                        </a>
                    </div>
                    <div id="project2" className="col-xs-4">
                        <div className="text-center" id="img">
                            <img src={p2} className="img-thumbnail" alt="A profile photo o myself" height="500px" />
                        </div>
                        <h3 className="text-center">Project2</h3>
                        <p className="text-center">This project was one of
                            my first responsive web
                            design projects and it
                            has a bunch to do with a
                            company managment.
                            It's simple a web site I
                            made to develop my skills.
                        </p>
                        <a href="#">
                            <p className="text-center">See All</p>
                        </a>
                    </div>
                    <div id="project3" className="col-xs-4">
                        <div className="text-center" id="img">
                            <img src={p3} className="img-thumbnail" alt="A profile photo o myself" height="500px" />
                        </div>
                        <h3 className="text-center">Project3</h3>
                        <p className="text-center">
                            This one project, is the most
                            difficut one by far, because
                            it has technologies
                            like: css, html, javascript, react.
                            So we can say that is a
                            front-end project.
                        </p>
                        <a href="#">
                            <p className="text-center">See All</p>
                        </a>
                    </div>
                </div>
                <h3 className="">Concepts</h3>
                <div id="galery" className="row">
                    <div id="concept1" className="col-sm-6 col-md-4 col-lg-4">
                        <figure>
                            <img src={c1} className="img-thumbnail grayscale" />
                            <figcaption>Netflix form</figcaption>
                        </figure>
                    </div>
                    <div id="concept2" className="col-sm-6 col-md-4 col-lg-4">
                        <figure>
                            <img src={c2} className="img-thumbnail grayscale" />
                            <figcaption>Socrates tribute</figcaption>
                        </figure>
                    </div>
                    <div id="concept3" className="col-sm-6 col-md-4 col-lg-4">
                        <figure>
                            <img src={c3} className="img-thumbnail grayscale" />
                            <figcaption>Portfolio(first attempt)</figcaption>
                        </figure>
                    </div>
                    <div id="concept4" className="col-sm-6 col-md-4 col-lg-4">
                        <figure>
                            <img src={c4} className="img-thumbnail grayscale" />
                            <figcaption>Solar Flex Web</figcaption>
                        </figure>
                    </div>
                    <div id="concept5" className="col-sm-6 col-md-4 col-lg-4">
                        <figure>
                            <img src={c5} className="img-thumbnail grayscale" />
                            <figcaption>Fruit Web-Page</figcaption>
                        </figure>
                    </div>
                </div>
                <section id="experience">
                    <h3>Experience</h3>
                    <br /><br />
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h4>Introduction to Web development I</h4>
                            <p>Google Activate</p>
                            <p>June 2020- July2020</p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h4>Introduction to Web development II</h4>
                            <p>Google Activate</p>
                            <p>July2020</p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h4>HTML 5 course</h4>
                            <p>Solo Learn</p>
                            <p>Octuber 2020</p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h4>CSS 3 course</h4>
                            <p>Solo Learn</p>
                            <p>December 2020</p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h4>Responsive web-design</h4>
                            <p>Free Code Camp</p>
                            <p>November 2021</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;