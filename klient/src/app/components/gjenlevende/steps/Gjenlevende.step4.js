import React from 'react';

import { Undertittel } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';
import { FormattedMessage } from 'react-intl';
import CheckboxWithLine from '../../shared/CheckboxWithLine';
import ElementWrapper from '../../../util/ElementWrapper';

import styles from './gjenlevende.step.less';

const checkboxData = [
    {
        label: 'Step4.CheckboxData.lableCode.navn',
        text: 'Step4.CheckboxData.textCode.navn'
    },
    {
        label: 'Step4.CheckboxData.lableCode.fnr',
        text: 'Step4.CheckboxData.textCode.fnr'
    }
];
const checkboxData2 = [
    {
        label: 'Step4.CheckboxData.lableCode.navn',
        text: 'Step4.CheckboxData.textCode2.navn'
    },
    {
        label: 'Step4.CheckboxData.lableCode.fnr',
        text: 'Step4.CheckboxData.textCode2.fnr'
    }
];
export const Step4 = () => (
    <ElementWrapper>
        <AlertStripe
            className={styles.marginTopBottom}
            type="nav-ansatt"
        >
            <FormattedMessage id={'Step4.AlertStripe.text'} />
        </AlertStripe>
        <Undertittel className={styles.marginTopBottom}>Gjelder søknaden dette barnet?</Undertittel>
        <CheckboxWithLine content={checkboxData} className={styles.marginTopBottom} />
        <CheckboxWithLine content={checkboxData2} className={styles.marginTopBottom} />
    </ElementWrapper>
);

export default Step4;
