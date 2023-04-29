import PropTypes from 'prop-types';
import css from './StatisticsTitle.module.css';
import data from 'data.json';

export const StatisticsTitle = () => {
    const {title} = data;
    return  (title === "true" && (data.map (el => (
               <h2 key={el.title} className={css.title}>{el.title}</h2>  
            ))
        )
    )
}

StatisticsTitle.prototype = {
    title: PropTypes.string,
}