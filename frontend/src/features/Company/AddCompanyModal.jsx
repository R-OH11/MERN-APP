import React from "react";
import Modal from "../../ui/Modal";
import { Button } from "../../ui/Button";
import AddCompanyForm from "./addCompanyForm";

function AddCompanyModal() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="add-company">
          <Button variant="fill" shape="round">
            + Add company
          </Button>
        </Modal.Open>
        <Modal.Window name="add-company">
          <AddCompanyForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCompanyModal;
