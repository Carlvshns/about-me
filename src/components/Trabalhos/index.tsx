import * as C from './styled';
import { i18n } from '../../translate/i18n';

export const Trabalhos = () => {
    return (
        <C.Container>
            <br id="mobile-espaco"/>
            <h3><>{i18n.t('works.titleWork')}</></h3>

            <C.Enderecos>
                <p><>{i18n.t('works.aboutWork')}</></p>
                <div>
                    <div className="imagem-api">
                            <img src="https://drive.google.com/uc?export=download&id=1Ct7XA9mNYDsOZUQmLWFwW0bv3vpKoNMG" width="240" height="144"></img>
                        <br />
                    </div>
                
                    <br /><br />
                    <div className="sobre-api">
                        <p><>{i18n.t('works.aboutApi')}</></p>
                        <p><>{i18n.t('works.sourceCode')}</> <a href="https://github.com/Carlvshns"><>{i18n.t('works.clickToGit')}</></a></p>
                        <br/>
                    </div>
                </div>
            </C.Enderecos>
        </C.Container>
    );
}