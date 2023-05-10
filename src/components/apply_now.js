import { Button, Modal } from "react-bootstrap";

function ApplyNow(props){
    const {
        showModal,
        onHide
    } = props
    return (
     <Modal show={showModal} onHide={() => onHide()} size="lg">
        <Modal.Header>
            Grab this Opportunity !!
        </Modal.Header>
        <Modal.Body>
         <p>Send us you resume and contact details at enlightenhotels@gmail.com.</p><br></br>
          <p>We will reach out to you soon to dicuss further.</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
     </Modal>
    )
}

export default ApplyNow;