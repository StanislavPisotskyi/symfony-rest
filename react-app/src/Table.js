import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import _ from 'lodash';
import { fetchGetPosts, fetchDeletePost } from './actions';

export default class Table extends Component
{
    getPosts()
    {
        fetchGetPosts()
            .then((data) => {
                this.setState(state => {
                    state.blogPosts = data;
                    return state;
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
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
        fetchDeletePost(id);
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
                    {(this.state.blogPosts.length > 0) ? this.list() : <tr><td>Loading...</td></tr>}
                    </tbody>
                </table>
            </div>
        );
    }
}