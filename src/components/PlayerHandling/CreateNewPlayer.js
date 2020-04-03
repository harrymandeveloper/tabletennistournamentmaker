import React, {useState} from 'react'
import {Form, Button, Container, Row} from 'react-bootstrap'

export default ( { addPlayer } ) => {

    const [playerName, setPlayerName] = useState('')
    const handleChange = e => {
        setPlayerName(e.currentTarget.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // add the new player to the list
        addPlayer(playerName)
        // update state with new list, reset the new player input
        setPlayerName('')
    }

    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Add Players</Form.Label>
                    <Form.Control 
                    onChange={handleChange} 
                    value={playerName}></Form.Control>
                </Form.Group>
                <Row>
                    <Button 
                        onClick={handleSubmit} 
                        variant="primary" 
                        type="submit"
                        >Add Name
                    </Button>
                </Row>
            </Form>
        </Container>
        
    )

}