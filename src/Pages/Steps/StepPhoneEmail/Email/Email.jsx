import React,{useState} from 'react'
import Card from '../../../../components/shared/card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/textInput/TextInput'
import styles from '../StepPhoneEmail.module.css'
const Email = ({onNext}) => {
   const [email, setEmail] = useState("")
    return (
      <Card title="Enter your email id" icon="Mail">
        <TextInput value={email} onChange={e => setEmail(e.target.value)} />
        <div>
          <div className={styles.actionButtonWrap}>
            <Button text="Next" onClick={onNext}/>
          </div>
          <h5 className={styles.buttonParagraph}>
            By entering your number, you're agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </h5>
        </div>
      </Card>
    )
}

export default Email
