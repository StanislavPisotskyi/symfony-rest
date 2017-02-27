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

    componentDidUpdate()
    {
        this.getPosts();
    }

    deleteItem(id)
    {
        fetch('http://localhost:8000/posts/' + id, {
            method: 'DELETE',
            mode: 'CORS'
        }).then(res => {
            return res;
        }).catch(err => err);
    }

    list()
    {
        var props = _.omit(this.state, 'blogPosts');
        return _.map(this.state.blogPosts, (blogPosts, index) => <TableBody
            key={index}
            {...blogPosts}
            deleteItem={this.deleteItem.bind(this)}
            {...props} />);
    }

    render()
    {
        return(
            <div>
                <div>
                    <a className="btn btn-default btn-sm" href="/posts/create">Create new post</a>
                </div>
                <table>
                    <TableHeader />
                    <tbody>
                    {this.list()}
                    </tbody>
                </table>
            </div>
        );
    }
}