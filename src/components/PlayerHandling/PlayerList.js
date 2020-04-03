import React from 'react'
import { Container } from 'react-bootstrap'

export default ( { players } ) => {

    return (
        <Container className="contenders">
            <ul>
                {players.map((player, i) => (
                    <li key={i}>
                        <p> { player } </p>
                    </li>
                ))}
            </ul>
        </Container>

    )

}

