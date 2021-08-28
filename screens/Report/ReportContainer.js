import React from 'react';
import { useState, useCallback } from 'react';
import ReportPresenter from './ReportPresenter'
import { Alert } from 'react-native';
import { useEffect } from 'react';

//SQLite
import DatabaseLayer from 'expo-sqlite-orm/src/DatabaseLayer'
import * as SQLite from 'expo-sqlite'

//model
import Session from '../../model/Session';
import Session_Set from '../../model/Session_Set';
import Set from '../../model/Set';
import Tag from '../../model/Tag';
import Workout from '../../model/Workout';
import Workout_Session_Tag from '../../model/Workout_Session_Tag';

//queries
import { GET_SESSION_SETS, GET_TOTAL_DATA, GET_WORKOUT_SESSION_TAG, GET_WORKOUT_TAG_SETS } from './ReportQueries';


export default () => {
  const [volume, setVolume] = useState({})
  const [selectedTag, setSelectedTag] = useState(null)

  const [isEnabled, setIsEnabled] = useState(false);

  const [page, setPage] = useState(0);

  const [workouts, setWorkouts] = useState([])
  const [sessions, setSessions] = useState([])
  const [tags, setTags] = useState([])
  const [sets, setSets] = useState([])

  useEffect(() => {
    const setData = async () => {
      setWorkouts(await Workout.query())
      setSessions(await Session.query())
      const tags = await Tag.query()
      setTags(tags)
      setSets(await Set.query())
      setSelectedTag(tags[0].name)
      //
      
    }
    setData()
  }, [])

  /*
  useEffect(() => {
    fetchDataAndCalVolume()
  }, [volume])
*/

  const createTables = async () => {
    await Session.createTable()
    await Session_Set.createTable()
    await Set.createTable()
    await Tag.createTable()
    await Workout.createTable()
    await Workout_Session_Tag.createTable()
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
    setSessions(await Session.query())
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

  
  //
  const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  const calculateVolume = () => {
    const workoutList = workouts
    workoutList.map((workout) => {
      
    })
  }
  const setTagsInVolumeState = () => {
    let totalVolume = {}
    workouts.map((workout) => {
      let prevVolume = {}
      tags.map((tag) => {
        prevVolume[tag.name] = 0
      })
      totalVolume[workout.date] = prevVolume
    })

    //
    const databaseLayer = new DatabaseLayer(async () => SQLite.openDatabase('testDB.db'))
    databaseLayer.executeSql(GET_WORKOUT_TAG_SETS)
    .then((response) => {
      const responseList = response.rows
      let volumeDict = totalVolume
      responseList.map((data) => {
        let day = data.date
        let tag = data.name
        let vol = data.weight*data.rep

        volumeDict[day][tag] += vol
      })
      setVolume(totalVolume)
    })
    .catch((err) => {
      console.log(err )
    })

    //setVolume(totalVolume)
  }

  useEffect(() => {
    if (tags.length != 0){
      setTagsInVolumeState()
    }
  }, [tags])


  const test = () => {
    console.log('This is test function')
    // You can test here
    const databaseLayer = new DatabaseLayer(async () => SQLite.openDatabase('testDB.db'))
    databaseLayer.executeSql(GET_TOTAL_DATA)
    .then((response) => {
      const responseList = response.rows
      responseList.map((data) => {
        console.log(data)
      })
      //console.log(`data length : ${responseList.length}`)
      setDATA(responseList)
      //console.log('volume')
      //console.log(volume)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const fetchDataAndCalVolume = () => {
    console.log('fetchDataAndCalVolume')
    const databaseLayer = new DatabaseLayer(async () => SQLite.openDatabase('testDB.db'))
    databaseLayer.executeSql(GET_WORKOUT_TAG_SETS)
    .then((response) => {
      const responseList = response.rows
      let volumeDict = volume
      //console.log('This is Volume Dict')
      //console.log(volumeDict)
      //console.log('---------------')
      responseList.map((data) => {
        let day = data.date
        let tag = data.name
        let vol = data.weight*data.rep

        //console.log(`ref => day: ${day} / tag: ${tag}`)
        volumeDict[day][tag] += vol
        //console.log(volumeDict[day][tag])
        //console.log(volumeDict)
      })
      setVolume(volumeDict)
    })
    .catch((err) => {
      console.log(err )
    })
  }

  return (
    <ReportPresenter
      isEnabled={isEnabled}
      setIsEnabled={setIsEnabled}
      page={page}
      setPage={setPage}
      workouts={workouts}
      setWorkouts={setWorkouts}
      sessions={sessions}
      tags={tags}
      sets={sets}
      createTables={createTables}
      createWorkout={createWorkout}
      createSession={createSession}
      createTag={createTag}
      createSet={createSet}
      calculateVolume={calculateVolume}
      test={test}
      test2={fetchDataAndCalVolume}
      volume={volume}
      selectedTag={selectedTag}
      setSelectedTag={setSelectedTag}
    />
  )
}