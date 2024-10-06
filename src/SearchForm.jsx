import React, { useState } from "react";
import { TextField, Button, CircularProgress, Container, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { profileData } from "./data";

// Custom styling for the button to make it look sleek
const StyledButton = styled(Button)({
  backgroundColor: "#4A90E2",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "30px",
  fontSize: "1rem",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#357ABD"
  }
});

// Autocomplete SearchForm Component
export const SearchForm = () => {
  const [profiles] = useState(profileData); // Store profiles from data.json
  const [selectedProfile, setSelectedProfile] = useState(null); // Track the selected profile
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!selectedProfile) return;

    setLoading(true); // Show the loader

    // Simulate a fake loading delay
    setTimeout(() => {
      // Navigate to DataDisplay with all profile data after a delay
      navigate(`/user-profile`, { state: { profile: selectedProfile } });

      // Stop the loading spinner after navigating
      setLoading(false);
    }, 2000); // Simulate a 2-second delay before navigating
  };

  return (
    <Container className="search-container" sx={{ mt: 20 }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: "bold", fontSize: "2rem", marginBottom: "40px", color: "#333" }}
      >
        Search for a Career Profile
      </Typography>

      {/* Autocomplete input for selecting profile */}
      <Autocomplete
        options={profiles}
        getOptionLabel={(option) => option.Name}
        onChange={(event, value) => setSelectedProfile(value)} // Set selected profile
        renderInput={(params) => <TextField {...params} label="Enter a Name" variant="outlined" fullWidth />}
        sx={{ marginBottom: "20px" }}
      />

      {/* Show the loader when loading is true, otherwise show the button */}
      {loading ? <CircularProgress /> : <StyledButton onClick={handleSearch}>Search</StyledButton>}
    </Container>
  );
};
