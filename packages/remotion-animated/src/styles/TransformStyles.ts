import AnimationValues from '../reducer/AnimationValues';

const value = (currentValue: number | undefined, defaultValue: number) =>
  currentValue === undefined ? defaultValue : currentValue.toFixed(4);

const transformStyles = (values: AnimationValues): string | null => {
  let translate: string | undefined;
  let scale: string | undefined;

  let rotateX: string | undefined;
  let rotateY: string | undefined;
  let rotateZ: string | undefined;

  if (values.translateX || values.translateY || values.translateZ) {
    const translateX = `${value(values.translateX, 0)}px`;
    const translateY = `${value(values.translateY, 0)}px`;
    const translateZ = `${value(values.translateZ, 0)}px`;

    translate = `translate3d(${translateX}, ${translateY}, ${translateZ})`;
  }

  // We need to specifically check for undefined here, because 0 is a valid,
  // and more importantly non-default(!) scale value.
  if (
    values.scaleX !== undefined ||
    values.scaleY !== undefined ||
    values.scaleZ !== undefined
  ) {
    const scaleX = value(values.scaleX, 1);
    const scaleY = value(values.scaleY, 1);
    const scaleZ = value(values.scaleZ, 1);

    scale = `scale3d(${scaleX}, ${scaleY}, ${scaleZ})`;
  }

  if (values.rotateX) rotateX = `rotateX(${value(values.rotateX, 0)}deg)`;
  if (values.rotateY) rotateY = `rotateY(${value(values.rotateY, 0)}deg)`;
  if (values.rotateZ) rotateZ = `rotateZ(${value(values.rotateZ, 0)}deg)`;

  if (!translate && !scale && !rotateX && !rotateY && !rotateZ) {
    return null;
  }
  let transform = '';

  if (translate) transform += translate;
  if (scale) transform += ` ${scale}`;
  if (rotateX) transform += ` ${rotateX}`;
  if (rotateY) transform += ` ${rotateY}`;
  if (rotateZ) transform += ` ${rotateZ}`;

  return transform.trim();
};

export default transformStyles;
