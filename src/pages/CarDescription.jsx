import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCarById } from "../JS/Actions/carActions";
import Loading from "../components/Loading";
import DeleteCar from "../components/DeleteCar";
import EditCar from "../components/EditCar";

const CarDescription = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const load = useSelector((state) => state.CarReducer.load);
  const car = useSelector((state) => state.CarReducer.car);

  useEffect(() => {
    dispatch(getCarById(id));
  }, [id, dispatch]);

  console.log(car);
  return (
    <div className="p-5">
      <div className="text-2xl font-semibold text-slate-900 flex gap-2 items-center mb-5">
        <button onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-12 cursor-pointer hover:text-indigo-600 transition-colors"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h1>Car Description</h1>
      </div>
      {load && <Loading />}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Car Image */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <img
                src={car.photo}
                alt={`${car.make} ${car.model}`}
                className="w-full h-112.5 object-cover"
              />
            </div>

            {/* Car Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h1 className="text-4xl font-semibold text-gray-900 capitalize mb-2">
                {car.make} {car.model}
              </h1>

              <p className="text-3xl font-bold text-indigo-600 mb-8">
                ${car.price}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Make</p>
                  <p className="text-lg font-medium text-gray-900 capitalize">
                    {car.make}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Model</p>
                  <p className="text-lg font-medium text-gray-900 capitalize">
                    {car.model}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="text-lg font-medium text-gray-900">
                    {car.year}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-lg font-semibold text-indigo-600">
                    ${car.price}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Autonomy</p>
                  <p className="text-lg font-medium text-gray-900">
                    {car.autonomy}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Charging Time</p>
                  <p className="text-lg font-medium text-gray-900">
                    {car.chargingTime}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <EditCar id={car._id} />

                <DeleteCar id={car._id} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDescription;
