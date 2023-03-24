import styled from "styled-components";


export const ContainerSpinner = styled.div`
    min-height: 1000px;
    padding: 50px;

    h1 {
        text-align: center;
        margin: 4rem 0;
    }
    
`

export const BackgroundImage = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 1000px;
    padding: 50px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: contain;
    opacity: 0.1;
    z-index: -1; 
  }

  @media screen and (max-width: 768px) {
    &::before {
      background-position: center;
      background-size: contain;
    }
    padding: 20px;
    min-height: 100%;
  }

`

export const ComicDetails = styled.div `
        display: flex;
        align-items: center;
        justify-content: center;

        .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
        }

        h3 {
            font-size: 50px;
        }

        button {
        background-color: #fef200;
        color: black;
        font-size: 1.2em;
        border: none;
        border-radius: 10px;
        border: 2px solid black;
        padding: 10px 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        cursor: pointer;
    }

    button:hover {
        background-color:  #ec1b23;
        color: white;
    }

    button[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
        background-color: #fef200;
        color: black;
    }

    @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .details {
      margin: 0;
      max-width: 100%;
      text-align: center;
    }

    h3 {
      font-size: 32px;
    }

    button {
      font-size: 1em;
    }

    .comic-image {
      max-width: 50%;
      height: auto;
    }
  }
` 
