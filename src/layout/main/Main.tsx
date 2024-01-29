import React from 'react';
import {Container} from "../../components/wrapper/Container";
import {SideBar} from "../sideBar/SideBar";
import styled from "styled-components";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "../section/dialogs/Dialogs";
import {Profile} from "../section/profile/Profile";
import {News} from "../section/news/News";
import {Music} from "../section/music/Music";
import {Settings} from "../section/settings/Settings";

export const Main = () => {
    return (
        <BrowserRouter>
            <StyledMain>
                <Container>
                    <SideBar/>
                    <MainWrapperContent>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path={'/dialogs'} component={Dialogs}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                    </MainWrapperContent>
                </Container>
            </StyledMain>
        </BrowserRouter>
    );
};

const StyledMain = styled.main`
  width: 100%;
  
  ${Container} {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 20px;
  }
`

const MainWrapperContent = styled.div`

`

