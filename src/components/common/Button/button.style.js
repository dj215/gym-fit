import styled from 'styled-components'

const ButtonWrapper = styled.div`
    button{
        background-color:${props => props.info.backgroundColor ? props.info.backgroundColor : '50px'};
        border-radius:${props => props.info.borderRadius ? props.info.borderRadius : '50px'};
        border:${props => props.info.borderColor ? '1px solid' + props.info.borderColor : 'none'};
        outline:none;
        color:white;
        font-size:14px;
    }
`
export default ButtonWrapper