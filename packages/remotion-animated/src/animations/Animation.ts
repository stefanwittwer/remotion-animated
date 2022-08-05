import AnimationValues from '../reducer/AnimationValues';

interface Animation {
  in: number;
  valuesAt(frame: number, fps: number): AnimationValues;
}

export default Animation;
