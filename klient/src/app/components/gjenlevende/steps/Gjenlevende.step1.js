import React from 'react';

import { Undertittel, Element } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';
import { Radio } from 'nav-frontend-skjema';

import IconWithText from '../../shared/IconWithText';
import ElementWrapper from './../../../util/ElementWrapper';
import DisplayTextWithLabel from './../../shared/DisplayTextWithLabel';

import styles from './gjenlevende.step.less';

export const Step1 = () => (
    <ElementWrapper>
        <AlertStripe className={styles.marginTopBottom} type="nav-ansatt">Her har vi noe info</AlertStripe>
        <IconWithText kind="arbeidsgiver" textCode="Step1.IconTextCode" />
        <Undertittel className={styles.marginTopBottom}>Placeholder</Undertittel>
        <Element className={styles.marginTopBottom}>Placeholder</Element>
        <DisplayTextWithLabel labelCode="Gjenlevende.Test" textCode="Step1.DisplayTextWithLabel" />
        <Radio className={styles.marginTopBottom} label="Placeholder" name="placeholder-gruppe" />
    </ElementWrapper>
);

export default Step1;
