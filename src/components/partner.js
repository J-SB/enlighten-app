import { Button, Modal } from "react-bootstrap";

function form(props){
    const {
        showModal
    } = props
    return (
     <Modal>
        <Modal.Header>
            Feel Free to Contact Us !!
        </Modal.Header>
        <Modal.Body>
            <div class="partner-form">
                <form method="POST" action="#" id="partner_form">
                    <div>
                        <label><strong>Hotel Name</strong></label>
                        <input type="text" name="hotel" placeholder="Hotel Name" required></input>
                    </div>
                    <div>
                        <label><strong>Address</strong></label>
                        <input type="textbox" name="Address" placeholder="Address"></input>
                    </div>  
                    <div>
                        <label><strong>Email</strong></label>
                        <input type="email" name="Email" placeholder="Contact Email" required></input>
                    </div>    
                    <div>
                        <label><strong>Website</strong></label>
                        <input type="text" name="website" placeholder="Website"></input>
                    </div> 
                    <div>
                        <label><strong>Message</strong></label>
                        <textarea name="message" placeholder="Message"></textarea>
                    </div>        
                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <button className="primary-btn" type="submit" form="partner_form" value="Submit">Submit</button>
        </Modal.Footer>
     </Modal>
    )
}