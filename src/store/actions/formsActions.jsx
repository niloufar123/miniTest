
import axios from 'axios';

export const forms=()=> {
    return  dispatch => {
    
        axios.get("https://mocki.io/v1/6a5e6fd7-ae56-4b81-a0b9-dc2525776976")
        .then(res => {
            dispatch({type:'GET_FORMS' , payload:res.data})
        })
        .catch(e => {
            dispatch({type:'GET_FORMS' , payload:[]})
        });
};
      

}

export const lists=(url,data)=>{
       
        return  dispatch => {
         axios.post(`${url}`,data)
        .then(res => {
            dispatch({type:'GET_USER' , payload:data})

        })
        .catch(e => {
            dispatch({type:'GET_USER' , payload:data})
        });
    }
}

