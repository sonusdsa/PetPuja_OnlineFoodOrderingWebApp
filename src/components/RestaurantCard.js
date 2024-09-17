import { IMG_CDN_URL } from "../Constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="w-80 h-96 rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 m-4">
      <div className="h-40 w-full">
        <img
          className="h-full w-full object-cover object-center"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-56">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <span
              className={`px-2 py-1 text-sm font-bold rounded ${
                avgRating >= 4
                  ? "bg-green-500 text-white"
                  : "bg-yellow-500 text-white"
              }`}
            >
              💖 {avgRating}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2 truncate">
            {cuisines.join(", ")}
          </p>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{sla.slaString}</span>
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
