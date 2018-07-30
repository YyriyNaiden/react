// Core
import React, { Component } from 'react';


// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/composer';
import Post from 'components/post';

// Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    render () {

    	const{
            avatar,
            currentUserFirstName,
            currentUserLastName,
        } = this.props;

        return (
            <section className = { Styles.feed }>
                <StatusBar
                    avatar = { avatar }
                    currentUserFirstName = {  currentUserFirstName }
                    currentUserLastName = { currentUserLastName }
                />
                <Composer
                    avatar = { avatar }
                    currentUserFirstName = {  currentUserFirstName }
                    currentUserLastName = { currentUserLastName }
                />
                <Post { ...this.props } />
            </section>
        );
    }
}