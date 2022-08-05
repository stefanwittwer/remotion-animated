import React, { useMemo } from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import Animation from './animations/Animation';
import reduceComputedValues from './reducer/AnimationReducer';
import stylesFromValues from './styles/AnimatedStyles';

export interface AnimatedProps {
  animations: Animation[];
  absolute?: boolean;
  className?: string;
  children?: React.ReactNode;
  in?: number;
  out?: number;
  delay?: number;
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
