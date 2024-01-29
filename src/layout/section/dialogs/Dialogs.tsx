import React from 'react';
import styled from "styled-components";
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";


export const Dialogs = () => {
    return (
        <StyledDialogs>
            <DialogsItems>
                <Dialog id={'1'} name={'Kate'}/>
                <Dialog id={'2'} name={'Ilya'}/>
                <Dialog id={'3'} name={'Reya'}/>
                <Dialog id={'4'} name={'Siba'}/>
                <Dialog id={'5'} name={'Zeus'}/>
                <Dialog id={'6'} name={'Afrodita'}/>
                <Dialog id={'7'} name={'Aid'}/>
            </DialogsItems>
            <Messages>
                <Message message={'Lorem ipsum dolor.'}/>
                <Message message={'Lorem ipsum. '}/>
                <Message message={'Lorem ipsum dolor sit amet.'}/>
                <Message message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                <Message message={'Lorem ipsum dolor.'}/>
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


