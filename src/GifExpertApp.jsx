import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch'])

const onAddCategory = (newcategory) => {

  if (categories.includes(newcategory) ) return;

  setCategories([newcategory, ...categories])

}

  return (
    <>
      <h1>GiftExpert</h1>

      <AddCategory onNewCategory={(value)=>onAddCategory(value)} />

      {
      categories.map((category) => (<GifGrid key={category} category={category} />))
      }

    </>
  )
}
