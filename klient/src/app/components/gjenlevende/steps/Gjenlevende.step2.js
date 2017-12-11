import React from 'react';

import AlertStripe from 'nav-frontend-alertstriper';
import { FormattedMessage } from 'react-intl';
import ElementWrapper from './../../../util/ElementWrapper';
import RadioGroup from '../../shared/RadioGroup';
import OpplysningPanel from '../../shared/OpplysningPanel';

import styles from './gjenlevende.step.less';

const radioData = [
    {
        label: <FormattedMessage id="Step2.radioData.sokeGjenlevende" />,
        value: 'gjenlevende'
    },
    {
        label: <FormattedMessage id="Step2.radioData.kanSelv" />,
        value: 'gjenlevende'
    }
];

const opplysningData = [
    {
        labelCode: 'Step2.OpplysningDataLabel.Arbeidsgiver',
        textCode: 'Step2.TextCode.Arbeidsgiver'
    },
    {
        labelCode: 'Step2.OpplysningDataLabel.Stillingsprosent',
        textCode: 'Step2.TextCode.Stillingsprosent'
    }
];

export const Step2 = () => (
    <ElementWrapper>
        <AlertStripe
            className={styles.marginBottomLarge}
            type="nav-ansatt"
        >
            Gjenlevende gjenlevende gjenlevende gjenlevende gjenlevende gjenlevende gjenlevende.
        </AlertStripe>
        <OpplysningPanel
            iconKind="arbeidsgiver"
            titleCode="Step2.TitleCode.Arbeid"
            opplysningData={opplysningData}
        />
        <RadioGroup className={styles.radioGruppe} name="soknadstype" listOfRadioData={radioData} />
    </ElementWrapper>
);
export default Step2;

