import React from 'react';

const DataItem = (props) => {

    return (
        <li className="container card-group">
            <div className="card">
                <div className="card-header">
                    Name
                </div>
                <input className="card-body" value={props.name} data-name onChange={props.changeValuesHandler}>
                </input>
            </div>
            <div className="card">
                <div className="card-header">
                    Year
                </div>
                <input className="card-body" value={props.year} onChange={props.changeValuesHandler}>
                </input>
            </div>
            <button type="button" className="btn btn-outline-dark btn-sm" onClick={props.deleteHandler}>Delete</button>
        </li>
    )
}

export default DataItem