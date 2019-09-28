import { Pipe } from '@angular/core';

/**
Str2AnythingPipe
A collection of methods that work with strings
@version 1.0
@author n4d46t3m
*/

@Pipe({
    name: 'strToAnything',
    pure: false
})
export class Str2AnythingPipe {

    // constructor() { }

    private charsToNumbers = {
        'a':'4','e':'3','i':'1','o':'0','u':'U',
        'A':'4','E':'3','I':'1','O':'0','U':'U'
    };

    /**
     * upper
     * @param string
     * @return string with all chars transformed in uppercase
     */
    upper(str: string): string {
        return (!str) ? '' : str.toUpperCase();
    }

    /**
     * lower
     * @param string
     * @return string with all chars transformed in lowercase
     */
    lower(str: string): string {
        return (!str) ? '' : str.toLowerCase();
    }

    /**
     * vocalsToNumbers
     * Return a string like "H3ll0 W0rld"
     * @param string
     * @return string with vocal chars translated to numbers
     */
    vocalsToNumbers(str: string): string {
        return (!str) ? '' : str.replace(/[aeiou]/ig, m => this.charsToNumbers[m]);
    }

    /**
     * metallica
     * Return a string like "Hello worlD"
     * @param string
     * @return string with first and last chars in uppercase, all the other chars in lowercase
     */
    metallica(str: string): string {
        return (!str) ? '' : str.charAt(0).toUpperCase() + str.substring(1,str.length-1).toLowerCase() +str.substring(str.length-1).toUpperCase();
    }

    /**
     * metallicaAll
     * Return a string like "HellO WorlD"
     * @param string
     * @return string with all word that compose it with with first and last chars in uppercase, all the other chars in lowercase
     */
    metallicaAll(str: string): string {
        if(!str){ return '';}
        let splittedStr = str.split(' ');
        for(let i = 0; i < splittedStr.length; i++){
            splittedStr[i] = this.metallica(splittedStr[i]);
        }
        return splittedStr.join(' ');
    }

}
