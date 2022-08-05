import { AbsoluteFill, useCurrentFrame } from 'remotion';
import {
  Animated,
  Animation,
  Fade,
  Move,
  Scale,
  Size,
} from 'remotion-animated';
import CodeLine from './CodeLine';
import HelloWorld from './HelloWorld';

const STATE_DURATION = 50;
const getAnimationState = (frame: number) => {
  return Math.min(Math.floor(frame / STATE_DURATION), 3);
};

const AnimatedCodeExamples = () => {
  const frame = useCurrentFrame();
  const state = getAnimationState(frame);

  const AnimationStates: Animation[][] = [
    [Scale({ by: 1, initial: 10 })],
    [Move({ y: -40 })],
    [Move({ y: 0, initialY: -40 })],
    [Fade({ to: 0 }), Scale({ by: 0, mass: 75 })],
  ];
  const CurrentAnimations = AnimationStates[state];

  return (
    <AbsoluteFill className="bg-slate-50">
      <AbsoluteFill className="justify-center" style={{ width: '50%' }}>
        <Animated
          absolute
          animations={[
            Size({ width: 386, initialWidth: 0 }),
            Fade({ to: 1, initial: 0, duration: 10 }),
            Move({ y: 40, start: STATE_DURATION }),
            Size({ width: 356, initialWidth: 386, start: STATE_DURATION }),
            Move({ y: 40, start: STATE_DURATION * 2 }),
            Move({ y: 40, start: STATE_DURATION * 3 }),
            Size({
              height: 84,
              initialHeight: 44,
              width: 500,
              initialWidth: 356,
              start: STATE_DURATION * 3,
            }),
            Fade({ to: 0, start: STATE_DURATION * 4, duration: 10 }),
          ]}
          style={{
            height: '44px',
            background: '#FCED6A',
            borderRadius: '8px',
            left: '96px',
            top: '26.4%',
          }}
        />
        <code
          className="text-xl pl-14 gap-3 grid"
          style={{ position: 'absolute' }}
        >
          <CodeLine text="<Animated" />
          <CodeLine text="  animations={[" />
          <CodeLine text="    Scale({ by: 1, initial: 10 })," />
          <CodeLine text="    Move({ y: -40, start: 50 })," />
          <CodeLine text="    Move({ y: 40, start: 100 })," />
          <CodeLine text="    Fade({ to: 0, start: 150 })," />
          <CodeLine text="    Scale({ by: 0, start: 150, mass: 75 })," />
          <CodeLine text="  ]}" />
          <CodeLine text="  >" />
          <CodeLine text="  <HelloWorld />" />
          <CodeLine text="</Animated>" />
        </code>
      </AbsoluteFill>
      <AbsoluteFill
        className="bg-slate-200 rounded-lg items-center justify-center"
        style={{
          width: 'calc(50% - 4rem)',
          height: 'calc(100% - 4rem)',
          left: '50%',
          margin: '2rem',
          overflow: 'hidden',
        }}
      >
        <Animated
          key={state}
          animations={CurrentAnimations}
          delay={STATE_DURATION * state}
        >
          <HelloWorld />
        </Animated>
        <Animated
          absolute
          in={STATE_DURATION}
          out={STATE_DURATION * 2 + 10}
          animations={[
            Fade({ to: 1, start: STATE_DURATION, initial: 0 }),
            Fade({ to: 0, start: STATE_DURATION * 2, duration: 10 }),
          ]}
          className="text-2xl mt-24 text-gray-600 font-semibold text-center"
          style={{ width: '400px' }}
        >
          This video was made using Remotion and Remotion Animated.
        </Animated>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default AnimatedCodeExamples;
