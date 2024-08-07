const REGIONS = 6;
const MILLIS_PER_MINUTE = 60 * 1000;
const MINUTES_PER_DAY = 24 * 60;

export default class WaTime {
    public timeMinutes = 0
    public dayLengthMinutes = 0
    public nightLengthMinutes = 0
    public sunriseTimeMinutes = 0
    public sunsetTimeMinutes = 0
    public minutesFromSunrise = 0
    public minutesFromSunset = 0

    constructor(date: Date, sunrise: Date, sunset: Date) {
        const timeMinutes = date.getHours() * 60 + date.getMinutes();

        this.updateSunriseSunset(sunrise, sunset);
        this.updateTime(timeMinutes);
    }

    // to be called once per day when updating the sunrise and sunset times
    updateSunriseSunset(sunrise: Date, sunset: Date) {
    // minutes of daylight according to western time
        this.dayLengthMinutes = (sunset.valueOf() - sunrise.valueOf()) / MILLIS_PER_MINUTE;
        // minutes of night according to western time
        this.nightLengthMinutes = MINUTES_PER_DAY - this.dayLengthMinutes;

        // time of the sunrise in minutes since 00:00
        this.sunriseTimeMinutes = sunrise.getHours() * 60 + sunrise.getMinutes();
        // time of the sunset in minutes since 00:00
        this.sunsetTimeMinutes = sunset.getHours() * 60 + sunset.getMinutes();
    }

    // to be called whenever we need to update the time
    // must be called after sunrise / sunset are updated
    updateTime(timeMinutes: number) {
        this.timeMinutes = timeMinutes;

        this.minutesFromSunrise = timeMinutes - this.sunriseTimeMinutes;
        this.minutesFromSunset = timeMinutes - this.sunsetTimeMinutes;
    }

    // minute of the day in 'Wa' time
    get waMinute() {
        return this.minutesFromSunrise >= 0
            ? this.minutesFromSunrise
            : this.minutesFromSunrise + MINUTES_PER_DAY;
    }

    // hour of the day in 'Wa' time
    get waHour() {
        let hour = 0;
        if (this.isDay) {
            hour = (this.minutesFromSunrise / this.dayLengthMinutes) * REGIONS;
        } else {
            const nightMinute = this.minutesFromSunrise < 0
                ? this.nightLengthMinutes + this.minutesFromSunrise
                : this.minutesFromSunset;
            hour = (nightMinute / this.nightLengthMinutes) * REGIONS;
        }
        return Math.floor(hour) || 0;
    }

    // is it daytime?
    get isDay() {
        return this.timeMinutes >= this.sunriseTimeMinutes && this.timeMinutes < this.sunsetTimeMinutes;
    }
}
