import PropTypes from 'prop-types';
import css from './StatsBord.module.css';

export const StatsBord = ({ stats }) => {
  return (
    <ul className={css.stats}>
      {Object.entries(stats).map((el, index) => (
        <li key={index} className={css.item}>
          <span className={css.label}>{el[0]}</span>
          <span className={css.quantity}>{el[1]}</span>
        </li>
      ))}
    </ul>
  );
};

StatsBord.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
