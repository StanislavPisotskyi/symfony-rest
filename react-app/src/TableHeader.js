import React, { Component } from 'react';

export default class TableHeader extends Component
{
    render()
    {
        return(
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Options</th>
                </tr>
            </thead>
        );
    }
}