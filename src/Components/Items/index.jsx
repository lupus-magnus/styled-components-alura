import React from 'react'
import styled from "styled-components"
import ImageFilter from "../ImageFilter"

const Items = styled.div`
    box-shadow: 4px 4px 20px 0 rgba(0,0,0,0.1)
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;

    .text{
        font-weight: bold;
    }
`

const ItemWrapper = ({type, from, value}) => {
    return(
        <Item>
            <span className="text">{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Item>
    )
}

export default (props) => {
    return (
        <Items>
            {ImageFilter(props.type)}
            <ItemWrapper {...props}/>
            <span>{props.date}</span>
        </Items>
    )
}