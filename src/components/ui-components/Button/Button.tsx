// import styled from 'styled-components'
import styled from "styled-components"
// This component aims to determine the reusable component
function Button (){
    return(
        <div>
            <Buttons>Save</Buttons>
        </div>
    )
}

export default Button

const Buttons = styled.button `
    color: white;
    width: 134px;
    height: 42px;
    margin: auto;
    display: block;
    background: white;
    color: blue;
    border-radius: 10px;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s; 
    border: 1px solid white;
`