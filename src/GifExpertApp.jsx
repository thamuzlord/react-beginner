import { useState } from "react"


export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch','Two Punch'])

const onAddCategory = () => {
    setCategories([...categories, 'nueva'])
}

  return (
    <>
        <h1>GiftExpert</h1>

        <button onClick={onAddCategory}>Agregar</button>

        <ol>
           {categories.map(category => {
                return <li key={category}>{category}</li>
           })}
        </ol>
    </>
  )
}
