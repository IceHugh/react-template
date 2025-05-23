import { I18nextProvider } from 'react-i18next';
import i18n from '@/I18n';
export  function I18Provider({ children }: { children: React.ReactNode }) {
	return (
		<I18nextProvider i18n={i18n} defaultNS="translation">
			{children}
		</I18nextProvider>
	);
}
