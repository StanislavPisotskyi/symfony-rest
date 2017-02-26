import React, { Component } from 'react';
import Form from './Form';
import { browserHistory } from 'react-router';

export default class Update extends Component
{
    getPost()
    {
        fetch('http://localhost:8000/posts/' + this.props.params.postId, {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    blogPost: data
                })
            }).catch(err => err);
    }

    constructor(props)
    {
        super(props);
        this.state = {
            blogPost: {}
        };

        this.getPost();
    }

    handleSubmit(data) {
        fetch('http://localhost:8000/posts/' + this.props.params.postId, {
            method: 'PUT',
            mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
        browserHistory.push('/');
    }

    render()
    {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)}
                      title={this.state.blogPost.title}
                      body={this.state.blogPost.body} />
            </div>
        );
    }
}
