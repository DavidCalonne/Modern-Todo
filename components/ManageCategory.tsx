"use client"

import React, { useState } from 'react'
import Button from './ui/Button'
import { Settings } from 'lucide-react'
import Popup from './ui/Popup'

export default function ManageCategory() {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);
  return (
    <>
    <Button type="outline-primary" onClick={togglePopup}>
      <Settings
        width={16}
        height={16}
      />
    </Button>
    {showPopup && (
      <Popup remove={togglePopup}>
        <h1>Test de popup</h1>
      </Popup>
    )}
    </>  
)
}
