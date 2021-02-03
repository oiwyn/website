import './404.scss';
import PageTitle from './PageTitle';
import Twemoji from './Twemoji';

const TITLE = "404 | Not Found |";

export default function NotFound(){
    return(
        <div className="help">
            <div className="notfound">
            <PageTitle title={TITLE}/>
                <div className="top">
                    <h1><Twemoji emoji="😖"/> 404 <Twemoji emoji="😖"/></h1>
                </div>
                <p>You took a wrong turn.</p>
            </div>
        </div>
    )
}