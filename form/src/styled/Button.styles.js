import styled from 'styled-components'

export const Button = styled.button`
    ${(props) => {
        if (props.variant === "ghost") {
            return (`
            border-radius: 50px;
            border-width: 3px;
            background-color: transparent;
            border-color: ${props.color ? props.color : '#739600'};
            color: ${props.color ? props.color : '#739600'};;
        `)
        }
        else if (props.variant === "squared") {
            return (`
            background-color: ${props.color ? props.color : '#739600'};
            border-width: 0;
            color: white;
        `)
        }
        else return (`
            background-color: ${props.color ? props.color : '#739600'};
            border-radius: 50px;
            border-width: 0;
            color: white;
        `)
    }}
    width: 100px;
    height: 50px;
    margin: 5px;
    border-style: solid;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        background-color: lightblue;
    }
    &:active{
        border-width: 3px;
        border-color: orange;
    }
`