import React, { useEffect, useState } from 'react'

import styles from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem';
import useHttp from '../../hooks/use-http';

const AvailableMeals = () => {
  const {isLoading, error, makeRequest} = useHttp();
  const [meals, setMeals] = useState([]);

  const transformMeals = (meals) => {
    let mealList = []
    for (const meal in meals){
      mealList.push({id: meal, ...meals[meal]})
    }
    setMeals(mealList)
  };

  useEffect(() => {
    makeRequest({url: 'https://react-practice-5c75e-default-rtdb.firebaseio.com/meals.json'}, transformMeals)
  }, [makeRequest]);

  let content = <p>There are no meals!</p>
  if(error){
    content = error;
  }
  if(meals.length > 0){
    content = meals.map(meal => (
      <MealItem 
      key={meal.id} 
      id={meal.id}
      name={meal.name} 
      description={meal.description}
      price={meal.price}
      />
      )); 
    }
  if(isLoading){
    content = <p>Loading...</p>
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {content}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
