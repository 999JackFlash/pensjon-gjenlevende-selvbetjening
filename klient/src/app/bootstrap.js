import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import nb from 'react-intl/locale-data/nb';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Provider } from 'react-redux';
import { Container, Row, Column } from 'nav-frontend-grid';
import nbMessages from './messages/nb_NO.json';

import ElementWrapper from './util/ElementWrapper';
import store from './redux';
import routes from './util/routing/routes';

addLocaleData(nb);

const root = document.getElementById('app');
render(
    <IntlProvider locale="nb-NO" messages={nbMessages}>
        <Provider store={store}>
            <Container fluid>
                <Row>
                    <Column md="3" xs="12" />
                    <Column md="6" xs="12">
                        <Router>
                            <ElementWrapper>
                                {routes()}
                            </ElementWrapper>
                        </Router>
                    </Column>
                    <Column md="3" xs="12" />
                </Row>
            </Container>
        </Provider>
    </IntlProvider>,
    root
);
