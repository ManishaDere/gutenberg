import React from 'react';
import Topic from './Topic';
import './App.css';

const topicsInfoArray = [
  {
    "topicImgUrl": "./images/Fiction.svg",
    "text": "fiction",
    "nextImage": "./images/Next.svg"
  },
  {
    "topicImgUrl": "./images/Drama.svg",
    "text": "drama",
    "nextImage": "./images/Next.svg"
  },
  {
    "topicImgUrl": "./images/Humour.svg",
    "text": "Humour",
    "nextImage": "./images/Next.svg"
  },
  {
    "topicImgUrl": "./images/Politics.svg",
    "text": "Politics",
    "nextImage": "./images/Next.svg"
  },
  {
    "topicImgUrl": "./images/Philosophy.svg",
    "text": "Philosophy",
    "nextImage": "./images/Next.svg"
  },
  {
    "topicImgUrl": "./images/History.svg",
    "text": "History",
    "nextImage": "./images/Next.svg"
  },
  {
    "topicImgUrl": "./images/Adventure.svg",
    "text": "Adventure",
    "nextImage": "./images/Next.svg"
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    let topicsLength = topicsInfoArray.length;
    let secondCoulmnStart = Math.round(topicsLength/2);
    return (
      <div id="App">
        <div className="gutenberg-intro" style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/images/Pattern.svg")`}}>
          <section className="gutenberg-intro__info container">
            <h1>Gutenberg Project</h1>
            <p>A social cataloging website that allows you to freely search its database of books, annotations, and reviews.</p>
          </section>
        </div>
        <div className="gutenberg-btns">
          <section className="container">
            <div className="row">
            <div className="col-sm-6">
              <ul>
              {topicsInfoArray.slice(0, secondCoulmnStart).map((topicItem, key) => {
                return (
                  <Topic topic={topicItem} key={topicItem.text}/>
                );
              })}
              </ul>
            </div>
            <div className="col-sm-6">
              <ul>
              {topicsInfoArray.slice(secondCoulmnStart).map((topicItem, key) => {
                return (
                  <Topic topic={topicItem} key={topicItem.text}/>
                );
              })}
              </ul>
            </div>
          </div>
          </section>
        </div>
      </div>
    );
  }

}

export default App;
