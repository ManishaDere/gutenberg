import React from 'react';
import { Link } from 'react-router-dom';

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentTopic: '',
    };
    // this.onBtnClick = this.onBtnClick.bind(this);
  }
  // onBtnClick(val) {
  //   this.setState({
  //     currentTopic: val
  //   });
  // }
  render() {
    let { topic } = this.props;
    // let { currentTopic } = this.state;
    // console.log("search: '?sort=name',", currentTopic);
    return (
      <li>
        <Link to={{ pathname: "/books", search: `?topic=${topic.text}` }} className="genre-card" role="button">
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