import React, { useMemo } from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import Animation from './animations/Animation';
import reduceComputedValues from './reducer/AnimationReducer';
import stylesFromValues from './styles/AnimatedStyles';

export interface AnimatedProps {
  /** List of all [animations](https://www.remotion-animated.dev/docs/category/animations) for this element. (The order is relevant if there are multiple animations that affect the same property.) */
  animations: Animation[];
  /** If true, the animation container will be positioned absolutely. _Defaults to `false`._ */
  absolute?: boolean;
  /** Frame number at which the animation container starts being visible ("In" point), if set. */
  in?: number;
  /** Frame number after which the animation container stops being visible ("Out" point), if set. */
  out?: number;
  /** Number of frames by which all animation starts are delayed. Does not affect in and out. _Defaults to `0`._ */
  delay?: number;
  /** Class name that is applied to the animation container. */
  className?: string;
  /** Children that are rendered inside the animation container. */
  children?: React.ReactNode;
  /** Styles that are applied to the animation container. */
  style?: React.CSSProperties;
}

const animatedStylesFromAnimations = (
  animations: Animation[],
  currentFrame: number,
  fps: number
) => {
  const currentAnimations = animations.filter(
    (animation) => animation.in <= currentFrame
  );
  const computedValues = currentAnimations.map(
    (animation) => animation.valuesAt(currentFrame, fps) ?? {}
  );
  const animatedValues = reduceComputedValues(computedValues);
  return stylesFromValues(animatedValues);
};

/**
 * The `Animated` component renders a container that can be animated.
 */
const Animated = (props: AnimatedProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const animationFrame = frame - (props.delay ?? 0);
  const animatedStyles = useMemo(
    () => animatedStylesFromAnimations(props.animations, animationFrame, fps),
    [animationFrame, fps, props.animations]
  );

  const isBeforeInPoint = props.in && frame < props.in;
  const isAfterOutPoint = props.out && frame > props.out;

  if (isBeforeInPoint || isAfterOutPoint) {
    return null;
  }

  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        ...animatedStyles,
        position: props.absolute ? 'absolute' : undefined,
      }}
    >
      {props.children}
    </div>
  );
};

export default Animated;
