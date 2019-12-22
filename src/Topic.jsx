import React from 'react';
import { Link } from 'react-router-dom';

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let { topic } = this.props;
    return (
      <li>
        <Link to={
          {
            pathname: "/books",
            search: `?category=${topic.text}`
          }
        } className="genre-card" role="button">
          <div className="btn-images__wrapper">
            <img src={topic.topicImgUrl} className="btn-images" alt={topic.text}/>
          </div>
          <div className="btn-text" >{topic.text}</div>
          <div className="btn-images__wrapper">
            <img src={topic.nextImage} className="btn-images" alt={topic.nextImage}/>
          </div>
        </Link>
      </li>
    );
  }
}

export default Topic;