import React from 'react'
import CategoryCard from './CategoryCard'
import { CategoryInfos } from './CategoryFullInfos'
import styles from './Category.module.css'

const Category = () => {
  return (
      <div className={styles.CategoryContainer}>
          {CategoryInfos.map((infos) => (
            <CategoryCard data = {infos}/>
        ))}  
    </div>
  )
}

export default Category