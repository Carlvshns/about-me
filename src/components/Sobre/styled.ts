import styled from 'styled-components';

export const Container = styled.div`

    float: left;
    margin-bottom: 10px;
    width: 320px;
    height: 564.391px;
    background-color: #283142;
    border-radius: 10px;
    border: solid;
    border-color: #eb1018;
    color: #eb1018;
    font-weight: bolder;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.30);
    font-family: 'Bebas Neue';

    h3{
        
        font-weight: bolder;
        width: 200px;
        background: linear-gradient(180deg, #102347 0%, #181818 100%);
        border-radius: 10px;
        margin: 0 auto;
        padding: 5px;
    }

    img{

        width: 228px;
        height: 228px;
        border-radius: 50%;
        border: solid;
        border-color: #eb1018;
    }

    @media screen and (max-width: 1035px){

        width: 320px;
        height: 554.391px;
        border: none;
        color: #13ba74;
        float: none;
        margin: 0 auto;

        img{
            border-color: #13ba74;
        }
    }
`;