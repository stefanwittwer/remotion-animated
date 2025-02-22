import { AbsoluteFill } from 'remotion';
import {
  Animated,
  Ease,
  Fade,
  Move,
  Rotate,
  Scale,
  Size,
} from 'remotion-animated';

const PlaygroundComposition = () => {
  return (
    <AbsoluteFill
      className="bg-gray-100 items-center justify-center"
      style={{ perspective: '1200px' }}
    >
      <Animated
        absolute
        delay={20}
        in={40}
        animations={[
          Size({
            width: 540,
            height: 540,
            duration: 50,
            ease: Ease.Bezier(0.33, 1, 0.68, 1),
          }),
          Rotate({
            degreesX: 180,
            duration: 90,
            ease: Ease.QuinticOut,
          }),
          Fade({ to: 0, start: 80, duration: 50 }),
          Size({ width: 0, height: 0, start: 60 }),
        ]}
        className="bg-slate-200"
      />
      <Animated
        absolute
        animations={[
          Move({ y: -40, start: 40 }),
          Move({ y: 40, start: 80 }),
          Scale({ by: 1.75, initial: 10 }),
          Scale({ by: 1 / 1.5, start: 80 }),
          Fade({ to: 1, initial: 0 }),
          Fade({ to: 0, start: 140 }),
        ]}
      >
        <div className="text-gray-900 text-5xl font-bold leading-relaxed">
          Example
        </div>
      </Animated>
      <Animated
        absolute
        delay={40}
        in={40}
        animations={[
          Move({ y: 72 }),
          Fade({ to: 1, initial: 0 }),
          Fade({ to: 0, start: 30, duration: 10 }),
        ]}
      >
        <div className="text-gray-500 text-4xl font-bold leading-relaxed">
          This video is made using Remotion Animated.
        </div>
      </Animated>
    </AbsoluteFill>
  );
};

export default PlaygroundComposition;
