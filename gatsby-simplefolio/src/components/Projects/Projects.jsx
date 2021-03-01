import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>);
            
          })}
          <h1 className="section-title">Small Classroom projects</h1>
          <Carousel>
                  <Carousel.Item>
                        <img width={800} height={500} alt="900x500" src="https://i.ibb.co/YjmPpdk/Screen-Shot-2021-03-01-at-1-00-32-AM.png"/>
                        <Carousel.Caption style = {{"opacity": 0.9}} className = "bg-dark pt-10">
                            <h3>2048 Replica</h3>
                            <p>Comp 426 - Modern Programming Language Concepts (JQuery/CSS)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={800} height={500} alt="900x500" src="https://i.postimg.cc/rm4cXq0T/Screen-Shot-2020-02-24-at-5-36-52-PM.png"/>
                        <Carousel.Caption style = {{"opacity": 0.9}} className = "bg-dark pt-10">
                            <h3>Restaurant Site Template</h3>
                            <p>Comp 126 - Practical Web Design and Development for Everyone (HTML/CSS)</p>
                        </Carousel.Caption>
                    </Carousel.Item> 
                    <Carousel.Item>
                        <img width={800} height={500} alt="900x500" src="https://i.ibb.co/RPhMVT0/126.png"/>
                        <Carousel.Caption style = {{"opacity": 0.9}} className = "bg-dark pt-10">
                            <h3>Best Electronics Site Template</h3>
                            <p>Comp 126 - Practical Web Design and Development for Everyone (HTML/CSS)</p>
                        </Carousel.Caption>
                    </Carousel.Item>  
                    <Carousel.Item>
                        <img width={800} height={500} alt="900x500" src="https://i.postimg.cc/kgG0P7zH/Screen-Shot-2020-02-24-at-5-44-18-PM.png"/>
                        <Carousel.Caption style = {{"opacity": 0.9}} className = "bg-dark pt-10">
                            <h3>Conways Game of Life</h3>
                            <p>Comp 401 - Foundations of Programming (Java / MVC)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={500} height={500} alt="900x500" src="https://i.postimg.cc/44t4jQVc/Screen-Shot-2020-02-24-at-5-41-09-PM.png"/>
                        <Carousel.Caption style = {{"opacity": 0.9}} className = "bg-dark pt-10">
                            <h3>Connect 4</h3>
                            <p>Comp 401 - Foundations of Programming</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={500} height={500} alt="900x500" src="https://i.postimg.cc/J08ffZC3/Screen-Shot-2020-02-24-at-5-42-44-PM.png"/>
                        <Carousel.Caption style = {{"opacity": 0.9}} className = "bg-dark pt-10">
                            <h3>Othello / Reversi</h3>
                            <p>Comp 401 - Foundations of Programming </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
