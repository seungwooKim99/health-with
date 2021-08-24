import React from 'react';
import { useState, useCallback } from 'react';
import ReportPresenter from './ReportPresenter'
import { Alert } from 'react-native';

//model
import Session from '../../model/Session';
import Session_Set from '../../model/Session_Set';
import Set from '../../model/Set';
import Tag from '../../model/Tag';
import Workout from '../../model/Workout';
import Workout_Session_Tag from '../../model/Workout_Session_Tag';
import { useEffect } from 'react';



export default () => {

  const [workouts, setWorkouts] = useState([])
  const [sessions, setSessions] = useState([])
  const [tags, setTags] = useState([])
  const [sets, setSets] = useState([])

  useEffect(async () => {
    setWorkouts(await Workout.query())
    setSessions(await Session.query())
    setTags(await Tag.query())
    setSets(await Set.query())
  }, [])

  /*
  useEffect(async () => {
    setSessions(await Session.query())
  }, [])

  useEffect(async () => {
    setTags(await Tag.query())
  }, [])

  useEffect(async () => {
    setSets(await Set.query())
  }, [])
  */

  const createTables = async () => {
    //await Session.createTable()
    //await Session_Set.createTable()
    //await Set.createTable()
    //await Tag.createTable()
    await Workout.createTable()
    //await Workout_Session_Tag.createTable()
    Alert.alert('Table created successfully!')
  }

  const createWorkout = async (date) => {
    const props = {
      date: date,
    }

    Alert.alert(`Workout ${date} created successfully!`)
    const workout = new Workout(props)
    await workout.save()
    setWorkouts(await Workout.query())
  }

  const createSession = async ({name}) => {
    const props = {
      name: name,
    }

    const session = new Session(props)
    await session.save()
    setSessions(await WorkSessionout.query())
  }

  const createTag = async ({name}) => {
    const props = {
      name: name,
    }

    const tag = new Tag(props)
    await tag.save()
    setTags(await Tag.query())
  }

  const createSet = async ({weight, rep, time}) => {
    const props = {
      weight: weight,
      rep: rep,
      time, time
    }

    const set = new Set(props)
    await set.save()
    setSets(await Set.query())
  }

  return (
    <ReportPresenter
      workouts={workouts}
      sessions={sessions}
      tags={tags}
      sets={sets}
      createTables={createTables}
      createWorkout={createWorkout}
      createSession={createSession}
      createTag={createTag}
      createSet={createSet}
    />
  )
}