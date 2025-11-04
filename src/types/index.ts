export interface Contest {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'draft' | 'active' | 'completed';
  location: string;
  items: ContestItem[];
}

export interface ContestItem {
  id: string;
  name: string;
  eligibility: {
    minAge?: number;
    maxAge?: number;
    category?: string;
  };
  gender: 'male' | 'female' | 'open';
  contestId: string;
}

export interface Participant {
  id: string;
  uniqueId: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  contactInfo: {
    email: string;
    phone: string;
  };
  enrollments: string[]; // Array of ContestItem IDs
}