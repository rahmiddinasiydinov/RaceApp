import './Form.scss';
import { CustomButton } from './CustomButton';

export const Form = ({
    handleSubmit, 
    setColor,
    setName, 
    name, 
    color, 
    buttonText
})=>{

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleColor = (e) =>{
        setColor(e.target.value)
    }

    return <div>
         <label className="form__label"> Name:
         <input value={name}
                onChange={handleName} 
                className="form__input" 
                type="text"/>
         </label>
         <label className="form__label"> Color: 
            <input value={color} 
                   onChange={handleColor} 
                   className="form__input form__input--color" 
                   type="color"/>
        </label>   
            <CustomButton 
            handleSubmit={handleSubmit} 
            text={buttonText}/>
    </div> 
}