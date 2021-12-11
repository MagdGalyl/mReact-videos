import React from 'react';

class SearchBar extends React.Component{

    state = {term: ''}

    // CALLBACK for input change
    // Updating STATE sys with dynamic value (user input)

    onInputChange = (event) => {
        // We get our value from the defualt EVENT argument

        // console.log(event)
        // console.log(event.target.value)

        this.setState({term: event.target.value });
    }

    onFormSubmit = (event) => {
        // Preventing Browser from Auto submit
        event.preventDefault();

        // TODO: Make sure we call
        // callback from parent component (CALL the PROP)
        // To tell the APP that the user submit the form and to intiate geting data from youtube API
        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return (
        <div className='search-bar ui segment'>
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='filed'>
                    <label>Video Search</label>
                    <input type="text" 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;