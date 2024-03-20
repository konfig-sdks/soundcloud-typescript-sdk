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
 * @interface SearchByQueryDurationParameter
 */
export interface SearchByQueryDurationParameter {
    /**
     * Return tracks with at least this duration value
     * @type {number}
     * @memberof SearchByQueryDurationParameter
     */
    'from'?: number;
    /**
     * Return tracks with at most this duration value
     * @type {number}
     * @memberof SearchByQueryDurationParameter
     */
    'to'?: number;
}

