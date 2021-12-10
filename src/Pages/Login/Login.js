import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./login.css";
import { Container } from "@material-ui/core";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import UnstyledButtonCustom from "../../components/ButtonValidateLogin/ButtonValidateLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
      <Container>
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email" >
          <Form.Label><AlternateEmailIcon className="Icon_Login"/>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="Form_group">
          <Form.Label><VpnKeyIcon className="Icon_Login"/> Mot de passe</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="ButtonValidateLogin">
          <UnstyledButtonCustom  type="submit" disabled={!validateForm()}/>
          </div>
      </Form>
    </div>
    </Container>
  );
}