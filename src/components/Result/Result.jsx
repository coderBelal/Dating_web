import { useLocation } from 'react-router-dom';
import { MapPin, Mail, Phone, User, Heart } from "lucide-react";

function SearchResults() {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  return (
    <div className="min-h-screen  bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200  ">
   <div className=" mx-auto mb-12  bg-gradient-to-r from-purple-100 via-purple-400 to-purple-300  rounded-xl shadow-lg p-6 text-center">
  <h1 className="text-3xl font-bold">Search Results</h1>
</div>


      {results.length === 0 ? (
        <div className="text-center text-gray-600 py-12">
          <p className="text-xl">No matches found. Try adjusting your search criteria.</p>
        </div>
      ) : (
        <div className="  mx-auto  max-w-7xl  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map(user => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden"
            >
              {/* Image Section with Overlay Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={user.image || "/placeholder.svg"}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                  Online
                </span>
              </div>

              {/* User Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin size={16} className="mr-1" />
                      <span>{user.location}</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {user.age} yrs
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{user.about}</p>

                {/* Interests */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {user.interests?.map((interest, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Mail size={16} className="mr-2" />
                    <span>{user.contact?.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone size={16} className="mr-2" />
                    <span>{user.contact?.phone}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex mt-6 space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center space-x-1 hover:bg-blue-700 transform hover:scale-105 transition duration-200">
                    <User size={16} />
                    <span>View Profile</span>
                  </button>
                  <button className="flex-1 bg-pink-500 text-white py-2 rounded-lg flex justify-center items-center space-x-1 hover:bg-pink-600 transform hover:scale-105 transition duration-200">
                    <Heart size={16} />
                    <span>Like</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
 
    </div>
  );
}

export default SearchResults;
