import React, { Component } from 'react';
import './App.css';
import UnderConstruction from "./UnderConstruction.js";
import Header from './Header.js';
import News from './News.js';
import Particles from 'react-particles-js';
import Sidebar from './Sidebar.js';
import Topbar from './Topbar.js';
import 'tachyons';
import { bubble as Menu } from 'react-burger-menu';
import sal from 'sal.js'
import '../node_modules/sal.js/dist/sal.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import animateScrollTo from 'animated-scroll-to';
import ProjectList from './ProjectList.js';
import Modal from './Modal.js';
import Float from './Float.js';
import Chart from './Chart.js';
import RenderDialog from './RenderDialog.js';


sal();
AOS.init();

const particlesOptions = {
      "particles": {
          "number": {
              "value": 80
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  };

class App extends Component {
  render() {
    return (
        <div >
          <Particles className="particles" params={particlesOptions}/>
          <div class="float">
            <Float />
          </div>
          
          <div id="outer-container">
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ '30%' }>
              <a id="home" className="menu-item" href="mailto:bensonsanga@hotmail.com">Mail</a>
              <a id="about" className="menu-item" href="https://www.instagram.com/ymcmbennie/">Instagram</a>
              <a id="contact" className="menu-item" href="https://www.behance.net/bensonsang34cd">Behance</a>
              <a id="contact" className="menu-item" href="https://www.facebook.com/benson.sanga?ref=bookmarks">Facebook</a>
            </Menu>
            <main id="page-wrap">
              <div class="nav flex justify-around animated fadeInLeft ml6 float2">
                <Topbar />
              </div>
              <div className="bodyFake">
                <section class="w-100 h-100 section">
                  <Header />
                </section>
                <section data-aos="fade-up" class="w-100 h-100 section"  data-aos-delay="400">
                  <Chart />
                </section>
                <section data-aos="fade-up" class="w-100 h-100 section"  data-aos-delay="400">
                  <UnderConstruction />
                </section>
                <ProjectList />
                <section ref="01" data-aos="fade-up" class="w-100 h-100 section" data-aos-delay="100">
                 <RenderDialog />
                 <News />
                </section>
              </div>
            </main>
          </div>
        </div>
      
    );
  }
}

export default App;
