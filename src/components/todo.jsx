import React from "react";

export const ToDo = props => {
    return (
        <tr>
            <td>
                <label>{props.id}</label>
            </td>
            <td>
                <input />
            </td>
            <td>
                <label>{props.createdAt}</label>
            </td>
        </tr>
    )
}