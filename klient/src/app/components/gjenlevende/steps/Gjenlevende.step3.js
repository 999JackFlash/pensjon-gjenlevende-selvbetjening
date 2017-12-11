import React from 'react';
import { FormattedMessage } from 'react-intl';

import { AlertStripeNavAnsatt } from 'nav-frontend-alertstriper';

import ElementWrapper from '../../../util/ElementWrapper';

import styles from './gjenlevende.step.less';

export const Step3 = () => (
    <ElementWrapper>
        <AlertStripeNavAnsatt
            className={styles.marginTopBottom}
            type="nav-ansatt"
        >
            <FormattedMessage id="Step3.Alertstripe.rettPaaGjenlevende" />
        </AlertStripeNavAnsatt>
    </ElementWrapper>
);
export default Step3;
