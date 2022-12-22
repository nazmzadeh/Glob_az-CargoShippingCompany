export function Calculate(
  length: number,
  width: number,
  height: number,
  physicalWeight: number,
  unitWeight: string,
  country: string,
) {
  let lastResult = 0;
  let volumetricWeight = 0;
  // kg
  if (unitWeight === 'kg' && country === 'Türkiyə') {
    volumetricWeight = (length * width * height) / 6000;

    if (physicalWeight <= 0.1 && physicalWeight > 0.001) {
      lastResult = 0.7;
    }
    if (physicalWeight <= 0.25 && physicalWeight > 0.1) {
      lastResult = 1.95;
    }

    if (physicalWeight <= 0.5 && physicalWeight > 0.25) {
      lastResult = 2.95;
    }

    if (physicalWeight <= 0.75 && physicalWeight > 0.5) {
      lastResult = 3.5;
    }
    if (physicalWeight <= 1 && physicalWeight > 0.75) {
      lastResult = 3.9;
    }

    if (physicalWeight > 1) {
      lastResult = 3.5;
    }
  }
  // g
  if (unitWeight === 'g' && country === 'Türkiyə') {
    volumetricWeight = (length * width * height) / 6;

    if (physicalWeight <= 100 && physicalWeight > 1) {
      lastResult = 0.7;
    }

    if (physicalWeight <= 250 && physicalWeight > 100) {
      lastResult = 1.95;
    }

    if (physicalWeight <= 500 && physicalWeight > 250) {
      lastResult = 2.95;
    }

    if (physicalWeight <= 750 && physicalWeight > 500) {
      lastResult = 3.5;
    }
    if (physicalWeight <= 1000 && physicalWeight > 750) {
      lastResult = 3.9;
    }

    if (physicalWeight > 1000) {
      lastResult = 3.5;
    }
  }

  if ((length >= 60 && width >= 60) || (length >= 60 && height >= 60) || (width >= 60 && height >= 60)) {
    if (volumetricWeight > physicalWeight) {
      lastResult = volumetricWeight / 100;
    } else {
      lastResult = physicalWeight / 100;
    }
  }
  return lastResult;
}
