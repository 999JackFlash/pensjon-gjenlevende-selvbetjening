import React from 'react';

import { Undertittel, Element } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';
import { Radio } from 'nav-frontend-skjema';
import { FormattedMessage } from 'react-intl';
import IconWithText from '../../shared/IconWithText';
import ElementWrapper from './../../../util/ElementWrapper';
import DisplayTextWithLabel from './../../shared/DisplayTextWithLabel';

import styles from './gjenlevende.step.less';

export const Step6 = () => (
    <ElementWrapper>
        <AlertStripe className={styles.marginTopBottom} type="nav-ansatt"><FormattedMessage id="Step6.alert" /></AlertStripe>
        <IconWithText kind="arbeidsgiver" textCode="index.soknad" />
        <Undertittel className={styles.marginTopBottom}><FormattedMessage id="Step6.undertittel" /></Undertittel>
        <Element className={styles.marginTopBottom}><FormattedMessage id="Step6.element" /></Element>
        <DisplayTextWithLabel labelCode="Step6.displaylabel" textCode="Step6.displaytext" />
        <Radio className={styles.marginTopBottom} label="Placeholder" name="placeholder-gruppe" />
        <Radio className={styles.marginTopBottom} label="Placeholder2" name="placeholder-gruppe" />
    </ElementWrapper>
);

export default Step6;
