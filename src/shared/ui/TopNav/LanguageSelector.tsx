import { Wikis } from '@carbon/icons-react';
import { ordered } from '@tablecheck/locales';
import { Item } from '@tablecheck/tablekit-item';
import {
  LanguageSelector as TKLanguageSelector,
  View
} from '@tablecheck/tablekit-language-selector';
import { useTranslation } from 'react-i18next';

export function LanguageSelector(): JSX.Element {
  const [, { language, changeLanguage }] = useTranslation();
  const currentLocale = ordered.find((locale) => locale.code === language);

  return (
    <TKLanguageSelector
      locales={ordered}
      currentLanguage={language}
      shouldShowCloseIcon
      onChangeLanguage={(nextLanguage) => changeLanguage(nextLanguage)}
      view={View.Mobile}
      itemWidth="100%"
      renderTrigger={({ onClick, isOpen, ref }) => (
        <Item
          isSelected={isOpen}
          onClick={onClick}
          ref={ref}
          elemBefore={<Wikis size={24} />}
        >
          {currentLocale?.label}
        </Item>
      )}
    />
  );
}
