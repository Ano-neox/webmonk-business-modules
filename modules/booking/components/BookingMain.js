import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TextField
} from '@mui/material';
import BookingCalendar from './Calendar/BookingCalendar';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const BookingMain = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const bookings = [
    { id: 'BK001', customer: 'Alice Johnson', service: 'Conference Room A', date: '2024-01-20', time: '10:00 AM', status: 'Confirmed', amount: '₹2,500' },
    { id: 'BK002', customer: 'Bob Smith', service: 'Meeting Room B', date: '2024-01-21', time: '2:00 PM', status: 'Pending', amount: '₹1,800' },
    { id: 'BK003', customer: 'Carol Davis', service: 'Event Hall', date: '2024-01-22', time: '6:00 PM', status: 'Cancelled', amount: '₹15,000' }
  ];

  const services = [
    { id: 1, name: 'Conference Room A', capacity: 20, rate: '₹2,500/day', status: 'Available' },
    { id: 2, name: 'Meeting Room B', capacity: 10, rate: '₹1,800/day', status: 'Available' },
    { id: 3, name: 'Event Hall', capacity: 100, rate: '₹15,000/day', status: 'Booked' }
  ];

  const customers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '+91 9876543210', totalBookings: 5 },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '+91 9876543211', totalBookings: 3 },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', phone: '+91 9876543212', totalBookings: 8 }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        Booking Management
      </Typography>

      <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#f8f9ff',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#e8eaff',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#5a67d8' }}>📅</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    12
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Today's Bookings
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#f0fff4',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#c6f6d5',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#38a169' }}>💰</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    ₹1,25,000
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Total Revenue
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#f0f9ff',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#bfdbfe',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#2563eb' }}>🏢</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    8
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Available Services
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#fffbf0',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#fed7aa',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#d69e2e' }}>👥</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    156
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Active Customers
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Dashboard" />
            <Tab label="Bookings" />
            <Tab label="Services" />
            <Tab label="Calendar" />
            <Tab label="Customers" />
            <Tab label="Reports" />
          </Tabs>
        </Box>
        <CardContent>
          {tabValue === 0 && (
            <>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" mb={2}>Recent Bookings</Typography>
                      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
                        <Table>
                          <TableHead>
                            <TableRow sx={{ backgroundColor: 'primary.main' }}>
                              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Booking ID</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Customer</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Service</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date & Time</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {bookings.map((booking) => (
                              <TableRow key={booking.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
                                <TableCell sx={{ fontWeight: 'medium' }}>{booking.id}</TableCell>
                                <TableCell>{booking.customer}</TableCell>
                                <TableCell sx={{ color: 'text.secondary' }}>{booking.service}</TableCell>
                                <TableCell sx={{ color: 'text.secondary' }}>{booking.date} {booking.time}</TableCell>
                                <TableCell>
                                  <Chip 
                                    label={booking.status} 
                                    color={
                                      booking.status === 'Confirmed' ? 'success' : 
                                      booking.status === 'Pending' ? 'warning' : 'error'
                                    }
                                    size="small"
                                  />
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
                  <Card sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography variant="h6" mb={2}>Service Utilization</Typography>
                      {services.map((service) => (
                        <Box key={service.id} display="flex" justifyContent="space-between" alignItems="center" py={1}>
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>{service.name}</Typography>
                            <Typography variant="caption" color="text.secondary">{service.capacity} capacity</Typography>
                          </Box>
                          <Chip 
                            label={service.status} 
                            color={service.status === 'Available' ? 'success' : 'warning'}
                            size="small"
                          />
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" mb={2}>Quick Stats</Typography>
                      <Box display="flex" justifyContent="space-between" py={1}>
                        <Typography variant="body2">Pending Bookings</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'warning.main' }}>3</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" py={1}>
                        <Typography variant="body2">Confirmed Today</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>8</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" py={1}>
                        <Typography variant="body2">This Week Revenue</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>₹45,600</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" py={1}>
                        <Typography variant="body2">Occupancy Rate</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'info.main' }}>78%</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </>
          )}
          {tabValue === 1 && (
            <>
        <Box sx={{ mb: 2 }}>
          <Button variant="contained">New Booking</Button>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Booking ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Customer</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Service</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Time</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Amount</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' }, '&:hover': { backgroundColor: 'action.selected' } }}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{booking.id}</TableCell>
                  <TableCell>{booking.customer}</TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{booking.service}</TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{booking.date}</TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{booking.time}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'success.main' }}>{booking.amount}</TableCell>
                  <TableCell>
                    <Chip 
                      label={booking.status} 
                      color={
                        booking.status === 'Confirmed' ? 'success' : 
                        booking.status === 'Pending' ? 'warning' : 'error'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Button size="small">Edit</Button>
                    <Button size="small" color="error">Cancel</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
              </>
            )}
            {tabValue === 2 && (
              <>
        <Box sx={{ mb: 2 }}>
          <Button variant="contained">Add Service</Button>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Service Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Capacity</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Rate</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' }, '&:hover': { backgroundColor: 'action.selected' } }}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{service.name}</TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{service.capacity} people</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'success.main' }}>{service.rate}</TableCell>
                  <TableCell>
                    <Chip 
                      label={service.status} 
                      color={service.status === 'Available' ? 'success' : 'warning'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Button size="small">Edit</Button>
                    <Button size="small" color="error">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
              </>
            )}
            {tabValue === 3 && <BookingCalendar />}
            {tabValue === 4 && (
              <>
        <Box sx={{ mb: 2 }}>
          <Button variant="contained">Add Customer</Button>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Phone</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Total Bookings</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' }, '&:hover': { backgroundColor: 'action.selected' } }}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{customer.name}</TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{customer.email}</TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{customer.phone}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>{customer.totalBookings}</TableCell>
                  <TableCell>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
              </>
            )}
            {tabValue === 5 && (
              <>
        <Typography variant="h6">Booking Reports</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="From Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="To Date"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">Generate Report</Button>
          </Grid>
        </Grid>
              </>
            )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookingMain;