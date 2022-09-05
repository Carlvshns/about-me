import styled from "styled-components";

export const Container = styled.div`
    
    margin-left: 10px;
    width: 340px;
    background-color: #283142;
    border-radius: 10px;
    border: solid;
    border-color: #eb1018;
    margin-top: 10px;
    float: left;
    color: #eb1018;
    font-family: 'Bebas Neue';

    #mobile-espaco {
        display: none;
    }

    img {

        margin-left: 20px;
    }

    #imagem-linkedin {

        margin-left: 1px;
    }

    #imagem-linkedin:hover {

        width: 70px;
        height: 44px;
    }

    #imagem-gmail:hover {

        width: 70px;
        height: 50px;
        margin-top: 6.5px;
        margin-bottom: 6.5px;
    }

    #imagem-instagram:hover {

        width: 70px;
        height: 44px;
    }

    @media screen and (max-width: 1035px){

        width: 320px;
        color: #13ba74;
        border: none;
        float: none;
        margin: 0 auto;
        margin-bottom: 5px;

        h3 {
            margin: 0px;
        }

        #mobile-espaco {
            display: block;
        }
    }
`;