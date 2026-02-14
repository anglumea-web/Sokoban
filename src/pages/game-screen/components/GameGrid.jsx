import React from 'react';


const GameGrid = ({ grid, playerPosition, boxPositions, targetPositions }) => {

const getCellContent = (row, col) => {

const isPlayer = playerPosition?.row === row && playerPosition?.col === col;

const isBox = boxPositions?.some(box => box?.row === row && box?.col === col);

const isTarget = targetPositions?.some(target => target?.row === row && target?.col === col);

const isWall = grid?.[row]?.[col] === 1;

const isBoxOnTarget = isBox && isTarget;


if (isPlayer && isTarget) {

return (

<div className="relative w-full h-full">

<div className="absolute inset-0 bg-success/20 rounded-sm" />

<div className="absolute inset-0 flex items-center justify-center">

<div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary rounded-full shadow-lg flex items-center justify-center">

<div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-primary-foreground rounded-full" />

</div>

</div>

</div>

);

}


if (isPlayer) {

return (

<div className="flex items-center justify-center w-full h-full">

<div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary rounded-full shadow-lg flex items-center justify-center transition-all">

<div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-primary-foreground rounded-full" />

</div>

</div>

);

}


if (isBoxOnTarget) {

return (

<div className="relative w-full h-full">

<div className="absolute inset-0 bg-success/20 rounded-sm" />

<div className="absolute inset-0 flex items-center justify-center">

<div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-success rounded-lg shadow-lg border-2 border-success-foreground transition-all" />

</div>

</div>

);

}


if (isBox) {

return (

<div className="flex items-center justify-center w-full h-full">

<div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-accent rounded-lg shadow-lg border-2 border-accent-foreground transition-all" />

</div>

);

}


if (isTarget) {

return (

<div className="flex items-center justify-center w-full h-full">

<div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-2 border-dashed border-muted-foreground rounded-sm opacity-50" />

</div>

);

}


if (isWall) {

return (

<div className="w-full h-full bg-card-foreground rounded-sm shadow-inner" />

);

}


return null;

};


return (

<div className="game-grid inline-block bg-muted p-2 md:p-3 lg:p-4 rounded-lg shadow-xl">

<div className="grid gap-0.5 md:gap-1">

{grid?.map((row, rowIndex) => (

<div key={rowIndex} className="flex gap-0.5 md:gap-1">

{row?.map((cell, colIndex) => (

<div

key={`${rowIndex}-${colIndex}`}

className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-background rounded-sm transition-all"

>

{getCellContent(rowIndex, colIndex)}

</div>

))}

</div>

))}

</div>

</div>

);

};


export default GameGrid;

