import React, { useEffect, useState } from "react"
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti"

function RatingStars({ reviewCount, starSize }) {
  const [starCounts, setStarCounts] = useState({
    full: 0,
    half: 0,
    empty: 0,
  })

  useEffect(() => {
    const fullStars = Math.floor(reviewCount) || 0
    const halfStars = Number.isInteger(reviewCount) ? 0 : 1
    const emptyStars = 5 - (fullStars + halfStars)
    setStarCounts({
      full: fullStars,
      half: halfStars,
      empty: emptyStars,
    })
  }, [reviewCount])

  return (
    <div className="flex gap-1 text-yellow-100">
      {[...Array(starCounts.full)].map((_, i) => (
        <TiStarFullOutline key={i} size={starSize || 20} />
      ))}
      {[...Array(starCounts.half)].map((_, i) => (
        <TiStarHalfOutline key={i} size={starSize || 20} />
      ))}
      {[...Array(starCounts.empty)].map((_, i) => (
        <TiStarOutline key={i} size={starSize || 20} />
      ))}
    </div>
  )
}

export default RatingStars
