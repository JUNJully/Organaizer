import React from 'react'
import {CloseButton,ListGroup,Container,Row,Col} from 'react-bootstrap'


export default function Todo (props) {

return (
<ListGroup.Item>
<Container>
<Row>
<Col>

{props.time} : {props.title}

</Col>
<Col sm={1}>
<CloseButton onClick={()=>props.deleteTodo(props)}/>
</Col>
</Row>
</Container>
</ListGroup.Item>
)
}