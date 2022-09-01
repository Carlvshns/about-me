import * as C from './styled';
import { useTypewriter} from 'react-simple-typewriter';

export const Sobre = () => {

    const {text} = useTypewriter({
        words: ['Olá! Me chamo Carlos. Que bom que você está aqui !', 'Seja bem vindo !', 'Agora deixe-me falar um pouco sobre mim.','Sou brasileiro, tenho o português como idioma nativo, estou buscando novos desafios aprendendo inglês a cada dia, me dedico sempre para crescer no mundo da programação aprendendo novas tecnologias, fortalecendo meus conhecimentos e aperfeiçoando minhas habilidades.']
      });

    return(
        <C.Container>
            <br />
            <h3>Carlos Dev</h3>
            <br />
            <img src="src/assets/dddd.jpg"/>
            <br /><br />
            <p>Desenvolvedor backend Java Web e API REST com conhecimentos nas principais
            tecnologias da atualidade como Spring Boot, WebFlux,  Spring Security,  Spring Cloud, Microservices, Thymeleaf,
            Swagger Doc, Mock, Integration e JUnit Tests. Prezo por um código limpo, legível e bem-escrito para
            facilitar o entendimento em possíveis manutenções.
            </p>

            <p>{text}</p>
        </C.Container>
    );
}