import './input.css'

export const Input = ({inputPlaceholder, inputType}) => {
    return  <input type={inputType} placeholder={inputPlaceholder}/>
}