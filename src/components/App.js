import './App.scss';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import NotFound from './404';
import Home from './Home';
import Work from '../components/work/Work';
import Resume from '../components/resume/Resume';
import Footer from './Footer';
import {Helmet} from 'react-helmet';

export default function App() {
    return(
        <div className="main-container">
            <Helmet titleTemplate="%s Owynn" defaultTitle="Owynn Kenli | A designer, coder, and sometimes both"/>
            <nav>
                <Link to="/">
                    <div className="brand-text">
                            Owynn Kenli
                    </div>
                </Link>
                <ul>
                    <Link to="/work">
                        <li>
                            Work
                        </li>
                    </Link>
                    <Link to="/resume">
                        <li>
                            Resume
                        </li>
                    </Link>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/work" component={Work}/>
                <Route path="/resume" component={Resume}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer />
        </div>
    )
}