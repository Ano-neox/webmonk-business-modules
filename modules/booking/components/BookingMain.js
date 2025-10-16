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

      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Dashboard" />
        <Tab label="Bookings" />
        <Tab label="Services" />
        <Tab label="Calendar" />
        <Tab label="Customers" />
        <Tab label="Reports" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Today's Bookings</Typography>
                <Typography variant="h4" color="primary">12</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Revenue</Typography>
                <Typography variant="h4" color="success.main">₹1,25,000</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Available Services</Typography>
                <Typography variant="h4" color="info.main">8</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Active Customers</Typography>
                <Typography variant="h4" color="warning.main">156</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Box sx={{ mb: 2 }}>
          <Button variant="contained">New Booking</Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Booking ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.customer}</TableCell>
                  <TableCell>{booking.service}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.time}</TableCell>
                  <TableCell>{booking.amount}</TableCell>
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
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Box sx={{ mb: 2 }}>
          <Button variant="contained">Add Service</Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Service Name</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>{service.name}</TableCell>
                  <TableCell>{service.capacity} people</TableCell>
                  <TableCell>{service.rate}</TableCell>
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
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h6">Booking Calendar</Typography>
        <Box sx={{ mt: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
          <Typography>Calendar view will be implemented here</Typography>
          <Typography variant="body2" color="text.secondary">
            Integration with calendar library for visual booking management
          </Typography>
        </Box>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <Box sx={{ mb: 2 }}>
          <Button variant="contained">Add Customer</Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Total Bookings</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.totalBookings}</TableCell>
                  <TableCell>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={tabValue} index={5}>
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
      </TabPanel>
    </Box>
  );
};

export default BookingMain;