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
                  <Box sx={{ fontSize: '20px', color: '#5a67d8' }}>🛍️</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    156
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Total Products
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
                  <Box sx={{ fontSize: '20px', color: '#38a169' }}>📝</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    1,234
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Total Orders
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
                  <Box sx={{ fontSize: '20px', color: '#d69e2e' }}>💰</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    ₹12,45,000
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Revenue
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
                  <Box sx={{ fontSize: '20px', color: '#2563eb' }}>👥</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    892
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Customers
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
            <Tab label="Products" />
            <Tab label="Orders" />
            <Tab label="Categories" />
            <Tab label="Customers" />
          </Tabs>
        </Box>
        <CardContent>
          {tabValue === 0 && (
            <>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" mb={2}>Recent Orders</Typography>
                      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
                        <Table>
                          <TableHead>
                            <TableRow sx={{ backgroundColor: 'primary.main' }}>
                              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Order ID</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Customer</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Amount</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {orders.map((order) => (
                              <TableRow key={order.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
                                <TableCell sx={{ fontWeight: 'medium' }}>{order.id}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: 'success.main' }}>{order.amount}</TableCell>
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
                                <TableCell sx={{ color: 'text.secondary' }}>{order.date}</TableCell>
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
                      <Typography variant="h6" mb={2}>Top Products</Typography>
                      {products.map((product, index) => (
                        <Box key={product.id} display="flex" justifyContent="space-between" alignItems="center" py={1}>
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>{product.name}</Typography>
                            <Typography variant="caption" color="text.secondary">Stock: {product.stock}</Typography>
                          </Box>
                          <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                            {product.price}
                          </Typography>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" mb={2}>Quick Stats</Typography>
                      <Box display="flex" justifyContent="space-between" py={1}>
                        <Typography variant="body2">Pending Orders</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'warning.main' }}>23</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" py={1}>
                        <Typography variant="body2">Low Stock Items</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'error.main' }}>5</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" py={1}>
                        <Typography variant="body2">Today's Sales</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'success.main' }}>₹45,600</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between" py={1}>
                        <Typography variant="body2">New Customers</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'info.main' }}>12</Typography>
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
          <Button variant="contained">Add Product</Button>
        </Box>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Product Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Price</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Stock</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' }, '&:hover': { backgroundColor: 'action.selected' } }}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{product.name}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'success.main' }}>{product.price}</TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>{product.stock}</TableCell>
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
              </>
            )}
            {tabValue === 2 && (
              <>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Order ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Customer</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Amount</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' }, '&:hover': { backgroundColor: 'action.selected' } }}>
                  <TableCell sx={{ fontWeight: 'medium' }}>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'success.main' }}>{order.amount}</TableCell>
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
                  <TableCell sx={{ color: 'text.secondary' }}>{order.date}</TableCell>
                  <TableCell>
                    <Button size="small">View</Button>
                    <Button size="small">Update</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
              </>
            )}
            {tabValue === 3 && (
              <>
        <Typography variant="h6">Product Categories</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Add Category</Button>
              </>
            )}
            {tabValue === 4 && (
              <>
        <Typography variant="h6">Customer Management</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Add Customer</Button>
              </>
            )}
          </CardContent>
        </Card>
    </Box>
  );
};

export default EcommerceMain;