// src/brand/BrandBridge.ts
export type BrandTokens = {
  colors:{bg:string;fg:string;mute:string;primary:string;primaryOn:string;glass:string;border:string};
  radii:{lg:string;xl:string;full:string};
  shadows:{glow:string;glowSoft:string};
  motion:{fast:number;base:number;page:number;ease:[number,number,number,number]};
};

function cssVar(name:string,fallback:string){
  const v=getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

export function getBrand():BrandTokens{
  return {
    colors:{
      bg:cssVar("--brand-bg","#0a0a0a"),
      fg:cssVar("--brand-fg","#ffffff"),
      mute:cssVar("--brand-mute","rgba(255,255,255,.7)"),
      primary:cssVar("--brand-primary","#10B981"),
      primaryOn:cssVar("--brand-primaryOn","#051b14"),
      glass:cssVar("--brand-glass","rgba(255,255,255,.06)"),
      border:cssVar("--brand-border","rgba(255,255,255,.10)"),
    },
    radii:{
      lg:cssVar("--brand-radius-lg","16px"),
      xl:cssVar("--brand-radius-xl","20px"),
      full:cssVar("--brand-radius-full","999px"),
    },
    shadows:{
      glow:cssVar("--brand-shadow-glow","0 0 24px rgba(16,185,129,.35)"),
      glowSoft:cssVar("--brand-shadow-glowSoft","0 0 16px rgba(16,185,129,.22)"),
    },
    motion:{
      fast:parseFloat(cssVar("--brand-motion-fast",".18")),
      base:parseFloat(cssVar("--brand-motion-base",".24")),
      page:parseFloat(cssVar("--brand-motion-page",".36")),
      ease:[0.65,0,0.35,1],
    },
  };
}
