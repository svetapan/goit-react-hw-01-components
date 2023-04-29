import data from 'data.json';
import css from './Statistics.module.css';
import { StatisticsTitle } from '../StatisticsTitle/StatisticsTitle';
import { StatisticsStats } from '../StatisticsStats/StatisticsStats';

export const Statistics = () => {
    return (
        <section className={css.statistics}>
            <StatisticsTitle title="Upload stats" stats={data} />
            <StatisticsStats stats={data} />
        </section> 
    )
}