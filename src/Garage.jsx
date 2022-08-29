import { GenerateCar } from "./Helpers/CarGenerate"
import './App.scss';
import { getGarage } from "./Redux/ActionsCreators";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
export const Garage = ({cars})=>{
    const [newName, setNewName] = useState('');
    const [newColor, setNewColor] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selected, setSelected] = useState(-1);
    const dispatch =useDispatch();
    const handleNewCar = (e)=>{
        e.preventDefault();
        if(newName?.length && newColor?.length){
            axios.post('/garage', {name:newName, color:newColor}).then(res=>{
                console.log(res);
                if(res.status===201){
                 dispatch(getGarage());
                 setNewColor('');
                 setNewName('');
                }
            });
        }
    }
    const handleUpdateCar=(e)=>{
        e.preventDefault();
        if(selected>=0){
            axios.put(`garage/${selected}`, {name:selectedName, color:selectedColor}).then(res=>{
                console.log(res);
                if(res.status===200){
                 dispatch(getGarage());
                 setSelectedColor('');
                 setSelectedName('');
                 setSelected(-1);
                }
            });
        }
        

    }
    const handleSelect =  id =>{
        setSelected(id);
        const selectedCar = cars?.find(car=>car.id===id);
         setSelectedColor(selectedCar?.color);
         selectedName(setSelectedName(selectedCar?.name));
    }
    const handleDelete = id =>{
       axios.delete(`garage/${id}`).then(res=>{
        if(res.status===200){
            dispatch(getGarage());
        }
       })
    }
    return <div className="race--wrapper">
        <h2 className="garage__title">Garage({cars?.length})</h2>
        <form action="" className="form" onSubmit={handleNewCar}>
            <label className="form__label"> Name:
             <input value={newName} onChange={(e)=>{
                setNewName(e.target.value)
            }} className="form__input" type="text"/></label>
            <label className="form__label"> Color: 
            <input value={newColor} onChange={(e)=>{
                setNewColor(e.target.value)
            }} className="form__input form__input--color" type="color"/>
            </label>   
            <button className="form__btn">Create</button> 

         </form>
         <form action="" className="form" onSubmit={handleUpdateCar}>
            <label className="form__label"> Name: 
            <input value={selectedName} onChange={(e)=>{
                setSelectedName(e.target.value)
            }} className="form__input" type="text"/></label>
            <label className="form__label"> Color: 
            <input value={selectedColor} onChange={(e)=>{
                setSelectedColor(e.target.value);
            }} className="form__input form__input--color" type="color"/></label>   
            <button className="form__btn">Update</button> 
         </form>
         {cars?.map((car, i )=>{
            return <div  key={i} className="race__path">
             <h3 className="race__car--title">{car?.name}</h3>
             <div className='race__car--btn'>
               <button className="btn race__btn--right btn__select" onClick={()=>handleSelect(car?.id)}>Select</button>
               <button className="btn btn__remove" onClick={()=>handleDelete(car?.id)}>Remove</button>
             </div>
              <div className="race__car">
              <span className="car">{GenerateCar(car?.color)}</span>
              <span><i className="fa-solid fa-flag-checkered flag"></i></span>
              </div>
             <div className='race__car--btn'>
               <button className="btn btn__run race__btn--right">Run</button>
               <button className="btn btn__stop">Stop</button>
             </div>
               
            </div>
         })}
    </div>
}