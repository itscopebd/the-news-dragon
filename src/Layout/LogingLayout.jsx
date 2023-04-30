import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LogingLayout = () => {
    return (
        <>
          <NavigationBar></NavigationBar>  
          <Outlet></Outlet>
        </>
    );
};

export default LogingLayout;