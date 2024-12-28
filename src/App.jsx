import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import Website from './Website';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import './index.css'

function Details() {
    return (
        <div className="details-container">
            <header className="details-header">
                <nav className="details-nav">
                    <ul className="details-menu-items">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                         <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="details-content">
             <Outlet />
            </div>
             <footer className="details-footer" style={{textAlign: 'center' , backgroundColor: 'black', color: 'white'}}>
                © 😁 This is yash
             </footer>
        </div>
    );
}

function Home() {
    return (
        <div>
           <Website/>
        </div>
    );
}


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Details />}>
                       <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;