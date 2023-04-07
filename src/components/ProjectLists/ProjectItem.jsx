import React from 'react'

export default function ProjectItem(props) {
const {project: {name, path}} = props
  return (
    <li className='list-item'>
        <div className='list-item__img'>
            img
            {/* <img src={path} alt={name} /> */}
        </div>
        <div className='list-item__title'>
            {name}
        </div>
    </li>
  )
}
