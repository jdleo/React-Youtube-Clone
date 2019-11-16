import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {

    //state for this component
    state = {
        term: ''
    }

    //helper method to handle change in text field
    handleChange = (event) => {
        //set state for search term (when text field changes)
        this.setState({
            term: event.target.value
        })
    }

    //helper method to handle form submit (for searching for videos)
    handleSubmit = (event) => {
        //get attributes from current state
        const { term } = this.state;
        //get props
        const { onFormSubmit } = this.props;
        //pass to props
        onFormSubmit(term);
        //to prevent default behavior of browser refresh
        event.preventDefault();
    }

    render () {
        return (
            <Paper elevation={6} style={{padding: "20px"}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search for video..." onChange={this.handleChange}/>
                </form>
            </Paper>
        );
    }
}

//export component
export default SearchBar;