import styled from "styled-components";

export const Spinner = styled.div`
    position: relative;
    left: 50%;
    top: 100px;
    z-index: 1;
    border : 16px solid #f3f3f3;
    border-top: 16px solid red;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin: -50px 0 0 -50px;
    animation: spin 2s linear infinite;
    -webkit-animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg);}
    }
`
