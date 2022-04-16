import {PropsType} from "../App";
import {v1} from "uuid";



export type RemoveItem = {
    type: 'REMOVE-ITEM',
    id: string
}
export type ChangeInput = {
    type: 'CHANGE-INPUT',
    id: string,
    title: string,
}
export type AddItem = {
    type: 'ADD-ITEM',
    id: string,
    title: string,
}


type ActionType = RemoveItem | ChangeInput | AddItem

const initState: Array<PropsType> = [
    {id: v1(), title: 'Title1'},
    {id: v1(), title: 'Title2'},
    {id: v1(), title: 'Title3'},
    {id: v1(), title: 'Title4'},
    {id: v1(), title: 'Title5'},
    {id: v1(), title: 'Title6'},
    {id: v1(), title: 'Title7'},
    {id: v1(), title: 'Title8'},
    {id: v1(), title: 'Title9'},
    {id: v1(), title: 'Title10'},
    {id: v1(), title: 'Title11'},
    {id: v1(), title: 'Title12'},
    {id: v1(), title: 'Title13'},
    {id: v1(), title: 'Title14'},
    {id: v1(), title: 'Title15'},
    {id: v1(), title: 'Title16'},
    {id: v1(), title: 'Title17'},
    {id: v1(), title: 'Title18'},
    {id: v1(), title: 'Title19'},
    {id: v1(), title: 'Title20'},
]

export const userReducer = (items=initState, action: ActionType): Array<PropsType> => {
    switch (action.type) {
        case 'REMOVE-ITEM':
            return items.filter(it => it.id != action.id);
        case 'CHANGE-INPUT':
            return items.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)
        case "ADD-ITEM":
            return [{id: action.id, title: action.title},...items]
        default:
           return items
    }
}


export const RemoveItemAC = (id: string):RemoveItem => {
    return {
        type: 'REMOVE-ITEM',
        id
    }
}
export const ChangeInputAC = (id: string, title: string):ChangeInput => {
    return {
        type: 'CHANGE-INPUT',
        id,
        title,
    }
}
export const AddItemAC = ():AddItem => {
    return {
        type: 'ADD-ITEM',
        id: v1(),
        title: 'TitleNew',
    }
}


