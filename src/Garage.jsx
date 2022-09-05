import { GenerateCar } from "./Helpers/CarGenerate"
import './App.scss';
import { getGarage } from "./Redux/ActionsCreators";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { Form } from "./Components/Form";
import { SingleCar } from "./Components/SingleCar";
export const Garage = ({cars})=>{

    const [newName, setNewName] = useState('');
    const [newColor, setNewColor] = useState('#000000');
    const [selectedName, setSelectedName] = useState('');
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [selected, setSelected] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCars, setPageCars] = useState([]);
    const dispatch =useDispatch();
   
    const handleNewCar = ()=>{
        if(newName?.length && newColor?.length){
            axios.post('/garage', {name:newName, color:newColor}).then(res=>{
                console.log(res);
                if(res.status===201){
                 dispatch(getGarage());
                 setNewColor('#000000');
                 setNewName('');
                }
            });
        }
    }

    const handleUpdateCar=()=>{
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
         setSelectedName(selectedCar?.name);
    }

    const handleDelete = id =>{
       axios.delete(`garage/${id}`).then(res=>{
        if(res.status===200){
            dispatch(getGarage());
        }
       })
    }

    const handlePrev=()=>{
        setCurrentPage(currentPage-1)
    }

    const handleNext=()=>{
        setCurrentPage(currentPage+1)
    }


//    const move = elem =>{
//     console.log(elem);
//        elem.style.left = parseInt(elem.style.left)+100+'px';
//    }
    // const runEngine = (id)=>{
    //     axios.patch(`engine?id=${id}&status=started`).then(res=>{
    //      const {velocity, distance} = res?.data;
    //      console.log(velocity, distance);
    //      const car = document.querySelector(`.car-${id}`);
    //      setInterval(move(car), 1000);
    //     });
    //  }

  

    useEffect(()=>{
       setPageCars(cars?.slice((currentPage-1)*4,  (currentPage-1)*4+4));
       console.log((currentPage-1)*4, (currentPage-1)*4+4);
       console.log(cars?.slice((currentPage-1)*4,  (currentPage-1)*4+4));
    }, [currentPage, cars])

    
    return <div className="race--wrapper">

        <h2 className="garage__title">Garage({cars?.length})</h2>

        <Form 
              handleSubmit={handleNewCar} 
              setColor={setNewColor} 
              setName={setNewName}
              colorolor={newColor}
              name={newName}
              buttonText = {"Create"}
        />
        <Form
              handleSubmit={handleUpdateCar}
              setColor={setSelectedColor}
              setName={setSelectedName}
              color = {selectedColor}
              name = {selectedName} 
              buttonText = {"Update"}
            />
 
         {pageCars?.map((car, i)=>{
            return <SingleCar
                    car={car}
                    i={i}
                    handleDelete={handleDelete}
                    handleSelect={handleSelect}

            />
         })}
         <div className="race__navigation">
            <button className="race__navigation--button nav__prev" disabled={currentPage<=1} onClick={handlePrev}>Prev</button>
            <button className="race__navigation--button nav__page">{`${currentPage}-page`}</button>
            <button className="race__navigation--button nav__next" disabled={currentPage*4>=cars?.length} onClick={handleNext}>Next</button>
            </div>
    </div>
}