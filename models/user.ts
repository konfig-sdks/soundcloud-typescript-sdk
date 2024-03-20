/*
SoundCloud Public API Specification

Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UserSubscriptionsInner } from './user-subscriptions-inner';

/**
 * SoundCloud User object
 * @export
 * @interface User
 */
export interface User {
    /**
     * description
     * @type {string}
     * @memberof User
     */
    'description'?: string;
    /**
     * URL to a JPEG image
     * @type {string}
     * @memberof User
     */
    'avatar_url'?: string;
    /**
     * city
     * @type {string}
     * @memberof User
     */
    'city'?: string;
    /**
     * country
     * @type {string}
     * @memberof User
     */
    'country'?: string;
    /**
     * discogs name
     * @type {string}
     * @memberof User
     */
    'discogs_name'?: string;
    /**
     * first name
     * @type {string}
     * @memberof User
     */
    'first_name'?: string;
    /**
     * number of followers
     * @type {number}
     * @memberof User
     */
    'followers_count'?: number;
    /**
     * number of followed users
     * @type {number}
     * @memberof User
     */
    'followings_count'?: number;
    /**
     * first and last name
     * @type {string}
     * @memberof User
     */
    'full_name'?: string;
    /**
     * unique identifier
     * @type {number}
     * @memberof User
     */
    'id'?: number;
    /**
     * kind of resource
     * @type {string}
     * @memberof User
     */
    'kind'?: string;
    /**
     * profile creation datetime
     * @type {string}
     * @memberof User
     */
    'created_at'?: string;
    /**
     * last modified datetime
     * @type {string}
     * @memberof User
     */
    'last_modified'?: string;
    /**
     * last name
     * @type {string}
     * @memberof User
     */
    'last_name'?: string;
    /**
     * myspace name
     * @type {string}
     * @memberof User
     * @deprecated
     */
    'myspace_name'?: string;
    /**
     * permalink of the resource
     * @type {string}
     * @memberof User
     */
    'permalink'?: string;
    /**
     * URL to the SoundCloud.com page
     * @type {string}
     * @memberof User
     */
    'permalink_url'?: string;
    /**
     * subscription plan of the user
     * @type {string}
     * @memberof User
     */
    'plan'?: string;
    /**
     * number of public playlists
     * @type {number}
     * @memberof User
     */
    'playlist_count'?: number;
    /**
     * number of favorited public tracks
     * @type {number}
     * @memberof User
     */
    'public_favorites_count'?: number;
    /**
     * number of reposts from user
     * @type {number}
     * @memberof User
     */
    'reposts_count'?: number;
    /**
     * number of public tracks
     * @type {number}
     * @memberof User
     */
    'track_count'?: number;
    /**
     * API resource URL
     * @type {string}
     * @memberof User
     */
    'uri'?: string;
    /**
     * username
     * @type {string}
     * @memberof User
     */
    'username'?: string;
    /**
     * a URL to the website
     * @type {string}
     * @memberof User
     */
    'website'?: string;
    /**
     * a custom title for the website
     * @type {string}
     * @memberof User
     */
    'website_title'?: string;
    /**
     * a list subscriptions associated with the user
     * @type {Array<UserSubscriptionsInner>}
     * @memberof User
     * @deprecated
     */
    'subscriptions'?: Array<UserSubscriptionsInner>;
}
