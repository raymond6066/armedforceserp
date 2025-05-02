'use client';

import React, { useEffect, useState } from 'react';
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  CircularProgress,
  Button,
  Stack,
} from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

interface User {
  id: string;
  email: string;
  role: 'STUDENT' | 'INSTRUCTOR' | 'ADMIN';
  verified: boolean;
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    // TODO: fetch real user list
    setTimeout(() => {
      setUsers([
        { id: 'u1', email: 'alice@example.com', role: 'STUDENT', verified: true },
        { id: 'u2', email: 'bob@example.com', role: 'INSTRUCTOR', verified: false },
        { id: 'u3', email: 'carol@example.com', role: 'ADMIN', verified: true },
      ]);
    }, 500);
  }, []);

  if (!users) {
    return <CircularProgress />;
  }

  return (
    <div style={{ padding: 24 }}>
      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
        <ManageAccountsIcon fontSize="large" />
        <Typography variant="h4">Admin Dashboard</Typography>
      </Stack>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Verified</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(u => (
              <TableRow key={u.id}>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell>{u.verified ? 'Yes' : 'No'}</TableCell>
                <TableCell align="right">
                  <Button size="small">Approve</Button>
                  <Button size="small" color="error">
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}