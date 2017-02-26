import React, { Component } from 'react';

export default class TableBody extends Component
{
    render()
    {
        return(
            <tr key={this.props.id}>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>
                    <a href="#" className="btn btn-default btn-sm">Edit</a>
                    <a href="#" className="btn btn-danger btn-sm"> Delete</a>
                </td>
            </tr>
        );
    }
}