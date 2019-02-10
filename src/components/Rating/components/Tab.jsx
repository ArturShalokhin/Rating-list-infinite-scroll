import React from 'react'

const Tab = (props) => {
  const isActive = props.type === props.currentTab
  const classesTab = `rating__tab ${isActive ? 'active' : ''}`
  const changeTabAction = isActive ? () => null : () => props.changeTab(props.type)

  return (
    <div className={classesTab} onClick={changeTabAction}>
      <span>{props.name}</span>
    </div>
  )
}

export default Tab
