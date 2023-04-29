import PropTypes from 'prop-types';
import css from './StatisticsStats.module.css';
import data from 'data.json';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const StatisticsStats = () => {
    return (
        <ul className={css.statList}>
            {data.map(({id, label, percentage}) => (
                <li key={id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}</span>
            </li>
            ))
            }
        </ul>
    );
}

StatisticsStats.prototype = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}