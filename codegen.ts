import { CodegenConfig } from "@graphql-codegen/cli";
import { TypeScriptDocumentsPluginConfig } from "@graphql-codegen/typescript-operations";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [
        {
          "typescript-operations": {} satisfies TypeScriptDocumentsPluginConfig,
        },
      ],
    },
  },
};

export default config;
