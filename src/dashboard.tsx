"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Map from "@/components/map"
import Sidebar from "@/components/sidebar"
import AdminPanel from "@/components/admin-panel" // Fixed import
import ThemeToggle from "@/components/theme-toggle"
import type { Hospital } from "@/lib/types"
import { useGeolocation } from "@/hooks/use-geolocation"
import { motion } from "framer-motion"
import { initializeApp } from "firebase/app"
import { getDatabase, ref, onValue } from "firebase/database"

// Firebase config (replace with your own)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_AIzaSyD_rNsuF7QoqtSCxutb_gpcte2_qWkGJQ4,
  authDomain: "ambulance-dashboard-48df6.firebaseapp.com",
  databaseURL: "https://your-app-default-rtdb.firebaseio.com",
  projectId: "ambulance-dashboard-48df6",
  storageBucket: "ambulance-dashboard-48df6.firebasestorage.app",
  messagingSenderId: "507862476232",
  appId: "1:507862476232:web:bce5121f50f9b2df658cfd",
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export default function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null)
  const [hospitals, setHospitals] = useState<Hospital[]>([])
  const [ambulances, setAmbulances] = useState<any[]>([])
  const { location, error } = useGeolocation()

  const defaultLocation = { lat: 11.0168, lng: 76.9558 } // Coimbatore, Tamil Nadu
  const currentLocation = location ? { lat: location.latitude, lng: location.longitude } : defaultLocation

  useEffect(() => {
    // Fetch hospitals (mock data for now)
    const fetchHospitals = async () => {
      const mockHospitals: Hospital[] = [
        {
          id: "1",
          name: "Kovai Medical Center",
          location: { lat: 11.0329, lng: 76.9728 },
          distance: "2.5 km",
          eta: "5 mins",
          beds: 45,
          specialties: ["Emergency", "Trauma", "Cardiac"],
        },
        {
          id: "2",
          name: "PSG Hospitals",
          location: { lat: 11.0243, lng: 76.9398 },
          distance: "3.2 km",
          eta: "7 mins",
          beds: 32,
          specialties: ["Emergency", "Neurology"],
        },
        {
          id: "3",
          name: "Sri Ramakrishna Hospital",
          location: { lat: 11.0068, lng: 76.9758 },
          distance: "1.8 km",
          eta: "4 mins",
          beds: 18,
          specialties: ["Emergency", "Pediatric"],
        },
        {
          id: "4",
          name: "G. Kuppuswamy Naidu Memorial Hospital",
          location: { lat: 11.0118, lng: 76.9658 },
          distance: "2.1 km",
          eta: "6 mins",
          beds: 27,
          specialties: ["Emergency", "Burns", "ICU"],
        },
      ]
      setHospitals(mockHospitals)
    }

    // Fetch real-time ambulance data from Firebase
    const ambulancesRef = ref(db, "ambulances")
    onValue(ambulancesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const ambulanceList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }))
        setAmbulances(ambulanceList)
      } else {
        // Fallback to mock data if Firebase is empty
        setAmbulances([
          { id: "amb1", location: { lat: 11.0268, lng: 76.9458 }, status: "active" },
          { id: "amb2", location: { lat: 11.0368, lng: 76.9658 }, status: "en-route" },
          { id: "amb3", location: { lat: 11.0068, lng: 76.9358 }, status: "idle" },
        ])
      }
    })

    fetchHospitals()
  }, [])

  const toggleAdminView = () => {
    setIsAdmin(!isAdmin)
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="ambulance-dashboard-theme">
      <div className="flex flex-col h-screen">
        <header className="flex items-center justify-between p-4 bg-background border-b">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold text-primary">🚑</span>
            <h1 className="text-xl font-bold">Ambulance Dashboard</h1>
          </motion.div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleAdminView}
              className="px-4 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              {isAdmin ? "Driver View" : "Admin View"}
            </button>
            <ThemeToggle />
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {isAdmin ? (
            <AdminPanel ambulances={ambulances} hospitals={hospitals} currentLocation={currentLocation} />
          ) : (
            <>
              <Map
                currentLocation={currentLocation}
                hospitals={hospitals}
                selectedHospital={selectedHospital}
                setSelectedHospital={setSelectedHospital}
              />
              <Sidebar
                hospitals={hospitals}
                selectedHospital={selectedHospital}
                setSelectedHospital={setSelectedHospital}
              />
            </>
          )}
        </div>
      </div>
    </ThemeProvider>
  )
}