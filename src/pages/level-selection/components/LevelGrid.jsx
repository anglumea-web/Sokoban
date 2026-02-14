import React from 'react';

import LevelCard from './LevelCard';


const LevelGrid = ({ 

levels = [], 

onLevelClick,

emptyMessage = "Tidak ada level yang tersedia" 

}) => {

if (levels?.length === 0) {

return (

<div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-20">

<div className="text-center space-y-3">

<p className="text-lg md:text-xl text-muted-foreground font-caption">

{emptyMessage}

</p>

</div>

</div>

);

}


return (

<div className="level-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6">

{levels?.map((level) => (

<LevelCard

key={level?.id}

level={level}

isCompleted={level?.isCompleted}

isLocked={level?.isLocked}

onClick={onLevelClick}

/>

))}

</div>

);

};


export default LevelGrid;

