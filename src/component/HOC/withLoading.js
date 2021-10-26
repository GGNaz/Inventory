import React ,{useState} from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import  axios  from 'axios';
const withLoading = WrappedComponent => props => {
   
    const [show, setShow] = useState(false);

    axios.interceptors.request.use(
        (config) => {
            setShow(true);
            return config;
        },
        (error) => {
            setShow(false);
            return Promise.reject(error);
        }
    )
    axios.interceptors.response.use(
        (response) => {
            setShow(false);
            return response;
        },
        (error) => {
            setShow(false);
            return Promise.reject(error);
        }
    )
   
    return (
        <div>
         <Backdrop show={show} />
         <WrappedComponent {...props}/>
        </div>
    )
} 
export default withLoading;