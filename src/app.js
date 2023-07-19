import React from 'react';
import {Desktop} from './screens/Desktop/Desktop';
import {useMediaQuery} from '@uidotdev/usehooks';
import {Iphone} from './screens/Iphone/Iphone';

const App = () => {
	const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
	if (isSmallDevice) {
		return <Iphone />;
	}
	return <Desktop />;
};

export default App;
