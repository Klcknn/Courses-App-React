import "../node_modules/bulma/css/bulma.css";  
import './App.css';
import Course  from './Course';
import React from "./images/React_JS.png";
import Angular from "./images/Angular.png";
import Javascript from "./images/Javascript.png";
import HtmlCss from "./images/Html_and_Css.jpeg"; 

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            My Courses
          </p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course 
                title="Angular"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea cupiditate voluptas sit possimus est, similique quae sint dicta repellat perspiciatis cum eligendi sequi quos repellendus!"
                img={React}
                content_img="Angular Resmi"  
              />
            </div>
            <div className="column">
              <Course 
                title="React"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui praesentium quibusdam eligendi, modi quod! Harum incidunt aspernatur repellendus adipisci"
                img={Angular}
                content_img="React Resmi"  
              />
            </div>
            <div className="column">
                <Course 
                  title="Javascript"
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea cupiditate voluptas sit possimus est, similique quae sint dicta repellat perspiciatis cum eligendi sequi quos repellendus!"
                  img={Javascript}  
                  content_img="Javascript Resmi"
                />
            </div>
            <div className="column">
              <Course 
                title="Html and CSS"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea cupiditate voluptas sit possimus est, similique quae sint dicta repellat perspiciatis cum eligendi sequi quos repellendus!"
                img={HtmlCss}
                content_img="Html ve Css Resmi"  
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;


