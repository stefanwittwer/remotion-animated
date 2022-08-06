---
sidebar_position: 3
---

# Animated component

The `<Animated />` component renders a container that can be animated.

## Example

```jsx title="MyComposition.tsx"
const MyComposition = () => (
  <AbsoluteFill>
    ...
    <Animated
      animations={[
        Scale({ by: 1, initial: 10 }),
        Move({ y: -40, start: 50 }),
        Move({ y: 40, start: 100 }),
        Fade({ to: 0, start: 150 }),
        Scale({ by: 0, start: 150, mass: 75 }),
      ]}
    >
      <HelloWorld />
    </Animated>
    ...
  </AbsoluteFill>
);
```

## Props

| Prop         | Type                  | Description                                                                                                                                                   |
| ------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animations` | `Animation[]`         | List of all [animations](/docs/category/animations) for this element. (The order is relevant if there are multiple animations that affect the same property.) |
| `absolute?`  | `boolean`             | If true, the animation container will be positioned absolutely. _Defaults to `false`._                                                                        |
| `in?`        | `number`              | Frame number at which the animation container starts being visible ("In" point), if set.                                                                      |
| `out?`       | `number`              | Frame number after which the animation container stops being visible ("Out" point), if set.                                                                   |
| `delay?`     | `number`              | Number of frames by which all animation starts are delayed. Does not affect `in` and `out`. _Defaults to 0._                                                  |
| `className?` | `string`              | Class name that is applied to the animation container.                                                                                                        |
| `children?`  | `React.ReactNode`     | Children that are rendered inside the animation container.                                                                                                    |
| `style?`     | `React.CSSProperties` | Styles that are applied to the animation container.                                                                                                           |
