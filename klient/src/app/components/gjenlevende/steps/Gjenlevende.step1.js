import React from 'react';

import AlertStripe from 'nav-frontend-alertstriper';
import { Select } from 'nav-frontend-skjema';
import { FormattedMessage } from 'react-intl';
import ElementWrapper from './../../../util/ElementWrapper';

import styles from './gjenlevende.step.less';


export const Step1 = () => (
    <ElementWrapper>
        <AlertStripe className={styles.marginTopBottom} type="info">
            <h3><FormattedMessage id="Step1.AlertStripe.text1" /></h3>
            <div className="nav-frontend-lenker">
                <p><FormattedMessage id="Step1.AlertStripe.text2" />&nbsp;
                    <a href="https://www.nav.no/no/Person/Pensjon/Andre+pensjonsordninger/ytelser-til-gjenlevende-ektefelle"
                        className='lenke'>
                        <FormattedMessage id="Step1.urlbeskrivelse" />
                    </a>
               </p>
            </div>
        </AlertStripe>
        <Select label={ <FormattedMessage id="Step1.velgSpraak" /> } >
            <option value='bokmaal'key='bokmaal'>
                <FormattedMessage id="Step1.bokmaal" />
            </option>
            <option value='nynorsk'key='nynorsk'>
                <FormattedMessage id="Step1.nynorsk" />
            </option>
            <option value='engelsk'key='engelsk'>
                <FormattedMessage id="Step1.engelsk" />
            </option>
        </Select>

    </ElementWrapper>
);

export default Step1;
