import css from './Statistics.module.css'
import { StatisticList } from 'components/StatisticList/StatisticList';


export const Statistics = ({title , stats}) => 
{
   return ( <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css['stat-list']}>
           {stats.map((stat) => {
               return (<StatisticList  key={stat.id} id={stat.id} label={stat.label} percentage={stat.percentage}/>)
               })}
            </ul>
        </section>);
}