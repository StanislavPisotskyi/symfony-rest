import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import _ from 'lodash';

export default class Table extends Component
{
    getPosts()
    {
        fetch('http://localhost:8000/posts', {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    blogPosts: data
                })
            }).catch(err => err);
    }

    constructor(props)
    {
        super(props);

        this.state = {
            blogPosts: []
        };

        this.getPosts();

    }

    list()
    {
        var props = _.omit(this.state, 'blogPosts');
        return _.map(this.state.blogPosts, (blogPosts, index) => <TableBody key={index} {...blogPosts} {...props} />);
    }

    render()
    {
        return(
            <table>
                <TableHeader />
                <tbody>
                    {this.list()}
                </tbody>
            </table>
        );
    }
}