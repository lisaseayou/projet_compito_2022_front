import { DotsVerticalIcon } from "@heroicons/react/solid";

const Card = ({card} : {card: any}) => {

  return (
    <a
      className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg  w-80 h-96 mr-1.5"
      href="/"
    >
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex ">
        <div>
          <h5 className="text-xl font-bold text-gray-900">{card.title}</h5>
          <p className="mt-1 text-xs font-medium text-gray-600">
            {card.dateStart} - {card.dateEnd}
          </p>
        </div>

        <div className="flex-shrink-0 hidden ml-3 sm:block">
          <DotsVerticalIcon className="text-gray-900 w-6" />
        </div>
      </div>
      <dl className="flex mt-6">
        <div className="flex">
          {/* {card.badges.map((badge) => (
            <p className="flex mr-1.5">{badge.title}</p>
          ))} */}
        </div>
      </dl>
      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">{card.description}</p>
      </div>
    </a>
  );
};
export default Card;
