import { useState } from 'react'
import Root from './components/Root';
import Loan from './components/Loan';
import P2P from './components/P2P';
import Trading from './components/Trading';
import FastTrade from './components/FastTrade';
import CreateOffer from './components/CreateOffer';
import MarketDetail from './components/MarketDetail'

import Asset from './components/Assets'

import Market from './components/Market'
import ErrorPage from './components/ErrorPage';
// import LogInSignUp from './components/LogInSignUp';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Root />} />
          <Route path="/home" element={<Root />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/p2p" element={<P2P />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/fast-trade" element={<FastTrade />} />
          <Route path="/create-offer" element={<CreateOffer />} />
          <Route path="/market-detail" element={<MarketDetail />} />
          <Route path="/assets" element={<Asset />} />
          <Route path="/market" element={<Market />} />
          {/* <Route path="/login-signup" element={<LogInSignUp />} /> */}
          <Route path="*" element={<ErrorPage />} />   
        </Routes>
      </BrowserRouter>


      {/* <Root /> */}
      {/* <Market /> */}
      {/* <Loan /> */}
      {/* <P2P /> */}
      {/* < Trading/> */}
      {/* <FastTrade /> */}
      {/* <LogInSignUp /> */}
      {/* <CreateOffer /> */}
      {/* <MarketDetail /> */}
      {/* <Asset /> */}
      {/* <ErrorPage /> */}
    </>
  )
}

export default App
