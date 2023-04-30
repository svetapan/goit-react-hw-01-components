import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatisticsStats } from '../StatisticsStats/StatisticsStats';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatisticsStats statsData={stats} />
    </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
};
