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
        <IconWithText kind="arbeidsgiver" textCode="Gjenlevende.Test" />
        <Undertittel className={styles.marginTopBottom}>Undertitteltekst</Undertittel>
        <Element className={styles.marginTopBottom}>Elementtekst</Element>
        <DisplayTextWithLabel labelCode="Gjenlevende.Test" textCode="Gjenlevende.Test" />
        <Radio className={styles.marginTopBottom} label="Placeholder" name="placeholder-gruppe" />
        <Radio className={styles.marginTopBottom} label="Placeholder2" name="placeholder-gruppe" />
    </ElementWrapper>
);

export default Step6;
