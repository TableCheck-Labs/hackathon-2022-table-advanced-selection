import { Wikis } from '@carbon/icons-react';
import { ordered } from '@tablecheck/locales';
import { Appearance, Button, ButtonShape } from '@tablecheck/tablekit-button';
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
      renderTrigger={({ onClick, ref }) => (
        <Button
          onClick={onClick}
          ref={ref}
          appearance={Appearance.Outline}
          shape={ButtonShape.Circular}
          /* eslint-disable-next-line react/no-unstable-nested-components */
          iconBefore={() => <Wikis size={24} />}
        >
          {currentLocale?.label}
        </Button>
      )}
    />
  );
}
