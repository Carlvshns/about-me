import styled from "styled-components";

export const Container = styled.div`

    float: left;
    width: 340px;
    margin-left: 25px;
    background-color: #283142;
    border-radius: 10px;
    border: solid;
    border-color: #eb1018;
    margin-top: 10px;
    text-align: start;
    color: #eb1018;
    font-weight: bolder;
    font-family: 'Bebas Neue';

    p {

        margin-left: 10px;
    }

    #linguagem-principal {

        margin-top: 8px;
    }

    @media screen and (max-width: 1035px){

        width: 320px;
        color: #13ba74;
        border: none;
        float: none;
        margin: 0 auto;
    }
`; 