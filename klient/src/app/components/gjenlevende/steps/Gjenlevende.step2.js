import React, { Fragment } from 'react';
import AlertStripe from 'nav-frontend-alertstriper';
import { EtikettLiten, Normaltekst } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import { Input, Checkbox, Radio } from 'nav-frontend-skjema';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { setSelectedStep2 } from '../../../redux/ducks/Skjema.duck';
import ElementWrapper from './../../../util/ElementWrapper';

import styles from './gjenlevende.step.less';

const radioData = [
    {
        name: 'step2radio',
        label: <FormattedMessage id="Step2.radioData.bosattNorge" />,
        value: 'norge'
    },
    {
        name: 'step2radio',
        label: <FormattedMessage id="Step2.radioData.bosattUtland" />,
        value: 'utland'
    }
];


const radioUtlandData = [
    {
        name: 'step2UtlandRadio',
        label: <FormattedMessage id="Step2.radioUtlandData.menA" />,
        value: 'menA'
    },
    {
        name: 'step2UtlandRadio',
        label: <FormattedMessage id="Step2.radioUtlandData.menB" />,
        value: 'menB'
    },
    {
        name: 'step2UtlandRadio',
        label: <FormattedMessage id="Step2.radioUtlandData.og1" />,
        value: 'menC'
    },
    {
        name: 'step2UtlandRadio',
        label: <FormattedMessage id="Step2.radioUtlandData.og2" />,
        value: 'menD'
    }

];

const radioNavSakerData = [
    {
        name: 'step2radioNavSaker',
        label: <FormattedMessage id="Step8.radioNavSakerData.harIngen" />,
        value: 'harIngen'
    },
    {
        name: 'step2radioNavSaker',
        label: <FormattedMessage id="Step8.radioNavSakerData.harSaker" />,
        value: 'harSaker'
    }
];


type Props = {
    selectedLokasjon: PropTypes.string,
    selectedUtlandKlausul: PropTypes.string,
    selectedNavSakStatus: PropTypes.string
}

export const Step2inner = (props: Props) => (
    <ElementWrapper>

        <AlertStripe
            className={styles.marginBottomLarge}
            type="nav-ansatt"
        >
            <FormattedMessage id="Step2.forklarende_tekst" />,
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
        {props.selectedLokasjon !== radioData[0].value ? null:
            <Fragment>
                <br></br>
                <Normaltekst className={styles.marginLeft1Step}><FormattedMessage id="Step2.pnr_tekst" /></Normaltekst>
                <br></br>
                <Input
                    className={styles.marginLeft1Step}
                    label={<FormattedMessage id="Step2.postnummer" />}
                    name="postnr"
                    bredde="XS"
                />
                <Normaltekst className={styles.marginLeft1Step}><FormattedMessage id="Step2.fnr_tekst" /></Normaltekst>
                <br></br>
                <Input
                    className={styles.marginLeft1Step}
                    label={<FormattedMessage id="Step2.fodselsnummer" />}
                    name="fnr"
                    bredde="S"
                />
            </Fragment>
        }

        {props.selectedLokasjon !== radioData[1].value ? null:
            <Radio
                {...radioUtlandData[0]}
                className={styles.marginLeft1Step}
                onChange={(event) => props.setValgtUtlandKlausul(event.target.value)}
                checked={props.selectedUtlandKlausul === radioUtlandData[0].value}
            />
        }
        {props.selectedUtlandKlausul !== radioUtlandData[0].value ? null:
            <Fragment>
                <EtikettLiten className={styles.marginLeft2Step}>
                    <FormattedMessage id="Step2.adresseNorge" />
                </EtikettLiten>
                <Normaltekst className={styles.marginLeft2Step}>
                    <FormattedMessage id="Step2.adresseforklaring" />
                </Normaltekst>
                <Input
                    className={styles.marginLeft2Step}
                    label={<FormattedMessage id="Step2.co-adresse" />}
                    name="utlandAdresse"
                />
                <Input
                    className={styles.marginLeft2Step}
                    label={<FormattedMessage id="Step2.postnummer" />}
                    name="utlandPostnr"
                    bredde="S"
                />
                <Normaltekst className={styles.marginLeft2Step}>
                    <FormattedMessage id="Step2.fnr_tekst" />
                </Normaltekst>
                <Input
                    className={styles.marginLeft2Step}
                    label={<FormattedMessage id="Step2.fodselsnummer" />}
                    name="utlandFnr"
                    bredde="S"
                />
                <Checkbox
                    className={styles.marginLeft2Step}
                    label={<FormattedMessage id="Step2.checkNavKontakt" />}
                    id="kontaktetNav"
                />
                <Normaltekst className={styles.marginLeft2Step}>
                    <FormattedMessage id="Step2.kontaktetNav" />
                </Normaltekst>
                <Input
                    className={styles.marginLeft2Step}
                    label={<FormattedMessage id="Step2.navEnhet" />}
                    name="utlandNavEnhet"
                />
            </Fragment>
        }
        {props.selectedLokasjon !== radioData[1].value ? null:
            <Radio
                {...radioUtlandData[1]}
                className={styles.marginLeft1Step}
                onChange={(event) => props.setValgtUtlandKlausul(event.target.value)}
                checked={props.selectedUtlandKlausul === radioUtlandData[1].value}
            />
        }
        {props.selectedUtlandKlausul !== radioUtlandData[1].value ? null:
            <Fragment>
                <Normaltekst className={styles.marginLeft2Step}>
                    <FormattedMessage id="Step2.fnr_tekst" />
                </Normaltekst>
                <br></br>
                <Input
                    className={styles.marginLeft2Step}
                    label={<FormattedMessage id="Step2.fodselsnummer" />}
                    name="utlandFnr"
                    bredde="S"
                />
                <Fragment>
                    <Radio
                        {...radioNavSakerData[0]}
                        className={styles.marginLeft2Step}
                        onChange={(event) => props.setNavSakStatus(event.target.value)}
                        checked={props.selectedNavSakStatus === radioNavSakerData[0].value}
                    />
                    <Radio
                        {...radioNavSakerData[1]}
                        className={styles.marginLeft2Step}
                        onChange={(event) => props.setNavSakStatus(event.target.value)}
                        checked={props.selectedNavSakStatus === radioNavSakerData[1].value}
                    />
                    {props.selectedNavSakStatus !== radioNavSakerData[1].value ? null:
                        <Fragment>
                            <Normaltekst className={styles.marginLeft3Step}>
                                <FormattedMessage id="Step8.radioNavSakerData.harSaker.lokalkontor" />
                            </Normaltekst>
                            <br></br>
                            <Input
                                className={styles.marginLeft3Step}
                                label={<FormattedMessage id="Step8.radioNavSakerData.harSaker.input" />}
                                name="navenhet"
                                bredde="L"
                            />
                        </Fragment>
                    }
                </Fragment>

            </Fragment>
        }
        {props.selectedLokasjon !== radioData[1].value ? null:
            <Radio
                {...radioUtlandData[2]}
                className={styles.marginLeft1Step}
                onChange={(event) => props.setValgtUtlandKlausul(event.target.value)}
                checked={props.selectedUtlandKlausul === radioUtlandData[2].value}
            />
        }
        {props.selectedLokasjon !== radioData[1].value ? null:
            <Radio
                {...radioUtlandData[3]}
                className={styles.marginLeft1Step}
                onChange={(event) => props.setValgtUtlandKlausul(event.target.value)}
                checked={props.selectedUtlandKlausul === radioUtlandData[3].value}
            />
        }
    </ElementWrapper>
);


const mapStateToProps = (state) => ({
    selectedLokasjon: state.skjema.step2.lokasjon,
    selectedUtlandKlausul: state.skjema.step2.utlandKlausul,
    selectedNavSakStatus: state.skjema.step2.navSakStatus
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        setValgtLokasjon: (value) => setSelectedStep2(value, 'lokasjon'),
        setValgtUtlandKlausul: (value) => setSelectedStep2(value, 'utlandKlausul'),
        setNavSakStatus: (value) => setSelectedStep2(value, 'navSakStatus')
    }, dispatch)
});


export const Step2a = connect(mapStateToProps, mapDispatchToProps)(Step2inner);

const Step2 = () => <Step2a />;

export default Step2;
