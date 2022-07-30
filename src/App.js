import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { AboutPage, IndexPage, NewCardPage } from './pages';
import Layout from "./layouts";
import Card from "./components/card"
import './App.css';
import { ArtistProvider } from '../src/ArtistContext'


const App = () => {
    return (
        <ArtistProvider>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/" element={<IndexPage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/newcardpage" element={<NewCardPage/>}></Route>
            <Route path="/artists" element={<Card/>}></Route>
            {/* <Route path="/users" >
                <Route path="/users" element={<UsersPage/>}></Route>
                <Route path=":userName" element={<UserPage/>}></Route>
            </Route> */}
        </Route>
        </Routes>
        </ArtistProvider>
    );

}

export default App;
