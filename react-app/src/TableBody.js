import React, { Component } from 'react';

export default class TableBody extends Component
{
    render()
    {
        var update_url = '/posts/update/' + this.props.id;
        var single_url = '/posts/single/' + this.props.id;

        return(
            <tr key={this.props.id}>
                <td>{this.props.id}</td>
                <td><a href={single_url}>{this.props.title}</a></td>
                <td>
                    <a href={update_url} className="btn btn-default btn-sm">Edit</a>
                    <button onClick={this.props.deleteItem.bind(this, this.props.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        );
    }
}