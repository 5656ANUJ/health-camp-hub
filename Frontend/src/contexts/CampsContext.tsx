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
    fetch('/api/camps')
      .then(res => res.json())
      .then(data => setCamps(data));
  }, []);

  const addCamp = async (newCamp: Omit<Camp, 'id'>) => {
    const res = await fetch('/api/camps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCamp)
    });
    if (res.ok) {
      // Option 1: Refetch all camps
      const campsRes = await fetch('/api/camps');
      const allCamps = await campsRes.json();
      setCamps(allCamps);

      // Option 2: Just add the new camp to the list (current approach)
      // const camp = await res.json();
      // setCamps(prev => [camp, ...prev]);
    }
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