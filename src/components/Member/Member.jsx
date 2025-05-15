import React, { useState } from "react";

export default function MemberProfile({ member, onClose }) {
    const [activeTab, setActiveTab] = useState("profile");

    return (
    <div className="p-6 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200 ">
      {/* Header with close button */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold">{member.name}</h2>
          <p className="text-gray-500">Last seen {member.lastSeen || "recently"}</p>
          <p className="text-lg">
            {member.age} years old, {member.orientation}
          </p>
          <p className="text-gray-600">{member.location}</p>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">
          &times;
        </button>
      </div>

      {/* Profile tabs */}
      <div className="flex border-b mb-6">
        <div
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 font-medium cursor-pointer ${
            activeTab === "profile" ? "border-b-2 border-blue-500" : "text-gray-500"
          }`}
        >
          Profile
        </div>
        <div
          onClick={() => setActiveTab("photos")}
          className={`px-4 py-2 cursor-pointer ${
            activeTab === "photos" ? "border-b-2 border-blue-500 font-medium" : "text-gray-500"
          }`}
        >
          Photos{member.stats?.photos ? ` ${member.stats.photos}` : ""}
        </div>
        <div
          onClick={() => setActiveTab("friends")}
          className={`px-4 py-2 cursor-pointer ${
            activeTab === "friends" ? "border-b-2 border-blue-500 font-medium" : "text-gray-500"
          }`}
        >
          Friends{member.stats?.friends ? ` ${member.stats.friends}` : ""}
        </div>
        <div
          onClick={() => setActiveTab("comments")}
          className={`px-4 py-2 cursor-pointer ${
            activeTab === "comments" ? "border-b-2 border-blue-500 font-medium" : "text-gray-500"
          }`}
        >
          Comments{member.stats?.comments ? ` ${member.stats.comments}` : ""}
        </div>
        <div
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 cursor-pointer ${
            activeTab === "reviews" ? "border-b-2 border-blue-500 font-medium" : "text-gray-500"
          }`}
        >
          Reviews{member.stats?.reviews ? ` ${member.stats.reviews}` : ""}
        </div>
      </div>


      {/* Main profile content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - Photo and basic info */}
        <div>
          <img
            src={member.profileImage || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-auto rounded-lg mb-4"
          />

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-medium mb-2">I am looking for</h3>

            {member.lookingFor && (
              <div className="space-y-2">
                <p>
                  <span className="text-gray-600">Wish to meet:</span>
                  <br />— {member.lookingFor.gender}
                </p>

                {member.lookingFor.ageRange && (
                  <div>
                    <p className="text-gray-600">Preferred age:</p>
                    {member.lookingFor.ageRange.map((range, index) => (
                      <p key={index}>— {range}</p>
                    ))}
                  </div>
                )}

                <p>
                  <span className="text-gray-600">Purpose of dating:</span>
                  <br />— {member.lookingFor.purpose}
                </p>

                <div>
                  <p className="text-gray-600">Whom I want to find:</p>
                  <p>{member.lookingFor.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Middle column - Physical and personal info */}
        <div className="space-y-6">
          {member.physical && (
            <div>
              <h3 className="font-medium border-b pb-2 mb-3">Physical</h3>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-600">Body build:</p>
                <p>{member.physical.bodyBuild}</p>

                <p className="text-gray-600">Hair color:</p>
                <p>{member.physical.hairColor}</p>

                <p className="text-gray-600">Hair length:</p>
                <p>{member.physical.hairLength}</p>
              </div>
            </div>
          )}

          {member.personal && (
            <div>
              <h3 className="font-medium border-b pb-2 mb-3">Personal</h3>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-600">Relationship:</p>
                <p>{member.personal.relationship}</p>

                <p className="text-gray-600">Children:</p>
                <p>{member.personal.children}</p>

                <p className="text-gray-600">Place of residence:</p>
                <p>{member.personal.residence}</p>

                <p className="text-gray-600">Education:</p>
                <p>{member.personal.education}</p>

                <p className="text-gray-600">Occupation:</p>
                <p>{member.personal.occupation}</p>

                <p className="text-gray-600">Languages spoken:</p>
                <div>
                  {member.personal.languages &&
                    member.personal.languages.map((lang, index) => <p key={index}>— {lang}</p>)}
                </div>

                <p className="text-gray-600">Smoker:</p>
                <p>{member.personal.smoker}</p>

                <p className="text-gray-600">Drinker:</p>
                <p>{member.personal.drinker}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right column - Sex preferences */}
        <div>
          {member.sexPreferences && (
            <div>
              <h3 className="font-medium border-b pb-2 mb-3">Preferences in sex</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">What excites me:</p>
                  {member.sexPreferences.excites &&
                    member.sexPreferences.excites.map((item, index) => <p key={index}>— {item}</p>)}
                </div>

                <div>
                  <p className="text-gray-600">How often I would like to make sex:</p>
                  <p>{member.sexPreferences.frequency}</p>
                </div>

                <div>
                  <p className="text-gray-600">Kind of sex I like:</p>
                  {member.sexPreferences.kind &&
                    member.sexPreferences.kind.map((item, index) => <p key={index}>— {item}</p>)}
                </div>

                <div>
                  <p className="text-gray-600">Finance support:</p>
                  <p>{member.sexPreferences.financeSupport}</p>
                </div>
              </div>
            </div>
          )}
       
        </div>
        
      </div>
      {activeTab === "photos" && <p>Photos content goes here.</p>}
        {activeTab === "friends" && <p>Friends content goes here.</p>}
        {activeTab === "comments" && <p>Comments content goes here.</p>}
        {activeTab === "reviews" && <p>Reviews content goes here.</p>}
    </div>
  )
}
