import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip, Avatar } from '@mui/material';
import { IconMapPin, IconCar, IconGauge, IconClock } from '@tabler/icons-react';

const LiveTrackingMain = () => {
  const [vehicles] = useState([
    {
      id: 1,
      name: 'Vehicle 001',
      driver: 'John Doe',
      status: 'Moving',
      speed: '45 km/h',
      location: 'MG Road, Bangalore',
      lastUpdate: '2 mins ago'
    },
    {
      id: 2,
      name: 'Vehicle 002',
      driver: 'Jane Smith',
      status: 'Stopped',
      speed: '0 km/h',
      location: 'Brigade Road, Bangalore',
      lastUpdate: '5 mins ago'
    }
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Live Vehicle Tracking
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Live Map View
              </Typography>
              <Box 
                sx={{ 
                  height: 400, 
                  bgcolor: '#f5f5f5', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid #ddd',
                  borderRadius: 1
                }}
              >
                <Typography color="textSecondary">
                  Map Integration Required (Google Maps/Leaflet)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Vehicle Status
              </Typography>
              {vehicles.map((vehicle) => (
                <Card key={vehicle.id} sx={{ mb: 2, border: '1px solid #e0e0e0' }}>
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                        <IconCar />
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {vehicle.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {vehicle.driver}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Chip 
                      label={vehicle.status}
                      color={vehicle.status === 'Moving' ? 'success' : 'warning'}
                      size="small"
                      sx={{ mb: 1 }}
                    />
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <IconGauge size={16} style={{ marginRight: 8, color: '#666' }} />
                      <Typography variant="body2">{vehicle.speed}</Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <IconMapPin size={16} style={{ marginRight: 8, color: '#666' }} />
                      <Typography variant="body2">{vehicle.location}</Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconClock size={16} style={{ marginRight: 8, color: '#666' }} />
                      <Typography variant="body2">{vehicle.lastUpdate}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LiveTrackingMain;