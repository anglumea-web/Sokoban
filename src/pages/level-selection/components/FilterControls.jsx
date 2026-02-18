import React from 'react';


import Button from '../../../components/ui/Button';


const FilterControls = ({ 

activeFilter, 

onFilterChange,

sortOrder,

onSortChange 

}) => {

const filters = [

{ id: 'all', label: 'Semua Level', icon: 'Grid3x3' },

{ id: 'completed', label: 'Selesai', icon: 'CheckCircle2' },

{ id: 'available', label: 'Tersedia', icon: 'PlayCircle' },

{ id: 'locked', label: 'Terkunci', icon: 'Lock' }

];


const sortOptions = [

{ id: 'sequential', label: 'Urutan', icon: 'ArrowUpDown' },

{ id: 'difficulty', label: 'Kesulitan', icon: 'TrendingUp' }

];


return (

<div className="filter-controls space-y-4">

<div className="flex flex-wrap gap-2">

{filters?.map((filter) => (

<Button

key={filter?.id}

variant={activeFilter === filter?.id ? 'default' : 'outline'}

size="sm"

onClick={() => onFilterChange(filter?.id)}

iconName={filter?.icon}

iconPosition="left"

iconSize={16}

className="flex-shrink-0"

>

{filter?.label}

</Button>

))}

</div>

<div className="flex items-center gap-2">

<span className="text-sm text-muted-foreground font-caption whitespace-nowrap">

Urutkan:

</span>

<div className="flex gap-2">

{sortOptions?.map((option) => (

<Button

key={option?.id}

variant={sortOrder === option?.id ? 'secondary' : 'ghost'}

size="sm"

onClick={() => onSortChange(option?.id)}

iconName={option?.icon}

iconPosition="left"

iconSize={16}

>

{option?.label}

</Button>

))}

</div>

</div>

</div>

);

};


export default FilterControls;

