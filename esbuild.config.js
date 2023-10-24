import { build } from 'esbuild';

const bundle = async () => {
  await Promise.all([
    build({
      entryPoints: ['compute/index.ts'],
      outfile: '.amplify-hosting/compute/index.cjs',
      bundle: true,
      minify: true,
      platform: 'node',
      sourcemap: false,
      target: 'node18',
      sourcesContent: false,
    }),
  ]);
};

bundle().catch(console.error);