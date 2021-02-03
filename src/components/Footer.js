import './Footer.scss';
import {Link} from "react-router-dom";

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="left">
                    <div className="brand-and-email">
                        <div className="brand-logo-small"/>
                        <a href="mailto:owynn@outlook.sg">
                            <h2>owynn@kenli.ng</h2>
                        </a>
                    </div>
                    <p>© 2020</p>
                </div>
                <div className="right">
                    <div className="links">
                        <h2>Explore</h2>
                        <Link to="/work">
                            <p>Work</p>
                        </Link>
                        <Link to="/resume">
                            <p>Resume</p>
                        </Link>
                    </div>
                    <div className="links">
                        <h2>Social</h2>
                        <a href="https://www.linkedin.com/in/owynn/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://twitter.com/oiwyn">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}