import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {FormControl} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";
import {ListGroupItem} from "react-bootstrap";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <Container>
            <Row className="mt-3">
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter a new task"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                        />
                        <Button variant="primary" onClick={addTodo}>Add Task</Button>
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ListGroup>
                        {todos.map((todo, index) => (
                            <ListGroupItem key={index}>
                                {todo}
                                <Button variant="danger" className="ms-2" onClick={() => removeTodo(index)}>Delete</Button>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default TodoList;