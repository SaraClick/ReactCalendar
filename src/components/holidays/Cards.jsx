import React from 'react'
import Card from 'react-bootstrap/Card';

function Cards({title, date}) {
  return (
    <>
    <Card className='card-holiday'>
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{date} </Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}

export default Cards