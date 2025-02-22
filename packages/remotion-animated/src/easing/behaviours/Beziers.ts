import { Easing } from 'remotion';
import CustomBezier from './CustomBezier';

namespace Beziers {
  export const Linear = CustomBezier(Easing.linear);
  export const Bounce = CustomBezier(Easing.bounce);
  export const Circle = CustomBezier(Easing.circle);
  export const Quad = CustomBezier(Easing.quad);
  export const Cubic = CustomBezier(Easing.cubic);
  export const Quint = CustomBezier(Easing.poly(5));
  export const Exponential = CustomBezier(Easing.exp);
  export const Sinusoidal = CustomBezier(Easing.sin);
  export const Elastic = (bounciness: number) =>
    CustomBezier(Easing.elastic(bounciness));
  export const Custom = (x1: number, y1: number, x2: number, y2: number) =>
    CustomBezier(Easing.bezier(x1, y1, x2, y2));
}

export default Beziers;
