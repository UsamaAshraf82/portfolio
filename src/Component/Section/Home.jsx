import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faStackOverflow, faGithub, faTwitter, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


export default class Home extends React.Component {
    render() {
        return (
            <section className="container section" id="home">
                <div className="top">
                    <h1 id="name" >
                        I'm Usama Ashraf
                                </h1>
                    <h3 id="occupation">
                        Software Engineer
                                </h3>
                    <hr />
                    <div className="row content">
                        <div className="col-md-4">
                            <h6 className="head">Born year:</h6>
                            <p className="info">1997</p>
                        </div>
                        <div className="col-md-4">
                            <h6 className="head">Home City:</h6>
                            <p className="info">Faisalabad</p>
                        </div>
                        <div className="col-md-4">
                            <h6 className="head">E-Mail:</h6>
                            <a href="mailto:usamaashraf82@live.com" className="info">usamaashraf82@live.com</a>
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-md-4">
                            <h6 className="head">Experience:</h6>
                            <p className="info">2 Month Internship</p>
                        </div>
                        <div className="col-md-4">
                            <h6 className="head">Phone:</h6>
                            <p className="info">03130732539</p>
                        </div>
                        <div className="col-md-4">
                            <h6 className="head">Social:</h6>
                            <a className="Logo" href="https://www.facebook.com/usamaashraf82">
                                <FontAwesomeIcon className="icon" icon={faFacebook} />
                            </a>
                            <a className="Logo" href="https://twitter.com/usamaashraf82">
                                <FontAwesomeIcon className="icon" icon={faTwitter} />
                            </a>
                            <a className="Logo" href="https://github.com/UsamaAshraf82">
                                <FontAwesomeIcon className="icon" icon={faGithub} />
                            </a>
                            <a className="Logo" href="https://stackoverflow.com/users/5894166/usama-ashraf">
                                <FontAwesomeIcon className="icon" icon={faStackOverflow} />
                            </a>
                        </div>
                    </div>
                </div>

                <a className="bot" href="https://github.com/UsamaAshraf82">
                    <p><FontAwesomeIcon className="icon" icon={faGithubSquare} />
                        &nbsp; Check My <strong>Works</strong>
                    </p>
                </a>

            </section>
        );
    }
}