import { Button, Modal } from "react-bootstrap";

function Form(props){
    const {
        showModal,
        onHide
    } = props
    return (
     <Modal show={showModal} onHide={() => onHide()} size="lg">
        <Modal.Header>
            Feel Free to Contact Us !!
        </Modal.Header>
        <Modal.Body>
            <div class="partner-form row">
                    <div className="col-md-6 d-flex flex-column">
                        <label><strong>Hotel Name</strong></label>
                        <input type="text" name="hotel" placeholder="Hotel Name" required></input>
                    </div>
                    <div className="col-md-6 d-flex flex-column">
                        <label><strong>Address</strong></label>
                        <input type="textbox" name="Address" placeholder="Address"></input>
                    </div>  
                    <div className="col-md-6 d-flex flex-column mt-3">
                        <label><strong>Email</strong></label>
                        <input type="email" name="Email" placeholder="Contact Email" required></input>
                    </div>    
                    <div className="col-md-6 d-flex flex-column mt-3">
                        <label><strong>Website</strong></label>
                        <input type="text" name="website" placeholder="Website"></input>
                    </div> 
                    <div className="col-md-12 d-flex flex-column mt-3">
                        <label><strong>Message</strong></label>
                        <textarea name="message" placeholder="Message"></textarea>
                    </div>        
            </div>
        </Modal.Body>
        <Modal.Footer>
            <button className="primary-btn" type="submit" form="partner_form" value="Submit" onClick={() => onHide()}>Submit</button>
        </Modal.Footer>
     </Modal>
    )
}

export default Form;