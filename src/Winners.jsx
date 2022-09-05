import './App.scss';
import { SingleWinner } from './Components/SingleWinner';

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
                    return <SingleWinner 
                            winner={winner} 
                            i={i} 
                            cars={cars}
                            />
                })}
            </tbody>
        </table>
    </div>
}