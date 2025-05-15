import React, { useState, useEffect } from 'react';
import { Search, Heart, User, MapPin, Calendar, Mail, Phone,Gift,   Cloud  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Sample user data (this would normally come from an API)
const usersData = [
  {
    id: 1,
    name: "Rahima Akter",
    age: 28,
    gender: "Woman",
    location: "Dhaka",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    interests: ["Reading", "Cooking", "Travel"],
    about: "Looking for someone who shares my passion for life and adventure.",
    contact: {
      email: "rahima@example.com",
      phone: "+880 1700 000001"
    }
  },
  {
    id: 2,
    name: "Kamal Hossain",
    age: 32,
    gender: "Man",
    location: "Chittagong",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    interests: ["Sports", "Movies", "Photography"],
    about: "I enjoy outdoor activities and exploring new places.",
    contact: {
      email: "kamal@example.com",
      phone: "+880 1700 000002"
    }
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    age: 25,
    gender: "Woman",
    location: "Sylhet",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    interests: ["Music", "Art", "Dancing"],
    about: "Creative soul looking for someone to share life's beautiful moments.",
    contact: {
      email: "nusrat@example.com",
      phone: "+880 1700 000003"
    }
  },
  {
    id: 4,
    name: "Rahim Ahmed",
    age: 35,
    gender: "Man",
    location: "Rajshahi",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    interests: ["Hiking", "Reading", "Cooking"],
    about: "I believe in living life to the fullest and creating meaningful connections.",
    contact: {
      email: "rahim@example.com",
      phone: "+880 1700 000004"
    }
  },
  {
    id: 5,
    name: "Sadia Islam",
    age: 29,
    gender: "Woman",
    location: "Khulna",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    interests: ["Yoga", "Travel", "Photography"],
    about: "Seeking someone who appreciates the simple joys of life.",
    contact: {
      email: "sadia@example.com",
      phone: "+880 1700 000005"
    }
  },
  {
    id: 6,
    name: "Farhan Khan",
    age: 40,
    gender: "Man",
    location: "Barisal",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    interests: ["Business", "Travel", "Food"],
    about: "Looking for a partner who values honesty and communication.",
    contact: {
      email: "farhan@example.com",
      phone: "+880 1700 000006"
    }
  },
  {
    id: 7,
    name: "Tania Rahman",
    age: 27,
    gender: "Woman",
    location: "Dhaka",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    interests: ["Movies", "Cooking", "Shopping"],
    about: "I enjoy good conversations and creating memories together.",
    contact: {
      email: "tania@example.com",
      phone: "+880 1700 000007"
    }
  },
  {
    id: 8,
    name: "Imran Hossain",
    age: 33,
    gender: "Man",
    location: "Rangpur",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    interests: ["Cricket", "Technology", "Music"],
    about: "Tech enthusiast looking for someone to share life's adventures.",
    contact: {
      email: "imran@example.com",
      phone: "+880 1700 000008"
    }
  }
];

// Bangladesh districts
const bangladeshDistricts = [
  "Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh",
  "Comilla", "Narayanganj", "Gazipur", "Narsingdi", "Tangail", "Bogra", "Dinajpur", "Jessore",
  "Kushtia", "Faridpur", "Noakhali", "Feni", "Brahmanbaria", "Chandpur", "Lakshmipur", "Cox's Bazar",
  "Bandarban", "Rangamati", "Khagrachari", "Sunamganj", "Habiganj", "Moulvibazar", "Pabna", "Sirajganj",
  "Natore", "Naogaon", "Joypurhat", "Chapainawabganj", "Satkhira", "Bagerhat", "Chuadanga", "Meherpur",
  "Jhenaidah", "Magura", "Narail", "Pirojpur", "Jhalokati", "Bhola", "Patuakhali", "Barguna",
  "Thakurgaon", "Panchagarh", "Nilphamari", "Lalmonirhat", "Kurigram", "Gaibandha", "Sherpur",
  "Jamalpur", "Netrokona", "Kishoreganj"
];

function  Hero() {
  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState([18, 80]);
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(80);
  const navigate = useNavigate()
  const handleSearch = () => {
    // Filter users based on search criteria
    
    const results = usersData.filter(user => {
      const genderMatch = gender === "" || user.gender === gender;
      const ageMatch = user.age >= minAge && user.age <= maxAge;
      const locationMatch = location === "" || user.location === location;
      
      return genderMatch && ageMatch && locationMatch;
    });
    
    setSearchResults(results);
    setShowResults(true);
    navigate("/results", { state: { results } });
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative  bg-gradient-to-r from-purple-100 via-purple-400 to-purple-300    ">
        {/* Navigation */}
        <div className="absolute top-20 left-20 text-white opacity-20">
        <Cloud size={80} />
      </div>
      <div className="absolute top-40 right-40 text-white opacity-20">
        <Cloud size={60} />
      </div>
      <div className="absolute bottom-40 left-40 text-white opacity-20">
        <Heart size={40} />
      </div>
      <div className="absolute top-60 left-60 text-purple-300 animate-bounce">
        <Mail size={30} />
      </div>
      <div className="absolute right-60 top-80 text-purple-300 animate-bounce delay-300">
        <Mail size={30} />
      </div>
      <div className="absolute right-48 top-40 text-white animate-pulse">
        <Gift size={60} fill="rgba(168, 85, 247, 0.4)" stroke="white" />
      </div>
      
      {/* Lantern decorations */}
      <div className="absolute left-20 top-80">
        <div className="w-10 h-20 bg-purple-300 opacity-30 rounded-lg relative">
          <div className="absolute -top-4 left-0 right-0 h-4 bg-purple-300 opacity-30 rounded-t-lg"></div>
          <div className="absolute -bottom-4 left-0 right-0 h-4 bg-purple-300 opacity-30 rounded-b-lg"></div>
        </div>
      </div>
      <div className="absolute right-20 top-80">
        <div className="w-10 h-20 bg-purple-300 opacity-30 rounded-lg relative">
          <div className="absolute -top-4 left-0 right-0 h-4 bg-purple-300 opacity-30 rounded-t-lg"></div>
          <div className="absolute -bottom-4 left-0 right-0 h-4 bg-purple-300 opacity-30 rounded-b-lg"></div>
        </div>
      </div>
        {/* Hero Content */}
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
          {/* Left Side - Text */}
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Find Your Perfect Match
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of singles looking for meaningful connections. Our platform helps you find compatible partners based on your preferences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100">
                Join Now
              </button>
              <button className="bg-transparent text-white border border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Search Form */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Your Match</h2>
              
              {/* Search Form */}
              <div className="space-y-6">
                {/* Gender Selection */}
                <div>
                  <label className="block text-purple-700 mb-2 underline ">I am looking for</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      className={`py-3 rounded-lg flex justify-center items-center ${gender === "Woman" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700"}`}
                      onClick={() => setGender("Woman")}
                    >
                      <span>Woman</span>
                    </button>
                    <button 
                      className={`py-3 rounded-lg flex justify-center items-center ${gender === "Man" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
                      onClick={() => setGender("Man")}
                    >
                      <span>Man</span>
                    </button>
                  </div>
                </div>

                {/* Age Range */}
                <div>
                  <label className="block text-gray-700 mb-2">Age Range</label>
                  <div className="flex items-center space-x-4">
                    <input 
                      type="number" 
                      min="18" 
                      max="80" 
                      value={minAge}
                      onChange={(e) => setMinAge(parseInt(e.target.value))}
                      className="w-full p-3 border rounded-lg"
                      placeholder="Min Age"
                    />
                    <span className="text-gray-500">to</span>
                    <input 
                      type="number" 
                      min="18" 
                      max="80" 
                      value={maxAge}
                      onChange={(e) => setMaxAge(parseInt(e.target.value))}
                      className="w-full p-3 border rounded-lg"
                      placeholder="Max Age"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-gray-700 mb-2">Location</label>
                  <select 
                    className="w-full p-3 border rounded-lg bg-white"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="">Select District</option>
                    {bangladeshDistricts.map((district, index) => (
                      <option key={index} value={district}>{district}</option>
                    ))}
                  </select>
                </div>

                {/* Search Button */}
              
                <div onClick={handleSearch}>
                <div   class="rounded relative inline-flex group items-center justify-center px-15 py-2 m-1 cursor-pointer border-b-4 border-l-2   active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
    <span class="absolute w-0 h-0 transition-all  duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
    <span class="relative ">Search Your Partner</span>
</div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-purple-600 py-6">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-around text-center">
              <div className="mb-4 md:mb-0">
                <div className="text-3xl font-bold text-white">10,000+</div>
                <div className="text-blue-200">Active Members</div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="text-3xl font-bold text-white">1,500+</div>
                <div className="text-blue-200">Successful Matches</div>
              </div>
              <div className="mb-4 md:mb-0">
                <div className="text-3xl font-bold text-white">4.8/5</div>
                <div className="text-blue-200">User Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-200">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results Section */}
      {showResults && (
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Search Results</h2>
          
          {searchResults.length === 0 ? (
            <div className="text-center text-gray-600 py-12">
              <p className="text-xl">No matches found. Try adjusting your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map(user => (
                <div key={user.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* User Image */}
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={user.image || "/placeholder.svg"} 
                      alt={user.name} 
                      className="w-full h-full object-cover"
                    />
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
                    
                    <p className="text-gray-600 mb-4">{user.about}</p>
                    
                    {/* Interests */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {user.interests.map((interest, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="border-t pt-4">
                      <div className="flex items-center text-gray-600 mb-2">
                        <Mail size={16} className="mr-2" />
                        <span>{user.contact.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone size={16} className="mr-2" />
                        <span>{user.contact.phone}</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex mt-6 space-x-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex justify-center items-center space-x-1 hover:bg-blue-700">
                        <User size={16} />
                        <span>View Profile</span>
                      </button>
                      <button className="flex-1 bg-pink-500 text-white py-2 rounded-lg flex justify-center items-center space-x-1 hover:bg-pink-600">
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
      )}
 
   
    </div>
  );
}

export default  Hero;