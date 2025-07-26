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
    // Initialize with realistic dummy data
    const dummyCamps: Camp[] = [
      {
        id: '1',
        name: 'Free Eye Checkup Camp',
        organizer: 'Apollo Hospital',
        type: 'govt',
        date: '2024-03-15',
        time: '9:00 AM - 5:00 PM',
        location: 'Community Health Center, Sector 15',
        city: 'Mumbai',
        distance: '2.5 km',
        services: ['Eye Checkup', 'Free Medicines', 'Consultation', 'Spectacles'],
        verified: true,
        participants: '500+',
        description: 'Comprehensive eye examination for all ages with free spectacles for needy',
        contactEmail: 'eyecamp@apollo.in',
        contactPhone: '+91-9876543210'
      },
      {
        id: '2',
        name: 'Diabetes Screening Camp',
        organizer: 'Fortis Healthcare Foundation',
        type: 'ngo',
        date: '2024-03-18',
        time: '8:00 AM - 4:00 PM',
        location: 'Gandhi Medical College, CP',
        city: 'Delhi',
        distance: '1.2 km',
        services: ['Blood Sugar Test', 'HbA1c Test', 'Diet Consultation', 'Free Medicines'],
        verified: true,
        participants: '300+',
        description: 'Early diabetes detection and comprehensive lifestyle counseling',
        contactEmail: 'diabetes@fortis.org',
        contactPhone: '+91-9876543211'
      },
      {
        id: '3',
        name: 'Heart Health Checkup',
        organizer: 'Manipal Hospitals',
        type: 'private',
        date: '2024-03-20',
        time: '10:00 AM - 6:00 PM',
        location: 'Brigade Road Medical Center',
        city: 'Bangalore',
        distance: '3.1 km',
        services: ['ECG', 'Blood Pressure', 'Cholesterol Test', 'Consultation'],
        verified: true,
        participants: '250+',
        description: 'Complete cardiovascular screening at subsidized rates',
        contactEmail: 'heart@manipal.com',
        contactPhone: '+91-9876543212'
      },
      {
        id: '4',
        name: 'Women Health Camp',
        organizer: 'Max Healthcare',
        type: 'govt',
        date: '2024-03-22',
        time: '9:00 AM - 3:00 PM',
        location: 'Safdarjung Hospital, New Delhi',
        city: 'Delhi',
        distance: '4.2 km',
        services: ['Mammography', 'Pap Smear', 'Iron Test', 'Consultation'],
        verified: true,
        participants: '400+',
        description: 'Specialized health screening for women with focus on preventive care',
        contactEmail: 'women@maxhealth.in',
        contactPhone: '+91-9876543213'
      },
      {
        id: '5',
        name: 'Child Vaccination Drive',
        organizer: 'UNICEF India',
        type: 'ngo',
        date: '2024-03-25',
        time: '10:00 AM - 4:00 PM',
        location: 'Anganwadi Center, Bandra West',
        city: 'Mumbai',
        distance: '1.8 km',
        services: ['Polio Vaccine', 'MMR Vaccine', 'Growth Monitoring', 'Nutrition Counseling'],
        verified: true,
        participants: '600+',
        description: 'Complete immunization program for children aged 0-5 years',
        contactEmail: 'vaccine@unicef.org',
        contactPhone: '+91-9876543214'
      },
      {
        id: '6',
        name: 'Mental Health Awareness',
        organizer: 'NIMHANS Outreach',
        type: 'govt',
        date: '2024-03-28',
        time: '11:00 AM - 5:00 PM',
        location: 'Koramangala Community Hall',
        city: 'Bangalore',
        distance: '2.9 km',
        services: ['Counseling', 'Stress Assessment', 'Therapy Sessions', 'Support Groups'],
        verified: true,
        participants: '150+',
        description: 'Mental health screening and awareness with professional counselors',
        contactEmail: 'mental@nimhans.ac.in',
        contactPhone: '+91-9876543215'
      },
      {
        id: '7',
        name: 'Dental Care Camp',
        organizer: 'Clove Dental',
        type: 'private',
        date: '2024-03-30',
        time: '9:00 AM - 6:00 PM',
        location: 'Cyber City, Gurgaon',
        city: 'Gurgaon',
        distance: '5.1 km',
        services: ['Dental Checkup', 'Cleaning', 'Fluoride Treatment', 'Consultation'],
        verified: true,
        participants: '200+',
        description: 'Complete oral health checkup with free cleaning and fluoride treatment',
        contactEmail: 'dental@clove.in',
        contactPhone: '+91-9876543216'
      },
      {
        id: '8',
        name: 'Senior Citizen Health Fair',
        organizer: 'HelpAge India',
        type: 'ngo',
        date: '2024-04-02',
        time: '8:00 AM - 2:00 PM',
        location: 'Shivaji Park, Dadar',
        city: 'Mumbai',
        distance: '3.7 km',
        services: ['Bone Density Test', 'Vision Test', 'Blood Pressure', 'Medicine Distribution'],
        verified: true,
        participants: '350+',
        description: 'Specialized healthcare services designed for citizens above 60 years',
        contactEmail: 'senior@helpage.org',
        contactPhone: '+91-9876543217'
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