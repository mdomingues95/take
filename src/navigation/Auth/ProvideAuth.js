import { VEHICLES } from 'navigation/CONSTANTS';
import React, { createContext, useContext, useEffect, useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SellIcon from '@mui/icons-material/Sell';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import RocketIcon from '@mui/icons-material/Rocket';
import ContactsIcon from '@mui/icons-material/Contacts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const authContext = createContext();

export function ProvideAuth({ children }) {

    const [user, setUser] = useState({
        name: "Usuário",
        location: "Dryve - Ribeirão Preto",
        image: require('assets/profile.png')
    });

    const [menus, setMenus] = useState([
        { label: "Resumo", icon: <DashboardIcon/>, link: "" },
        { label: "Oportunidades", icon: <SellIcon/>, link: "" },
        { label: "Agenda", icon: <CalendarMonthIcon/>, link: "" },
        { label: "Veículos", icon: <DirectionsCarIcon/>, link: VEHICLES },
        { label: "Publicação", icon: <RocketIcon/>, link: "" },
        { label: "Contatos", icon: <ContactsIcon/>, link: "" },
        { label: "Analytics", icon: <TrendingUpIcon/>, link: "" },
        { label: "Financiamento", icon: <AccountBalanceIcon/>, link: "" },
    ]);

    return (
        <authContext.Provider value={{ user, menus }}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth() {
    return useContext(authContext);
}
