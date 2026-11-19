import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../JS/Actions/CarActions";
import Loading from "../components/Loading";
import CarCard from "../components/CarCard";
import AddCar from "../components/AddCar";

const Marketplace = () => {
  const load = useSelector((state) => state.CarReducer.load);
  const cars = useSelector((state) => state.CarReducer.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold text-slate-900">Marketplace</h1>
      <AddCar />
      {load && <Loading />}
      <div className="grid md:p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {cars.map((car) => (
          <CarCard car={car} key={car._id} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
