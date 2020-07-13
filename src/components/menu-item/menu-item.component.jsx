import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss"

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    console.log(history);
    return(
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        
            <div className="background-image" style={{ background: `url(${imageUrl})` }} />

            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                 <span className="subtitle">Shop now!!</span>
            </div>
         </div>
    )
}
export default withRouter(MenuItem);