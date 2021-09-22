import React,{useState} from 'react'
import Card from '../../../components/shared/card/Card'
import Button from '../../../components/shared/Button/Button'
import TextInput from '../../../components/shared/textInput/TextInput'
import styles from './StepOtp.module.css'
import { verifyOtp } from '../../../http'
import { useSelector } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
import { useDispatch } from 'react-redux'
const StepOtp = () => {
  const[otp,setOtp]=useState('');
  const dispatch = useDispatch();
  const {phone,hash}=useSelector((state)=>state.auth.otp);
   async function submit(){
     if(!otp ) return;
      try {
        const { data } = await verifyOtp({ otp, phone, hash })
        console.log(data)
        dispatch(setAuth(data))  
      } catch (err) {
        console.log(err);
      }
    
   }
    return (
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="Lock">
          <TextInput value={otp} onChange={e => setOtp(e.target.value)} />
          <div>
            <div className={styles.actionButtonWrap}>
              <Button onClick={submit} text="Next" />
            </div>
            <h5 className={styles.buttonParagraph}>
              By entering your number, you're agreeing to our Terms of Service
              and Privacy Policy. Thanks!
            </h5>
          </div>
        </Card>
      </div>
    )
}

export default StepOtp
