import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Icon from '../AppIcon';

import Button from './Button';


const LevelCompletionModal = ({ 

isOpen = false, 

onClose, 

levelNumber = 1, 

moveCount = 0, 

onNextLevel, 

hasNextLevel = true 

}) => {

const navigate = useNavigate();


useEffect(() => {

const handleEscape = (e) => {

if (e?.key === 'Escape' && isOpen) {

onClose();

}

};


if (isOpen) {

document.addEventListener('keydown', handleEscape);

document.body.style.overflow = 'hidden';

}


return () => {

document.removeEventListener('keydown', handleEscape);

document.body.style.overflow = 'unset';

};

}, [isOpen, onClose]);


if (!isOpen) return null;


const handleBackToLevels = () => {

onClose();

navigate('/level-selection');

};


const handleNextLevel = () => {

onClose();

if (onNextLevel) {

onNextLevel();

}

};


return (

<div 

className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"

onClick={onClose}

>

<div className="absolute inset-0 bg-background" />

<div 

className="relative w-full max-w-md bg-card rounded-xl shadow-xl p-8 animate-scale-in"

onClick={(e) => e?.stopPropagation()}

>

<div className="flex flex-col items-center text-center space-y-6">

<div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center">

<Icon name="Trophy" size={48} color="var(--color-success)" />

</div>


<div className="space-y-2">

<h2 className="text-2xl font-heading font-semibold text-foreground">

Level Selesai!

</h2>

<p className="text-muted-foreground">

Selamat! Anda telah menyelesaikan Level {levelNumber}

</p>

</div>


<div className="w-full bg-muted rounded-lg p-4">

<div className="flex items-center justify-center gap-3">

<Icon name="Footprints" size={24} color="var(--color-accent)" />

<div className="text-left">

<p className="text-sm text-muted-foreground">Total Langkah</p>

<p className="text-2xl font-mono font-semibold text-foreground">

{moveCount}

</p>

</div>

</div>

</div>


<div className="flex flex-col sm:flex-row gap-3 w-full">

<Button

variant="outline"

size="lg"

onClick={handleBackToLevels}

iconName="Grid3x3"

iconPosition="left"

fullWidth

>

Pilih Level

</Button>


{hasNextLevel && (

<Button

variant="default"

size="lg"

onClick={handleNextLevel}

iconName="ArrowRight"

iconPosition="right"

fullWidth

>

Level Berikutnya

</Button>

)}

</div>

</div>


<button

onClick={onClose}

className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"

aria-label="Tutup"

>

<Icon name="X" size={20} />

</button>

</div>

</div>

);

};


export default LevelCompletionModal;

