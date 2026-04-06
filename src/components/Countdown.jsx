import useCountdown from "../hooks/useCountdown";

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    "2026-04-30T09:00:00"
  );

  return (
    <div className="flex gap-4 text-white text-2xl font-mono mt-6">
      <div>{days}d</div>
      <div>{hours}h</div>
      <div>{minutes}m</div>
      <div className="text-red-500">{seconds}s</div>
    </div>
  );
};

export default Countdown;