/*
SoundCloud Public API Specification

Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ActivitiesCollectionInnerOrigin } from './activities-collection-inner-origin';

/**
 * 
 * @export
 * @interface ActivitiesCollectionInner
 */
export interface ActivitiesCollectionInner {
    /**
     * Type of activity (track).
     * @type {string}
     * @memberof ActivitiesCollectionInner
     */
    'type'?: string;
    /**
     * Created timestamp.
     * @type {string}
     * @memberof ActivitiesCollectionInner
     */
    'created_at'?: string;
    /**
     * 
     * @type {ActivitiesCollectionInnerOrigin}
     * @memberof ActivitiesCollectionInner
     */
    'origin'?: ActivitiesCollectionInnerOrigin;
}
