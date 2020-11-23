import React, { Component } from "react";
import { Consumer } from "../..context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        //check for errors
        if (name === ''){
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }

        if (email === ''){
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }

        if (phone === ''){
            this.setState({ errors: { phone: 'Phone is required' } });
            return;
        }

        const newUser = {
            id: uuid(),
            name,
            email,
            phone
        };
        
        dispatch({ type: 'ADD_CONTACT', payload: newContact });
        
        //clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, phone, errors } = this.state;

        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                }}
        ) 
    }




}