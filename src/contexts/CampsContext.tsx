import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Camp {
  id: string;
  name: string;
  organizer: string;
  type: 'govt' | 'ngo' | 'private';
  date: string;
  time: string;
  location: string;
  city: string;
  distance?: string;
  services: string[];
  verified: boolean;
  participants: string;
  description?: string;
  contactEmail?: string;
  contactPhone?: string;
}

interface CampsContextType {
  camps: Camp[];
  addCamp: (camp: Omit<Camp, 'id'>) => void;
  searchCamps: (location: string) => Camp[];
}

const CampsContext = createContext<CampsContextType | undefined>(undefined);

const initialCamps: Camp[] = [
  {
    id: '1',
    name: "Free Eye Checkup Camp",
    organizer: "Government Hospital",
    type: "govt",
    date: "Tomorrow",
    time: "9:00 AM - 5:00 PM",
    location: "Community Center, Sector 15",
    city: "Delhi",
    distance: "2.5 km",
    services: ["Eye Examination", "Free Glasses", "Cataract Screening"],
    verified: true,
    participants: "200+ registered",
    description: "Comprehensive eye examination and free glasses distribution for underprivileged communities.",
    contactEmail: "eye.camp@govhospital.in",
    contactPhone: "+91-9876543210"
  },
  {
    id: '2',
    name: "General Health Screening",
    organizer: "Care Foundation NGO",
    type: "ngo",
    date: "This Weekend",
    time: "8:00 AM - 4:00 PM",
    location: "City Park, Main Road",
    city: "Mumbai",
    distance: "4.1 km",
    services: ["Blood Pressure", "Diabetes Test", "General Consultation"],
    verified: true,
    participants: "150+ registered",
    description: "Free health screening camp with basic diagnostic tests and medical consultation.",
    contactEmail: "health@carefoundation.org",
    contactPhone: "+91-9876543211"
  },
  {
    id: '3',
    name: "Women's Health Camp",
    organizer: "Metro Hospital",
    type: "private",
    date: "Next Monday",
    time: "10:00 AM - 6:00 PM",
    location: "Women's Center, Block A",
    city: "Bangalore",
    distance: "3.2 km",
    services: ["Gynecology", "Breast Cancer Screening", "Nutrition Counseling"],
    verified: true,
    participants: "100+ registered",
    description: "Specialized women's health camp focusing on preventive care and health awareness.",
    contactEmail: "womens.health@metrohospital.com",
    contactPhone: "+91-9876543212"
  },
  {
    id: '4',
    name: "Dental Care Camp",
    organizer: "Smile Foundation",
    type: "ngo",
    date: "Next Friday",
    time: "9:00 AM - 3:00 PM",
    location: "School Campus, Green Avenue",
    city: "Delhi",
    distance: "1.8 km",
    services: ["Dental Checkup", "Teeth Cleaning", "Oral Health Education"],
    verified: true,
    participants: "80+ registered",
    description: "Free dental checkup and oral health awareness program for all age groups.",
    contactEmail: "dental@smilefoundation.org",
    contactPhone: "+91-9876543213"
  },
  {
    id: '5',
    name: "Cardiac Health Screening",
    organizer: "Heart Care Institute",
    type: "private",
    date: "Next Wednesday",
    time: "8:00 AM - 2:00 PM",
    location: "Medical Complex, Central Plaza",
    city: "Chennai",
    distance: "5.7 km",
    services: ["ECG", "Blood Pressure Monitoring", "Cholesterol Testing"],
    verified: true,
    participants: "120+ registered",
    description: "Comprehensive cardiac health screening with expert cardiologist consultation.",
    contactEmail: "cardiac@heartcare.in",
    contactPhone: "+91-9876543214"
  }
];

export const CampsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [camps, setCamps] = useState<Camp[]>(initialCamps);

  const addCamp = (newCamp: Omit<Camp, 'id'>) => {
    const camp: Camp = {
      ...newCamp,
      id: Date.now().toString(),
    };
    setCamps(prev => [camp, ...prev]);
  };

  const searchCamps = (location: string) => {
    if (!location.trim()) return camps;
    
    return camps.filter(camp => 
      camp.city.toLowerCase().includes(location.toLowerCase()) ||
      camp.location.toLowerCase().includes(location.toLowerCase())
    );
  };

  return (
    <CampsContext.Provider value={{ camps, addCamp, searchCamps }}>
      {children}
    </CampsContext.Provider>
  );
};

export const useCamps = () => {
  const context = useContext(CampsContext);
  if (context === undefined) {
    throw new Error('useCamps must be used within a CampsProvider');
  }
  return context;
};