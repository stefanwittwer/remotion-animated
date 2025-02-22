import type { AnimatedProps } from './Animated';
import Animated from './Animated';

import type Animation from './animations/Animation';
import type AnimationOptions from './animations/AnimationOptions';

import type { FadeOptions } from './animations/Fade';
import Fade from './animations/Fade';

import type { MoveOptions } from './animations/Move';
import Move from './animations/Move';

import type { RotateOptions } from './animations/Rotate';
import Rotate from './animations/Rotate';

import type { ScaleOptions } from './animations/Scale';
import Scale from './animations/Scale';

import type { SizeOptions } from './animations/Size';
import Size from './animations/Size';

import type { EasingBehaviour } from './easing/EasingBehaviour';
import type { EasingOptions } from './easing/EasingOptions';
import CustomEasing from './easing/behaviours/CustomEasing';
import Ease from './easing/behaviours/Ease';

export {
  Animated,
  AnimatedProps,
  Animation,
  AnimationOptions,
  CustomEasing,
  Ease,
  EasingBehaviour,
  EasingOptions,
  Fade,
  FadeOptions,
  Move,
  MoveOptions,
  Rotate,
  RotateOptions,
  Scale,
  ScaleOptions,
  Size,
  SizeOptions,
  Ease as TimingFunctions,
};
