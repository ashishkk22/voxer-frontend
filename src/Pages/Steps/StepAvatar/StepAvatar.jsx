import React, { useState ,useEffect} from "react"
import Card from "../../../components/shared/card/Card"
import Button from "../../../components/shared/Button/Button"
import styles from "./StepAvatar.module.css"
import { useSelector,useDispatch } from "react-redux"
import { setAvatar } from "../../../store/activateSlice"
import { setAuth } from "../../../store/authSlice"
import { activate } from "../../../http";
import Loader from "../../../components/shared/Loader/Loader"
const StepAvatar = ({ onNext }) => {
  const dispatch= useDispatch();
  const { name,avatar } = useSelector(state => state.activate)
  const [image, setImage] = useState("/images/monkey-avatar.png")
  const [loading, setLoading] = useState(false);
  const [unMounted, setUnMounted] = useState(false)
  async function submit() {
    if(!name || !avatar) return;
    setLoading(true);
    try {
      const {data}= await activate({name,avatar});
      if(data.auth){
        if(!unMounted){
          dispatch(setAuth(data))
        }
      }
      setLoading(false)
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  }
  useEffect(() => {
    
    return () => {
      setUnMounted(true)
    }
  }, [])
  if (loading) return <Loader message="Activation in progress..."/>
  function captureImage(e) {
    const file=e.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=function(){
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    }
  }
  return (
    <>
      <Card title={`Okay, ${name}`} icon="monkey-emoji">
        <h5 className={styles.subHeading}>How's this photo?</h5>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatarImage} src={image} alt="avatar" />
        </div>
        <div>
          <input
            onChange={captureImage}
            id="avatarInput"
            type="file"
            className={styles.avatarInput}
          />
          <label className={styles.avatarLabel} htmlFor="avatarInput">
            Choose a different photo
          </label>
        </div>
        <div>
          <Button onClick={submit} text="Next" />
        </div>
      </Card>
    </>
  )
}

export default StepAvatar
