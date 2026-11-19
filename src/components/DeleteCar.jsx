import { Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCar } from "../JS/Actions/carActions";

const DeleteCar = ({ id }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteCar = () => {
    dispatch(deleteCar(id));
    setIsModalOpen(false);
    navigate(-1);
  };
  return (
    <div className="flex-1">
      <button
        onClick={showModal}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition"
      >
        Delete
      </button>
      <Modal
        title="Delete Car"
        open={isModalOpen}
        onOk={handleDeleteCar}
        onCancel={handleCancel}
        okType="danger"
      >
        <p>Are you sure you want to delete this car?</p>
      </Modal>
    </div>
  );
};

export default DeleteCar;
