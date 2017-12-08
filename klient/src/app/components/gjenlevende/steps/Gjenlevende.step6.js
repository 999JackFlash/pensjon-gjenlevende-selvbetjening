import React from 'react';

import { Undertittel, Element } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';
import { Radio } from 'nav-frontend-skjema';

import IconWithText from '../../shared/IconWithText';
import ElementWrapper from './../../../util/ElementWrapper';
import DisplayTextWithLabel from './../../shared/DisplayTextWithLabel';

import styles from './gjenlevende.step.less';

export const Step6 = () => (
    <ElementWrapper>
        <AlertStripe className={styles.marginTopBottom} type="nav-ansatt">Her har vi noe info</AlertStripe>
        <IconWithText kind="arbeidsgiver" text="Ladida" />
        <Undertittel className={styles.marginTopBottom}>Placeholder</Undertittel>
        <Element className={styles.marginTopBottom}>Placeholder</Element>
        <DisplayTextWithLabel labelCode="Gjenlevende.Test" textCode="Gjenlevende.Test" />
        <Radio className={styles.marginTopBottom} label="Placeholder" name="placeholder-gruppe" />
    </ElementWrapper>
);

export default Step6;