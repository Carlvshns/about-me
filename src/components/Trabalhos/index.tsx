import * as C from './styled';

export const Trabalhos = () => {
    return (
        <C.Container>
            <br id="mobile-espaco"/>
            <h3>Meus trabalhos:</h3>

            <C.Enderecos>
                <p>Neste projeto pessoal implementei um website criado para reproduzir vídeos, mas
                especificamente trailer de filmes, com algumas adaptações seria completamente possível
                transformá-lo em um site de filmes/streaming real. Feito com backend em Java 11
                e frontend em TypeScript com React com uma interface interessante.</p>
                <div>
                    <div className="imagem-api">
                        <a href="fancy-mousse-f0c9aa.netlify.app/">
                            <img src="https://drive.google.com/uc?export=download&id=1Ct7XA9mNYDsOZUQmLWFwW0bv3vpKoNMG" width="240" height="144"></img>
                        </a>
                        <br />
                    </div>
                
                    <br /><br />
                    <div className="sobre-api">
                        <p>Existem 2 API REST Java neste projeto, um para hospedar arquivos e vídeos e outro 
                        com as informações necessárias para que o React busque todas propriedades e 
                        renderize a aplicação para o usuário final.</p>
                        <p>Confira o Codigo Fonte deste e outros projetos <a href="https://github.com/Carlvs">clicando aqui &lt;/&gt;</a></p>
                        <br/>
                    </div>
                </div>
            </C.Enderecos>
        </C.Container>
    );
}