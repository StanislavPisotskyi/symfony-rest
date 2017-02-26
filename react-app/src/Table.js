import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import _ from 'lodash';

export default class Table extends Component
{
    list()
    {
        var props = _.omit(this.props, 'blogPosts');
        return _.map(this.props.blogPosts, (blogPosts, index) => <TableBody key={index} {...blogPosts} {...props} />);
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