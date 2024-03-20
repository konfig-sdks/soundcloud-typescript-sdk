/*
SoundCloud Public API Specification

Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PlaylistLabel } from './playlist-label';
import { Track } from './track';
import { User } from './user';

/**
 * Soundcloud Playlist Object
 * @export
 * @interface Playlist
 */
export interface Playlist {
    /**
     * Tags.
     * @type {string}
     * @memberof Playlist
     */
    'tags'?: string | null;
    /**
     * Playlist title.
     * @type {string}
     * @memberof Playlist
     */
    'title'?: string;
    /**
     * Playlist description.
     * @type {string}
     * @memberof Playlist
     */
    'description'?: string;
    /**
     * Playlist identifier.
     * @type {number}
     * @memberof Playlist
     */
    'id'?: number;
    /**
     * Type of Soundcloud object (playlist).
     * @type {string}
     * @memberof Playlist
     */
    'kind'?: string;
    /**
     * URL to a JPEG image.
     * @type {string}
     * @memberof Playlist
     */
    'artwork_url'?: string;
    /**
     * Created timestamp.
     * @type {string}
     * @memberof Playlist
     */
    'created_at'?: string;
    /**
     * is downloadable.
     * @type {boolean}
     * @memberof Playlist
     */
    'downloadable'?: boolean;
    /**
     * Playlist duration.
     * @type {number}
     * @memberof Playlist
     */
    'duration'?: number;
    /**
     * European Article Number.
     * @type {string}
     * @memberof Playlist
     */
    'ean'?: string;
    /**
     * Embeddable by.
     * @type {string}
     * @memberof Playlist
     */
    'embeddable_by'?: string;
    /**
     * Playlist genre.
     * @type {string}
     * @memberof Playlist
     */
    'genre'?: string;
    /**
     * Label user identifier.
     * @type {number}
     * @memberof Playlist
     */
    'label_id'?: number;
    /**
     * Label name.
     * @type {string}
     * @memberof Playlist
     */
    'label_name'?: string;
    /**
     * Last modified timestamp.
     * @type {string}
     * @memberof Playlist
     */
    'last_modified'?: string;
    /**
     * License.
     * @type {string}
     * @memberof Playlist
     */
    'license'?: string;
    /**
     * Playlist permalink.
     * @type {string}
     * @memberof Playlist
     */
    'permalink'?: string;
    /**
     * Playlist permalink URL.
     * @type {string}
     * @memberof Playlist
     */
    'permalink_url'?: string;
    /**
     * Type of playlist.
     * @type {string}
     * @memberof Playlist
     */
    'playlist_type'?: string;
    /**
     * Purchase title.
     * @type {string}
     * @memberof Playlist
     */
    'purchase_title'?: string;
    /**
     * Purchase URL.
     * @type {string}
     * @memberof Playlist
     */
    'purchase_url'?: string;
    /**
     * Release.
     * @type {string}
     * @memberof Playlist
     */
    'release'?: string;
    /**
     * Day of release.
     * @type {number}
     * @memberof Playlist
     */
    'release_day'?: number;
    /**
     * Month of release.
     * @type {number}
     * @memberof Playlist
     */
    'release_month'?: number;
    /**
     * Year of release.
     * @type {number}
     * @memberof Playlist
     */
    'release_year'?: number;
    /**
     * Type of sharing (private/public).
     * @type {string}
     * @memberof Playlist
     */
    'sharing'?: string;
    /**
     * Is streamable.
     * @type {boolean}
     * @memberof Playlist
     */
    'streamable'?: boolean;
    /**
     * Tags.
     * @type {string}
     * @memberof Playlist
     */
    'tag_list'?: string;
    /**
     * Count of tracks.
     * @type {number}
     * @memberof Playlist
     */
    'track_count'?: number;
    /**
     * List of tracks.
     * @type {Array<Track>}
     * @memberof Playlist
     */
    'tracks'?: Array<Track>;
    /**
     * Playlist type.
     * @type {string}
     * @memberof Playlist
     */
    'type'?: string;
    /**
     * Playlist URI.
     * @type {string}
     * @memberof Playlist
     */
    'uri'?: string;
    /**
     * 
     * @type {User}
     * @memberof Playlist
     */
    'user'?: User | null;
    /**
     * User identifier.
     * @type {number}
     * @memberof Playlist
     */
    'user_id'?: number;
    /**
     * Count of playlist likes.
     * @type {number}
     * @memberof Playlist
     */
    'likes_count'?: number;
    /**
     * 
     * @type {PlaylistLabel}
     * @memberof Playlist
     */
    'label'?: PlaylistLabel;
    /**
     * tracks URI.
     * @type {string}
     * @memberof Playlist
     */
    'tracks_uri'?: string | null;
}

