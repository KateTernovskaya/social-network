import React from 'react';
import styled from "styled-components";
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";

let dialogsData = [
    {
        id: '1',
        name: 'Kate',
    },
    {
        id: '2',
        name: 'Ilya',
    },
    {
        id: '3',
        name: 'Reya',
    },
    {
        id: '4',
        name: 'Siba',
    },
    {
        id: '5',
        name: 'Siba',
    },
    {
        id: '6',
        name: 'Zeus',
    },
    {
        id: '7',
        name: 'Afrodita',
    },
    {
        id: '8',
        name: 'Aid',
    },
]

let messagesData = [
    {
        id: '1',
        message: 'CHAPTER ONE THE BOY WHO LIVED',
    },
    {
        id: '2',
        message: 'Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.',
    },
    {
        id: '3',
        message: 'They were the last people you\'d expect to be involved in anything strange or mysterious, because they just didn\'t hold with such nonsense.',
    },
    {
        id: '4',
        message: 'Mr. Dursley was the director of a firm called Grunnings, which made drills. ',
    },
    {
        id: '5',
        message: 'He was a big, beefy man with hardly any neck, although he did have a very large mustache. ',
    },
    {
        id: '6',
        message: 'Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. ',
    },
    {
        id: '7',
        message: 'Dursley pretended she didn\'t have a sister, because her sister and her good-for-nothing husband were as unDursleyish as it was possible to be. ',
    },
    {
        id: '8',
        message: 'None of them noticed a large, tawny owl flutter past the window.',
    },
]

export const Dialogs = () => {
    return (
        <StyledDialogs>
            <DialogsItems>
                {dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>)}
            </DialogsItems>
            <Messages>
                {messagesData.map(message => <Message id={message.id} message={message.message}/>)}
            </Messages>
        </StyledDialogs>
    );
};










const StyledDialogs = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

const DialogsItems = styled.div`

`

const Messages = styled.div`
  margin: 0 20px;
`


