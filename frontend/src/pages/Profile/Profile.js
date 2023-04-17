import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();
    const handleLogOut = async () => {
        await logout();
        navigate('/');
    };

  return (
    <div>
        {JSON.stringify(user)}
        <br></br>
        <br></br>
        <Button colorScheme='red' variant='solid' onClick={handleLogOut}>
            Log Out
        </Button>
    </div>
  )
}
