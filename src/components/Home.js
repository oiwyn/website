import './Home.scss';
import {Link} from 'react-router-dom';
import PageTitle from './PageTitle';
import {workContent} from '../components/work/workData';

const TITLE = "";

export default function Home(){
    return(
        <div className="container">
            <PageTitle title={TITLE}/>
            <section className="hero">
                <div className="text">
                    <h1>
                    Designer, coder, and sometimes both.
                    </h1>
                    <h1>
                    I'm a graphic and user interface designer who
                    loves creating <b>beautiful</b> and <em>delightful</em> design experiences.
                    </h1>
                    <h1>
                    Currently a UI/UX designer in Taipei, TW.
                    </h1>
                </div>
            </section>
            <section className="my-work">
                <Link to="/work">
                    <h1>
                        Recent Work
                    </h1>
                </Link>
                <div className="work-container">
                    <div className="work-area">
                        {workContent.slice(0, 4).map(({name, image, desc, id}) => (
                                <Link to={`work/${id}`} key={id}>
                                    <div className="work-box">
                                        <img src={image} className="image" alt={name}></img>
                                        <div className="text">
                                            <div className="left">
                                                <h2>    
                                                    {name}
                                                </h2>
                                                <p>
                                                    {desc.type}
                                                </p>
                                            </div>
                                            <div className="right">
                                                <button>-&gt;</button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                </div>
                <div className="view-more">
                    <Link to="/work">
                        <h2>View All -&gt;</h2>
                    </Link>
                </div>
            </section>
            <section className="links-container">
                <div className="links-area">
                    <Link to="/work">
                        <h1>Work</h1>
                    </Link>
                    <Link to="/resume">
                        <h1>Resume</h1>
                    </Link>
                </div>
            </section>
        </div>
    )
}