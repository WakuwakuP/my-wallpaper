import { useEffect, useState } from "react";
import useWatch from "./useWatch";

const accessToken = process.env.REACT_APP_REMO_ACCESS_TOKEN;

function Remo() {

  const [temperature, setTemperature] = useState(undefined);
  const time = useWatch(300000)

  useEffect(() => {
    fetch('https://api.nature.global/1/devices', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.length) {
          const device = data.find(d => d.name === '自室');
          const temp = device.newest_events.te.val;
          setTemperature(temp)
        }
      })
  }, [time])

  return (
    <>
      <div className="temperature">
        {
          temperature ? `${temperature} ℃` : 'no data'
        }
      </div>
      <style jsx>
        {`
        .temperature {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        `}
      </style>
    </>
  )
}

export default Remo;