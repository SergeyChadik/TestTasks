import React, {ChangeEvent, KeyboardEvent,useState} from 'react';

type InputType ={
    changeInput: (title: string, id: string) => void
    id: string
}

export const Input = (props: InputType) => {
    let [title, setTitle] = useState('')

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const onClickButton = () => {
        if (title.trim() !== "") {
            props.changeInput(title, props.id);
            setTitle('')
        }
    }

    const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            props.changeInput(title,props.id)
            setTitle('')
        }
    }

    return (
        <div>
            <input value={title} onKeyPress={onKeyPress} onChange={onChangeInput}/>
            <button onClick={onClickButton}>+</button>
        </div>
    );
};

