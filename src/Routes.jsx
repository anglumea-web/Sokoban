import React from "react";

import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

import ScrollToTop from "components/ScrollToTop";

import ErrorBoundary from "components/ErrorBoundary";

import NotFound from "pages/NotFound";

import LevelSelection from './pages/level-selection';

import MainMenu from './pages/main-menu';

import GameScreen from './pages/game-screen';


const Routes = () => {

return (

<BrowserRouter>

<ErrorBoundary>

<ScrollToTop />

<RouterRoutes>

{/* Define your route here */}

<Route path="/" element={<MainMenu />} />

<Route path="/level-selection" element={<LevelSelection />} />

<Route path="/main-menu" element={<MainMenu />} />

<Route path="/game-screen" element={<GameScreen />} />

<Route path="*" element={<NotFound />} />

</RouterRoutes>

</ErrorBoundary>

</BrowserRouter>

);

};


export default Routes;


