import styled from "styled-components";

export const Container = styled.div`

    select {

        position: absolute;
        z-index: 1;
        background-color: #eb1018;
        border-radius: 5px;
        border: none;
        font-family: 'Bebas Neue';
    }

    @media screen and (max-width: 1035px) {

        select {
            background-color: #283142;
            color: #13ba74;
            position: relative;
            margin-bottom: 5px;
        }
    }
`;