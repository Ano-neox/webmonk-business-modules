import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Button, Chip, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { IconMapPin, IconCheck, IconX, IconClock, IconUser } from '@tabler/icons-react';

const GeofencingAttendanceMain = () => {
  const [employees] = useState([
    {
      id: 1,
      name: 'John Doe',
      status: 'Present',
      checkIn: '09:15 AM',
      location: 'Office Zone',
      isInGeofence: true
    },
    {
      id: 2,
      name: 'Jane Smith',
      status: 'Absent',
      checkIn: '-',
      location: 'Outside Zone',
      isInGeofence: false
    },
    {
      id: 3,
      name: 'Mike Johnson',
      status: 'Present',
      checkIn: '08:45 AM',
      location: 'Office Zone',
      isInGeofence: true
    }
  ]);

  const [geofences] = useState([
    {
      id: 1,
      name: 'Main Office',
      radius: '100m',
      employees: 15,
      active: true
    },
    {
      id: 2,
      name: 'Branch Office',
      radius: '50m',
      employees: 8,
      active: true
    }
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Geofencing Attendance
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Geofence Map View
              </Typography>
              <Box 
                sx={{ 
                  height: 350, 
                  bgcolor: '#f5f5f5', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid #ddd',
                  borderRadius: 1
                }}
              >
                <Typography color="textSecondary">
                  Interactive Map with Geofence Boundaries
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Employee Attendance
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Employee</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Check In</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Geofence</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                              <IconUser />
                            </Avatar>
                            {employee.name}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={employee.status}
                            color={employee.status === 'Present' ? 'success' : 'error'}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>{employee.checkIn}</TableCell>
                        <TableCell>{employee.location}</TableCell>
                        <TableCell>
                          {employee.isInGeofence ? (
                            <IconCheck style={{ color: '#4caf50' }} />
                          ) : (
                            <IconX style={{ color: '#f44336' }} />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Geofence Zones
              </Typography>
              {geofences.map((geofence) => (
                <Card key={geofence.id} sx={{ mb: 2, border: '1px solid #e0e0e0' }}>
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <IconMapPin size={20} style={{ marginRight: 8, color: '#1976d2' }} />
                      <Typography variant="subtitle1" fontWeight="bold">
                        {geofence.name}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                      Radius: {geofence.radius}
                    </Typography>
                    
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                      Employees: {geofence.employees}
                    </Typography>
                    
                    <Chip 
                      label={geofence.active ? 'Active' : 'Inactive'}
                      color={geofence.active ? 'success' : 'default'}
                      size="small"
                    />
                  </CardContent>
                </Card>
              ))}
              
              <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                Add New Geofence
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Today's Summary
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body2">Present:</Typography>
                <Typography variant="body2" fontWeight="bold" color="success.main">
                  2
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body2">Absent:</Typography>
                <Typography variant="body2" fontWeight="bold" color="error.main">
                  1
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">Total:</Typography>
                <Typography variant="body2" fontWeight="bold">
                  3
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeofencingAttendanceMain;