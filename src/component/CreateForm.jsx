import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CreateForm(props) {
  const params = useParams();
  const Allforms = useSelector((s) => s.data.forms);

  const newArr = Allforms && Allforms.filter((i) => i.path == params.id);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (input) => {
    console.log(input);
  };

  // let positive_array = Allforms && Allforms.filter(function(value) {
  //   return value >= 0; });

  console.log(params, Allforms, newArr);

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

        {/* <input type="submit" value="Submit" /> */}

        <Button variant="primary" type="submit">
          ازسال
        </Button>
        </Form>
    </Container>
  );
}

export default CreateForm;
