import React, { Component } from 'react';
import './Mylist.css'

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input id={item.key} type="text" value={item.text} onChange={(e) => {props.updateItem(e.target.value, item.key)}} />

                <span>

                    <button onClick={() => props.deleteItem(item.key)}>Del</button>
                </span>
            </p>

        </div>
    })
    return (
        <div>{listItems}</div>
    )
}



export default ListItems;