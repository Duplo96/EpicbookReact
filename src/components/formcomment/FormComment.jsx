import React, { useEffect, useState } from 'react';
import { Button, Form,} from 'react-bootstrap';
import addComments from "../api/addComments"

const FormComment = ({id}) => {
  const [comment, setComment]= useState({comment:"", rate:1, elementId:id})
  const handlerComment = ({target:{value}}) =>{
setComment(prevComment => ({...prevComment,comment:value}))


  }
  const handlerRate = ({target:{value}}) =>{
    setComment(prevComment => ({...prevComment,rate:value}))
      }
        const postComments = async (e) => {
          e.preventDefault()
         await addComments(comment)
        };
  return (
       
            <Form className='sticky-top' onSubmit={postComments} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Let us know your opinion</Form.Label>
        <Form.Control onChange={handlerComment} type="text"  placeholder="Write here your comment" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate this book</Form.Label>
        <Form.Control onChange={handlerRate}  type="number" placeholder="Vote from 1 to 5" />
      </Form.Group>

      <Button variant="primary"  type="submit">
        Submit
      </Button>
    </Form>
 
    );
};

export default FormComment;