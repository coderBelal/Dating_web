 
import { useState } from "react"
import MemberProfile from "./Member"
const members = [
    {
      id: 1,
      name: "Paul",
      age: 37,
      orientation: "Straight",
      location: "Tembisa, South Africa",
      lastSeen: "2 years ago",
      profileImage: "https://randomuser.me/api/portraits/women/24.jpg",
      about: "Test test",
      lookingFor: {
        gender: "Woman",
        ageRange: ["21-25", "26-30", "31-35", "36-40"],
        purpose: "Marriage",
        description: "Test test",
      },
      physical: {
        bodyBuild: "Slim",
        hairColor: "Black",
        hairLength: "Short",
      },
      personal: {
        relationship: "Single",
        children: "Yes, we live together",
        residence: "Live alone in my house",
        education: "Some college",
        occupation: "Employed",
        languages: ["English"],
        smoker: "No",
        drinker: "Casual drinker",
      },
      sexPreferences: {
        excites: ["Clothes", "Smell"],
        frequency: "At least one time a day",
        kind: ["Virtual sex"],
        financeSupport: "No need for a sponsor",
      },
      stats: {
        photos: 1,
        friends: 1,
        comments: 0,
        reviews: 0,
      },
      size: "normal",
    },
    {
      id: 2,
      name: "Sarah",
      age: 29,
      orientation: "Straight",
      location: "Cape Town, South Africa",
      lastSeen: "5 days ago",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      about: "Loves traveling and meeting new people.",
      lookingFor: {
        gender: "Man",
        ageRange: ["30-40"],
        purpose: "Relationship",
        description: "Looking for someone honest and caring.",
      },
      physical: {
        bodyBuild: "Athletic",
        hairColor: "Blonde",
        hairLength: "Long",
      },
      personal: {
        relationship: "Single",
        children: "No",
        residence: "With family",
        education: "Bachelor's degree",
        occupation: "Marketing Specialist",
        languages: ["English", "Afrikaans"],
        smoker: "No",
        drinker: "Social drinker",
      },
      sexPreferences: {
        excites: ["Foreplay", "Whispers"],
        frequency: "A few times a week",
        kind: ["Romantic"],
        financeSupport: "Open to shared responsibility",
      },
      stats: {
        photos: 3,
        friends: 5,
        comments: 2,
        reviews: 1,
      },
      size: "normal",
    },
    {
      id: 3,
      name: "Michael",
      age: 34,
      orientation: "Straight",
      location: "Johannesburg, South Africa",
      lastSeen: "1 week ago",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      about: "Adventurous and fun-loving software developer.",
      lookingFor: {
        gender: "Woman",
        ageRange: ["25-35"],
        purpose: "Marriage",
        description: "Wants a life partner with similar values.",
      },
      physical: {
        bodyBuild: "Average",
        hairColor: "Brown",
        hairLength: "Short",
      },
      personal: {
        relationship: "Divorced",
        children: "Yes, sometimes stay with me",
        residence: "Live alone in apartment",
        education: "Master's degree",
        occupation: "Software Engineer",
        languages: ["English", "Zulu"],
        smoker: "No",
        drinker: "Occasional",
      },
      sexPreferences: {
        excites: ["Kissing", "Touch"],
        frequency: "Weekly",
        kind: ["Emotional connection"],
        financeSupport: "Prefer independence",
      },
      stats: {
        photos: 4,
        friends: 3,
        comments: 0,
        reviews: 0,
      },
      size: "normal",
    },
   
       
        {
          id: 4,
          name: "Emma",
          age: 28,
          orientation: "Straight",
          location: "Durban, South Africa",
          lastSeen: "3 days ago",
          profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
          about: "Creative soul who enjoys music and art.",
          lookingFor: {
            gender: "Man",
            ageRange: ["26-30", "31-35"],
            purpose: "Relationship",
            description: "Looking for someone kind and genuine.",
          },
          physical: {
            bodyBuild: "Slim",
            hairColor: "Brown",
            hairLength: "Long",
          },
          personal: {
            relationship: "Single",
            children: "No",
            residence: "With family",
            education: "Bachelor's degree",
            occupation: "Graphic Designer",
            languages: ["English"],
            smoker: "No",
            drinker: "Casual drinker",
          },
          sexPreferences: {
            excites: ["Foreplay", "Kissing"],
            frequency: "A few times a week",
            kind: ["Romantic"],
            financeSupport: "Open to shared responsibility",
          },
          stats: {
            photos: 2,
            friends: 3,
            comments: 1,
            reviews: 0,
          },
          size: "normal",
        },
        {
          id: 5,
          name: "David",
          age: 35,
          orientation: "Straight",
          location: "Pretoria, South Africa",
          lastSeen: "2 days ago",
          profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
          about: "I love hiking and meaningful conversations.",
          lookingFor: {
            gender: "Woman",
            ageRange: ["26-30", "31-35"],
            purpose: "Marriage",
            description: "Someone who values honesty and loyalty.",
          },
          physical: {
            bodyBuild: "Athletic",
            hairColor: "Black",
            hairLength: "Short",
          },
          personal: {
            relationship: "Divorced",
            children: "Yes, sometimes stay with me",
            residence: "Live alone in apartment",
            education: "Master's degree",
            occupation: "Architect",
            languages: ["English", "Afrikaans"],
            smoker: "No",
            drinker: "Social drinker",
          },
          sexPreferences: {
            excites: ["Touch", "Whispers"],
            frequency: "Weekly",
            kind: ["Emotional connection"],
            financeSupport: "No need for a sponsor",
          },
          stats: {
            photos: 3,
            friends: 2,
            comments: 1,
            reviews: 0,
          },
          size: "normal",
        },
        {
          id: 6,
          name: "Olivia",
          age: 26,
          orientation: "Straight",
          location: "Bloemfontein, South Africa",
          lastSeen: "4 days ago",
          profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
          about: "Enjoys books, movies and deep talks.",
          lookingFor: {
            gender: "Man",
            ageRange: ["30-40"],
            purpose: "Marriage",
            description: "Looking for a life partner with similar values.",
          },
          physical: {
            bodyBuild: "Average",
            hairColor: "Black",
            hairLength: "Medium",
          },
          personal: {
            relationship: "Single",
            children: "No",
            residence: "Share with roommates",
            education: "Some college",
            occupation: "Nurse",
            languages: ["English", "Zulu"],
            smoker: "No",
            drinker: "Casual drinker",
          },
          sexPreferences: {
            excites: ["Foreplay", "Smell"],
            frequency: "Weekly",
            kind: ["Romantic"],
            financeSupport: "Willing to support",
          },
          stats: {
            photos: 2,
            friends: 4,
            comments: 0,
            reviews: 1,
          },
          size: "normal",
        },
        {
          id: 7,
          name: "James",
          age: 32,
          orientation: "Straight",
          location: "Port Elizabeth, South Africa",
          lastSeen: "1 week ago",
          profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
          about: "Simple guy who loves sports and cooking.",
          lookingFor: {
            gender: "Woman",
            ageRange: ["25-35"],
            purpose: "Relationship",
            description: "Looking for someone real.",
          },
          physical: {
            bodyBuild: "Athletic",
            hairColor: "Brown",
            hairLength: "Short",
          },
          personal: {
            relationship: "Single",
            children: "No",
            residence: "With family",
            education: "High school",
            occupation: "Chef",
            languages: ["English"],
            smoker: "Yes",
            drinker: "Social drinker",
          },
          sexPreferences: {
            excites: ["Kissing", "Touch"],
            frequency: "A few times a week",
            kind: ["Experimental"],
            financeSupport: "Open to shared responsibility",
          },
          stats: {
            photos: 1,
            friends: 3,
            comments: 1,
            reviews: 0,
          },
          size: "normal",
        },
        {
          id: 8,
          name: "Sophia",
          age: 30,
          orientation: "Straight",
          location: "East London, South Africa",
          lastSeen: "2 days ago",
          profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
          about: "Teacher who loves children and beach walks.",
          lookingFor: {
            gender: "Man",
            ageRange: ["31-40"],
            purpose: "Marriage",
            description: "Looking for a serious relationship.",
          },
          physical: {
            bodyBuild: "Slim",
            hairColor: "Blonde",
            hairLength: "Long",
          },
          personal: {
            relationship: "Single",
            children: "No",
            residence: "Live alone in my house",
            education: "Bachelor's degree",
            occupation: "Teacher",
            languages: ["English"],
            smoker: "No",
            drinker: "No",
          },
          sexPreferences: {
            excites: ["Smell", "Clothes"],
            frequency: "Weekly",
            kind: ["Romantic"],
            financeSupport: "No need for a sponsor",
          },
          stats: {
            photos: 4,
            friends: 5,
            comments: 2,
            reviews: 1,
          },
          size: "normal",
        },
        {
          id: 9,
          name: "John",
          age: 40,
          orientation: "Straight",
          location: "Kimberley, South Africa",
          lastSeen: "5 days ago",
          profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
          about: "Entrepreneur who enjoys the finer things.",
          lookingFor: {
            gender: "Woman",
            ageRange: ["26-35"],
            purpose: "Marriage",
            description: "Looking for loyalty and trust.",
          },
          physical: {
            bodyBuild: "Average",
            hairColor: "Black",
            hairLength: "Short",
          },
          personal: {
            relationship: "Divorced",
            children: "Yes, we live together",
            residence: "Live alone in my house",
            education: "Bachelor's degree",
            occupation: "Entrepreneur",
            languages: ["English"],
            smoker: "Occasionally",
            drinker: "Social drinker",
          },
          sexPreferences: {
            excites: ["Foreplay", "Dirty talk"],
            frequency: "Daily",
            kind: ["Romantic"],
            financeSupport: "Willing to support",
          },
          stats: {
            photos: 2,
            friends: 4,
            comments: 1,
            reviews: 1,
          },
          size: "normal",
        },
        {
          id: 10,
          name: "Lisa",
          age: 27,
          orientation: "Straight",
          location: "Nelspruit, South Africa",
          lastSeen: "3 days ago",
          profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
          about: "Loves dance and writing poetry.",
          lookingFor: {
            gender: "Man",
            ageRange: ["28-38"],
            purpose: "Relationship",
            description: "Looking for love and respect.",
          },
          physical: {
            bodyBuild: "Slim",
            hairColor: "Red",
            hairLength: "Medium",
          },
          personal: {
            relationship: "Single",
            children: "No",
            residence: "Share with roommates",
            education: "Some college",
            occupation: "Dancer",
            languages: ["English", "Zulu"],
            smoker: "No",
            drinker: "Casual drinker",
          },
          sexPreferences: {
            excites: ["Touch", "Kissing"],
            frequency: "A few times a week",
            kind: ["Romantic"],
            financeSupport: "Prefer independence",
          },
          stats: {
            photos: 2,
            friends: 2,
            comments: 1,
            reviews: 0,
          },
          size: "normal",
        },
        {
            id: 4,
            name: "Linda",
            age: 28,
            orientation: "Straight",
            location: "Durban, South Africa",
            lastSeen: "3 days ago",
            profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
            about: "Passionate about cooking and dancing.",
            lookingFor: {
              gender: "Man",
              ageRange: ["30-35", "36-40"],
              purpose: "Marriage",
              description: "Looking for a mature and supportive partner.",
            },
            physical: {
              bodyBuild: "Curvy",
              hairColor: "Black",
              hairLength: "Medium",
            },
            personal: {
              relationship: "Single",
              children: "No",
              residence: "Live alone",
              education: "Diploma",
              occupation: "Chef",
              languages: ["English", "Zulu"],
              smoker: "No",
              drinker: "Occasional",
            },
            sexPreferences: {
              excites: ["Cooking together", "Touch"],
              frequency: "A few times a week",
              kind: ["Romantic"],
              financeSupport: "Independent",
            },
            stats: {
              photos: 2,
              friends: 6,
              comments: 1,
              reviews: 1,
            },
            size: "normal",
          },
          {
            id: 5,
            name: "James",
            age: 40,
            orientation: "Straight",
            location: "Pretoria, South Africa",
            lastSeen: "2 days ago",
            profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
            about: "Honest, loyal, and family-oriented.",
            lookingFor: {
              gender: "Woman",
              ageRange: ["30-40"],
              purpose: "Marriage",
              description: "Searching for a partner to build a future with.",
            },
            physical: {
              bodyBuild: "Fit",
              hairColor: "Brown",
              hairLength: "Short",
            },
            personal: {
              relationship: "Widowed",
              children: "Yes, grown-up",
              residence: "Own house",
              education: "Bachelor's",
              occupation: "Accountant",
              languages: ["English"],
              smoker: "No",
              drinker: "Rarely",
            },
            sexPreferences: {
              excites: ["Conversation", "Massages"],
              frequency: "Weekly",
              kind: ["Intimate"],
              financeSupport: "Supportive if needed",
            },
            stats: {
              photos: 1,
              friends: 2,
              comments: 0,
              reviews: 0,
            },
            size: "normal",
          },
          {
            id: 6,
            name: "Thandi",
            age: 26,
            orientation: "Straight",
            location: "Bloemfontein, South Africa",
            lastSeen: "Online",
            profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
            about: "Loves nature and long walks.",
            lookingFor: {
              gender: "Man",
              ageRange: ["27-35"],
              purpose: "Relationship",
              description: "Wants someone caring and kind.",
            },
            physical: {
              bodyBuild: "Slim",
              hairColor: "Black",
              hairLength: "Long",
            },
            personal: {
              relationship: "Single",
              children: "No",
              residence: "With parents",
              education: "High school",
              occupation: "Retail Assistant",
              languages: ["English", "Sotho"],
              smoker: "No",
              drinker: "Never",
            },
            sexPreferences: {
              excites: ["Holding hands", "Sweet gestures"],
              frequency: "Rarely",
              kind: ["Emotional connection"],
              financeSupport: "Prefers mutual support",
            },
            stats: {
              photos: 3,
              friends: 4,
              comments: 1,
              reviews: 0,
            },
            size: "normal",
          },
          {
            id: 7,
            name: "Daniel",
            age: 33,
            orientation: "Straight",
            location: "Port Elizabeth, South Africa",
            lastSeen: "2 hours ago",
            profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
            about: "Tech geek and fitness lover.",
            lookingFor: {
              gender: "Woman",
              ageRange: ["25-30", "31-35"],
              purpose: "Marriage",
              description: "Seeking someone health-conscious and fun.",
            },
            physical: {
              bodyBuild: "Athletic",
              hairColor: "Brown",
              hairLength: "Short",
            },
            personal: {
              relationship: "Single",
              children: "No",
              residence: "Own apartment",
              education: "Master's",
              occupation: "IT Consultant",
              languages: ["English", "Afrikaans"],
              smoker: "No",
              drinker: "Occasionally",
            },
            sexPreferences: {
              excites: ["Active lifestyle", "Cleanliness"],
              frequency: "Daily",
              kind: ["Adventurous"],
              financeSupport: "Prefers independence",
            },
            stats: {
              photos: 5,
              friends: 7,
              comments: 3,
              reviews: 2,
            },
            size: "normal",
          },
          {
            id: 8,
            name: "Nomsa",
            age: 31,
            orientation: "Straight",
            location: "Polokwane, South Africa",
            lastSeen: "Yesterday",
            profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
            about: "Spiritual, loving, and grounded.",
            lookingFor: {
              gender: "Man",
              ageRange: ["30-40"],
              purpose: "Marriage",
              description: "Looking for someone serious and settled.",
            },
            physical: {
              bodyBuild: "Average",
              hairColor: "Black",
              hairLength: "Medium",
            },
            personal: {
              relationship: "Single",
              children: "Yes, live with me",
              residence: "Renting",
              education: "Bachelor's",
              occupation: "Teacher",
              languages: ["English", "Venda"],
              smoker: "No",
              drinker: "Rarely",
            },
            sexPreferences: {
              excites: ["Deep talks", "Kisses"],
              frequency: "Few times a month",
              kind: ["Loving"],
              financeSupport: "Mutual respect",
            },
            stats: {
              photos: 4,
              friends: 3,
              comments: 2,
              reviews: 1,
            },
            size: "normal",
          },
      
  ];
  
export default function MembersGrid() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [hoveredMember, setHoveredMember] = useState(null)
  
  const handleMemberClick = (member) => {
    setSelectedMember(member)
  }

  const handleCloseProfile = () => {
    setSelectedMember(null)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#333]">Our members</h1>

      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2">
        {members.map((member) => {
          // Determine grid span based on size
          const colSpan = member.size === "large" ? "col-span-2 row-span-2" : "col-span-1"

          return (
            <div
              key={member.id}
              className={`relative cursor-pointer overflow-hidden ${colSpan}`}
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => handleMemberClick(member)}
            >
              <img
                src={member.profileImage || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover"
              />

              {hoveredMember && hoveredMember.id === member.id && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2">
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm">
                    {member.age} years old, {member.orientation}
                  </p>
                  <p className="text-xs">{member.location}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {selectedMember && (
        <div className="fixed inset-0  flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <MemberProfile member={selectedMember} onClose={handleCloseProfile} />
          </div>
        </div>
      )}
    </div>
  )
}
