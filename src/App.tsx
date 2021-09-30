import React from 'react';
import { HStack } from '@chakra-ui/layout';
import Landing from './pages/landing';
function App() {
    return (
        <div className="App" style={{ background: '#002A97' }}>
            <Landing />
            <HStack h="80vh" bg="#FFFFFF"></HStack>
        </div>
    );
}

export default App;
