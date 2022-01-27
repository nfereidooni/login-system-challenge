import { React } from "react";
import "./style.css";
import { Row, Col, Button, Form, FloatingLabel, Image } from 'react-bootstrap';
import prepr_logo from "../assets/img/prepr-logo.png"
import { Link } from "react-router-dom";


function SignUp() {

  return (
    <div className="backgroundSection container-fluid">
        <div className="signUpBox">

            <Row>
                <Col sm={12} md={8} lg={6} className="leftSide">
                    <div className="unlockInfinite text-center">
                        <Image src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/registerBackground.jpg" alt="" className="img-fluid" />
                    </div>

                    TEST 1 2 3
                    
                </Col>

                <Col sm={12} md={4} lg={6} className="rightSide pb-4">

                    <div className="preprLogo text-center">
                        <Image src={prepr_logo}/>
                    </div>
                    
                    <Form>

                        <FloatingLabel    
                        controlId="floatingInput"
                        label="User Name or Email"
                        className="mb-3">
                            <Form.Control type="text" placeholder="User Name*" />
                        </FloatingLabel>
                        
                        <FloatingLabel    
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3">
                            <Form.Control type="password" placeholder="Password*" />
                        </FloatingLabel>

                        <Form.Group className="forgotPassword text-right">
                            <Form.Text>
                            <a href="http://preprlabs.org/password/reset">Forgot?</a>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="text-center mb-2">
                            <Button variant="success" type="submit">
                                Register
                            </Button>
                        </Form.Group>

                        <Form.Group className="loginText text-center">
                            <Form.Text>
                            Already have an account? 
                            <br/>
                            <Link to="/login">Login</Link>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="orgText text-center">
                            <Form.Text>
                            Are you an organization?
                            <br/>
                            <Link to="/organization/register">Organization Register</Link>
                            </Form.Text>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default SignUp;