import React from 'react'
import './Sidebar.css'

function Sidebar({onAddNote}) {
  return (
    <div className='app-sidebar'>
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>タイトル</strong>
            <button>削除</button>
          </div>
          <p>ノートの内容</p>
          <small>最終更新日:xxxx/xx/xx</small>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
