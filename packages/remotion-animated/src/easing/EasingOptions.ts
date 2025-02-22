import { SpringConfig } from 'remotion';
import { EasingBehaviour } from './EasingBehaviour';

export type EasingOptions = Partial<SpringConfig> | { easing: EasingBehaviour };
