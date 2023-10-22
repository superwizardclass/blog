import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://superwizardclass.github.io/',
  base:'/blog',
  integrations: [tailwind({
    applyBaseStyles: true,
  })]
});