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
  Chip
} from '@mui/material';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const EcommerceMain = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const products = [
    { id: 1, name: 'Laptop Pro', price: '₹85,000', stock: 25, status: 'Active' },
    { id: 2, name: 'Smartphone X', price: '₹45,000', stock: 50, status: 'Active' },
    { id: 3, name: 'Tablet Air', price: '₹35,000', stock: 0, status: 'Out of Stock' }
  ];

  const orders = [
    { id: 'ORD001', customer: 'John Doe', amount: '₹85,000', status: 'Delivered', date: '2024-01-15' },
    { id: 'ORD002', customer: 'Jane Smith', amount: '₹45,000', status: 'Processing', date: '2024-01-16' },
    { id: 'ORD003', customer: 'Mike Johnson', amount: '₹35,000', status: 'Shipped', date: '2024-01-17' }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        E-commerce Management
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Dashboard" />
        <Tab label="Products" />
        <Tab label="Orders" />
        <Tab label="Categories" />
        <Tab label="Customers" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Products</Typography>
                <Typography variant="h4" color="primary">156</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Orders</Typography>
                <Typography variant="h4" color="success.main">1,234</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Revenue</Typography>
                <Typography variant="h4" color="warning.main">₹12,45,000</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Customers</Typography>
                <Typography variant="h4" color="info.main">892</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Box sx={{ mb: 2 }}>
          <Button variant="contained">Add Product</Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Chip 
                      label={product.status} 
                      color={product.status === 'Active' ? 'success' : 'error'}
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

      <TabPanel value={tabValue} index={2}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>
                    <Chip 
                      label={order.status} 
                      color={
                        order.status === 'Delivered' ? 'success' : 
                        order.status === 'Processing' ? 'warning' : 'info'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Button size="small">View</Button>
                    <Button size="small">Update</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography variant="h6">Product Categories</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Add Category</Button>
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <Typography variant="h6">Customer Management</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Add Customer</Button>
      </TabPanel>
    </Box>
  );
};

export default EcommerceMain;