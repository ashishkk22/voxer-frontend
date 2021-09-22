import React from 'react'
import styles from './home.module.css';
import {useHistory } from 'react-router-dom';
import Card from '../../components/shared/card/Card';
import Button from '../../components/shared/Button/Button';
const Home = () => {
    const history=useHistory();
    function startRegister(){
        history.push('/authenticate');
    }
    return (
        <div className={styles.cardWrapper}>
        <Card title="Welcome to Voxer !" icon="logo">
        <p className={styles.text}>
                We're working hard to get Voxer ready for everyone! While we wrap up the finishing youches.we're adding people gradually to make sure nothing breaks.
            </p>
            <div>
                <Button onClick={startRegister} text="Let's Go "/>
            </div>
            <div className={styles.signinWrapper}>
                <span className={styles.haseInvite}>Have an invite text ?</span>
                {/* <Link style={signInLinkStyle} to="/login">Sign in</Link> */}
            </div>
        </Card>
        {/* <div className={styles.card}>
            <div className={styles.headingWrapper}>
                <img src="/images/logo.png" alt="logo"></img>
                <h1 className={styles.heading}>Welcome to AV's Platform!</h1>
            </div>
            
        </div> */}
        </div>
    )
}

export default Home
