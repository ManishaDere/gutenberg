import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import qs from 'query-string';
import axios from 'axios';
import ReactScrollableList from 'react-scrollable-list';

class BooksInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      count: 0,
      nextUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentDidMount() {
    let params = qs.parse(this.props.location.search);
    let category = params.category;
    console.log("cat=", category);
    axios.get(`http://skunkworks.ignitesol.com:8000/books/?category=${category}`)
    .then((res) => {
      console.log("Res==>", res.data);
        this.setState({
          categoryList: res.data.results,
          count: res.data.count,
          nextUrl: res.data.next,
        });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange(e) {
    let cancel = this.refs.cancel;
    if(e.target.value === '') {
      cancel.style.display = "none";
    } else {
      cancel.style.display = "block";
    }
  }
  handleCancel() {
    let searchTopicAuthor = this.refs.searchTopicAuthor;
    let cancel = this.refs.cancel;
    searchTopicAuthor.value = '';
    cancel.style.display = "none";
    searchTopicAuthor.focus();
  }
  render() {
    let params = qs.parse(this.props.location.search);
    let category = params.category;
    let { categoryList, count, nextUrl } = this.state;
    return (
      <div className="container books-info">
        <section className="books-info__header">
          <Link to={{ pathname: "/"}} role="button" className="back-btn">
            <img src="./images/Back.svg" alt="Back img" />
            <h2 className="back-btn__text">{category}</h2>
          </Link>
          <div className="books-info__header__search-block">
            <div className="img-search-block">
              <img src="/images/Search.svg" alt="search" className="search-icon"/>
            </div>
            <input type="text" name="searchTopicAuthor" className="text-box" placeholder="Search..." ref="searchTopicAuthor" onChange={this.handleChange}/>
            <img src="./images/Cancel.svg" alt="cancel" className="cancel-icon" ref="cancel" onClick={this.handleCancel}/>
          </div>
        </section>
        <div className="books-info__content">
          <div className="row books-info__content__rows">
            {categoryList.map((book, index) => {
              return (
                <div key={book.title} className="col-sm-2 book-card">
                  <img src="https://via.placeholder.com/150" alt=""/>
                  <div className=""><a href="#">{book.title}</a></div>
                  {book.authors.map((author, i)=> {
                    return (
                      <p key={author.name}>{author.name}</p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <ReactScrollableList
            listItems=[]
            heightOfItem={30}
            maxItemsToRender={50}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(BooksInfo);