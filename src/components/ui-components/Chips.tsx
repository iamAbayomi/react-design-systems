import  React from 'react'
import styled from 'styled-components'

type MyProps ={
    chipsText: string,
    backgroundColor: string
}

// let backgroundColor = 'green'


const Chips: React.FC<MyProps> = (MyProps) =>{
    
        return(
            <div>
                <ChipsCard className="chips" style={{ backgroundColor: `${MyProps.backgroundColor}` }}>
                    <p className="chips-text">{MyProps.chipsText}</p>
                </ChipsCard>
            </div>
        )
}



const ChipsCard = styled.div `
    box-sizing: border-box;
    color: white;
`

export default Chips