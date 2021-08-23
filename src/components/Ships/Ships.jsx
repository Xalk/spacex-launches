import React, {useEffect, useState} from 'react';
import s from "./Ships.module.css"
import Ship from "../Ship/Ship";
import {LaunchesAPI} from "../../api/api";
import loader from "../../assets/images/loader.svg"

function Ships() {
    const [launches, setLaunches] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);


    useEffect(() => {
        if (fetching) {
            LaunchesAPI.getLaunches(currentPage).then(d => {
                setLaunches([...launches, ...d.docs]);
                setCurrentPage(prevState => prevState + 1);
            }).finally(() => setFetching(false));
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true);
        }
    }

    return (
        <div className={s.ships}>
            {
                launches.map(l => <Ship name={l.name} data={l.date_local}
                                        description={l.details}
                                        patch={l.links.patch.small}
                                        failures={l.failures}
                />)
            }
            {
                fetching ? <img className={s.loader} src={loader} alt=""/> : ""
            }
        </div>
    );
}

export default Ships;