import axios from "axios";
import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { lists } from "../store/actions/formsActions";

function CreateForm(props) {
  const params = useParams();
  const dispatch=useDispatch();
  const Allforms = useSelector((s) => s.data.forms);
  const newArr = Allforms && Allforms.filter((i) => i.path == params.id);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (input) => {
    if(newArr){
      axios.post(`${newArr[0].createurl}`,input)
      .then(res => {
        dispatch({type:'GET_USER' , payload:input})

      })
      .catch(e => {
        
          dispatch({type:'GET_USER' , payload:input})
      });
    }
  };



  return (
    <Container className="mt-4">
      <h3>{newArr && newArr[0].titleform}</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {newArr &&
          newArr[0].field.map((item, index) => (
            <div key={index} className="my-4">
              <label className='my-2'>{item.title}</label>
              <br />

              <input type={item.type} {...register(`${item.name}`)} />
              <br />
            </div>
          ))}


        <Button variant="primary" type="submit">
          ارسال
        </Button>
        </Form>
    </Container>
  );
}

export default CreateForm;
