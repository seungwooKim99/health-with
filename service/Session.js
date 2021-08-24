import Session from "../model/Session"

export const createSession = async ({name}) => {
  const props = {
    name: name,
  }
  const session = new Session(props)
  await session.save()
  setSessions(await WorkSessionout.query())
}

export const getSession = async () => {
  return await Session.query()
}