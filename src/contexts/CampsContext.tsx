import React, { createContext, useContext } from "react";

// Dummy camps for initial load
const dummyCamps = [
  {
    id: 1,
    name: "Free Eye Checkup Camp",
    organizer: "Government Hospital",
    type: "govt",
    date: "2025-08-10",
    time: "9:00 AM - 5:00 PM",
    location: "Community Center, Sector 15",
    city: "Delhi",
    description: "Comprehensive eye checkup for all age groups.",
    contactEmail: "eyecheck@govhospital.com",
    contactPhone: "+91-9876543210",
    verified: true,
    participants: "100+",
    services: ["Eye Examination", "Spectacles Distribution"],
    distance: "2 km"
  },
  {
    id: 2,
    name: "Blood Donation Camp",
    organizer: "Red Cross NGO",
    type: "ngo",
    date: "2025-08-15",
    time: "10:00 AM - 4:00 PM",
    location: "Red Cross Bhawan",
    city: "Mumbai",
    description: "Donate blood and save lives.",
    contactEmail: "blooddonation@redcross.org",
    contactPhone: "+91-9123456789",
    verified: true,
    participants: "200+",
    services: ["Blood Donation", "Free Health Checkup"],
    distance: "5 km"
  },
  {
    id: 3,
    name: "Diabetes Screening Camp",
    organizer: "Private Clinic",
    type: "private",
    date: "2025-08-20",
    time: "8:00 AM - 1:00 PM",
    location: "Sunrise Clinic, Main Road",
    city: "Bangalore",
    description: "Free diabetes screening and consultation.",
    contactEmail: "info@sunriseclinic.com",
    contactPhone: "+91-9988776655",
    verified: false,
    participants: "50+",
    services: ["Blood Sugar Test", "Doctor Consultation"],
    distance: "3 km"
  }
];

// Custom hook for localStorage state
function useLocalStorageState<T>(key: string, defaultValue: T) {
  const [state, setState] = React.useState<T>(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  return [state, setState] as const;
}

const CampsContext = createContext<{
  camps: any[];
  addCamp: (camp: any) => void;
}>({
  camps: [],
  addCamp: () => {},
});

export const CampsProvider = ({ children }: { children: React.ReactNode }) => {
  const [camps, setCamps] = useLocalStorageState<any[]>("camps", dummyCamps);

  const addCamp = (camp: any) => {
    setCamps((prev) => [
      ...prev,
      { ...camp, id: Date.now() }
    ]);
  };

  return (
    <CampsContext.Provider value={{ camps, addCamp }}>
      {children}
    </CampsContext.Provider>
  );
};

export const useCamps = () => useContext(CampsContext);