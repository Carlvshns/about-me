import * as C from './styled';
import { i18n } from '../../translate/i18n';

export const Linguagens = () => {

    return(
        <C.Container>
                <p id="linguagem-principal"><>{i18n.t('ability.mainLanguage')}</></p>
                <p><>{i18n.t('ability.secondLanguage')}</></p>
                <p><>{i18n.t('ability.aditionalAbilities')}</></p>
        </C.Container>
    );
}