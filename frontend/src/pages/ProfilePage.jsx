import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserDetails } from "../redux/user/actions";
import Loader from "../components/loader";
import Message from "../components/Message";
const ProfilePage = ({ history, location }) => {
  const [validationError, setValidationError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  //   const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { loading, error, userDetails, message } = useSelector(
    (state) => state.userDetails
  );
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      if (!userDetails) {
        dispatch(getUserDetails());
      } else {
        setName(userInfo.name);
        setEmail(userInfo.email);
      }
    }
  }, [history, dispatch, userInfo, userDetails]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(updateUserDetails(name, email, password, currentPassword));
    } else {
      setValidationError("Passwords does not match!");
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h1>Sign Up</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            {error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              validationError && (
                <Message variant="danger">{validationError}</Message>
              )
            )}
            {message && <Message variant="success">{message}</Message>}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placholed="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placholed="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="currentPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placholed="Enter Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placholed="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placholed="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary">
                Update
              </Button>
            </Form>
          </>
        )}
      </Col>
      <Col md={9}>
        <h1>My Orders</h1>
      </Col>
    </Row>
  );
};

export default ProfilePage;
