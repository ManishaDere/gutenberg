import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import qs from 'query-string';
import axios from 'axios';
import { NONAME } from 'dns';

class BooksInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let params = qs.parse(this.props.location.search);
    let topic = params.topic;
    axios.get('http://skunkworks.ignitesol.com:8000/books?topic=${topic}')
    .then(function(res) {
      console.log("Res==>", res);
    })
  }
  render() {
    let params = qs.parse(this.props.location.search);
    let topic = params.topic;
    return (
      <div className="container books-info">
        <div className="books-info__header">
          <Link to={{ pathname: "/"}} role="button" className="back-btn">
            <img src="./images/Back.svg" alt="Back img" />
            <div className="back-btn__text">{topic}</div>
          </Link>
          <div className="books-info__header__search-block">
            <div className="img-search-block">
              <img src="/images/Search.svg" alt="search" className="search-icon"/>
            </div>
            <input type="search" name="searchTopicAuthor" className="text-box" placeholder="Search"/>
            <div className="img-cancel-block" style={{ display: "none"}}>
              <img src="./images/Cancel.svg" alt="cancel" className="cancel-icon"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BooksInfo);