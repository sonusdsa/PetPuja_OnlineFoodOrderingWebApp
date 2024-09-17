import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ imageId, name, description, price, defaultPrice }) => {
  return (
    <>
      <div className=" w-full h-full rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 m-4">
        <div className=" h-40 w-full overflow-hidden rounded-t-lg">
          <img
            className=" h-full w-full object-cover object-center"
            src={IMG_CDN_URL + imageId}
            alt={name}
          />
        </div>
        <div className=" p-4 flex flex-col justify-between h-56">
          <div>
            <div className=" flex justify-between items-center mb-2">
              <h2 className=" text-xl font-semibold text-gray-800">{name}</h2>
            </div>
            <p className=" text-gray-600 text-sm mb-2">{description}</p>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>
              {price ? `Rupees : ${price / 100}` : `${defaultPrice / 100}`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
