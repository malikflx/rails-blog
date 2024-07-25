import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const envConfig = dotenv.config();
dotenvExpand.expand(envConfig);
export default defineConfig({
  plugins: [
    RubyPlugin(),
  ],
})
