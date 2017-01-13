import React from 'react'
import { connect } from 'react-redux'
import { shoot, changePage, play01, playCri, clearPlay } from '../actions'
import { Start, O1Menu, CricketMenu, CountUpMenu, PlayerSetting, DeviceSetting, O1 } from './'
import firebase from 'firebase'

class Container extends React.Component {
    constructor(props) {
        super(props)

        window.addEventListener('beforeunload', function (e) {
            var confirmationMessage = 'It looks like you have been editing something. '
                                    + 'If you leave before saving, your changes will be lost.';

            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
            return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
        });

        // keypress
        window.addEventListener('keypress', this.keyPressHandler, false)

        // firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyDlpb2Cj5MQ56szDwTzJpylv9h4nFD3GpU',
            authDomain: 'dart-2dcdb.firebaseapp.com',
            databaseURL: 'dart-2dcdb.firebaseio.com',
            storageBucket: 'dart-2dcdb.appspot.com'
        })

        firebase.auth().onAuthStateChanged(function(user) {
            if(user) {
                firebase.database().ref('/' + user.uid).once('value').then(function(snapshot) {
                    console.log(snapshot.val())
                })

                user.providerData.forEach(function(profile) {
                    console.log("Sign-in provider: "+profile.providerId);
                    console.log("  Provider-specific UID: "+profile.uid);
                    console.log("  Name: "+profile.displayName);
                    console.log("  Email: "+profile.email);
                    console.log("  Photo URL: "+profile.photoURL);
                });
            } else {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then(function(result) {
                    console.log(result.credential.accessToken)
                    console.log(result.user)
                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                });
                // firebase.auth().signInWithEmailAndPassword(prompt('account'), prompt('password')).catch(function(error) {
                //     console.log(error.errorCode, error.errorMessage)
                // })
            }
        })
    }

    keyPressHandler = (e) => {
        for(let key in this.props.KeyCode) {
            if(this.props.KeyCode[key] === e.keyCode) {
                let match = key.match(/^_(\d+)(S|SI|T|SO|D)$/)
                if(match) {
                    if(match[2] === 'T') {
                        this.props.shoot(+match[1], 3)
                        console.log(+match[1] * 3)
                    } else if(+match[2] === 'D') {
                        this.props.shoot(+match[1], 2)
                        console.log(+match[1] * 2)
                    } else {
                        this.props.shoot(+match[1], 1)
                        console.log(+match[1])
                    }
                } else if(key === '_bullS') {
                    this.props.shoot(25, 1)
                    console.log(50)
                } else if(key === '_bullD') {
                    this.props.shoot(25, 2)
                    console.log(50)
                }
            }
        }
    }

    render() {
        let view;
        switch(this.props.Config.page) {
            case 'Start':
                view = (<Start changePage={this.props.changePage} />)
                break
            case '01Menu':
                view = (<O1Menu changePage={this.props.changePage} play01={this.props.play01} />)
                break
            case 'CricketMenu':
                view = (<CricketMenu changePage={this.props.changePage} />)
                break
            case 'CountUpMenu':
                view = (<CountUpMenu changePage={this.props.changePage} />)
                break
            case 'PlayerSetting':
                view = (<PlayerSetting changePage={this.props.changePage} />)
                break
            case 'DeviceSetting':
                view = (<DeviceSetting changePage={this.props.changePage} />)
                break
            default:
                view = (<Start changePage={this.props.changePage} />)
        }

        switch(this.props.Config.game) {
            case '01':
                view = (<O1 clearPlay={this.props.clearPlay} Config={this.props.Config} KeyEvent={this.props.KeyEvent} />)
        }

        return (
            <div>
                {view}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        Config: state.Config,
        KeyCode: state.KeyCode,
        KeyEvent: state.KeyEvent
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changePage: (...args) => {
            dispatch(changePage(...args))
        },
        shoot: (...args) => {
            dispatch(shoot(...args))
        },
        play01: (...args) => {
            dispatch(play01(...args))
        },
        playCri: (...args) => {
            dispatch(playCri(...args))
        },
        clearPlay: (...args) => {
            dispatch(clearPlay(...args))
        }
    }
}

Container = connect(mapStateToProps, mapDispatchToProps)(Container)

export default Container
