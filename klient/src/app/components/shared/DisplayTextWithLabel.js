// @flow
import React from 'react';

import { EtikettLiten, Normaltekst } from 'nav-frontend-typografi';

import { FormattedMessage } from 'react-intl';

import ElementWrapper from './../../util/ElementWrapper';

import styles from './displayTextWithLabel.less';

type Props = {
    labelCode: string,
    textCode: string
};

export const DisplayTextWithLabel = (props: Props) => (
    <ElementWrapper>
        <EtikettLiten className={styles.marginTop}><FormattedMessage id={props.labelCode} /></EtikettLiten>
        <Normaltekst className={styles.marginBottom}><FormattedMessage id={props.textCode} /></Normaltekst>
    </ElementWrapper>
);

export default DisplayTextWithLabel;
