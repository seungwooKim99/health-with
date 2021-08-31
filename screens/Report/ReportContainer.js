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
import { GET_WORKOUT_SESSION_TAG, GET_WORKOUT_TAG_SETS, GET_WORKOUT_TAG } from './ReportQueries';
import { COLORS, SIZES } from '../../constants';


export default () => {
  const [loading, setLoading] = useState(true)

  const [volume, setVolume] = useState({})
  const [frequency, setFrequency] = useState([])
  const [selectedTag, setSelectedTag] = useState(null)

  const [sessionFrequency, setSessionFrequency] = useState([])
  const [selectedTag2, setSelectedTag2] = useState(null)

  const [isEnabled, setIsEnabled] = useState(false);

  const [page, setPage] = useState(0);
  const [page2, setPage2] = useState(0);

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
    }
    setData()
  }, [])

  useEffect(() => {
    if (tags.length != 0){
      setVolumeWithTags()
      setFrequencyWithVolume()
      setMaxWeight()
      setLoading(false)
    }
  }, [tags])

  const setVolumeWithTags = () => {
    let totalVolume = {}
    workouts.map((workout) => {
      let prevVolume = {}
      tags.map((tag) => {
        prevVolume[tag.name] = 0
      })
      totalVolume[workout.date] = prevVolume
    })

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
  }

  const setFrequencyWithVolume = () => {
    const databaseLayer = new DatabaseLayer(async () => SQLite.openDatabase('testDB.db'))
    databaseLayer.executeSql(GET_WORKOUT_TAG)
    .then((response) => {
      const responseList = response.rows
      let frequencyDict = {}
      responseList.map((data) => {
        let tag = data.name
        let color = data.color
        if (tag in frequencyDict){
          frequencyDict[tag]['value'] += 1
        }
        else {
          frequencyDict[tag] = {'value': 1, 'color': color}
        }
      })
      let frequencyList = []
      frequencyTagsList = Object.keys(frequencyDict)
      frequencyTagsList.map((tag) => {
        let elem = {}
        elem['name'] = `${tag} (${frequencyDict[tag]['value']}회)`
        elem['freq'] = frequencyDict[tag]['value']
        elem['color'] = frequencyDict[tag]['color']
        elem['legendFontColor'] = '#3b3b3b'
        elem['legendFontSize'] = SIZES.body3
        frequencyList.push(elem)
      })
      setFrequency(frequencyList)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const setMaxWeight = () => {
    const databaseLayer = new DatabaseLayer(async () => SQLite.openDatabase('testDB.db'))
    databaseLayer.executeSql(GET_WORKOUT_SESSION_TAG)
    .then((response) => {
      const responseList = response.rows
      const sessionFrequencyDict = {}
      let firstTag = null
      responseList.map((data, index) => {
        let session_name = data.name
        let tag_name = data.tag_name
        if (index == 0) {
          firstTag = tag_name
        }
        if (tag_name in sessionFrequencyDict) {
          //
          if (session_name in sessionFrequencyDict[tag_name]) {
            sessionFrequencyDict[tag_name][session_name] += 1
          }
          else {
            sessionFrequencyDict[tag_name][session_name] = 1
          }
        }
        else {
          sessionFrequencyDict[tag_name] = {}
          sessionFrequencyDict[tag_name][session_name] = 1
        }
    })
    console.log(sessionFrequencyDict)

    let tagColors = [
      COLORS.tag_blue,
      COLORS.tag_green,
      COLORS.tag_orange,
      COLORS.tag_purple,
      COLORS.tag_pink
    ]

    let sessionFrequencyDictForPieChart = {}
    sessionFrequencyKeyList = Object.keys(sessionFrequencyDict)
    sessionFrequencyKeyList.map((tag) => {
      let sessionKeyList = Object.keys(sessionFrequencyDict[tag])
      sessionFrequencyDictForPieChart[tag] = []
      sessionKeyList.map((session, index) => {
        let elem = {}
        elem['name'] = `${session} (${sessionFrequencyDict[tag][session]}회)`
        elem['freq'] = sessionFrequencyDict[tag][session]
        elem['color'] = tagColors[index]
        elem['legendFontColor'] = '#3b3b3b'
        elem['legendFontSize'] = SIZES.body4
        sessionFrequencyDictForPieChart[tag].push(elem)
      })
    })
    setSelectedTag2(firstTag)
    setSessionFrequency(sessionFrequencyDictForPieChart)
    console.log(sessionFrequencyDictForPieChart)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <ReportPresenter
      loading={loading}
      isEnabled={isEnabled}
      setIsEnabled={setIsEnabled}
      page={page}
      setPage={setPage}
      workouts={workouts}
      sessions={sessions}
      tags={tags}
      sets={sets}
      volume={volume}
      selectedTag={selectedTag}
      setSelectedTag={setSelectedTag}
      frequency={frequency}
      selectedTag2={selectedTag2}
      setSelectedTag2={setSelectedTag2}
      sessionFrequency={sessionFrequency}
      test={setMaxWeight}
      page2={page2}
      setPage2={setPage2}
    />
  )
}