import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';


import Button from './Button';


const BackNavigation = ({ className = '' }) => {

const navigate = useNavigate();

const location = useLocation();


const getBackLabel = () => {

if (location?.pathname?.includes('/game-screen')) {

return 'Kembali ke Level';

}

if (location?.pathname?.includes('/level-selection')) {

return 'Kembali ke Menu';

}

return 'Kembali';

};


const handleBack = () => {

if (location?.pathname?.includes('/game-screen')) {

navigate('/level-selection');

} else if (location?.pathname?.includes('/level-selection')) {

navigate('/main-menu');

} else {

navigate(-1);

}

};


return (

<div className={`back-navigation ${className}`}>

<Button

variant="ghost"

size="default"

onClick={handleBack}

iconName="ArrowLeft"

iconPosition="left"

iconSize={20}

className="hover:bg-muted"

>

{getBackLabel()}

</Button>

</div>

);

};


export default BackNavigation;

