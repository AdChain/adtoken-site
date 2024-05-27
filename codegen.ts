import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.studio.thegraph.com/proxy/65652/testing-adtoken/version/latest/",
  documents: "src/**/*.graphql",
  generates: {
    'src/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
    },
  },
};

export default config;