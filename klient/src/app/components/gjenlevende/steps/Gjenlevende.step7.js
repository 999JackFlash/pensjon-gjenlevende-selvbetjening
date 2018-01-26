import React from 'react';

import { Undertittel, Element } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';
import { Radio } from 'nav-frontend-skjema';
import { FormattedMessage } from 'react-intl';
import IconWithText from '../../shared/IconWithText';
import ElementWrapper from './../../../util/ElementWrapper';
import DisplayTextWithLabel from './../../shared/DisplayTextWithLabel';

import styles from './gjenlevende.step.less';

const radioData =
    {
        label: <FormattedMessage id="Step7.radioData.sokeGjenlevende" />,
        name: 'gjenlevende'
    };


export const Step7 = () => (
    <ElementWrapper>
        <AlertStripe className={styles.marginTopBottom} type="nav-ansatt">
            <FormattedMessage id="Step7.AlertStripe.text1" />
        </AlertStripe>
        <IconWithText kind="stonad" textCode="Step7.IconTextCode" />
        <Undertittel className={styles.marginTopBottom}>
            <FormattedMessage id="Step7.undertittel" />
        </Undertittel>
        <Element className={styles.marginTopBottom}>
            <FormattedMessage id="Step7.elementtekst" />
        </Element>
        <DisplayTextWithLabel labelCode="Step7.labelCode" textCode="Step7.DisplayTextWithLabel" />
        <Radio className={styles.marginTopBottom} label={radioData.label} name={radioData.name} />
    </ElementWrapper>
);

export default Step7;
