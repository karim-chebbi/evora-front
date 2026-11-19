import { useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editCar } from "../JS/Actions/carActions";

const EditCar = ({ id }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const car = useSelector((state) => state.CarReducer.car);

  const [newCar, setNewCar] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    price: car.price,
    photo: car.photo,
    autonomy: car.autonomy,
    chargingTime: car.chargingTime,
  });

  const handleChange = (e) => {
    setNewCar({
      ...newCar,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(newCar);

    dispatch(editCar(id, newCar));

    setOpen(false);

    setNewCar({
      make: "",
      model: "",
      year: "",
      price: "",
      photo: "",
      autonomy: "",
      chargingTime: "",
    });
  };

  return (
    <div className="flex-1">
      {/* Open Modal Button */}
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-medium transition"
      >
        Edit
      </button>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        width={700}
      >
        <div className="p-4">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Edit Vehicle
          </h1>

          <p className="text-gray-500 mb-8">
            Edit electric vehicle in your Voltara marketplace.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  name: "make",
                  label: "Make",
                  placeholder: car.make,
                },
                {
                  name: "model",
                  label: "Model",
                  placeholder: car.model,
                },
                {
                  name: "year",
                  label: "Year",
                  placeholder: car.year,
                },
                {
                  name: "price",
                  label: "Price",
                  placeholder: car.price,
                },
                {
                  name: "photo",
                  label: "Photo URL",
                  placeholder: car.photo,
                },
                {
                  name: "autonomy",
                  label: "Autonomy",
                  placeholder: car.autonomy,
                },
                {
                  name: "chargingTime",
                  label: "Charging Time",
                  placeholder: car.chargingTime,
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>

                  <input
                    type="text"
                    name={field.name}
                    value={newCar[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              ))}
            </div>

            {/* Preview Image */}

            {car.photo && (
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">Preview</p>

                <img
                  src={car.photo}
                  alt="car preview"
                  className="w-full h-48 object-cover rounded-lg border"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-8 bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium transition"
            >
              Save Vehicle
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditCar;
