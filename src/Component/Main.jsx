import React from 'react';
import Profile from '../Images/Profile.jpg';

import Home from './Section/Home'
import About from './Section/About'
import Objective from './Section/Objective'
import Skill from './Section/Skills'
import Education from './Section/Education'
import Experience from './Section/Experience'

class Main extends React.Component {
    render() {
        return (
            <main className="App-Main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" id="profilePic">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <div className="col-md-8 sections">
                            <Home />
                            <About />
                            <Objective />
                            <Skill />
                            <Education />
                            <Experience />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;