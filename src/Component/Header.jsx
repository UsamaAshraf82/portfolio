import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';


class Header extends React.Component {
    render() {
        return (
            <header className="App-header">

                <nav className="navbar navbar-expand-md container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul className={'navbar-list'}>
                            <a href={'#home'} className={'navbar-list-link'}>
                                <li className={'navbar-list-item'}><FontAwesomeIcon icon={faHome}/></li>
                            </a>
                            <a href={'#about'} className={'navbar-list-link'}>
                                <li className={'navbar-list-item'}>About</li>
                            </a>
                            <a href={'#objective'} className={'navbar-list-link'}>
                                <li className={'navbar-list-item'}>Objective</li>
                            </a>
                            <a href={'#skill'} className={'navbar-list-link'}>
                                <li className={'navbar-list-item'}>Skill</li>
                            </a>
                            <a href={'#education'} className={'navbar-list-link'}>
                                <li className={'navbar-list-item'}>Education</li>
                            </a>
                            <a href={'#experience'} className={'navbar-list-link'}>
                                <li className={'navbar-list-item'}>Experience</li>
                            </a>
                            <a href={'#contact'} className={'navbar-list-link'}>
                                <li className={'navbar-list-item'}>Contact</li>
                            </a>
                        </ul>

                    </div>
                </nav>


            </header>
        );
    }
}

export default Header;
