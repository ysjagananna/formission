interface FormSubmission {
  id: string;
  name: string;
  phone: string;
  area: string;
  city: string;
  timestamp: number;
}

// Save a form submission to local storage
export const saveFormSubmission = (formData: Omit<FormSubmission, 'id' | 'timestamp'>): void => {
  const submissions = getFormSubmissions();
  
  const newSubmission: FormSubmission = {
    ...formData,
    id: `submission-${Date.now()}`,
    timestamp: Date.now(),
  };
  
  submissions.push(newSubmission);
  localStorage.setItem('formSubmissions', JSON.stringify(submissions));
};

// Get all form submissions from local storage
export const getFormSubmissions = (): FormSubmission[] => {
  const submissionsData = localStorage.getItem('formSubmissions');
  if (!submissionsData) {
    return [];
  }
  
  try {
    return JSON.parse(submissionsData);
  } catch (error) {
    console.error('Error parsing form submissions:', error);
    return [];
  }
};

// Delete a form submission
export const deleteFormSubmission = (id: string): void => {
  const submissions = getFormSubmissions();
  const updatedSubmissions = submissions.filter(submission => submission.id !== id);
  localStorage.setItem('formSubmissions', JSON.stringify(updatedSubmissions));
};

// Delete all form submissions
export const deleteAllFormSubmissions = (): void => {
  localStorage.setItem('formSubmissions', JSON.stringify([]));
};

// Initialize some sample data for demo purposes
export const initializeDemoData = (): void => {
  const existingData = localStorage.getItem('formSubmissions');
  if (!existingData) {
    const sampleData: FormSubmission[] = [
      {
        id: 'sample-1',
        name: 'John Doe',
        phone: '9876543210',
        area: 'Visakhapatnam',
        city: 'Visakhapatnam',
        timestamp: Date.now() - 86400000 * 6, // 6 days ago
      },
      {
        id: 'sample-2',
        name: 'Jane Smith',
        phone: '8765432109',
        area: 'Hyderabad',
        city: 'Hyderabad',
        timestamp: Date.now() - 86400000 * 5, // 5 days ago
      },
      {
        id: 'sample-3',
        name: 'Raj Kumar',
        phone: '7654321098',
        area: 'Visakhapatnam',
        city: 'Visakhapatnam',
        timestamp: Date.now() - 86400000 * 4, // 4 days ago
      },
      {
        id: 'sample-4',
        name: 'Priya Sharma',
        phone: '6543210987',
        area: 'Vijayawada',
        city: 'Vijayawada',
        timestamp: Date.now() - 86400000 * 3, // 3 days ago
      },
      {
        id: 'sample-5',
        name: 'Srinivas Reddy',
        phone: '5432109876',
        area: 'Tirupati',
        city: 'Tirupati',
        timestamp: Date.now() - 86400000 * 2, // 2 days ago
      },
      {
        id: 'sample-6',
        name: 'Lakshmi Devi',
        phone: '4321098765',
        area: 'Vijayawada',
        city: 'Vijayawada',
        timestamp: Date.now() - 86400000, // 1 day ago
      },
      {
        id: 'sample-7',
        name: 'Anand Verma',
        phone: '3210987654',
        area: 'Hyderabad',
        city: 'Hyderabad',
        timestamp: Date.now() - 3600000 * 12, // 12 hours ago
      },
      {
        id: 'sample-8',
        name: 'Kavita Joshi',
        phone: '2109876543',
        area: 'Tirupati',
        city: 'Tirupati',
        timestamp: Date.now() - 3600000 * 5, // 5 hours ago
      },
    ];
    
    localStorage.setItem('formSubmissions', JSON.stringify(sampleData));
  }
};