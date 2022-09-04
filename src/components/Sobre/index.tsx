import * as C from './styled';
import { useTypewriter} from 'react-simple-typewriter';
import dante from '../../assets/dante.png';
import { i18n } from '../../translate/i18n';

export const Sobre = () => {

    const {text} = useTypewriter({
        words: [i18n.t('typeWriters.helloMessage'), i18n.t('typeWriters.wellcomeMessage'), i18n.t('typeWriters.nowMessage'), i18n.t('typeWriters.aboutMeMessage')]
      });

    return(
        <C.Container>
            <br />
            <h3>Carlos Dev</h3>
            <br />
            <img src={dante} width="228" height="228"/>
            <br /><br />
            <p><>{i18n.t('skills.mySkills')}</></p>

            <p>{text}</p>
        </C.Container>
    );
}