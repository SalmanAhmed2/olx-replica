import React, {useEffect,useState} from 'react';
import AdItem from './AdItem';

function HomePage(){

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if (loading){
            let _list = [];
            for (let i=0; i < 20; i++){
            _list.push(<AdItem placeholder={true}/>);
        }
        setList(_list);
    }
    },list);


    return(
        <React.Fragment>
        <div class="home-page">
            <div className="ad-ribbon flex aic">
                <img className="ad-ribbon flex aic" src="//statics.olx.com.pk/external/base/img/hero_bg_pk.jpg"/>
            </div>
        <div className="ad-list flex">
            {list}
        </div>
        <button className="load-more fontb c333 anim s16">
            Load More
        </button>
        </div>
                <div className="app-ribbon flex aic">
                <div className="img">
                        <img className="bl" src="https://statics.olx.com.pk/external/base/img/phone-app.png"/>
                    </div>
        
                <div className="meta">
                    <h2 className="title fontb s30 color">TRY THE OLX APP</h2>
                    <h2 className="slogan font s18 color">Buy, sell and find just about anything using the app on your mobile.</h2>
                </div>

                    <div className="links">
                    <h2 className="title fontb s20 color">GET YOUR APP TODAY</h2>
                    <div className="as flex">
                    <a href="#" className="noul bl"> <img src="//statics.olx.com.pk/external/base/img/playstore_2x.webp"/></a>
                    <a href="#" className="noul bl"> <img src="//statics.olx.com.pk/external/base/img/appstore_2x.webp"/></a>
                    </div>
                    </div>
                    </div>
                </React.Fragment>
    )
}
export default HomePage;