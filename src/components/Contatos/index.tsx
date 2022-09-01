import * as C from './styled';

export const Contatos = () => {

    return(
        <C.Container>
            <br id="mobile-espaco"/>
            <h3>Contatos</h3>
            <a href="https://linkedin.com">
                <img id="imagem-linkedin" src="src/assets/linkedin-logo.png" width="85" height="55"/>
            </a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=mugetsuvita@gmail.com&tf=cm">
                <img id="imagem-gmail" src="src/assets/gmail-logo.png" width="85" height="63"/>
            </a>
            <a href="https://instagram.com/Carlvssouza">
                <img id="imagem-instagram" src="src/assets/instagram-logo.png" width="85" height="55"/>
            </a>
        </C.Container>
    );
}