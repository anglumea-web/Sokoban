import React from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../../components/ui/Button';


const MenuActions = () => {

const navigate = useNavigate();


const handleStartGame = () => {

navigate('/game-screen', { state: { levelNumber: 1 } });

};


const handleLevelSelection = () => {

navigate('/level-selection');

};


return (

<div className="flex flex-col gap-3 md:gap-4 w-full max-w-md mx-auto mb-8 md:mb-12">

<Button

variant="default"

size="xl"

onClick={handleStartGame}

iconName="Play"

iconPosition="left"

iconSize={24}

fullWidth

className="h-14 md:h-16 lg:h-18 text-base md:text-lg"

>

Mulai Permainan

</Button>


<Button

variant="outline"

size="xl"

onClick={handleLevelSelection}

iconName="Grid3x3"

iconPosition="left"

iconSize={24}

fullWidth

className="h-14 md:h-16 lg:h-18 text-base md:text-lg"

>

Pilih Level

</Button>

</div>

);

};


export default MenuActions;

