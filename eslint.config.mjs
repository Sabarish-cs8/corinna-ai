import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",  // Allow empty object types
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],  // Warn for unused vars
      "@typescript-eslint/no-explicit-any": "off",  // Allow explicit `any` type
    },
  },
  // Add the Next.js specific configuration
  ...compat.extends("next/core-web-vitals", "next/typescript",
    {
      extends: ['next'],
      rules: {
        'react/no-unescaped-entities': 'off',
        '@next/next/no-page-custom-font': 'off',
      },
    }
  ),
];

export default eslintConfig;
