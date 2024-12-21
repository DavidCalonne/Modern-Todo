"use client"

import React, { useState } from 'react'
import Button from './ui/Button'
import { Settings, Save, Trash } from 'lucide-react'
import Popup from './ui/Popup'
import categories from '@/data/category.json'
import Input from './ui/Input'

function Category(props: any){
  const { category } = props;
  const [color, setColor] = useState(category.color);
  const [name, setName] = useState(category.name);
  return (
    <li className="category-item">
      <Input type="color" value={color} onChange={(e: any) => setColor(e.target.value)} 
      style={{ backgroundColor: color, borderColor: color, height: 30, width: 30 }} />
      <Input type="text" value={name} onChange={(e: any) => setName(e.target.value)} />
      <div>
        <Button type="primary">
          <Save width={16} height={16} />
        </Button>
        <Button type="secondary">
          <Trash width={16} height={16} />
        </Button>
      </div>
    </li>
  )
}

export default function ManageCategory() {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);
  return (
    <>
    <Button type="primary" onClick={togglePopup}>
      <Settings
        width={16}
        height={16}
      />
    </Button>
    {showPopup && (
      <Popup remove={togglePopup}>
        <h2>Manage Categories</h2>
        <div className="add-category">
          <Input type="text" placeholder="Add a new category" />
          <Button type="primary">
            <Save width={16} height={16} />
          </Button>
        </div>
        <ul className="category-list">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </ul>
      </Popup>
    )}
    </>  
)
}
