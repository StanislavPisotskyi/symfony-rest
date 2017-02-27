import React, { Component } from 'react';

export default class Single extends Component
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