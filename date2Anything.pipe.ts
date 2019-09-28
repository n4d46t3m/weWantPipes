import { Pipe, PipeTransform } from '@angular/core';

/**
Date2AnythingPipe
A collection of methods that work with dates
@version 1.1
@author n4d46t3m
*/

@Pipe({
    name: 'toFromattedStr',
    pure: false
})
export class Date2AnythingPipe implements PipeTransform {

    // constructor() { }

    itasDayOfWeek = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
    engsDayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    fresDayOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    private _dayInSeconds = 86400; // 24h = 86400s

    /**
     * _extractDateInfo
     * @param d date object
     * @return custom object with Date object infos
     */
    private _extractDateInfo(d: Date): any{
        return (!d) ? {} : {'day':d.getDate(),'month':d.getMonth()+1,'year':d.getFullYear(),'dayOfWeek':d.getDay()};
    }

    /**
     * transformIta
     * @param d date object
     * @return string like "Martedì 23/9/2019"
     */
    transformIta(d: Date): string {
        return (!d) ? '' : this.itasDayOfWeek[this._extractDateInfo(d).dayOfWeek - 1] + ' ' + this._extractDateInfo(d).day + '/' + this._extractDateInfo(d).month + '/' + this._extractDateInfo(d).year;
    }

    /**
     * transformEng
     * @param d date object
     * @return string like "Tuesday 23/9/2019"
     */
    transformEng(d: Date): string {
        return (!d) ? '' : this.engsDayOfWeek[this._extractDateInfo(d).dayOfWeek - 1] + ' ' + this._extractDateInfo(d).day + '/' + this._extractDateInfo(d).month + '/' + this._extractDateInfo(d).year;
    }

    /**
     * transformFre
     * @param d date object
     * @return string like "Mardi 23/9/2019"
     */
    transformFre(d: Date): string {
        return (!d) ? '' : this.fresDayOfWeek[this._extractDateInfo(d).dayOfWeek - 1] + ' ' + this._extractDateInfo(d).day + '/' + this._extractDateInfo(d).month + '/' + this._extractDateInfo(d).year;
    }

    /**
     * simpleTransform
     * @param d date object
     * @return string like "9/23/2019"
     */
    simpleTransform(d: Date): string {
        return (!d) ? '' : this._extractDateInfo(d).month + '/' + this._extractDateInfo(d).day + '/' + this._extractDateInfo(d).year;
    }

    /**
     * toUnixTimeMillis
     * @param d date object
     * @return number unixtime like 1569276000
     */
    toUnixTime(d: Date): number {
        return (!d) ? 0 : (d.getTime()/1000);
    }

    /**
     * toUnixTimeMillis
     * @param d date object
     * @return number unixtime like 1569276000000
     */
    toUnixTimeMillis(d: Date): number {
        return (!d) ? 0 : (d.getTime());
    }

    /**
     * isDay
     * @param unixStart unixtime like 1569276000
     * @param unixEnd unixtime like 1569362400
     * @return boolean true if from unixStart to unixEnd occur 24h otherwise false
     */
    isDay(unixStart: number, unixEnd: number): boolean{
        return (((unixEnd-unixStart)%this._dayInSeconds) == 0) ? true : false;
    }

    /**
     * searchBackendFormat
     * Transform Date object in yyyy-MM-dd.HH:mm:ss
     * @param d date object
     * @return string like "2019-09-23.00:00:00"
     */
    searchBackendFormat(d: Date): string {
        return (!d) ? '' : d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)+'.'+('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)+':'+('0'+d.getSeconds()).slice(-2);
    }

    /**
     * tempPlus30Min
     * Given an unixtime add 30 minutes and return a Date object
     * @param startTime unixtime like 1569380400000
     * @return Date object
     */
    tempPlus30Min(startTime: number): Date {
        return new Date(startTime + 30*60000);
    }

    /**
     * dateToTimeHHSS
     * Given a Date object extract hours and minutes and return time HH:MM
     * @param d Date object
     * @return string like "04:20"
     */
    dateToTimeHHSS(d: Date): string {
        return (!d) ? '' : ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2);
    }

}
