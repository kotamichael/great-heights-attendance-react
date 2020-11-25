import React, { Component } from 'react';
import axios from 'axios';

import User from './User';

class UsersContainer extends Component {
	constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        console.log(process.env)
        console.log(process.env.NODE_ENV)
        console.log(`REACT_APP_API_URL: ${process.env.REACT_APP_API_URL}`)

        var api_url = process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:3000' : REACT_APP_API_URL
        axios.get(`${api_url}/api/v1/users.json`)
        .then(response => {
            this.setState({
                users: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="users-container">
                {this.state.users.map( user => {
                    return (<User user={user} key={user.id} />)
                })}
            </div>
        )
    }
}

export default UsersContainer;