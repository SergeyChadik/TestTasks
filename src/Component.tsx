import React from 'react';
import {Input} from "./Input";
import {PropsType} from "./App";

type ComponentType = {
    items: Array<PropsType>
    changeInput: (title: string, id: string) => void
    removeItem: (id: string) => void
    addItem: () => void
}


const Component = (props:ComponentType) => {
    return (
        <div className="App">
            <div className="Button">
                <button onClick={props.addItem}>AddItem</button>
            </div>
            <div className="Container">
                {props.items.map(it =>
                    <div key={it.id} className="Content">
                        <Input changeInput={props.changeInput} id={it.id}/>
                        <div>{it.title}</div>
                        <button onClick={() => props.removeItem(it.id)}>Delete Item</button>
                    </div>)}
            </div>
        </div>
    );
};

export default Component;