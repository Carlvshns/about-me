import React from 'react';
import { i18n } from '../../translate/i18n';
import * as C from './styled';

export const SelectLanguage = () =>{

  const I18N_STORAGE_KEY = 'i18nextLng';

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location = window.location;
  }

    return (

        <C.Container>
         <select onChange={handleSelectChange}>
           <option><>{i18n.t('availableLanguages.language')}</></option>
           <option value="pt-BR">PT</option>
           <option value="en-US">EN</option>
         </select>
       </C.Container>
    );
}