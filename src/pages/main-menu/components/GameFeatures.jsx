import React from 'react';

import Icon from '../../../components/AppIcon';


const GameFeatures = () => {

const features = [

{

id: 1,

icon: "Layers",

iconColor: "var(--color-primary)",

title: "Multiple Level",

description: "Berbagai tingkat kesulitan"

},

{

id: 2,

icon: "Undo2",

iconColor: "var(--color-accent)",

title: "Undo & Reset",

description: "Batalkan langkah kapan saja"

},

{

id: 3,

icon: "Smartphone",

iconColor: "var(--color-secondary)",

title: "Responsif",

description: "Bermain di semua perangkat"

},

{

id: 4,

icon: "Zap",

iconColor: "var(--color-success)",

title: "Performa Cepat",

description: "Gameplay yang mulus"

}

];


return (

<div className="w-full max-w-4xl mx-auto mb-8 md:mb-12">

<h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-center text-foreground mb-6 md:mb-8">

Fitur Permainan

</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

{features?.map((feature) => (

<div

key={feature?.id}

className="bg-card rounded-xl shadow-md p-4 md:p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"

>

<div className="flex flex-col items-center text-center gap-3 md:gap-4">

<div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-muted rounded-xl flex items-center justify-center">

<Icon 

name={feature?.icon} 

size={24} 

color={feature?.iconColor}

className="md:w-7 md:h-7 lg:w-8 lg:h-8"

/>

</div>

<div>

<h3 className="text-sm md:text-base lg:text-lg font-heading font-semibold text-foreground mb-1 md:mb-2">

{feature?.title}

</h3>

<p className="text-xs md:text-sm text-muted-foreground">

{feature?.description}

</p>

</div>

</div>

</div>

))}

</div>

</div>

);

};


export default GameFeatures;

