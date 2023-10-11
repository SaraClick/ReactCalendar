import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

function Cards({title, date}) {
  return (
    <>
    <Card className='card mx-auto'>
    <Card.Body>
        <Card.Title class>{title}</Card.Title>
        <Card.Text>{date} </Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}

export default Cards