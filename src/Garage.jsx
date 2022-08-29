import { GenerateCar } from "./Helpers/CarGenerate"
import './App.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Garage = ({cars})=>{
  console.log(cars);
    return <div className="race--wrapper">
         {cars?.map(car=>{
            return <div className="race__path">
             <h3 className="race__car--title">{car?.name}</h3>
             <div className='race__car--btn'>
               <button className="btn race__btn--right btn__select">Select</button>
               <button className="btn btn__remove">Remove</button>
             </div>
              <div className="race__car">
              <span className="car">{GenerateCar(car?.color)}</span>
              <span><i class="fa-solid fa-flag-checkered flag"></i></span>
              </div>
             <div className='race__car--btn'>
               <button className="btn btn__run race__btn--right">Run</button>
               <button className="btn btn__stop">Stop</button>
             </div>
               
            </div>
         })}
    </div>
}