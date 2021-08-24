import Workout from "../model/Workout"

export const createWorkout = async (date) => {
  const props = {
    date: date,
  }
  const workout = new Workout(props)
  await workout.save()
}

export const getWorkout = async () => {
  return Workout.query()
}