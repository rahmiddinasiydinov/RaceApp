import './SingleWinner.scss';
import { LittleCarGenerater } from '../Helpers/LittleCarGenerate';
export const SingleWinner = ({winner, i, cars}) => {
    
    return <tr key={i}>
    <td className='winners__table--cell'>{i+1}</td>
    <td className='winners__table--cell'>{LittleCarGenerater(cars?.find(car=>car?.id===winner?.id)?.color)}</td>
    <td className='winners__table--cell'>{cars?.find(car=>car?.id===winner?.id)?.name}</td>
    <td className='winners__table--cell'>{winner?.wins}</td>
    <td className='winners__table--cell'>{winner?.time}</td>
    </tr>
}