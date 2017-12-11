// @flow
import React from 'react';

import DisplayTextWithLabel from '../shared/DisplayTextWithLabel';
import ElementWrapper from './../../util/ElementWrapper';
import IconWithText from './IconWithText';

type Props = {
    iconKind: string,
    opplysningData: Array<Object>,
    titleCode: string
};

const OpplysningPanel = (props: Props) => (
    <ElementWrapper>
        <IconWithText kind={props.iconKind} textCode={props.titleCode} />
        {props.opplysningData.map((opplysninger) => (
            <DisplayTextWithLabel key={opplysninger.textCode} {...opplysninger} />
        ))}
    </ElementWrapper>
);

export default OpplysningPanel;
