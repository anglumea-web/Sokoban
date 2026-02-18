import React from 'react';

import Icon from '../../../components/AppIcon';


const GameTitle = () => {

return (

<div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12">

<div className="relative">

<div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-primary/10 rounded-2xl flex items-center justify-center">

<Icon 

name="Box" 

size={48} 

color="var(--color-primary)" 

className="md:w-16 md:h-16 lg:w-20 lg:h-20"

/>

</div>

<div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full flex items-center justify-center">

<Icon 

name="Target" 

size={16} 

color="var(--color-accent-foreground)" 

className="md:w-5 md:h-5"

/>

</div>

</div>

<div className="text-center space-y-2">

<h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">

Sokoban

</h1>

<p className="text-sm md:text-base lg:text-lg text-muted-foreground font-caption">

Permainan Puzzle Klasik

</p>

</div>

</div>

);

};


export default GameTitle;

