
import axios from 'axios';




export const forms=()=> {
    return  dispatch => {
    
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

export const lists=(url,data)=>{
        // const response =  axios.post(`${url}`,data)
        // dispatch({ type: 'todos/todosLoaded', payload: response.todos })
        return  dispatch => {

         axios.post(`${url}`,data)
        .then(res => {
            console.log(res)
            // this.setState({data: response.data, isFetching: false})
            dispatch({type:'GET_USER' , payload:data})

        })
        .catch(e => {
            console.log(e);
            dispatch({type:'GET_USER' , payload:data})
        });
    }
}


// function getChequeInquiryInfo(sayadNumber,userIdentifierNumber) {
//     return async dispatch => {
//         dispatch({ type: ServicesConstants.GET_CHEQUE_INQUIRY_REQUEST });
//         return await ServicesService.SayadNumberInquiry({ sayadNumber: `${sayadNumber}` }).then(res => {
//             console.log(res.result)
//             const newRes={...res.result,userIdentifierNumber,sayadNumber}
//             console.log(newRes)
//             dispatch({ type: ServicesConstants.GET_CHEQUE_INQUIRY_SUCCESS, payload: newRes });
//             return res

//         }).catch(data => {
//             console.log(data)
//             notify('', "FAIL_TO_GET_DATA", "error");

//         })
//     }
// }
