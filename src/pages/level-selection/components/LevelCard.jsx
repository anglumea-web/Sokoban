import React from 'react';

import { useNavigate } from 'react-router-dom';

import Icon from '../../../components/AppIcon';

import Image from '../../../components/AppImage';


const LevelCard = ({ 

level, 

isCompleted = false, 

isLocked = false,

onClick 

}) => {

const navigate = useNavigate();


const handleClick = () => {

if (!isLocked) {

if (onClick) {

onClick(level);

} else {

navigate('/game-screen', { state: { levelNumber: level?.number } });

}

}

};


const getDifficultyColor = (difficulty) => {

switch (difficulty) {

case 'Mudah':

return 'text-success';

case 'Sedang':

return 'text-warning';

case 'Sulit':

return 'text-destructive';

default:

return 'text-muted-foreground';

}

};


return (

<div

onClick={handleClick}

className={`

relative bg-card rounded-lg shadow-md overflow-hidden

transition-all duration-300 cursor-pointer

${isLocked 

? 'opacity-50 cursor-not-allowed' :'hover:shadow-lg hover:-translate-y-1 active:scale-98'

}

${isCompleted ? 'ring-2 ring-success' : ''}

`}

role="button"

tabIndex={isLocked ? -1 : 0}

aria-label={`Level ${level?.number} - ${level?.difficulty} - ${isCompleted ? 'Selesai' : isLocked ? 'Terkunci' : 'Tersedia'}`}

>

<div className="aspect-square relative bg-muted">

<Image

src={level?.thumbnail}

alt={level?.thumbnailAlt}

className="w-full h-full object-cover"

/>

{isLocked && (

<div className="absolute inset-0 bg-background/80 flex items-center justify-center">

<Icon name="Lock" size={48} color="var(--color-muted-foreground)" />

</div>

)}


{isCompleted && !isLocked && (

<div className="absolute top-2 right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-lg">

<Icon name="Check" size={20} color="white" />

</div>

)}

</div>

<div className="p-4 space-y-2">

<div className="flex items-center justify-between">

<h3 className="text-lg font-heading font-semibold text-foreground">

Level {level?.number}

</h3>

<div className="flex items-center gap-1">

{[...Array(3)]?.map((_, index) => (

<Icon

key={index}

name="Star"

size={16}

color={index < level?.stars ? 'var(--color-warning)' : 'var(--color-muted)'}

className={index < level?.stars ? 'fill-current' : ''}

/>

))}

</div>

</div>


<div className="flex items-center justify-between text-sm">

<span className={`font-caption font-medium ${getDifficultyColor(level?.difficulty)}`}>

{level?.difficulty}

</span>

{level?.moves && (

<div className="flex items-center gap-1 text-muted-foreground">

<Icon name="Footprints" size={14} />

<span className="font-mono">{level?.moves}</span>

</div>

)}

</div>


{isLocked && level?.unlockRequirement && (

<p className="text-xs text-muted-foreground font-caption">

Selesaikan Level {level?.unlockRequirement} untuk membuka

</p>

)}

</div>

</div>

);

};


export default LevelCard;

