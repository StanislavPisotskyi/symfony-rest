import React, { Component } from 'react';
import Form from './Form';
import { browserHistory } from 'react-router';
import { fetchGetPost, fetchUpdatePost } from './actions';

export default class Update extends Component
{
    getPost()
    {
        fetchGetPost(this.props.params.postId)
            .then((data) => {
                this.setState(state => {
                    state.blogPost = data;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
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
        fetchUpdatePost(this.state.blogPost.id, data);
        browserHistory.push('/');
    }

    renderForm()
    {
        if(Object.keys(this.state.blogPost).length == 0)
        {
            return(
                <div>Loading...</div>
            );
        } else
        {
            return(
                <div>
                    <Form onSubmit={this.handleSubmit.bind(this)}
                          title={this.state.blogPost.title}
                          body={this.state.blogPost.body} />
                </div>
            );
        }
    }

    render()
    {
        return (
            this.renderForm()
        );
    }
}
