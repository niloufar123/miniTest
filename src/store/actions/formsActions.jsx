
import axios from 'axios';




export const forms=()=> {
    return dispatch => {
    
        axios.get("https://mocki.io/v1/6a5e6fd7-ae56-4b81-a0b9-dc2525776976")
        .then(res => {
            console.log(res.data)
            // this.setState({data: response.data, isFetching: false})
            dispatch({type:'GET_FORMS' , payload:res.data})

        })
        .catch(e => {
            console.log(e);
            dispatch({type:'GET_FORMS' , payload:[]})
        });
};


      

}

