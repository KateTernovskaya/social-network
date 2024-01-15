import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Container} from "./components/wrapper/Container";
import {SideBar} from "./layout/sideBar/SideBar";
import {Profile} from "./layout/main/profile/Profile";
import styled from "styled-components";

function App() {
    return (
        <AppWrapper>

            <Header/>
            <SideBar/>
            <Profile/>
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  gap: 20px;

  grid-template-areas:
'h h'
'n c';
  
  //container
  max-width: 1420px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`
