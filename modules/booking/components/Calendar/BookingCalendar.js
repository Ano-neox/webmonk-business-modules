import React, { useState } from 'react';
import {
  Box, Typography, Card, CardContent, Button, Dialog,
  DialogTitle, DialogContent, TextField, DialogActions, Chip,
  List, ListItem, ListItemText, ListItemSecondaryAction, MenuItem, Tabs, Tab
} from '@mui/material';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [calendarTab, setCalendarTab] = useState(0);
  const [bookings, setBookings] = useState([
    { id: 1, customer: 'Alice Johnson', service: 'Conference Room A', date: '2024-01-20', time: '10:00 AM', duration: '2 hours', status: 'Confirmed' },
    { id: 2, customer: 'Bob Smith', service: 'Meeting Room B', date: '2024-01-21', time: '2:00 PM', duration: '1 hour', status: 'Pending' },
    { id: 3, customer: 'Carol Davis', service: 'Event Hall', date: '2024-01-22', time: '6:00 PM', duration: '4 hours', status: 'Confirmed' }
  ]);
  const [formData, setFormData] = useState({
    customer: '', service: '', date: '', time: '', duration: '1 hour', status: 'Pending'
  });

  const services = ['Conference Room A', 'Meeting Room B', 'Event Hall', 'Training Room', 'Boardroom'];
  const currentMonth = selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

  const handleAddBooking = () => {
    setBookings([...bookings, { ...formData, id: Date.now() }]);
    setFormData({ customer: '', service: '', date: '', time: '', duration: '1 hour', status: 'Pending' });
    setOpen(false);
  };

  const getBookingsForDate = (date) => {
    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    return bookings.filter(b => b.date === dateStr);
  };

  const renderHorizontalCalendar = () => {
    const allDays = [];
    const today = new Date().getDate();
    const currentMonthYear = new Date().getMonth() === selectedDate.getMonth() && new Date().getFullYear() === selectedDate.getFullYear();

    // Previous month days
    for (let i = 0; i < firstDayOfMonth; i++) {
      const prevMonthDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0).getDate() - firstDayOfMonth + i + 1;
      allDays.push({ day: prevMonthDay, isCurrentMonth: false, isToday: false });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = currentMonthYear && day === today;
      allDays.push({ day, isCurrentMonth: true, isToday });
    }

    // Next month days
    const totalCells = Math.ceil(allDays.length / 7) * 7;
    const remainingCells = totalCells - allDays.length;
    for (let i = 1; i <= remainingCells; i++) {
      allDays.push({ day: i, isCurrentMonth: false, isToday: false });
    }

    return (
      <Box display="flex" flexWrap="wrap" sx={{ width: '100%' }}>
        {allDays.map((dayObj, index) => (
          <Box
            key={index}
            sx={{
              width: `${100/7}%`,
              minHeight: 120,
              border: '1px solid #e2e8f0',
              p: 1,
              backgroundColor: dayObj.isToday ? '#fef3c7' : dayObj.isCurrentMonth ? 'white' : '#f8fafc',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'flex-start',
              '&:hover': { backgroundColor: '#f7fafc' }
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: dayObj.isToday ? 'bold' : 'normal',
                color: dayObj.isCurrentMonth ? (dayObj.isToday ? '#1a365d' : '#3182ce') : '#a0aec0',
                fontSize: '14px'
              }}
            >
              {dayObj.day}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh', p: 0, m: -3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={3} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e2e8f0' }}>
        <Tabs value={calendarTab} onChange={(e, v) => setCalendarTab(v)} sx={{ '& .MuiTab-root': { fontSize: '16px', fontWeight: 'medium' } }}>
          <Tab label="Calendar View" />
          <Tab label="Today's Bookings" />
        </Tabs>
        <Button variant="contained" onClick={() => setOpen(true)} sx={{ px: 3, py: 1 }}>
          New Booking
        </Button>
      </Box>

      {calendarTab === 0 && (
        <Box sx={{ backgroundColor: '#f8fafc', p: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Box display="flex" alignItems="center" gap={2}>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}
                sx={{ minWidth: 40, height: 40 }}
              >
                ‹
              </Button>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}
                sx={{ minWidth: 40, height: 40 }}
              >
                ›
              </Button>
              <Button variant="outlined" size="small" sx={{ px: 2 }}>Today</Button>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c' }}>
              {currentMonth}
            </Typography>
            <Box display="flex" gap={1}>
              <Button variant="contained" size="small" sx={{ backgroundColor: '#2d3748', color: 'white', px: 3 }}>Month</Button>
              <Button variant="outlined" size="small" sx={{ px: 3 }}>Week</Button>
              <Button variant="outlined" size="small" sx={{ px: 3 }}>Day</Button>
            </Box>
          </Box>
          
          <Box sx={{ backgroundColor: 'white', borderRadius: 2, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <Box display="flex" sx={{ borderBottom: '1px solid #e2e8f0' }}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                <Box key={day} sx={{ 
                  flex: 1, 
                  textAlign: 'center', 
                  p: 2, 
                  borderRight: index < 6 ? '1px solid #e2e8f0' : 'none',
                  backgroundColor: '#f8fafc'
                }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#3182ce' }}>{day}</Typography>
                </Box>
              ))}
            </Box>
            
            {renderHorizontalCalendar()}
          </Box>
        </Box>
      )}

      {calendarTab === 1 && (
        <Box sx={{ backgroundColor: '#f8fafc', p: 3 }}>
          <Box display="flex" gap={3}>
            <Card sx={{ flex: 1, borderRadius: 2, boxShadow: 'none', border: '1px solid #e2e8f0' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" mb={3}>Today's Bookings</Typography>
                <List>
                  {bookings.map(booking => (
                    <ListItem key={booking.id} divider sx={{ py: 2 }}>
                      <ListItemText
                        primary={<Typography sx={{ fontWeight: 'bold', color: '#1a202c' }}>{booking.service}</Typography>}
                        secondary={
                          <Box>
                            <Typography variant="body2" sx={{ color: '#4a5568' }}>{booking.customer}</Typography>
                            <Typography variant="body2" sx={{ color: '#718096' }}>{booking.time} - {booking.duration}</Typography>
                          </Box>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Chip 
                          label={booking.status} 
                          size="small" 
                          color={booking.status === 'Confirmed' ? 'success' : booking.status === 'Pending' ? 'warning' : 'error'}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
            <Card sx={{ flex: 1, borderRadius: 2, boxShadow: 'none', border: '1px solid #e2e8f0' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" mb={3}>Room Availability</Typography>
                {services.map((service, index) => (
                  <Box key={index} display="flex" justifyContent="space-between" alignItems="center" py={2} borderBottom="1px solid #e2e8f0">
                    <Typography variant="body1" sx={{ fontWeight: 'medium' }}>{service}</Typography>
                    <Chip 
                      label={Math.random() > 0.5 ? 'Available' : 'Booked'} 
                      size="small" 
                      color={Math.random() > 0.5 ? 'success' : 'error'}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Box>
        </Box>
      )}

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>New Booking</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Customer Name"
            value={formData.customer}
            onChange={(e) => setFormData({...formData, customer: e.target.value})}
            margin="normal"
          />
          <TextField
            fullWidth
            select
            label="Service/Room"
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            margin="normal"
          >
            {services.map(service => (
              <MenuItem key={service} value={service}>{service}</MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            label="Time"
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            select
            label="Duration"
            value={formData.duration}
            onChange={(e) => setFormData({...formData, duration: e.target.value})}
            margin="normal"
          >
            <MenuItem value="30 minutes">30 minutes</MenuItem>
            <MenuItem value="1 hour">1 hour</MenuItem>
            <MenuItem value="2 hours">2 hours</MenuItem>
            <MenuItem value="4 hours">4 hours</MenuItem>
            <MenuItem value="Full day">Full day</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            label="Status"
            value={formData.status}
            onChange={(e) => setFormData({...formData, status: e.target.value})}
            margin="normal"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Confirmed">Confirmed</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddBooking} variant="contained">Create Booking</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BookingCalendar;