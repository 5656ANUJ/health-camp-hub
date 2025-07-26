import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

export const CampsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [camps, setCamps] = useState<Camp[]>([]);

  useEffect(() => {
    // Initialize with dummy data
    const dummyCamps: Camp[] = [
      {
        id: '1',
        name: 'Free Eye Checkup Camp',
        organizer: 'Government Hospital',
        type: 'govt',
        date: '2024-02-15',
        time: '9:00 AM - 5:00 PM',
        location: 'Community Center, Main Street',
        city: 'Mumbai',
        distance: '2.5 km',
        services: ['Eye Checkup', 'Free Medicines', 'Consultation'],
        verified: true,
        participants: '200+',
        description: 'Free comprehensive eye examination for all ages',
        contactEmail: 'eyecamp@gov.in',
        contactPhone: '+91-9876543210'
      },
      {
        id: '2',
        name: 'Diabetes Screening Camp',
        organizer: 'Health NGO Foundation',
        type: 'ngo',
        date: '2024-02-18',
        time: '8:00 AM - 4:00 PM',
        location: 'City Hospital, Park Road',
        city: 'Delhi',
        distance: '1.2 km',
        services: ['Blood Sugar Test', 'Diet Consultation', 'Free Medicines'],
        verified: true,
        participants: '150+',
        description: 'Early diabetes detection and awareness program',
        contactEmail: 'health@ngo.org',
        contactPhone: '+91-9876543211'
      },
      {
        id: '3',
        name: 'General Health Checkup',
        organizer: 'Private Healthcare Ltd',
        type: 'private',
        date: '2024-02-20',
        time: '10:00 AM - 6:00 PM',
        location: 'Medical Complex, Central Avenue',
        city: 'Bangalore',
        distance: '3.1 km',
        services: ['Blood Pressure', 'BMI Check', 'General Consultation'],
        verified: false,
        participants: '100+',
        description: 'Comprehensive health screening at subsidized rates',
        contactEmail: 'info@healthcare.com',
        contactPhone: '+91-9876543212'
      }
    ];
    setCamps(dummyCamps);
  }, []);

  const addCamp = (newCamp: Omit<Camp, 'id'>) => {
    const campWithId: Camp = {
      ...newCamp,
      id: Date.now().toString(), // Simple ID generation
      verified: false // New camps start as unverified
    };
    setCamps(prev => [campWithId, ...prev]);
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