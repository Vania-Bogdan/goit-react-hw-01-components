import React from "react";
import styleStats from "../css/stats.module.css";
import PropTypes from "prop-types";

const Stats = ({title, stats}) => {
    return (
    <section className={styleStats.section}>
        {title ? <h2 className={styleStats.title}>{title}</h2> : ""}
        <ul className={styleStats.list}>
            {stats ? stats.map(stat => {
                return (
                    <li className={styleStats.item} key={stat.id}>
                        <span className={styleStats.label}>{stat.label}</span>
                        <span className={styleStats.percentage}>{stat.percentage + "%"}</span>
                    </li>
                );
            }) : []}
        </ul>
    </section>
    );
}

Stats.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    ).isRequired,
};

export default Stats;