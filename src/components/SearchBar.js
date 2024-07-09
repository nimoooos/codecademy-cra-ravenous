import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SearchBar() {


    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="What's your craving?"
                />
                <InputGroup.Text className="p-0"><Button>Search</Button></InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Location"
                />
                <InputGroup.Text className="p-0"><Button>Search</Button></InputGroup.Text>
            </InputGroup>
            <Form.Select>
                <option>Best Match</option>
                <option>Highest Rated</option>
                <option>Most Reviewed</option>
            </Form.Select>

        </>
    )
}