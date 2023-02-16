import React, { useState } from 'react';
import './app.css'
import Home from './Components/Home/Home';

import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/NotFound/Error';

function App() {

    const [currentPage, setCurrentPage] = useState('Home');
  
    const renderPage = () => {
        switch (currentPage) {
        case 'home':
            return <Home />;
        case 'about':
            return <About />;
        case 'services':
            return <Services />;
        case 'contact':
                return <Contact />;  
        default:
            return <Error/>;
        }
    };

    return (
        <div>
            <Navbar setCurrentPage={setCurrentPage} />
            {renderPage()}
        </div>
    );
}

export default App;