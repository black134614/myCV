import React from 'react'
import { useSelector } from 'react-redux'
import loaddingImg from '../../assets/img/loadding.gif'
import styleLoading from './Loadding.module.css'

export default function Loadding() {
  const { isLoading } = useSelector(state => state.LoaddingReducer)

  if (isLoading) {
    return (
      <div className={styleLoading.bgLoading}>
        <img src={loaddingImg} />
      </div>
    )
  } else {
    return ''
  }
}
