import React from 'react';

class SearchBar extends React.Component {

    //state for this component
    state = {
        term: ''
    }

    render () {
        return (
            <h1>Search Bar component</h1>
        );
    }
}

//export component
export default SearchBar;