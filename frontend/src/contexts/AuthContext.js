import { useState, useContext, createContext, useEffect } from "react";
import { fetchLogout, fetchMe } from "../api";
import { Flex, Spinner } from "@chakra-ui/react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => { //anonymous async function
            try {
                const me = await fetchMe();
                setLoggedIn(true);
                setUser(me);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        })();
    }, []);
    
    const login = (data) => {
        setUser(data.user);
        setLoggedIn(true);

        localStorage.setItem("access-token", data.accessToken);
        localStorage.setItem("refresh-token", data.refreshToken);
    };

    const logout = async (callback) => {
        setUser(null);
        setLoggedIn(false);
        
        await fetchLogout();
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
    };
    
    const value = {
        user,
        loggedIn,
        login,
        logout
    };

    if(loading) return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" colorScheme="red"></Spinner>
    </Flex>);
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };