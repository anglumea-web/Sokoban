import React from 'react';

import Icon from '../../../components/AppIcon';


const Footer = () => {

const currentYear = new Date()?.getFullYear();


return (

<footer className="w-full py-6 md:py-8 border-t border-border mt-auto">

<div className="container-game">

<div className="flex flex-col items-center gap-3 md:gap-4">

<div className="flex items-center gap-2">

<Icon 

name="Box" 

size={20} 

color="var(--color-primary)"

className="md:w-6 md:h-6"

/>

<span className="text-sm md:text-base font-heading font-semibold text-foreground">

Sokoban Game

</span>

</div>

<p className="text-xs md:text-sm text-muted-foreground text-center">

© {currentYear} Sokoban Game. Semua hak dilindungi.

</p>

<div className="flex items-center gap-4 md:gap-6">

<button className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">

Tentang

</button>

<span className="text-muted-foreground">•</span>

<button className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">

Bantuan

</button>

<span className="text-muted-foreground">•</span>

<button className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">

Kontak

</button>

</div>

</div>

</div>

</footer>

);

};


export default Footer;

