import React, { Component } from 'react';
import '../Styles/QuestionStyle.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'



class Message extends Component {


  render() {

    return (

      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', marginTop: '5%' }}>
        <div className="col-md-10">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
              </h3>
            </div>
            <div className="panel-body two-col">


              <div className="row">
                <div className="col-md-12">
                  <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }} className="col-md-12">
                    <div className="panel panel-primary">
                      <div className="panel-heading">
                        <h3 className="panel-title">
                        </h3>
                      </div>
                      <div className="panel-body two-col">
                        <div style={{ textAlign: "center" }} className="row">

                          <div style={{ display: 'flex', flex: 1, justifyContent: 'center', marginTop: '40px' }}>


                            <div className="col-md-12">
                              <div>
                                <h1>Login to visit this page</h1>
                                <div>
                                  <Link to='/'>
                                    <Button style={{ width: '150px', padding: '10px' }} ><h3> Move To Login</h3> </Button>
                                  </Link>
                                </div>
                              </div>

                            </div>
                          </div>


                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div style={{ textAlign: "center" }} className="panel-footer">
            </div>
          </div>
        </div>
      </div>






    )
  }
}

export default Message;