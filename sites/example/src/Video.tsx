import { Composition } from 'remotion';
import AnimatedCodeExamples from './animated-code-examples/AnimatedCodeExamples';
import PlaygroundComposition from './playground/PlaygroundComposition';
import './style.css';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="PlaygroundComposition"
        component={PlaygroundComposition}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="AnimatedCodeExamples"
        component={AnimatedCodeExamples}
        durationInFrames={214}
        fps={30}
        width={1280}
        height={600}
      />
    </>
  );
};
