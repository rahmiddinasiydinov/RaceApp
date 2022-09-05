import './SingleCar.scss';
import { GenerateCar } from '../Helpers/CarGenerate';

export const SingleCar = ({
    car, 
    i,
    handleDelete, 
    handleSelect, 
}) =>{

    const move = (e)=>{
        e.target.style.left = '100px';
        console.log(e.target);
    }
    
    return <div  key={i} className="race__path">
    <h3 className="race__car--title">{car?.name}</h3>
    <div className='race__car--btn'>
      <button className="btn race__btn--right btn__select" onClick={()=>handleSelect(car?.id)}>Select</button>
      <button className="btn btn__remove" onClick={()=>handleDelete(car?.id)}>Remove</button>
    </div>
     <div className="race__car">
     <span className={`car car-${car?.id}`} onClick={move}>{GenerateCar(car?.color)}</span>
     <span><i className="fa-solid fa-flag-checkered flag"></i></span>
     </div>
    <div className='race__car--btn'>
      <button className="btn btn__run race__btn--right">Run</button>
      <button className="btn btn__stop">Stop</button>
    </div>
   </div>
}