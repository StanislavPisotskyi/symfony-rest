import React, { Component } from 'react';
import Form from './Form';

export default class Create extends Component
{
    handleSubmit(data)
    {
        fetch('http://localhost:8000/posts', {
            method: 'POST',
            mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
    }

    render()
    {
        return(
            <div>
                <Form onSubmit={this.handleSubmit} />
            </div>
        );
    }
}