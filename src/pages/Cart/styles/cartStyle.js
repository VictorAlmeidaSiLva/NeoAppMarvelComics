import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;

`

export const ListCart = styled.div `

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    button {
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background-color: #ec1b23;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    }

    button:hover {
        background-color:  #fef200;
        color: black;
    }

    p {
        font-weight: bold;
        font-size: 100%;
        white-space: nowrap;
        overflow: hidden;            
        text-overflow:    ellipsis;
        width: 150px;
    }

`

export const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    justify-content: center;

    img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
    }
`

export const Amount = styled.div`
    h2 {
        font-weight: bold;
    }
    
`