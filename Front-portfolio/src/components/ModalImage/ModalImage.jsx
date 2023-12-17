import Modal from "react-bootstrap/Modal";
import "./style.css";


function ModalImage(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.imageContent ? (
        <div className="modal-img-container">
          <img
          className="modal-img"
            src={require(`../../assets/images/home/${props?.imageContent}`)}
            alt={props.imageContent}
          />
        </div>
      ) : null}
    </Modal>
  );
}



export default ModalImage;
