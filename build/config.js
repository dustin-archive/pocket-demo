
const production = process.env.NODE_ENV === 'production'

const jsx = {
  inject: ['./src/pocket/shim.js'],
  jsxFactory: 'jsx',
  jsxFragment: 'Fragment',
  loader: {
    '.js': 'jsx'
  }
}

module.exports = {
  esbuild: {
    js: {
      ...jsx,
      bundle: true,
      sourcemap: true,
      write: false,
      define: {
        'process.env.PROD': production,
        'process.env.STATIC': false,
        'PROD': production,
        'STATIC': false
      }
    },
    html: {
      ...jsx,
      bundle: true,
      platform: 'node',
      write: false,
      define: {
        'process.env.PROD': production,
        'process.env.STATIC': true,
        'PROD': production,
        'STATIC': true
      }
    }
  },
  typescript: {
    compilerOptions: {
      allowJs: true,
      lib: ['DOM', 'ES2015'],
      target: 'ES5'
    }
  },
  uglify: {
    toplevel: true,
    compress: {
      drop_console: true,
      passes: 3
    },
    mangle: {
      toplevel: true
    }
  },
  sass: {
    includePaths: ['node_modules'],
    sourceMap: process.cwd() + '/src',
    sourceMapContents: true,
    sourceMapEmbed: true
  },
  cleancss: {
    level: 2
  }
}
