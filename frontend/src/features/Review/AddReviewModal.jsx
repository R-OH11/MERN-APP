import React from "react";
import Modal from "../../ui/Modal";
import { Button } from "../../ui/Button";
import AddReviewForm from "./AddReviewForm";

function AddReviewModal() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="add-review">
          <Button variant="fill" shape="round">
            + Add Review
          </Button>
        </Modal.Open>
        <Modal.Window name="add-review">
          <AddReviewForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddReviewModal;
