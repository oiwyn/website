import './Work.scss';
import {useEffect, useState} from 'react';
import {NavLink, Route} from 'react-router-dom';
import {workContent} from './workData';
import PageTitle from '../PageTitle';
import Twemoji from '../Twemoji';
import ReactMarkdown from 'react-markdown/with-html';

let TITLE = "Work by";

function WorkIntro(){

    return(
        <div>
            <article className="default">
                <h1>
                    I design and develop joyful product experiences with <b>beautiful</b> and <em>delighful</em> design experiences.
                <br/><br/>
                    Tap any project above to find out about my work more.
                </h1>
            </article>
        </div>
    )
}

function WorkDetail({match}){
    const detail = workContent.find(({id}) => id === match.params.workId)
    
    const CaseMarkdown = () =>{ //used to render markdown file from each folder to each work page; src: https://jacobwicks.github.io/2020/06/19/rendering-markdown-and-resizing-images-with-react-markdown.html
        const [input, setInput] = useState("")
        const getInput = async() => {
            const casePath = detail.desc.case.url
            try {
                const caseFile = await fetch(casePath)
                const caseText = await caseFile.text()
                setInput(caseText)
            } catch(err){
                console.error("Problem loading the case study file!", err)
            }
        }
    
        useEffect(() => {
            getInput();
        }, []); 

        return <ReactMarkdown
                escapeHtml={false}
                source={input}
                />
    }

    return(
        <div>
            <PageTitle title={detail.name+" by"}/>
            <article>
                <h1>{detail.name}</h1>
                <div className="content">
                    <div className="header">
                        <div className="cover">
                            <img src={detail.misc.image.cover} alt={"cover-"+detail.id}/>
                        </div>
                        <div className="properties">
                            <div>
                                <span>Type</span>
                                <p>{detail.desc.type}</p>
                            </div>
                            <div>
                                <span>Client</span>
                                <p>{detail.desc.client}</p>
                            </div>
                            {detail.desc.credits !== null ?  
                                (
                                <div className="credits">
                                    <span>Credits</span>
                                    <p>{detail.desc.credits}</p>
                                </div>  
                                ) : null}
                            <div>
                                <span>Tools Used</span>
                                <p>{detail.desc.tools}</p>
                            </div>
                        </div>
                    </div>
                    <div className="post">
                        <h2>Background -&gt;</h2>
                        <p>{detail.desc.content}
                        {detail.misc.live !== false ? 
                            (
                                <div>
                                    <a href={detail.misc.live} target="_blank" rel="noreferrer"><Twemoji emoji="🔗"/>&nbsp;&nbsp;View Site</a>
                                </div>
                            ) : null }
                        {detail.desc.case.exist !== false ?
                            (
                                <div className="journal">
                                    <CaseMarkdown/>
                                </div>
                            ) : null}
                        </p>
                    </div>
                    <div className="media">
                        <h2>In Action -&gt;</h2>
                        <div className="misc">
                            {detail.misc.figma.value === true ? 
                                    (
                                        <div>
                                            <div className="tabbed">
                                                <input type="radio" id="tab1" name="tabs" checked></input>
                                                <input type="radio" id="tab2" name="tabs" ></input>
                                                <ul className="tabs">
                                                    <li className="tab"><label for="tab1">Screenshot</label></li>
                                                    <li className="tab"><label for="tab2">Live Prototype</label></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <img src={detail.misc.image.content} alt={"content-"+detail.id}/>
                                                </div>
                                                <div className="tab-content">
                                                    <iframe id={detail.id} title={detail.title} src={"https://www.figma.com/embed?embed_host=owynn&url="+detail.misc.figma.link} allowFullScreen/>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="tabbed">
                                                <input type="radio" id="tab1" name="tabs" checked></input>
                                                <ul className="tabs">
                                                    <li className="tab"><label for="tab1">Screenshot</label></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <img src={detail.misc.image.content} alt={"content-"+detail.id}/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}


function Work({match}){

    const [filter, setFilter] = useState("all");
    function onFilter(e){
        setFilter(e)
    }

    return(
        <div className="work">
            <PageTitle title={TITLE}/>
            <div className="container">
                <div className="filter">
                    <span>Filter by: </span>
                    <button
                        onClick={(filter) => onFilter(filter.target.value)}
                        value="all"
                        className="tag"
                        >
                        All
                    </button>
                    <button
                        onClick={(filter) => onFilter(filter.target.value)}
                        value="personal"
                        className="tag"
                        >
                        Personal
                    </button>
                    <button
                        onClick={(filter) => onFilter(filter.target.value)}
                        value="professional"
                        className="tag"
                        >
                        Professional
                    </button>
                </div>
                <section className="work-box-area">
                    {workContent.map((work) => {
                        if (filter === "all"){
                            return(
                                <NavLink to={`${match.path}/${work.id}`} key={work.id} activeClassName="active">
                                    <div className="work-box">
                                        <img src={work.image} className="image" alt={work.name}></img>
                                        <div className="work-title">
                                            <h3>{work.name.length > 16 ? work.name.slice(0, 17)+"..." : work.name}</h3>
                                            <button>-&gt;</button>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        } else if (filter === work.filter){
                            return(
                                <NavLink to={`${match.path}/${work.id}`} key={work.id} activeClassName="active">
                                    <div className="work-box">
                                        <img src={work.image} className="image" alt={work.name}></img>
                                        <div className="work-title">
                                            <h3>{work.name}</h3>
                                            <button>-&gt;</button>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        }
                        return(
                            undefined
                        )
                    }
                )}
                </section>
                <section className="page">
                    <div className="work-detail">
                        <Route exact path={match.path} component={WorkIntro}/>
                        <Route path={`${match.path}/:workId`} component={WorkDetail}/>
                    </div>
                </section>
            </div>
        </div>
    )
    
}

export default Work;