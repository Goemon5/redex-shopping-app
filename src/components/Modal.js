import React from 'react'
import { useDispatch } from 'react-redux'
import {clearCart} from '../features/cart/CartSlice'
import { closeModal } from '../features/modal/ModalSlice'


const Modal = () => {
  const dispatch = useDispatch()
  return (
    <asside className="modal-container">
        <div className='modal'>
            <h4>買い物かごを全てからにしますか？</h4>
            <div className='btn-container'>
                <button className='btn confirm-btn' 
                onClick={() => {
                  dispatch(clearCart());
                  dispatch(closeModal());
                  }} >OK</button>
                <button className='btn clear-btn' onClick={() => dispatch(closeModal())}>やめとく</button>
            </div>
        </div>
    </asside>
  )
}

export default Modal