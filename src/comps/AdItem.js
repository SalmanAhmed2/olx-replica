import React, {useState} from 'react';

function AdItem(props){
    if("placeholder" in props){
    return(
        
        <div class="ad-item">
        <div className="anim poster placeholder"/>
        <div className="anim title placeholder"/>
        <div className="anim tagline placeholder"/>
        <div className="ftr">
            <div className="anim locationn placeholder"/>
            <div className="anim stamp placeholder"/>
        </div>
        
    </div>

    )
    }
}
export default AdItem;