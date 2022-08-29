import './App.scss';
import { LittleCarGenerater } from './Helpers/LittleCarGenerate';
export const Winners = ({winners, cars})=>{

    return <div className="winners">
        <h2 className="garage__title">Winners({winners?.length})</h2>
        <table>
            <thead  className='winners__table--header'>
                <tr>
                    <th className='winners__table--cell'>№</th>
                    <th className='winners__table--cell'>Car</th>
                    <th className='winners__table--cell'>Name</th>
                    <th className='winners__table--cell'>Wins</th>
                    <th className='winners__table--cell'>Best time</th>
                </tr>
            </thead>
            <tbody>
                {winners?.map((winner, i)=>{
                    return <tr key={i}>
                        <td className='winners__table--cell'>{i+1}</td>
                        <td className='winners__table--cell'>{LittleCarGenerater(cars?.find(car=>car?.id===winner?.id)?.color)}</td>
                        <td className='winners__table--cell'>{cars?.find(car=>car?.id===winner?.id)?.name}</td>
                        <td className='winners__table--cell'>{winner?.wins}</td>
                        <td className='winners__table--cell'>{winner?.time}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}