// Core
import React, { Component } from 'react';

// Components

import Feed from 'components/Feed';

// Instruments
import avatar from 'theme/assets/lisa';

const options = { avatar, currentUserFirstName: 'Лиса', currentUserLastName: 'Симпсон',};

export default class App extends Component {
    render () {


        return <Feed { ...options }/>
    }
}
