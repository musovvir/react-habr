import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="ForbiddenPage">
            {t('У Вас нет доступа к странице')}
        </Page>
    );
};

export default ForbiddenPage;
