import css from './StatisticList.module.css'
import { getRandomHexColor } from 'helpers/randomColor';


export const StatisticList = ({id, label , percentage}) => 
{
   return (
                <li className={`${css.item} ${id} `} style={{backgroundColor:getRandomHexColor()}}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{`${percentage}%`}</span>
                </li>
    );
}
