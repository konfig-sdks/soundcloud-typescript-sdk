/*
SoundCloud Public API Specification

Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface SearchByQueryBpmParameter
 */
export interface SearchByQueryBpmParameter {
    /**
     * Return tracks with at least this bpm value
     * @type {number}
     * @memberof SearchByQueryBpmParameter
     */
    'from'?: number;
    /**
     * Return tracks with at most this bpm value
     * @type {number}
     * @memberof SearchByQueryBpmParameter
     */
    'to'?: number;
}
