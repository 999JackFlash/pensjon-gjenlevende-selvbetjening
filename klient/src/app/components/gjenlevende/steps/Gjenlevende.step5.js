import React from 'react';

import { AlertStripeNavAnsatt } from 'nav-frontend-alertstriper';
import { FormattedMessage } from 'react-intl';
import ElementWrapper from '../../../util/ElementWrapper';
import OpplysningPanel from '../../shared/OpplysningPanel';

import styles from './gjenlevende.step.less';


const opplysningData = [
    {
        labelCode: 'Step5.opplysningData.labelCode1',
        textCode: 'Step5.opplysningData.textCode1'
    },
    {
        labelCode: 'Step5.opplysningData.labelCode2',
        textCode: 'Step5.opplysningData.textCode2'
    },
    {
        labelCode: 'Step5.opplysningData.labelCode3',
        textCode: 'Step5.opplysningData.textCode3'
    }
];

export const Step5 = () => (
    <ElementWrapper>
        <AlertStripeNavAnsatt
            className={styles.marginTopBottom}
            type="nav-ansatt"
        >
            <FormattedMessage id="Step5.Alertstripe.rettPaaGjenlevende" />
        </AlertStripeNavAnsatt>
        <OpplysningPanel
            titleCode="Step5.OpplysningPanel.titleCode"
            iconKind="stonad"
            opplysningData={opplysningData}
        />
    </ElementWrapper>
);
export default Step5;
