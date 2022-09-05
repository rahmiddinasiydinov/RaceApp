import styles from './CustomButton.module.scss';

export const CustomButton = ({
    handleSubmit, 
    text
})=>{

    return <button onClick={handleSubmit} 
                   className={`${styles.button}`}
                   >
                   {text}
           </button>
}