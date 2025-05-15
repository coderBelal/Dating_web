import { useState } from "react";
import { Check, Play } from "lucide-react";

export default function WhyChooseUs() {
  const [showVideo, setShowVideo] = useState(false);

  const features = [
    "Register for Free!",
    "100% human verified profiles",
    "Chat, Voice & Video calling",
    "Private, personalized, and highly confidential service",
    "Halal, safe and secured Matrimony site in Bangladesh",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why choose <span className="text-purple-600">Our Service</span>
            </h2>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-full bg-purple-100 p-1">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
              Find Your Partner
            </button>
          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div className="relative mx-auto max-w-[500px]">
              <div className="overflow-hidden rounded-lg bg-sky-100">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="People meeting"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    onClick={() => setShowVideo(true)}
                    className="rounded-full bg-white p-3 shadow-lg cursor-pointer"
                  >
                    <Play className="h-8 w-8 text-purple-600 fill-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl relative">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-50"
            >
              ✕
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[500px]"
                src="https://youtu.be/NAo38Q9c4xA?si=zQ4HwSkb7CWvmi9i"
                title="Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
