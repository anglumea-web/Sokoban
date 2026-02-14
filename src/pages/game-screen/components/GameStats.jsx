import React from 'react';

import Icon from '../../../components/AppIcon';


const GameStats = ({ moveCount, timeElapsed, levelNumber }) => {

const formatTime = (seconds) => {

const mins = Math.floor(seconds / 60);

const secs = seconds % 60;

return `${mins?.toString()?.padStart(2, '0')}:${secs?.toString()?.padStart(2, '0')}`;

};


return (

<div className="game-stats flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 lg:mb-8">

<div className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-card rounded-lg shadow-md">

<Icon name="Target" size={20} color="var(--color-primary)" />

<div className="text-left">

<p className="text-xs md:text-sm text-muted-foreground font-caption">Level</p>

<p className="text-lg md:text-xl lg:text-2xl font-mono font-semibold text-foreground">

{levelNumber}

</p>

</div>

</div>


<div className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-card rounded-lg shadow-md">

<Icon name="Footprints" size={20} color="var(--color-accent)" />

<div className="text-left">

<p className="text-xs md:text-sm text-muted-foreground font-caption">Langkah</p>

<p className="text-lg md:text-xl lg:text-2xl font-mono font-semibold text-foreground">

{moveCount}

</p>

</div>

</div>


<div className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-card rounded-lg shadow-md">

<Icon name="Clock" size={20} color="var(--color-secondary)" />

<div className="text-left">

<p className="text-xs md:text-sm text-muted-foreground font-caption">Waktu</p>

<p className="text-lg md:text-xl lg:text-2xl font-mono font-semibold text-foreground">

{formatTime(timeElapsed)}

</p>

</div>

</div>

</div>

);

};


export default GameStats;

