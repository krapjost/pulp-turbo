import { render } from 'solid-js/web'
import 'ui/style'
import App from './App'

const root = document.getElementById('root') as HTMLElement

render(
  () => <App />,
  root,
)
