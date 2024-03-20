/*
SoundCloud Public API Specification

Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TrackUser } from './track-user';

/**
 * Soundcloud Track object.
 * @export
 * @interface Track
 */
export interface Track {
    /**
     * Track title.
     * @type {string}
     * @memberof Track
     */
    'title'?: string;
    /**
     * Track description.
     * @type {string}
     * @memberof Track
     */
    'description'?: string;
    /**
     * URL to a JPEG image.
     * @type {string}
     * @memberof Track
     */
    'artwork_url'?: string;
    /**
     * Tempo.
     * @type {number}
     * @memberof Track
     */
    'bpm'?: number;
    /**
     * Number of comments.
     * @type {number}
     * @memberof Track
     */
    'comment_count'?: number;
    /**
     * Is commentable.
     * @type {boolean}
     * @memberof Track
     */
    'commentable'?: boolean;
    /**
     * Created timestamp.
     * @type {string}
     * @memberof Track
     */
    'created_at'?: string;
    /**
     * NUmber of downloads.
     * @type {number}
     * @memberof Track
     */
    'download_count'?: number;
    /**
     * Is downloadable.
     * @type {string}
     * @memberof Track
     */
    'downloadable'?: string;
    /**
     * Track duration.
     * @type {number}
     * @memberof Track
     */
    'duration'?: number;
    /**
     * Embeddable by.
     * @type {string}
     * @memberof Track
     * @deprecated
     */
    'embeddable_by'?: string;
    /**
     * Number of favoritings.
     * @type {number}
     * @memberof Track
     */
    'favoritings_count'?: number;
    /**
     * Genre
     * @type {string}
     * @memberof Track
     */
    'genre'?: string;
    /**
     * Track identifier.
     * @type {number}
     * @memberof Track
     */
    'id'?: number;
    /**
     * ISRC code.
     * @type {string}
     * @memberof Track
     */
    'isrc'?: string;
    /**
     * Key signature.
     * @type {string}
     * @memberof Track
     */
    'key_signature'?: string;
    /**
     * Type of object (track).
     * @type {string}
     * @memberof Track
     */
    'kind'?: string;
    /**
     * Label user name.
     * @type {string}
     * @memberof Track
     */
    'label_name'?: string;
    /**
     * License
     * @type {string}
     * @memberof Track
     */
    'license'?: string;
    /**
     * Permalink URL.
     * @type {string}
     * @memberof Track
     */
    'permalink_url'?: string;
    /**
     * Number of plays.
     * @type {number}
     * @memberof Track
     */
    'playback_count'?: number;
    /**
     * Purchase title.
     * @type {string}
     * @memberof Track
     */
    'purchase_title'?: string;
    /**
     * Purchase URL.
     * @type {string}
     * @memberof Track
     */
    'purchase_url'?: string;
    /**
     * Release.
     * @type {string}
     * @memberof Track
     */
    'release'?: string;
    /**
     * Day of release.
     * @type {number}
     * @memberof Track
     */
    'release_day'?: number;
    /**
     * Month of release.
     * @type {number}
     * @memberof Track
     */
    'release_month'?: number;
    /**
     * Year of release.
     * @type {number}
     * @memberof Track
     */
    'release_year'?: number;
    /**
     * Type of sharing (public/private).
     * @type {string}
     * @memberof Track
     */
    'sharing'?: string;
    /**
     * URL to stream.
     * @type {string}
     * @memberof Track
     */
    'stream_url'?: string;
    /**
     * Is streamable.
     * @type {boolean}
     * @memberof Track
     */
    'streamable'?: boolean;
    /**
     * Tags.
     * @type {string}
     * @memberof Track
     */
    'tag_list'?: string;
    /**
     * Track URI.
     * @type {string}
     * @memberof Track
     */
    'uri'?: string;
    /**
     * 
     * @type {TrackUser}
     * @memberof Track
     */
    'user'?: TrackUser;
    /**
     * Is user\'s favourite.
     * @type {boolean}
     * @memberof Track
     */
    'user_favorite'?: boolean;
    /**
     * Number of plays by a user.
     * @type {number}
     * @memberof Track
     */
    'user_playback_count'?: number;
    /**
     * Waveform URL.
     * @type {string}
     * @memberof Track
     */
    'waveform_url'?: string;
    /**
     * List of countries where track is available.
     * @type {string}
     * @memberof Track
     */
    'available_country_codes'?: string;
    /**
     * Level of access the user (logged in or anonymous) has to the track.   * `playable` - user is allowed to listen to a full track.   * `preview` - user is allowed to preview a track, meaning a snippet is available   * `blocked` - user can only see the metadata of a track, no streaming is possible 
     * @type {string}
     * @memberof Track
     */
    'access'?: TrackAccessEnum;
    /**
     * URL to download a track.
     * @type {string}
     * @memberof Track
     */
    'download_url'?: string;
    /**
     * Number of reposts.
     * @type {number}
     * @memberof Track
     */
    'reposts_count'?: number;
    /**
     * Secret URL.
     * @type {string}
     * @memberof Track
     */
    'secret_uri'?: string;
}

type TrackAccessEnum = 'playable' | 'preview' | 'blocked'

