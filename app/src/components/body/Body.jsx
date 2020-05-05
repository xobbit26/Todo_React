import React from 'react';

import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './body.css';

export default function Body() {
    return (
        <div className="app-body">
            <InputGroup className="mb-3">
                <FormControl placeholder="Input your new todo"/>
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}