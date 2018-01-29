import React, { Fragment } from 'react';
import AlertStripe from 'nav-frontend-alertstriper';
import { FormattedMessage } from 'react-intl';
import { Input, Checkbox, Radio } from 'nav-frontend-skjema';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { setSelectedStep2 } from '../../../redux/ducks/Skjema.duck';
import ElementWrapper from './../../../util/ElementWrapper';
import DisplayTextWithLabel from './../../shared/DisplayTextWithLabel';

import styles from './gjenlevende.step.less';

const radioData = [
    {
        name: 'step2radio',
        label: <FormattedMessage id="Step8.radioData.bosattNorge" />,
        value: 'norge'
    },
    {
        name: 'step2radio',
        label: <FormattedMessage id="Step8.radioData.bosattUtland" />,
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
        label: <FormattedMessage id="Step2.radioUtlandData.menC2" />,
        value: 'menC'
    },
    {
        name: 'step2UtlandRadio',
        label: <FormattedMessage id="Step2.radioUtlandData.menD2" />,
        value: 'menD'
    }

];

type Props = {
    selectedLokasjon: PropTypes.string,
    selectedUtlandKlausul: PropTypes.string
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
            checked={props.selectedLokasjon === radioData[0].value}
        />
        <Radio
            {...radioData[1]}
            onChange={(event) => props.setValgtLokasjon(event.target.value)}
            checked={props.selectedLokasjon === radioData[1].value}
        />
        {props.selectedLokasjon !== radioData[0].value? null:
            <DisplayTextWithLabel labelCode="blank" textCode="Step2.pnr_tekst" />
        }
        {props.selectedLokasjon !== radioData[0].value? null:
            <Input
                label="Postnummer"
                name="postnr"
                bredde="XS"
            />
        }
        {props.selectedLokasjon !== radioData[0].value? null:
            <DisplayTextWithLabel labelCode="blank" textCode="Step2.fnr_tekst" />
        }
        {props.selectedLokasjon !== radioData[0].value? null:
            <Input
                label="Fødselsnummer"
                name="fnr"
                bredde="S"
            />
        }

        {props.selectedLokasjon !== radioData[1].value?null:
            <Radio
                {...radioUtlandData[0]}
                onChange={(event) => props.setValgtUtlandKlausul(event.target.value)}
                checked={props.selectedUtlandKlausul === radioUtlandData[0].value}
            />
        }
        {props.selectedUtlandKlausul !== radioUtlandData[0].value? null:
            <Fragment>
                <DisplayTextWithLabel labelCode="Step2.adresseNorge" textCode="Step2.adresseforklaring" />
                <Input
                    label={<FormattedMessage id="Step2.co-adresse" />}
                    name="utlandAdresse"
                />
                <Input
                    label={<FormattedMessage id="Step2.postnummer" />}
                    name="utlandPostnr"
                    bredde="S"
                />
                <DisplayTextWithLabel labelCode="blank" textCode="Step2.fnr_tekst" />
                <Input
                    label={<FormattedMessage id="Step2.fodselsnummer" />}
                    name="utlandFnr"
                    bredde="S"
                />
                <Checkbox
                    label="Jeg har vært i kontakt med NAV tidligere"
                    id="kontaktetNav"
                />
                <DisplayTextWithLabel labelCode="blank" textCode="Step2.kontaktetNav" />
                <Input
                    label={<FormattedMessage id="Step2.navEnhet" />}
                    name="utlandNavEnhet"
                />
            </Fragment>
        }
        {props.selectedLokasjon !== radioData[1].value?null:
            <Radio
                {...radioUtlandData[1]}
                onChange={(event) => props.setValgtUtlandKlausul(event.target.value)}
                checked={props.selectedUtlandKlausul === radioUtlandData[1].value}
            />
        }
        {props.selectedLokasjon !== radioData[1].value?null:
            <Radio
                {...radioUtlandData[2]}
                onChange={(event) => props.setValgtUtlandKlausul(event.target.value)}
                checked={props.selectedUtlandKlausul === radioUtlandData[2].value}
            />
        }
        {props.selectedLokasjon !== radioData[1].value?null:
            <Radio
                {...radioUtlandData[3]}
                onChange={(event) => props.setValgtUtlandKlausul(event.target.value)}
                checked={props.selectedUtlandKlausul === radioUtlandData[3].value}
            />
        }
    </ElementWrapper>
);


const mapStateToProps = (state) => ({
    selectedLokasjon: state.skjema.step2.lokasjon,
    selectedUtlandKlausul: state.skjema.step2.utlandKlausul
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        setValgtLokasjon: (value) => setSelectedStep2(value, 'lokasjon'),
        setValgtUtlandKlausul: (value) => setSelectedStep2(value, 'utlandKlausul')
    }, dispatch)
});


export const Step2a = connect(mapStateToProps, mapDispatchToProps)(Step2inner);

const Step2 = () => <Step2a />;

export default Step2;
