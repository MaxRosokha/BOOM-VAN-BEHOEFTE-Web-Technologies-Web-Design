import React from 'react';
import './style.css';
import Header from './components/Header/header';
import MainContent from './components/Home/home';
import Footer from './components/footer/footer';

const App = () => {
    return (
        <div className="App">
            <Header />  {/*Header */}
            <MainContent />  {/*MainContent */}
            <Footer />  {/*Footer */}
        </div>
    );
};

export default App;
