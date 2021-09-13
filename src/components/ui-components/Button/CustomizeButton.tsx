// import styled from 'styled-components'
import React from 'react'
type Props ={
    width: string,
    height: string,
    color: string,
    backgroundColor: string
}

// This component aims to determine the reusable component
export default class CustomizeButton extends React.Component<Props>{
    render(){
        return(
            <div>
                <button style={
                        {
                            width: `${this.props.width}`,
                            height: `${this.props.height}`,
                            color: `${this.props.color}`,
                            backgroundColor: `${this.props.backgroundColor}`
                        }
                }>
                    Save
                </button>
            </div>
        )
    }    
}



// const Button = styled.button `
//     color: white;
//     width: 134px;
//     height: 42px;
//     margin: auto;
//     display: block;
//     background: #010066;
//     border-radius: 10px;
//     border: 1px solid blue;
// `