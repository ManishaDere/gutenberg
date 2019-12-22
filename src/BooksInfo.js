import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import qs from 'query-string';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from 'react-loader-spinner';
import TextTruncate from 'react-text-truncate';

class BooksInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      count: 0,
      nextUrl: '',
      keyword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.imageClick = this.imageClick.bind(this);
  }

  componentDidMount() {
    let params = qs.parse(this.props.location.search);
    let category = params.category;
    axios.get(`http://skunkworks.ignitesol.com:8000/books?topic=${category}&mime_type=image`)
    .then((res) => {
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    let { keyword } = this.state;
    if(prevState.keyword !== keyword) {
      axios.get(`http://skunkworks.ignitesol.com:8000/books/?search=${keyword}&mime_type=image`)
      .then((res) => {
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
  }

  handleChange(e) {
    let cancel = this.refs.cancel;
    if(e.target.value === '') {
      cancel.style.display = "none";
    } else {
      cancel.style.display = "block";
    }
    var searchText = e.target.value; // this is the search text
    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        keyword: searchText
      });
    }, 300);
  }

  handleCancel() {
    let searchTopicAuthor = this.refs.searchTopicAuthor;
    let cancel = this.refs.cancel;
    searchTopicAuthor.value = '';
    cancel.style.display = "none";
    searchTopicAuthor.focus();
  }

  fetchMoreData() {
    axios.get(this.state.nextUrl)
    .then((res) => {
      this.setState({
        categoryList: this.state.categoryList.concat(res.data.results),
        count: res.data.count,
        nextUrl: res.data.next,
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  imageClick(val) {
    let formats = val;
    if(formats['text/html']) {
      window.open(
        formats['text/html'],
        '_blank' // <- This is what makes it open in a new window.
      );
    } else if(formats['text/pdf']) {
      window.open(
        formats['text/pdf'],
        '_blank' // <- This is what makes it open in a new window.
      );
    } if(formats['text/plain']) {
      window.open(
        formats['text/plain'],
        '_blank' // <- This is what makes it open in a new window.
      );
    } else if(formats['application/zip']) {
      alert("Please open downloaded zip file to see information of book.");
      window.location.href = formats['application/zip'];
    } else {
      alert("No viewable version available");
    }

  }

  render() {
    let params = qs.parse(this.props.location.search);
    let category = params.category;
    let { categoryList } = this.state;
    return (
      <div className="books-info">
        <section className="books-info__header container">
          <Link to={{ pathname: "/"}} role="button" className="back-btn">
            <img src="./images/Back.svg" alt="Back img" />
            <h2 className="back-btn__text">{category}</h2>
          </Link>
          <div className="books-info__header__search-block">
            <div className="img-search-block">
              <img src="/images/Search.svg" alt="search" className="search-icon"/>
            </div>
            <input type="text" name="searchTopicAuthor" className="text-box" placeholder="Search" ref="searchTopicAuthor" onChange={this.handleChange} />
            <img src="./images/Cancel.svg" alt="cancel" className="cancel-icon" ref="cancel" onClick={this.handleCancel}/>
          </div>
        </section>
        <div className="books-info__content">
          <InfiniteScroll
            className="container"
            dataLength={this.state.categoryList.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<Loader className="loader" type="TailSpin" color="#6f6f6f" height={60} width={60} />}
          >
            <div className="row books-info__content__rows">
              {categoryList.map((book, index) => {
                return (
                  <div key={book.id} className="col-md-2 col-4 book-card">
                    <button onClick={this.imageClick.bind(this, book.formats)}><img src={book.formats['image/jpeg']} alt=""/></button>
                    <div className="">
                      <TextTruncate
                        className="book-title"
                        line={2}
                        element="span"
                        truncateText="…"
                        text={book.title.trim()}
                      />
                    </div>
                    {book.authors.map((author, i)=> {
                      return (
                        <p key={author.name} className="book-author">{author.name}</p>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default withRouter(BooksInfo);