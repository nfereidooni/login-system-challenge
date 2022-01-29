import { React } from "react";
import "./style.css";
import { Row, Col, Button, Form, FloatingLabel, Image } from 'react-bootstrap';
import prepr_logo from "../assets/img/prepr-logo.png"
import { Link } from "react-router-dom";


function SignUp() {

  return (
    <div className="backgroundSectionLogin container-fluid">
        <div className="LoginBox">

            <Row>
                <Col sm={12} md={6} className="leftSideLogin text-center">

                    <div className="unlockInfinite text-center">
                        <Image src="https://d2qgo50yy98y8.cloudfront.net/public/front/img/registerBackground.jpg" alt="" className="img-fluid" />
                    </div>

                    <div className="leftBullets text-white text-center">
                        <p className="bullet"><span className="icon"><i class="fas fa-rocket fa-2x"></i></span> Join Challenges, Labs and Projects.</p>
                        <p className="bullet"><span className="icon"><i class="fas fa-shapes fa-2x"></i></span> Showcase Your Skills &amp; Portfolio.</p>
                        <p className="bullet"><span className="icon"><i class="fas fa-handshake fa-2x"></i></span> Grow Your Network.</p>
                        <p className="bullet"><span className="icon"><i class="fas fa-medal fa-2x"></i></span> Get Recognized.</p>
                    </div>
                    
                </Col>

                <Col sm={12} md={6} className="rightSideLogin pb-4">

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

                        <Form.Group className="forgotPassword d-flex justify-content-end">
                            <Form.Text>
                            <a href="http://preprlabs.org/password/reset">Forgot?</a>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="text-center mb-2">
                            <Button variant="success" type="submit">
                                Login
                            </Button>
                        </Form.Group>

                        <Form.Group className="orText text-center">
                            <Form.Text>
                            OR 
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="text-center mb-2">
                            <Button variant="primary" type="submit">
                                Continue with LinkedIn
                            </Button>
                        </Form.Group>

                        <Form.Group className="loginText text-center">
                            <Form.Text>
                            Don't have an account? 
                            <br/>
                            <Link to="/">Sign Up</Link>
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