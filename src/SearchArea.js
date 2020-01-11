import React from 'react';

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={props.searchBooks} action="">
                <input onChange={props.handleSearch} type="text"  placeholder="Title / Author"/>
                <button type="submit">Search</button>
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort">Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
    )
}

export default SearchArea;