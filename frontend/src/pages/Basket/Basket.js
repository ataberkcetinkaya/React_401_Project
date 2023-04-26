import React, { useRef, useState } from 'react'
import { useBasket } from '../../contexts/BasketContext';
import { Alert, Box, Button, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Textarea, useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { postOrder } from '../../api';

export default function Basket() {

    const { items, removeFromBasket, clearBasket } = useBasket();

    const total = items.reduce((acc, item) => acc + item.price, 0);

    const {isOpen, onOpen, onClose} = useDisclosure();
    const initialRef = useRef();

    const [address, setAddress] = useState('');

    const toast = useToast();


    const handleSubmitOrder = async () => {
        const itemIds = items.map((item) => item._id);
        const order = {
            items: JSON.stringify(itemIds),
            address,
        };

        await postOrder(order);
        clearBasket();
        
        toast({
            title: "Order Accepted",
            description: "Thank you for your order!",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
     
        onClose();
    }

  return (
    <Box p="5">
        {items.length < 1 && <Alert status="warning">You have no any items here.</Alert>}

        {items.length > 0 && 
        <>
            <ul>
                {items.map((item) => (
                    <li key={item._id} style={{ marginBottom: '20px' }}>
                        <Link to={`/product/${item._id}`}>
                            <Text fontSize="18">Title: {item.title} / Price: {item.price}$</Text>
                            <Image htmlWidth={200} src={item.photos[0]} alt={item.title} />
                        </Link>
                        <Button mt="2" size="sm" colorScheme="red" onClick={() => removeFromBasket(item._id)}>Remove</Button>
                    </li>
                ))}    
            </ul>
            
            <Box mt='10'>
                <Text fontSize="22">
                    Total: {total}$
                </Text>
            </Box>

            <Button mt="2" colorScheme='green' onClick={onOpen}>Order</Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Order</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Textarea ref={initialRef} placeholder='Address...' value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleSubmitOrder}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
        }
    </Box>
  )
}
