import React from 'react';
import s from "./Ship.module.css"

function Ship({name, data, description, patch, failures}) {
    return (
        <div className={s.shipBlock}>
            <div className={failures.length > 0 ? s.innerBlock + " " + s.failStatus : s.innerBlock}>
                <div className={s.name}>
                    {name}
                </div>
                <div className={s.data}>
                    {data.slice(0, 16).replace("T", " ")}
                </div>
                <div className={s.line}></div>
                <div className={s.description}>
                    {description ? description : "No description"}
                </div>


                <div className={s.patch}>
                    <img src={patch} alt=""/>
                </div>
            </div>

        </div>
    );
}

export default Ship;