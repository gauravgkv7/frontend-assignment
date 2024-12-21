import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Components/Table/Table';
import SearchBar from './Components/SearchBar/SearchBar';
// import LoadingError from './LoadingError';
import SkeletonTable from './Components/UI/Skeleton/Skeleton';

const App = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch applications from backend API
  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/RashitKhamidullin/Educhain-Assignment/refs/heads/main/applications')  // Replace with your actual API
      .then(response => {
        console.log('Fetched Data:', response.data);
        setApplications(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load applications');
        setLoading(false);
      });
  }, []);

  // Handle search term change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Filter applications based on search term
  const filteredApplications = applications.filter(application => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      (application.applicantName?.toLowerCase().includes(lowerCaseSearchTerm) || '') ||
      (application.status_En?.toLowerCase().includes(lowerCaseSearchTerm) || '') ||
      (application.studentID?.toLowerCase().includes(lowerCaseSearchTerm) || '')
    );
  });

  return (
    <div>
      {/* Loading/Error Handling */}
      {/* Search Bar */}
      <SearchBar onSearchChange={handleSearchChange} />

      {/* Table */}
      {loading || error ? 
      <SkeletonTable /> :
      <Table data={filteredApplications} />
      }
    </div>
  );
};

export default App;
