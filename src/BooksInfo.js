import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import qs from 'query-string';
import axios from 'axios';

class BooksInfo extends React.Component {
  componentDidMount() {
    axios.get('http://skunkworks.ignitesol.com:8000/books?topic=fiction')
    .then(function(res) {
      console.log("Res==>", res);
    })
  }
  render() {
    // const value=queryString.parse(this.props.location.search);
    let params = qs.parse(this.props.location.query);
    let topic = params.topic;
    console.log('params==>', topic)//123
    return (
      <div className="books-info">
      </div>
    );
  }
}

export default withRouter(BooksInfo);