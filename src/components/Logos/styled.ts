import styled from "styled-components";

export const Container = styled.div`

    float: left;
    width: 690px;
    margin-left: 25px;
    background-color: #283142;
    border-radius: 10px;
    border: solid;
    border-color: #eb1018;
    color: blue;
    margin-top: 10px;

    img {
        float: left;
        margin-left: 11px;
    }

    @media screen and (max-width: 1035px){
        display: none;
    }
`;