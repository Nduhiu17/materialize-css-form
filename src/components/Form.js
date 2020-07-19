import React from 'react'
import image from './images/image.png'


export const Form = () => {
    return (
             <div className="container">
                <div className="row">
                    <form className="col s12">
                    <div class="row">
                        <div class="col s12 m12">
                        <div class="card">
                            <div class="card-image">
                            <img src={image} />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m12">
                        <div class="card"id="first">
                            <span class="card-title" id="first-title">ABCD Church</span>
                            <div class="card-content">
                                <ul>
                                    <li>Event Timing: July 19th, 2020</li>
                                    <li>Event Address: Ruiru</li>
                                    <li>Contact us at : 0724374314</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                          <div class="row">
                             <div class="col s12 m12">
                                <div class="card">
                                    <span class="card-title">Full Name*</span>
                                    <div class="card-content">
                                         <input placeholder="Your answer" name="name" type="text" className="validate"/>
                                    </div>
                                </div>
                             </div>
                          </div>
                          <div class="row">
                             <div class="col s12 m12">
                                <div class="card">
                                    <span class="card-title">What Time will you attend? *</span>
                                    <div class="card-content">
                                    <div className="">
                                        <label>
                                            <input name="group1" type="radio" />
                                            <span>Service is Full Please Pick Select a Different Service</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <label>
                                            <input name="group1" type="radio" />
                                            <span>9:30 AM to 10:30 AM Service 19 Seats remaining</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <label>
                                            <input name="group1" type="radio" />
                                            <span>11:00 AM to 12:30 AM Service 200 Seats remaining</span>
                                        </label>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                             <div class="col s12 m12">
                                <div class="card">
                                    <span class="card-title">Age*</span>
                                    <div class="card-content">
                                         <input placeholder="Your answer" name="name" type="text" className="validate"/>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div class="row">
                             <div class="col s12 m12">
                                <div class="card">
                                    <span class="card-title">Email</span>
                                    <div class="card-content">
                                         <input placeholder="Your answer" name="name" type="text" className="validate"/>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div class="row">
                             <div class="col s12 m12">
                                <div class="card">
                                    <span class="card-title">ID Number</span>
                                    <div class="card-content">
                                        <input placeholder="Your answer" name="name" type="text" className="validate"/>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </form>
                </div>
                <div className='row'>
                     <a class="waves-effect waves-light btn-small" id="button">Submit</a>
                </div>
              </div>
    )
}
