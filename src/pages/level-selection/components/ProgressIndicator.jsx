import React from 'react';

import Icon from '../../../components/AppIcon';


const ProgressIndicator = ({ 

completedLevels = 0, 

totalLevels = 0 

}) => {

const percentage = totalLevels > 0 ? Math.round((completedLevels / totalLevels) * 100) : 0;


return (

<div className="progress-indicator bg-card rounded-lg shadow-md p-4 md:p-6">

<div className="flex items-center justify-between mb-3">

<div className="flex items-center gap-2">

<Icon name="Trophy" size={24} color="var(--color-primary)" />

<h3 className="text-base md:text-lg font-heading font-semibold text-foreground">

Progres Anda

</h3>

</div>

<span className="text-xl md:text-2xl font-mono font-bold text-primary">

{percentage}%

</span>

</div>


<div className="space-y-2">

<div className="w-full bg-muted rounded-full h-3 overflow-hidden">

<div

className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ease-out"

style={{ width: `${percentage}%` }}

role="progressbar"

aria-valuenow={percentage}

aria-valuemin="0"

aria-valuemax="100"

/>

</div>


<div className="flex items-center justify-between text-sm">

<span className="text-muted-foreground font-caption">

{completedLevels} dari {totalLevels} level selesai

</span>

{completedLevels === totalLevels && totalLevels > 0 && (

<div className="flex items-center gap-1 text-success">

<Icon name="CheckCircle2" size={16} />

<span className="font-medium">Semua Selesai!</span>

</div>

)}

</div>

</div>

</div>

);

};


export default ProgressIndicator;

