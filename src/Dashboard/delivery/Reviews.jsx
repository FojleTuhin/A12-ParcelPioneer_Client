"use client"

import { Rating } from "@smastrom/react-rating"
import { Helmet } from "react-helmet-async"
import "@smastrom/react-rating/style.css"
import useAxiosPublic from "@/hooks/useAxiosPublic"
import { useQuery } from "@tanstack/react-query"
import useUserRole from "@/hooks/useUserRole"
import { useEffect, useState } from "react"

// Custom rating styles to match the theme
const customStyles = {
  itemShapes: "star",
  activeFillColor: "#3EA570",
  inactiveFillColor: "#EBFBE5",
}

export default function Reviews() {
  const axiosPublic = useAxiosPublic()
  const [userRole] = useUserRole()
  const [showItems, setShowItems] = useState(false)

  // Show items with animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowItems(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const { data: allfeedback = [], isLoading } = useQuery({
    queryKey: ["allfeedback", userRole._id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/feedback/${userRole._id}`)
      return res.data
    },
  })

  return (
    <div className="min-h-screen bg-[#F8F6F1] pb-16">
      <Helmet>
        <title>ParcelPioneer || Client Reviews</title>
      </Helmet>

      {/* Header Section */}
      <div className="relative mb-16">
        <div className="bg-[#EBFBE5] py-8 shadow-md">
          <h1 className="text-[#3EA570] font-bold text-3xl text-center">What Our Clients Say</h1>
          <p className="text-center text-[#3EA570]/80 mt-2">
            Discover the experiences of those who have used our services
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3EA570] rounded-full"></div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3EA570]"></div>
        </div>
      )}

      {/* No Reviews State */}
      {!isLoading && allfeedback.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl text-gray-600">No reviews available yet</h3>
          <p className="text-gray-500 mt-2">Be the first to leave a review!</p>
        </div>
      )}

      {/* Reviews Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allfeedback.map((review, index) => (
          <div
            key={review._id}
            className={`relative review-card ${showItems ? "show" : ""}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Avatar */}
              <div className="relative h-24 flex justify-center">
                <div className="absolute -bottom-12 flex justify-center items-center">
                  <div className="h-24 w-24 rounded-full border-4 border-[#EBFBE5] shadow-md overflow-hidden">
                    <img
                      src={review.photo || "/placeholder.svg?height=100&width=100"}
                      alt={review.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 pb-6 px-6">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-xl text-gray-800">{review.name}</h3>
                  <div className="flex justify-center mt-2">
                    <Rating style={{ maxWidth: 120 }} value={review.rating} itemStyles={customStyles} readOnly />
                  </div>
                </div>

                <div className="bg-[#F8F6F1] p-4 rounded-xl mt-4">
                  <p className="text-gray-700 italic">"{review.feedback}"</p>
                </div>

                <div className="mt-4 text-right">
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .review-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .review-card.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
