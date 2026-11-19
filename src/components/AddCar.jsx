import { useState } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { addCar } from "../JS/Actions/carActions";

const AddCar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [car, setCar] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    photo: "",
    autonomy: "",
    chargingTime: "",
  });

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(car);

    dispatch(addCar(car));

    setOpen(false);

    setCar({
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
    <>
      {/* Open Modal Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Add Vehicle
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
            Add New Vehicle
          </h1>

          <p className="text-gray-500 mb-8">
            Add an electric vehicle to your Voltara marketplace.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  name: "make",
                  label: "Make",
                  placeholder: "Tesla",
                },
                {
                  name: "model",
                  label: "Model",
                  placeholder: "Model S",
                },
                {
                  name: "year",
                  label: "Year",
                  placeholder: "2025",
                },
                {
                  name: "price",
                  label: "Price",
                  placeholder: "50000",
                },
                {
                  name: "photo",
                  label: "Photo URL",
                  placeholder: "https://image.com/car.jpg",
                },
                {
                  name: "autonomy",
                  label: "Autonomy",
                  placeholder: "500 km",
                },
                {
                  name: "chargingTime",
                  label: "Charging Time",
                  placeholder: "30 min",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>

                  <input
                    type="text"
                    name={field.name}
                    value={car[field.name]}
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
    </>
  );
};

export default AddCar;
