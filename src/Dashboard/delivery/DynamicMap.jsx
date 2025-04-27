"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export default function DynamicMap({ center, zoom, markers = [] }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Ensure center is valid and contains numbers
  const safeCenter =
    Array.isArray(center) && center.length === 2 && !isNaN(Number(center[0])) && !isNaN(Number(center[1]))
      ? [Number(center[0]), Number(center[1])]
      : [0, 0] // Default to [0,0] if invalid

  if (!isMounted) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <p>Loading map...</p>
      </div>
    )
  }

  // Ensure markers is always an array
  const markersArray = Array.isArray(markers) ? markers : [markers].filter(Boolean)

  return (
    <MapContainer center={safeCenter} zoom={zoom} style={{ height: "100%", width: "100%" }} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />

      {markersArray.map((marker, index) => {
        // Ensure position is valid and contains numbers
        if (!marker || !marker.position || !Array.isArray(marker.position) || marker.position.length !== 2) {
          return null // Skip invalid markers
        }

        // Convert position values to numbers
        const lat = Number(marker.position[0])
        const lng = Number(marker.position[1])

        // Skip if not valid numbers
        if (isNaN(lat) || isNaN(lng)) {
          return null
        }

        return (
          <Marker key={index} position={[lat, lng]} icon={customIcon}>
            <Popup>
              <div>
                <h3 className="font-bold">{marker.title || "Location"}</h3>
                {marker.description && <p>{marker.description}</p>}
                <p className="text-xs mt-1">
                  Lat: {lat.toFixed(4)}, Lng: {lng.toFixed(4)}
                </p>
              </div>
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}
23.829717391320173, 90.56633375213987