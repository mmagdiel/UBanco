import { useState, useEffect } from "react"

const useData = async (url, body) => {
  const [data, setData] = useState([])

  const post = {
    default: "omit",
    method: "POST",
    mode: "cors",
  }

  const options = {
    ...post,
    body,
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  }

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then(myData => setData(myData))
  }, [])

  return await data
}

export default useData
