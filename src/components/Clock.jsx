import useWatch from "./useWatch";

export default function Clock() {
  const time = useWatch(100)
  const clock = new Date(time)
  const dateString = `${clock.getFullYear()}/${('00' + (clock.getMonth() + 1)).slice(-2)}/${('00' + clock.getDate()).slice(-2)}`
  const timeString = `${('00' + clock.getHours()).slice(-2)}:${('00' + clock.getMinutes()).slice(-2)}:${('00' + clock.getSeconds()).slice(-2)}`
  return (
    <>
      <div className="date">{dateString}</div>
      <div className="time">{timeString}</div>
      <style jsx>
        {`
          .date {
            text-align: right;
            font-size: 1.5rem;
          }
          .time {
            text-align: right;
            font-size: 2.5rem;
          }
        `}
      </style>
    </>
  );
}