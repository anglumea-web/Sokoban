import React, { useState, useMemo } from 'react';

import { Helmet } from 'react-helmet';

import GameHeader from '../../components/ui/GameHeader';

import ProgressIndicator from './components/ProgressIndicator';

import FilterControls from './components/FilterControls';

import LevelGrid from './components/LevelGrid';


const LevelSelection = () => {

const [activeFilter, setActiveFilter] = useState('all');

const [sortOrder, setSortOrder] = useState('sequential');


const handleLevelClick = (levelId) => {

// Navigate to level or handle level selection

console.log('Level clicked:', levelId);

};


const handleReset = () => {

// Handle reset functionality

console.log('Reset clicked');

};


const handleUndo = () => {

// Handle undo functionality

console.log('Undo clicked');

};


const mockLevels = [

{

id: 1,

number: 1,

difficulty: "Mudah",

stars: 1,

thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_12c60c914-1771077661578.png",

thumbnailAlt: "Simple Sokoban puzzle grid with wooden boxes on checkered floor showing beginner level layout with clear pathways",

isCompleted: true,

isLocked: false,

moves: 45

},

{

id: 2,

number: 2,

difficulty: "Mudah",

stars: 1,

thumbnail: "https://images.unsplash.com/photo-1702974915148-7ccc11da9b87",

thumbnailAlt: "Wooden puzzle pieces arranged on table showing basic Sokoban game mechanics with boxes and target positions",

isCompleted: true,

isLocked: false,

moves: 52

},

{

id: 3,

number: 3,

difficulty: "Mudah",

stars: 1,

thumbnail: "https://images.unsplash.com/photo-1677554480986-37b624cf25d5",

thumbnailAlt: "Colorful building blocks arranged in puzzle formation representing introductory Sokoban challenge layout",

isCompleted: false,

isLocked: false

},

{

id: 4,

number: 4,

difficulty: "Sedang",

stars: 2,

thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1ce47f4b4-1765156891117.png",

thumbnailAlt: "Complex wooden puzzle grid with multiple boxes showing intermediate difficulty Sokoban level design",

isCompleted: false,

isLocked: false

},

{

id: 5,

number: 5,

difficulty: "Sedang",

stars: 2,

thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1960c270a-1771077660205.png",

thumbnailAlt: "Strategic puzzle layout with interconnected pathways and boxes demonstrating medium complexity Sokoban challenge",

isCompleted: false,

isLocked: false

},

{

id: 6,

number: 6,

difficulty: "Sedang",

stars: 2,

thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_17076cf9b-1771077661547.png",

thumbnailAlt: "Intricate wooden block puzzle arrangement showing moderate difficulty level with narrow corridors and multiple targets",

isCompleted: false,

isLocked: true,

unlockRequirement: 3

},

{

id: 7,

number: 7,

difficulty: "Sulit",

stars: 3,

thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc0e8ba6-1771077662549.png",

thumbnailAlt: "Advanced Sokoban puzzle grid with complex box arrangements and tight spaces requiring strategic planning",

isCompleted: false,

isLocked: true,

unlockRequirement: 5

},

{

id: 8,

number: 8,

difficulty: "Sulit",

stars: 3,

thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_15e7c5754-1771077662918.png",

thumbnailAlt: "Challenging puzzle layout with multiple wooden boxes in confined space showing expert level Sokoban difficulty",

isCompleted: false,

isLocked: true,

unlockRequirement: 6

},

{

id: 9,

number: 9,

difficulty: "Sulit",

stars: 3,

thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1088c741f-1771077660749.png",

thumbnailAlt: "Master level Sokoban puzzle with intricate box placement and narrow pathways requiring advanced problem solving",

isCompleted: false,

isLocked: true,

unlockRequirement: 7

},

{

id: 10,

number: 10,

difficulty: "Sulit",

stars: 3,

thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_11a57b911-1771077662260.png",

thumbnailAlt: "Expert difficulty Sokoban grid with complex wooden box arrangements and challenging target positions",

isCompleted: false,

isLocked: true,

unlockRequirement: 8

},

{

id: 11,

number: 11,

difficulty: "Mudah",

stars: 1,

thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_169a99816-1765031350288.png",

thumbnailAlt: "Beginner friendly puzzle grid with simple box placement showing easy Sokoban level for new players",

isCompleted: false,

isLocked: false

},

{

id: 12,

number: 12,

difficulty: "Sedang",

stars: 2,

thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1abe19e-1771077661536.png",

thumbnailAlt: "Intermediate puzzle layout with moderate complexity showing balanced Sokoban challenge with clear objectives",

isCompleted: false,

isLocked: true,

unlockRequirement: 11

}];



const completedCount = mockLevels?.filter((level) => level?.isCompleted)?.length;

const totalCount = mockLevels?.length;


const filteredAndSortedLevels = useMemo(() => {

let filtered = [...mockLevels];


switch (activeFilter) {

case 'completed':

filtered = filtered?.filter((level) => level?.isCompleted);

break;

case 'available':

filtered = filtered?.filter((level) => !level?.isCompleted && !level?.isLocked);

break;

case 'locked':

filtered = filtered?.filter((level) => level?.isLocked);

break;

default:

break;

}


if (sortOrder === 'difficulty') {

const difficultyOrder = { 'Mudah': 1, 'Sedang': 2, 'Sulit': 3 };

filtered?.sort((a, b) => difficultyOrder?.[a?.difficulty] - difficultyOrder?.[b?.difficulty]);

} else {

filtered?.sort((a, b) => a?.number - b?.number);

}


return filtered;

}, [activeFilter, sortOrder]);


const getEmptyMessage = () => {

switch (activeFilter) {

case 'completed':

return "Belum ada level yang diselesaikan";

case 'available':

return "Tidak ada level yang tersedia saat ini";

case 'locked':

return "Tidak ada level yang terkunci";

default:

return "Tidak ada level yang tersedia";

}

};


return (

<>

<Helmet>

<title>Pilih Level - Sokoban Game</title>

<meta name="description" content="Pilih level Sokoban yang ingin Anda mainkan. Lihat progres Anda dan tantang diri dengan berbagai tingkat kesulitan." />

</Helmet>


<div className="min-h-screen bg-background">

<GameHeader onReset={handleReset} onUndo={handleUndo} />


<main className="pt-20 pb-8 px-4 md:px-6 lg:px-8">

<div className="max-w-7xl mx-auto space-y-6 md:space-y-8">

<div className="text-center space-y-2">

<h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">

Pilih Level

</h1>

<p className="text-base md:text-lg text-muted-foreground font-caption max-w-2xl mx-auto">

Pilih level yang ingin Anda mainkan dan selesaikan semua teka-teki

</p>

</div>


<ProgressIndicator

completedLevels={completedCount}

totalLevels={totalCount} />


<FilterControls

activeFilter={activeFilter}

onFilterChange={setActiveFilter}

sortOrder={sortOrder}

onSortChange={setSortOrder} />


<LevelGrid

levels={filteredAndSortedLevels}

emptyMessage={getEmptyMessage()}

onLevelClick={handleLevelClick} />

</div>

</main>

</div>

</>);


};


export default LevelSelection;

