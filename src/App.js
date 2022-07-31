import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { AboutPage, IndexPage, NewCardPage } from './pages';
import Layout from "./layouts";
import Card from "./components/card"
import SearchArtist from "./pages/SearchPage/index"
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
                <Route path="/artists" element={<Card/>}/>
                <Route path="/search" element={<SearchArtist/>}/>
                <Route path="*" element={<IndexPage/>}/>

            </Route>
        </Routes>
        </ArtistProvider>
    );

}

export default App;
