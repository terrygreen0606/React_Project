import React from 'react'
import './signmodal.css'

function SignModal() {
    return (
        <div className="modal fade" id="signup_modal" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Log In</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <label>Put your email here.</label>
                        <input type="email" name="email" placeholder="Email" className="form-control form-control-lg" required/><hr />
                        <label>Put your password here.</label>
                        <input type="password" name="password" placeholder="Password" className="form-control form-control-lg" required/>
                    </div>
                    <div className="modal-footer">
                        <button data-dismiss="modal" className="btn btn-primary solid blank">Close</button>
                        <button type="submit" className="btn btn-primary solid blank">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignModal
