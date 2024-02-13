import React from 'react';
import {Container} from "../../components/wrapper/container";
import {SideBar} from "../SideBar/SideBar";
import styled from "styled-components";
import {Dialogs} from "../section/dialogs/Dialogs";
import {Profile} from "../section/profile/Profile";
import {News} from "../section/news/News";
import {Music} from "../section/music/Music";
import {Settings} from "../section/settings/Settings";
import {Route} from "react-router-dom";

//Components
const profileComponents = ()=> <Profile/>
const dialogsComponents = ()=> <Dialogs/>
const newsComponents = ()=> <News/>
const musicComponents = ()=> <Music/>
const settingsComponents = ()=> <Settings/>


export const Main = () => {
    return (
            <StyledMain>
                <Container>
                    <SideBar/>
                    <MainWrapperContent>
                        <Route path={'/profile'} component={profileComponents}/>
                        <Route path={'/dialogs'} component={dialogsComponents}/>
                        <Route path={'/news'} component={newsComponents}/>
                        <Route path={'/music'} component={musicComponents}/>
                        <Route path={'/settings'} component={settingsComponents}/>
                    </MainWrapperContent>
                </Container>
            </StyledMain>
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

