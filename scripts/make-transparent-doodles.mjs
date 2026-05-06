import sharp from "sharp";

const files = [
  "happy-face",
  "uxui",
  "frontend",
  "startup",
  "founder",
  "design",
  "react-vue",
  "brackets",
];

function backgroundAlpha(red, green, blue) {
  const min = Math.min(red, green, blue);
  const max = Math.max(red, green, blue);
  const spread = max - min;

  if (min > 248 && spread < 10) return 0;
  if (min > 220 && spread < 22) {
    return Math.round(((248 - min) / 28) * 255);
  }

  return 255;
}

for (const file of files) {
  const input = `assets/${file}.jpg`;
  const output = `assets/${file}.png`;
  const image = sharp(input).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  for (let index = 0; index < data.length; index += info.channels) {
    data[index + 3] = backgroundAlpha(data[index], data[index + 1], data[index + 2]);
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    },
  })
    .png()
    .toFile(output);
}
