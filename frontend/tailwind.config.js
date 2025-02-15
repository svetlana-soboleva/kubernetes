import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [daisyui],
  daisyui: {
    themes: ["emerald"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
};
