import React from "react";
import { Container, Typography, Grid, Card, CardContent, Avatar, Chip, Divider, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

export const DataDisplay = () => {
  const location = useLocation();
  const { profile } = location.state || {};

  // Check if profile data exists
  if (!profile) {
    return (
      <Container style={{ marginTop: "10vh", textAlign: "center" }}>
        <Typography variant="h5" color="error">
          No profile data available.
        </Typography>
      </Container>
    );
  }

  // Function to clean up the skill strings
  const cleanSkill = (skill) => {
    return skill.replace(/[\[\]']/g, "").trim(); // Remove brackets and single quotes
  };
  return (
    <Container style={{ paddingTop: 10, paddingBottom: 20 }}>
      <Card elevation={3} style={{ padding: "20px", borderRadius: "15px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3} style={{ textAlign: "center" }}>
            <Avatar
              alt={profile.Name}
              src={profile.profile_picture}
              sx={{ width: 120, height: 120, margin: "0 auto" }}
            />
            <Typography variant="h6" gutterBottom style={{ marginTop: "10px" }}>
              {profile.Name}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {profile.position}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {profile.location}
              </Typography>

              <Divider style={{ margin: "20px 0" }} />

              <Typography variant="body1" paragraph>
                {profile.description || "No description available."}
              </Typography>

              <Typography variant="h6" gutterBottom>
                Experience:
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {profile.Experience || "Experience details not available."}
              </Typography>

              <Divider style={{ margin: "20px 0" }} />

              <Typography variant="h6" gutterBottom>
                Skills:
              </Typography>

              {/* Display skills and clean_skills as badges using MUI Chip */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {(Array.isArray(profile.clean_skills)
                  ? profile.clean_skills
                  : profile.clean_skills?.split(",") || []
                ).map((skill, index) => (
                  <Chip key={index} label={cleanSkill(skill)} variant="outlined" color="primary" sx={{ m: 2 }} />
                ))}
              </Stack>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
