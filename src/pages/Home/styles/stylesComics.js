import styled from "styled-components";


export const Container = styled.div`
    min-height: 1000px;
    padding: 50px;
    h1 {
        text-align: center;
        margin: 4rem 0;
    }

`

export const ComicsList = styled.ul`
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;
        

`

export const Comic = styled.li`
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    img {
        max-width: 100%;
        max-height: 250px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
        font-size: 100%;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;            
        text-overflow:    ellipsis;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
    
    p {
        white-space: nowrap;
        width: 100%;
        overflow: hidden;            
        text-overflow:    ellipsis;
    }
`