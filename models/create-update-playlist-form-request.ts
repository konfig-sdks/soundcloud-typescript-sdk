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
 * @interface CreateUpdatePlaylistFormRequest
 */
export interface CreateUpdatePlaylistFormRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[title]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[sharing]'?: CreateUpdatePlaylistFormRequestPlaylistSharingEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[description]'?: string;
    /**
     * To pass multiple tracks, pass multiple comma-separated values, e.g. -F \"playlist[tracks][][id]=111,222\"
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[tracks][][id]'?: string;
    /**
     * 
     * @type {Uint8Array | File | buffer.File}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[artwork_data]'?: Uint8Array | File | buffer.File;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[ean]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[genre]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[label_name]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[license]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[permalink]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[permalink_url]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[purchase_title]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[purchase_url]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[release]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[release_date]'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[set_type]'?: CreateUpdatePlaylistFormRequestPlaylistSetTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateUpdatePlaylistFormRequest
     */
    'playlist[tag_list]'?: string;
}

type CreateUpdatePlaylistFormRequestPlaylistSharingEnum = 'public' | 'private'
type CreateUpdatePlaylistFormRequestPlaylistSetTypeEnum = 'album' | 'playlist'

