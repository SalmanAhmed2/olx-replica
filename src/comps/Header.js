import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../ui/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header(){
    const nav = [
        {ID: 1, label: "Mobile Phones"},
        {ID: 2, label: "Cars"},
        {ID: 3, label: "Motorcycles"},
        {ID: 4, label: "Houses"},
        {ID: 5, label: "TV-Video-Audio"},
        {ID: 6, label: "Tablets"},
        {ID: 7, label: "Land & Plots"},
    ]
    return(
        <React.Fragment>
        <div class="header fixed flex aic">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="location rel flex aic">
            <SearchIcon className="icon-search ico s24"/>
            <input placeholder="Pakistan" className="label s15 font"/>
            <ArrowDropDownIcon className=" go s24"/>
            </div>
            <div className="search flex aic">
                <input type="text" placeholder="Find Cars, Mobile Phones and more... " className="query font s15" />
                <button className="icon-search go s24 cfff"><SearchIcon /></button>
            </div>
            <div className="actions flex aic ">
                <Link to="/account/signin" className=" color fontb s16 noul noulh">Sign in</Link>
            <button className="sell flex aic color">
            
                  <AddIcon/>
                <h2 className=" s18 fontb">Sell</h2>
            </button>
            </div>
        </div>

        <div class="hnav fixed flex aic">
            
            <button className="view-cates flex aic color">
            <h2 className=" s18 font color">ALL CATEGORIES</h2>

                <ArrowDropDownIcon className="s24"/>

            </button>
            {
                nav.map(item => {
                    return (
                        <Link to={"/browser/" + item.ID}className="noul noulh bl font color s15">{item.label}</Link>
                    )
                })
            }
        </div>
        <div className="hclr"></div>
        </React.Fragment>
    )
}
export default Header;