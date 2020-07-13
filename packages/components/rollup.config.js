import typescript from '@rollup/plugin-typescript'
import filesize from 'rollup-plugin-filesize'

const INPUT_FILE_PATH = 'src/index.js'
const OUTPUT_NAME = 'Bundle'

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const EXTERNAL_DEPS = [
  'react',
  'react-dom',
  'styled-components'
]

const PLUGINS = [
  typescript(),
  filesize()
]

const config = {
  input: INPUT_FILE_PATH,
  output: {
    dir: './build',
    format: 'es',
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: EXTERNAL_DEPS,
  plugins: PLUGINS,
}

export default config