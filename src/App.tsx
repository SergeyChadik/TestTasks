import React from 'react';
import './App.css';
import {Input} from "./Input";
import {AddItemAC, ChangeInputAC, RemoveItemAC} from "./state/reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import Component from "./Component";


export type PropsType = {
    id: string
    title: string
}



function App() {

    const items = useSelector<AppRootStateType, Array<PropsType>>(state => state.items)

    const dispatch = useDispatch()

    const addItem = () => {
        dispatch(AddItemAC())
    }

    const removeItem = (id: string) => {
        dispatch(RemoveItemAC(id))
    }

    const changeInput = (title: string, id: string) => {
        dispatch(ChangeInputAC(id,title))
    }



    return (
        <div>
            <Component
                items={items}
                changeInput={changeInput}
                removeItem={removeItem}
                addItem={addItem}/>
        </div>
    );
}

export default App;
