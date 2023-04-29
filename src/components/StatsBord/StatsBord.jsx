import PropTypes from 'prop-types';
import css from './StatsBord.module.css';
import user from 'user.json';

export const StatsBord =() => {
    const {stats} = user;
    return (
        <ul className={css.stats}>
            {Object.entries(stats).map((el, index) => (
                <li key={index} className={css.item}>
                    <span className={css.label}>{el[0]}</span>
                    <span className={css.quantity}>{el[1]}</span>
                </li>
            ))}
        </ul>);
}

StatsBord.propTypes = {
    stats: PropTypes.exact ({
        followers: PropTypes.string.isRequired,
        views: PropTypes.string.isRequired,
        likes: PropTypes.string.isRequired,
    })
}
