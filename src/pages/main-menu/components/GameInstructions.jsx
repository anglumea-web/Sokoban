import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';


const GameInstructions = () => {

const [isExpanded, setIsExpanded] = useState(false);


const instructions = [

{

id: 1,

icon: "Target",

iconColor: "var(--color-primary)",

title: "Tujuan Permainan",

description: "Dorong semua kotak ke posisi target yang ditandai dengan simbol target. Selesaikan level dengan menempatkan semua kotak pada target."

},

{

id: 2,

icon: "Move",

iconColor: "var(--color-accent)",

title: "Cara Bermain",

description: "Gunakan tombol panah atau WASD untuk menggerakkan karakter. Dorong kotak dengan berjalan ke arahnya. Kotak hanya bisa didorong, tidak bisa ditarik."

},

{

id: 3,

icon: "AlertCircle",

iconColor: "var(--color-warning)",

title: "Aturan Penting",

description: "Kotak tidak bisa didorong ke dinding atau kotak lain. Rencanakan langkah Anda dengan hati-hati karena kotak bisa terjebak di sudut."

},

{

id: 4,

icon: "Gamepad2",

iconColor: "var(--color-secondary)",

title: "Kontrol",

description: "Keyboard: Gunakan tombol panah ↑↓←→ atau WASD untuk bergerak.\nLayar Sentuh: Gunakan tombol kontrol di layar untuk bergerak ke segala arah."

}

];


return (

<div className="w-full max-w-2xl mx-auto">

<button

onClick={() => setIsExpanded(!isExpanded)}

className="w-full bg-card rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-300 border border-border"

>

<div className="flex items-center justify-between">

<div className="flex items-center gap-3 md:gap-4">

<div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">

<Icon 

name="BookOpen" 

size={20} 

color="var(--color-primary)"

className="md:w-6 md:h-6"

/>

</div>

<h2 className="text-lg md:text-xl lg:text-2xl font-heading font-semibold text-foreground text-left">

Petunjuk Permainan

</h2>

</div>

<Icon 

name={isExpanded ? "ChevronUp" : "ChevronDown"} 

size={24} 

className="text-muted-foreground flex-shrink-0"

/>

</div>

</button>

{isExpanded && (

<div className="mt-4 bg-card rounded-xl shadow-md border border-border overflow-hidden animate-fade-in">

<div className="p-4 md:p-6 space-y-4 md:space-y-6">

{instructions?.map((instruction) => (

<div 

key={instruction?.id}

className="flex gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-lg"

>

<div className="flex-shrink-0">

<div className="w-10 h-10 md:w-12 md:h-12 bg-background rounded-lg flex items-center justify-center">

<Icon 

name={instruction?.icon} 

size={20} 

color={instruction?.iconColor}

className="md:w-6 md:h-6"

/>

</div>

</div>

<div className="flex-1 min-w-0">

<h3 className="text-sm md:text-base lg:text-lg font-heading font-semibold text-foreground mb-1 md:mb-2">

{instruction?.title}

</h3>

<p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed whitespace-pre-line">

{instruction?.description}

</p>

</div>

</div>

))}


<div className="mt-4 md:mt-6 p-3 md:p-4 bg-primary/5 border border-primary/20 rounded-lg">

<div className="flex items-start gap-2 md:gap-3">

<Icon 

name="Lightbulb" 

size={20} 

color="var(--color-primary)"

className="flex-shrink-0 mt-0.5"

/>

<div>

<h4 className="text-sm md:text-base font-heading font-semibold text-foreground mb-1">

Tips Bermain

</h4>

<p className="text-xs md:text-sm text-muted-foreground">

Gunakan tombol Undo untuk membatalkan langkah terakhir dan tombol Reset untuk memulai level dari awal. Rencanakan strategi Anda sebelum bergerak!

</p>

</div>

</div>

</div>

</div>

</div>

)}

</div>

);

};


export default GameInstructions;

