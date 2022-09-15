import React from "react";
import './Experience.css';
import {AiFillHtml5, AiOutlineConsoleSql, AiFillGithub} from 'react-icons/ai';
import {DiCss3, DiBootstrap, DiMysql, DiJava, DiPhotoshop} from 'react-icons/di';
import {TbBrandJavascript} from 'react-icons/tb';
import {SiTailwindcss, SiMongodb} from 'react-icons/si';
import {FaReact, FaSitemap} from 'react-icons/fa';
import {RiVuejsFill} from 'react-icons/ri';


const Experience = () =>{
  return(
    <section id="experience">
    <h5>What Skills I have</h5>
    <h2>My Exprience</h2>
    <div className="container experience_container">
      <div className="experience__frontend">
        <h4>Frontend Tech Skills</h4>
        <div className="experince__content">
            <article className="experience__details">
            <AiFillHtml5 />
              <div>
              <h5>HTML</h5>
              <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
            <DiCss3 />
             <div>
              <h5>CSS</h5>
              <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
            <TbBrandJavascript />
              <div>
              <h5>JavaScript</h5>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <DiBootstrap />
              <div>
              <h5>Bootstrap</h5>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <SiTailwindcss />
              <div>
              <h5>Tailwind</h5>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <FaReact />
              <div>
              <h5>ReactJs</h5>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
             <RiVuejsFill />
              <div>
              <h5>VueJs</h5>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <FaSitemap />
              <div>
              <h5>Sitecore CMS</h5>
              <small className="text-light">Experinced</small>
              </div>
            </article>
        </div>
      </div>
      {/* end of front end  */}
      <div className="experience__backend">
        <h4>Other Web Dev Skills</h4>
        <div className="experince__content">
            <article className="experience__details">
              <SiMongodb />
              <div>
              <h5>MongoDB</h5>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <AiOutlineConsoleSql />
              <div>
              <h5>SQL</h5>
              <small className="text-light">Inetrmediate</small>
              </div>
            </article>
            <article className="experience__details">
            <DiMysql />
              <div>
              <h5>MySql</h5>
              <small className="text-light">Inetrmediate</small>
              </div>
            </article>
            <article className="experience__details">
            <DiJava />
              <div>
              <h5>Core Java</h5>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
            <AiFillGithub />
              <div>
              <h5>Git & Github</h5>
              <small className="text-light">Inetermediate</small>
              </div>
            </article>
            <article className="experience__details">
            <DiPhotoshop />
              <div>
              <h5>Photoshop</h5>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
        </div>
      </div>
      
    </div>
    </section>
  )
}

export default Experience;