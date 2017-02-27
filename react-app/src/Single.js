import React, { Component } from 'react';
import { fetchGetPost } from './actions';

export default class Single extends Component
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

    render()
    {
        return(
            <div>
                <h3>{this.state.blogPost.title}</h3>
                <p>{this.state.blogPost.body}</p>
            </div>
        );
    }
}