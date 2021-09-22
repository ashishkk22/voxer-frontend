import axios from "axios";
import { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";
export function useLoadingWithRefresh() {
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch();
  useEffect(() => {
      (async ()=>{
         try {
              const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/refresh`,
                {
                  withCredentials: true,
                  //withcredential true cookie send karva mate
                }
              )
            dispatch(setAuth(data));
            setLoading(false);
         } catch (err) {
             console.log(err);
             setLoading(false);
         }
      })(); 
  }, [])
  return {loading};
}
