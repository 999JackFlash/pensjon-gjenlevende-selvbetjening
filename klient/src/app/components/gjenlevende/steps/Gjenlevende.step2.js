import React from 'react';

import AlertStripe from 'nav-frontend-alertstriper';

import ElementWrapper from './../../../util/ElementWrapper';
import RadioGroup from '../../shared/RadioGroup';
import OpplysningPanel from '../../shared/OpplysningPanel';

import styles from './gjenlevende.step.less';

const radioData = [
    {
        label: 'Ja, jag vil heller søke om foreldrepenger.',
        value: 'foreldrepenger'
    },
    {
        label: `Nei, jeg vil gå videre med denne søknaden og forstår at jeg 
                mister retten til foreldrepenger hvis søknaden om engangsstønad blir innvilget.`,
        value: 'gjenlevende'
    }
];

const opplysningData = [
    {
        labelCode: 'ARBEIDSGIVER',
        textCode: 'Nielsen Strikkfabrikk AS'
    },
    {
        labelCode: 'STILLINGSPROSENT',
        textCode: '100 prosent fast'
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
            title="Arbeid"
            opplysningData={opplysningData}
        />
        <RadioGroup className={styles.radioGruppe} name="soknadstype" listOfRadioData={radioData} />
    </ElementWrapper>
);
export default Step2;

