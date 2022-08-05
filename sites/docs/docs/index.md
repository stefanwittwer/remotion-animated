---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

Remotion Animated is a helper library that makes it easy to add animations to elements in [Remotion](https://www.remotion.dev).

## Installation

To get started, [create a Remotion project](https://www.remotion.dev/docs#installation) if you haven't already, and install Remotion Animated using the package manager of your choice.

<Tabs defaultValue="npm" values={[ { label: 'npm', value: 'npm' }, { label: 'yarn', value: 'yarn' }]}>
<TabItem value="npm">

```bash
npm i remotion-animated
```

  </TabItem>
  <TabItem value="yarn">

```bash
yarn add remotion-animated
```

  </TabItem>
</Tabs>

## Usage

To animate something, use the `<Animated>` component around the elements you'd like to animate.

```tsx
import { Animated, Move } from 'remotion-animated';

const ExampleComposition = () => (
  <Animated animations={[Move({ x: 200 })]}>
    <HelloWorld />
  </Animated>
);
```
