import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import CookiePolicy from './components/CookiePolicy';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Articles from './components/Articles';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CookiePolicy />
                <Navbar />
                <Jumbotron>
                    <a className="btn btn-primary btn-lg" href="https://github.com/sSala/react-by-tests" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                </Jumbotron>
                <div className="container">
                    <Articles />
                    <hr />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
