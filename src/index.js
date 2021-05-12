
import { readFileSync } from 'fs'

const styles = process.env.PROD === true
  ? <style>{readFileSync('./public/main.css', 'utf8')}</style>
  : <link rel='stylesheet' href='/main.css'/>

const scripts = process.env.PROD === true
  ? <script>{readFileSync('./public/app.js', 'utf8')}</script>
  : <script src='/app.js' defer></script>

const render = data => {
  return (
    <html lang='en'>
      <meta charset='utf-8'/>
      <title>{data.title}</title>
      <meta name='author' content={data.author}/>
      <meta name='description' content={data.description}/>
      <meta name='viewport' content={data.viewport}/>
      <link rel='icon' href='/cache/favicon.svg'/>
      {styles}
      <body>
        <noscript>Please enable JavaScript and try again.</noscript>
        <div id='app'></div>
        {scripts}
      </body>
    </html>
  )
}

const options = {
  title: 'Pocket Demo | A micro framework for pocket-sized apps.',
  author: 'Dustin Dowell',
  description: 'A micro framework for pocket-sized apps.',
  viewport: 'width=device-width,maximum-scale=5'
}

process.stdout.write('<!DOCTYPE html>' + render(options))
