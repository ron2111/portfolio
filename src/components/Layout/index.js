import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      {/* Main application wrapper */}
      <Sidebar />
      <div className="page">
        {/* Background tags ~ <body> */}
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          {/* </body> */}
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
          {/* Html close tag */}
        </span>
      </div>
    </div>
  )
}

export default Layout
