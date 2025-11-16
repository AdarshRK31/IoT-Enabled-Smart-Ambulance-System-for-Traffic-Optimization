"use client"

import { useState } from "react"
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api"
import type { Hospital } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useGoogleMapsLoader } from "@/hooks/useGoogleMapsLoader"

const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ["places"]

interface AdminPanelProps {
  ambulances: any[]
  hospitals: Hospital[]
  currentLocation: { lat: number; lng: number }
}

export default function AdminPanel({ ambulances, hospitals, currentLocation }: AdminPanelProps) {
  const isLoaded = useGoogleMapsLoader()

  const [selectedAmbulance, setSelectedAmbulance] = useState<any | null>(null)
  const [infoWindow, setInfoWindow] = useState<any | null>(null)

  const handleMarkerClick = (ambulance: any) => {
    setInfoWindow(ambulance)
  }

  const handleInfoWindowClose = () => {
    setInfoWindow(null)
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2">Loading Maps...</span>
      </div>
    )
  }

  return (
    <div className="flex flex-1 h-full">
      <div className="flex-1 relative">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={currentLocation}
          zoom={13}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {/* Hospital markers */}
          {hospitals.map((hospital) => (
            <Marker
              key={hospital.id}
              position={hospital.location}
              icon={{
                url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%230ea5e9' stroke='white' strokeWidth='2'><path d='M8 9h8'></path><path d='M8 15h8'></path><path d='M12 9v6'></path><path d='M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path></svg>",
                scaledSize: new google.maps.Size(32, 32),
              }}
            />
          ))}

          {/* Ambulance markers */}
          {ambulances.map((ambulance) => (
            <Marker
              key={ambulance.id}
              position={ambulance.location}
              onClick={() => handleMarkerClick(ambulance)}
              icon={{
                url: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='${ambulance.status === "active" ? "%23ef4444" : ambulance.status === "en-route" ? "%23f59e0b" : "%236b7280"}' stroke='white' strokeWidth='2'><path d='M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path><path d='M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path><path d='M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5'></path><path d='M6 10h4'></path></svg>`,
                scaledSize: new google.maps.Size(40, 40),
              }}
              animation={typeof window !== "undefined" && window.google?.maps.Animation.DROP}
            />
          ))}

          {/* Info window for ambulance details */}
          {infoWindow && (
            <InfoWindow position={infoWindow.location} onCloseClick={handleInfoWindowClose}>
              <div className="p-2 max-w-xs">
                <h3 className="font-bold">Ambulance {infoWindow.id}</h3>
                <p className="text-sm capitalize">Status: {infoWindow.status}</p>
                <p className="text-sm">
                  Location: {infoWindow.location.lat.toFixed(4)}, {infoWindow.location.lng.toFixed(4)}
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>

      <div className="w-96 border-l bg-background overflow-hidden flex flex-col h-full">
        <CardHeader className="pb-2">
          <CardTitle>Admin Dashboard</CardTitle>
        </CardHeader>

        <Tabs defaultValue="ambulances" className="flex-1 flex flex-col">
          <div className="px-4">
            <TabsList className="w-full">
              <TabsTrigger value="ambulances" className="flex-1">
                Ambulances
              </TabsTrigger>
              <TabsTrigger value="hospitals" className="flex-1">
                Hospitals
              </TabsTrigger>
              <TabsTrigger value="stats" className="flex-1">
                Stats
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ambulances" className="flex-1 overflow-y-auto p-4 space-y-4">
            {ambulances.map((ambulance, index) => (
              <motion.div
                key={ambulance.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`overflow-hidden transition-all ${
                    selectedAmbulance?.id === ambulance.id ? "border-primary shadow-md" : "hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedAmbulance(ambulance)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">Ambulance {ambulance.id}</h3>
                      <Badge
                        variant={
                          ambulance.status === "active"
                            ? "default"
                            : ambulance.status === "en-route"
                              ? "warning"
                              : "secondary"
                        }
                      >
                        {ambulance.status}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>
                        Location: {ambulance.location.lat.toFixed(4)}, {ambulance.location.lng.toFixed(4)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      {ambulance.status === "active" ? (
                        <AlertCircle className="h-4 w-4 text-destructive" />
                      ) : ambulance.status === "en-route" ? (
                        <Loader2 className="h-4 w-4 text-warning animate-spin" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="text-sm">
                        {ambulance.status === "active"
                          ? "Emergency in progress"
                          : ambulance.status === "en-route"
                            ? "En route to hospital"
                            : "Available for dispatch"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="hospitals" className="flex-1 overflow-y-auto p-4 space-y-4">
            {hospitals.map((hospital, index) => (
              <motion.div
                key={hospital.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-4">
                    <h3 className="font-bold">{hospital.name}</h3>
                    <div className="grid grid-cols-2 gap-2 my-2 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span>Available Beds: {hospital.beds}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span>
                          Location: {hospital.location.lat.toFixed(4)}, {hospital.location.lng.toFixed(4)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {hospital.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="stats" className="flex-1 overflow-y-auto p-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-4">System Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Ambulances</p>
                    <p className="text-2xl font-bold">
                      {ambulances.filter((a) => a.status === "active").length} / {ambulances.length}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Hospital Beds</p>
                    <p className="text-2xl font-bold">{hospitals.reduce((acc, hospital) => acc + hospital.beds, 0)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average Response Time</p>
                    <p className="text-2xl font-bold">5.2 mins</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}