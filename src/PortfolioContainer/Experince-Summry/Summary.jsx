import React from "react";
import './Summary.css';
const data = [
  {
    id : 1,
    point : 'Optimizing the user experience.',
  },
  {
    id : 2,
    point : 'Using HTML, JavaScript and CSS to bring concepts to life.',
  },
  {
    id : 3,
    point : 'Developing and maintaining the user interface.',
  },
  {
    id : 4,
    point : 'Implementing responsive design.',
  },
  {
    id : 5,
    point : 'Following SEO and Accessibility best practices.',
  },
  {
    id : 6,
    point : 'Fixing bugs and testing for usability.',
  },
  {
    id : 7,
    point : 'Developing Across Browsers.',
  },
  {
    id : 8,
    point : 'Using APIs and RESTful Services',
  },
  {
    id : 9,
    point : 'Using Graphic Design Tools & Code Editing Tools',
  },
]
const Summary = () =>{
  return(
    <section id="summary">
    <h5>What I Offer</h5>
    <h2>My Exprience Summary</h2>
    <div className="container service__container">
      <article className="service">
          <div className="service__head">
            <h4>Overall Summary</h4>
          </div>
          <ul className="service__list">
            {
          data.map(({point}) => {
            return(
            <li>
              <p>{point}</p>
            </li>
            )
          })
        }
         
          </ul>
      </article>
    </div>
    </section>
    )
    }

    export default Summary;