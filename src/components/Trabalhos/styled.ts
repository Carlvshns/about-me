import styled from "styled-components";

export const Container = styled.div`

    float: left;
    width: 690px;
    margin-left: 25px;
    background-color: #283142;
    border-radius: 10px;
    border: solid;
    border-color: #eb1018;
    color: #eb1018;
    font-weight: bolder;
    font-family: 'Bebas Neue';

    #mobile-espaco {
        display: none;
    }

    @media screen and (max-width: 1035px){

        width: 320px;
        color: #13ba74;
        border: none;
        float: none;
        margin: 0 auto;
        height: 422px;

        h3 {
            margin: 0px;
        }

        #mobile-espaco {
            display: block;
        }
    }
`;

export const Enderecos = styled.div`

    .imagem-api {
        float: left;
        margin-left: 17.5px;
        border-radius: 5px;
        border: solid;
        border-color: #eb1018;
    }

    .sobre-api {
        float: left;
        width: 390px;
        margin-left: 17.5px;
    }

    @media screen and (max-width: 1035px){

        .sobre-api {
            width: 310px;
            margin-left: 1px;
        }

        .imagem-api {
            margin-left: 35px;
            border-color: #13ba74;
        }
    }
`;