import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import BookList from './BookList';


class Books extends Component {

    //Create state
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

    //Fetch data from API
    searchBooks = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes/")
            .query({ q: this.state.searchField })
            .query('&maxResults=40')
            .then((data) => {
                console.log(data);
                const cleanData = this.cleanData(data);
                this.setState({ books: cleanData });
            })            
    }


    //Create search handler
    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    //Sort out handler
    handleSort = (e) => {
        this.setState({ sort: e.target.value })
    }

    //Clean up data
    cleanData = (data) => {
        const cleanData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false){
                book.volumeInfo['publishedDate'] = '0000';
            }
            else if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
                book.volumeInfo['imageLinks'] = { thumbnail: 'https://icon-library.net/images/no-photo-icon/no-photo-icon-5.jpg'}
            }
        return book;
        })
    return cleanData;   
    }


    //Pass "handleSearch" to <SearchArea> component
	render() {  
        const sortedBooks = this.state.books.sort((a, b) => {
            if(this.state.sort === 'Newest') {
                    return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            }
            else if(this.state.sort === 'Oldest'){
                    return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
            }
        })

		return (
		    <div >
                <SearchArea searchBooks={this.searchBooks} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
                <BookList books={sortedBooks} />

		    </div>
		  );
		}
	}

export default Books;
