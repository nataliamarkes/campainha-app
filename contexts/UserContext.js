import React, { createContext } from 'react';
import profileIcon from '../assets/icon.png';

export default createContext({
	user: {
		name: 'João do Pão',
		role: 'Morador',
		photo: profileIcon,
	},
});
