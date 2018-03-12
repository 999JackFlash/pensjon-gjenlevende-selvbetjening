import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AlertStripe from 'nav-frontend-alertstriper';
import { Undertittel } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import { Input } from 'nav-frontend-skjema';
import { personFetchSuccess } from '../../../redux/ducks/Person.duck';

import ElementWrapper from './../../../util/ElementWrapper';

import styles from './gjenlevende.step.less';
const PersonInfo = ({fornavn, etternavn, fnr, vielsesdato, statsborger}) =><Fragment>
     <Input
                label={<FormattedMessage id="Step2.etternavn" />}
                value={etternavn}
                name="etternavn"
                disabled = 'true'
            />
            <Input
                label={<FormattedMessage id="Step2.fornavn" />}
                value={fornavn}
                name="fornavn"
                disabled = 'true'
            />
            <Input
                label={<FormattedMessage id="Step2.fodselsnummer" />}
                value={fnr}
                name="fodselsnummer"
                disabled = 'true'
            />
            <Input
                label={<FormattedMessage id="Step2.vielsesdato" />}
                value={vielsesdato}
                name="vielsesdato"
                disabled = 'true'
            />
            <Input
                label={<FormattedMessage id="Step2.statsborgerskap" />}
                value={statsborger}
                name="statsborgerskap"
                disabled = 'true'
            />


    </Fragment>;

const DodsdatoInfo = ({dodsdato}) =><Fragment>
     <Input
                label={<FormattedMessage id="Step2.dodsdato" />}
                value={dodsdato}
                name="dodsdato"
                disabled = 'true'
            />
    </Fragment>;

const AdresseInfo = ({adresse}) =><Fragment>
        <Input
            label={<FormattedMessage id="Step2.telefonnummer" />}
            value='+1 323-962-7600'
            name="telefonnr"
            disabled = 'true'
        />
        <Input
            label={<FormattedMessage id="Step2.epostadresse" />}
            value='johnny.b.good@rocknroll.com'
            name="epostadresse"
            disabled = 'true'
        />
        <Input
            label={<FormattedMessage id="Step2.adresse" />}
            value={adresse}
            name="adresse"
            disabled = 'true'

        />

    </Fragment>;

const PersonInfoForRolle = props=> {
console.log(props);
    const person = props.personer.find(p=>p.rolle ===props.rolle);
    return !person?null:<PersonInfo fornavn={person&&person.fornavn||''}
                                    etternavn={person&&person.etternavn||''}
                                    fnr={person&&person.fodseslsnummer||''}
                                    vielsesdato={person&&person.vielsesdato||''}
                                    statsborger={person&&person.statsborgerskap||''}
                                    dodsdato={person&&person.dodsdato||''}/>;
}
const PersonInfoForRolleContainer = connect(state=>({personer: state.person}), {})(PersonInfoForRolle);


export const Step2inner = props => (
    <ElementWrapper>
        <AlertStripe
            className={styles.marginBottomLarge}
            type="nav-ansatt"
        >
            <FormattedMessage id="Step2.kontaktFolkeregisteret" />,
        </AlertStripe>
        <Undertittel className={styles.marginTopBottom}>
            <FormattedMessage id="Step2.gjenlevende" />
        </Undertittel>
        <PersonInfoForRolleContainer rolle="gjenlevende" />
        <AdresseInfo adresse={props.gjenlevende&&props.gjenlevende.fornavn||''} />
        <Undertittel className={styles.marginTopBottom}>
            <FormattedMessage id="Step2.avdod" />
        </Undertittel>
       <PersonInfoForRolleContainer rolle="avdod" />
    </ElementWrapper>
);


const mapDispatchToProps = (dispatch) => ({
   hentPerson: (fnr, rolle) => axios.get("/api/public/person/"+fnr).then(res=>dispatch(personFetchSuccess(res.data, rolle)))
});




class PersonFetcher extends Component {

  componentWillMount(){
    this.props.hentPerson(this.props.fnrgjenlevende, 'gjenlevende');
    this.props.hentPerson("11124559972", 'avdod');

  }

  render(){
    return <Step2inner {...this.props} />;
  }

}

const Container = connect(state=>({
    gjenlevende: state.person.find(p=>p.rolle==='gjenlevende'),
    fnrgjenlevende:'08125368761'}), mapDispatchToProps)(PersonFetcher);

const Step2 = () => <Container />;

export default Step2;
