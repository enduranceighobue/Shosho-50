import { useEffect, useState } from "react";

const Countdown = () => {
  const [time, setTime] = useState({
    years: 50,
    months: 0,
    days: 9,
    hours: 22,
    minutes: 14,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let {
          years,
          months,
          days,
          hours,
          minutes,
          seconds,
        } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              if (days > 0) {
                days--;
              } else {
                days = 30;

                if (months > 0) {
                  months--;
                } else {
                  months = 11;

                  if (years > 0) {
                    years--;
                  }
                }
              }
            }
          }
        }

        return {
          years,
          months,
          days,
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto">
        <p className="section-label">SINCE BIRTH</p>

        <h2 className="section-title">
          50 Remarkable Years
          & Counting
        </h2>

        <div className="gold-rule cen"></div>

      </div>

      {/* COUNTDOWN */}
      <div className="countdown-grid">
        <div className="countdown-card">
          <span className="countdown-num">
            {String(time.years).padStart(2, "0")}
          </span>
          <span className="countdown-label">Years</span>
        </div>

        <div className="countdown-card">
          <span className="countdown-num">
            {String(time.months).padStart(2, "0")}
          </span>
          <span className="countdown-label">Months</span>
        </div>

        <div className="countdown-card">
          <span className="countdown-num">
            {String(time.days).padStart(2, "0")}
          </span>
          <span className="countdown-label">Days</span>
        </div>

        <div className="countdown-card">
          <span className="countdown-num">
            {String(time.hours).padStart(2, "0")}
          </span>
          <span className="countdown-label">Hours</span>
        </div>

        <div className="countdown-card">
          <span className="countdown-num">
            {String(time.minutes).padStart(2, "0")}
          </span>
          <span className="countdown-label">Minutes</span>
        </div>

        <div className="countdown-card">
          <span className="countdown-num">
            {String(time.seconds).padStart(2, "0")}
          </span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    </section>
  );
};

export default Countdown;