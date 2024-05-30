import type { CodegenConfig } from "@graphql-codegen/cli";

const API_URL =
  "https://api.studio.thegraph.com/proxy/65652/testing-adtoken/version/latest";

const config: CodegenConfig = {
  overwrite: true,
  schema: API_URL,
  documents: "src/**/*.graphql",

  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: {
          endpoint: API_URL,
          fetchParams: {
            headers: {
              "content-type": "application/json",
            },
          },
        },
      },
    },
  },
};

export default config;
