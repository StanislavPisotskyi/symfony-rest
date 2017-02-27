import React, { Component } from 'react';
import Form from './Form';
import { browserHistory } from 'react-router';
import { fetchCreatePost } from './actions';

export default class Create extends Component
{
    handleSubmit(data)
    {
        fetchCreatePost(data);
        browserHistory.push('/');
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