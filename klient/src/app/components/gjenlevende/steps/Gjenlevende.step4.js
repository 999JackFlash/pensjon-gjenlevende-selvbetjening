import React from 'react';

import { EtikettLiten, Element, Normaltekst, Avsnitt, Index, Infotekst, Ingress, Innholdstittel, Sidetittel,
Systemtittel, Undertekst, UndertekstBold, Undertittel } from 'nav-frontend-typografi';
import AlertStripe from 'nav-frontend-alertstriper';
import { Input, Checkbox, Radio } from 'nav-frontend-skjema';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSelectedStep2 } from '../../../redux/ducks/Skjema.duck';
import CheckboxWithLine from '../../shared/CheckboxWithLine';
import ElementWrapper from '../../../util/ElementWrapper';

import styles from './gjenlevende.step.less';

const checkboxData = [
    {
        label: 'Step4.CheckboxData.lableCode.navn',
        text: 'Step4.CheckboxData.textCode.navn'
    },
    {
        label: 'Step4.CheckboxData.lableCode.fnr',
        text: 'Step4.CheckboxData.textCode.fnr'
    }
];
const checkboxData2 = [
    {
        label: 'Step4.CheckboxData.lableCode.navn',
        text: 'Step4.CheckboxData.textCode2.navn'
    },
    {
        label: 'Step4.CheckboxData.lableCode.fnr',
        text: 'Step4.CheckboxData.textCode2.fnr'
    }
];

const radioData = [
    {
        name: 'step2radio',
        label: <FormattedMessage id="Step4.radioData.bosattNorge" />,
        value: 'norge'
    },
    {
        name: 'step2radio',
        label: <FormattedMessage id="Step4.radioData.bosattUtland" />,
        value: 'utland'
    }
];

type Props = {
    selectedLokasjon: PropTypes.string,
    selectedUtlandKlausul: PropTypes.string,
}

export const Step4inner = (props: Props) => (
    <ElementWrapper>
        <AlertStripe
            className={styles.marginTopBottom}
            type="nav-ansatt"
        >
            <FormattedMessage id="Step4.AlertStripe.text" />
        </AlertStripe>

            <Radio
                {...radioData[0]}
                onChange={(event) => props.setValgtLokasjon(event.target.value)}
                checked={props.selectedLokasjon === radioData[0].value, props.setValgtUtlandKlausul === null}
            />
            <Radio
                {...radioData[1]}
                onChange={(event) => props.setValgtLokasjon(event.target.value)}
                checked={props.selectedLokasjon === radioData[1].value}
            />
        <Undertittel className={styles.marginTopBottom}>
            Undertittel xxx
        </Undertittel>
        <EtikettLiten className={styles.marginTopBottom}>EtikettLiten xxxx</EtikettLiten>
        <Element className={styles.marginTopBottom}>Element xxxx</Element>
        <Normaltekst className={styles.marginTopBottom}>Normaltekst xxx</Normaltekst>
        <Ingress className={styles.marginTopBottom}>Ingressxx</Ingress>
        <Innholdstittel className={styles.marginTopBottom}>Innholdstittel xxx</Innholdstittel>
        <Sidetittel className={styles.marginTopBottom}>Sidetittel xxxx</Sidetittel>
        <Systemtittel className={styles.marginTopBottom}>Systemtittel xxxxx</Systemtittel>
        <Undertekst className={styles.marginTopBottom}>Undertekst xxxx</Undertekst>
        <UndertekstBold className={styles.marginTopBottom}>UndertekstBold xxxx</UndertekstBold>
        <CheckboxWithLine content={checkboxData} className={styles.marginTopBottom} />
        <CheckboxWithLine content={checkboxData2} className={styles.marginTopBottom} />
    </ElementWrapper>
);


const mapStateToProps = (state) => ({
    selectedLokasjon: state.skjema.step2.lokasjon,
    selectedUtlandKlausul: state.skjema.step2.utlandKlausul,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        setValgtLokasjon: (value) => setSelectedStep2(value, 'lokasjon'),
        setValgtUtlandKlausul: (value) => setSelectedStep2(value, 'utlandKlausul'),
    }, dispatch)
});


export const Step4a = connect(mapStateToProps, mapDispatchToProps)(Step4inner);

const Step4 = () => <Step4a />;

export default Step4;

