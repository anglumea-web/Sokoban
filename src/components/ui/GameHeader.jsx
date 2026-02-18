import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import Icon from '../AppIcon';

import Button from './Button';


const GameHeader = ({ 

currentLevel = 1, 

moveCount = 0, 

onReset, 

onUndo, 

canUndo = false 

}) => {

const navigate = useNavigate();

const location = useLocation();


const isGameScreen = location?.pathname?.includes('/game-screen');


const handleBack = () => {

if (isGameScreen) {

navigate('/level-selection');

} else {

navigate('/main-menu');

}

};


return (

<header className="game-header fixed top-0 left-0 right-0 z-50 bg-card shadow-md">

<div className="container-game">

<div className="flex items-center justify-between h-16 gap-4">

<div className="flex items-center gap-4">

<Button

variant="ghost"

size="icon"

onClick={handleBack}

className="hover:bg-muted"

aria-label={isGameScreen ? 'Kembali ke Level' : 'Kembali ke Menu'}

>

<Icon name="ArrowLeft" size={24} />

</Button>


{isGameScreen && (

<div className="flex items-center gap-3">

<div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md">

<Icon name="Target" size={18} color="var(--color-primary)" />

<span className="font-caption font-medium text-sm">

Level {currentLevel}

</span>

</div>


<div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md">

<Icon name="Footprints" size={18} color="var(--color-accent)" />

<span className="font-mono font-medium text-sm">

{moveCount}

</span>

</div>

</div>

)}

</div>


{isGameScreen && (

<div className="flex items-center gap-2">

<Button

variant="outline"

size="sm"

onClick={onUndo}

disabled={!canUndo}

iconName="Undo2"

iconPosition="left"

iconSize={18}

>

Undo

</Button>


<Button

variant="outline"

size="sm"

onClick={onReset}

iconName="RotateCcw"

iconPosition="left"

iconSize={18}

>

Reset

</Button>

</div>

)}

</div>

</div>

</header>

);

};


export default GameHeader;

