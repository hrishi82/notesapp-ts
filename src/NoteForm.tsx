import { Form, Stack, Col, Button } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable"
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import React from "react"

export const NoteForm = () => {

    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)
    const navigate = useNavigate()

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Col>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control required ref={titleRef}/>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="tags">
            <Form.Label>Tags</Form.Label>
            <CreatableReactSelect isMulti />
          </Form.Group>
        </Col>
        <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Control required as='textarea' rows={15} ref={markdownRef}/>
          </Form.Group>

          <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

