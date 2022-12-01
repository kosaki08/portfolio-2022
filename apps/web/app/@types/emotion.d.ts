import '@emotion/react';
import { Property } from 'csstype';

export type FontSize = 'xxxLarge' | 'xxLarge' | 'xLarge' | 'large' | 'regular' | 'small' | 'xSmall';
export type FontFamily = 'default' | 'primary' | 'secondary';
export type ColorPalette = 'white' | 'greyPlusTwo' | 'greyPlusOne' | 'grey' | 'greyMinusOne' | 'greyMinusTwo' | 'black';
export type ZIndex = 'higher' | 'high' | 'middle' | 'low';
export type Elevation = 'high' | 'middle' | 'low';
export type BorderRadius = 'middle' | 'high';
export type BreakPoint = 'sm' | 'md' | 'lg' | 'xl';
export type AnimationDuration = 'default' | 'slow' | 'sleepy';
export type AnimationTimingFunction = 'default' | 'linear';

declare module '@emotion/react' {
  export type FontSizes = {
    [K in FontSize]: Property.FontSize;
  };

  export type FontFamilies = {
    [K in FontFamily]: Property.FontFamily;
  };

  export interface LetterSpacings {
    title: { sp: Property.LetterSpacing; pc: Property.LetterSpacing };
  }

  export type ColorPalettes = {
    [K in ColorPalette]: Property.Color;
  };

  export type ZIndexes = {
    [K in ZIndex]: Property.ZIndex;
  };

  export type Elevations = {
    [K in Elevation]: Property.BoxShadow;
  };

  export type BorderRadiuses = {
    [K in BorderRadius]: Property.BorderRadius;
  };

  export type BreakPoints = {
    [K in BreakPoint]: number;
  };

  export type AnimationDurations = {
    [K in AnimationDuration]: Property.AnimationDuration;
  };

  export type AnimationTimingFunctions = {
    [K in AnimationTimingFunction]: Property.AnimationTimingFunction;
  };

  export interface Theme {
    /** Theme name */
    name: string;
    fontSizes: FontSizes;
    fontFamilies: FontFamilies;
    letterSpacings: LetterSpacings;
    colorPalettes: ColorPalettes;
    zIndexes: ZIndexes;
    elevation: Elevations;
    borderRadius: BorderRadiuses;
    breakPoints: BreakPoints;
    animationDuration: AnimationDurations;
    animationTimingFunction: AnimationTimingFunctions;
  }
}
