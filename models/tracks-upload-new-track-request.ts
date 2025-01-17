/*
SoundCloud Public API Specification

Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TrackDataRequest } from './track-data-request';

/**
 * 
 * @export
 * @interface TracksUploadNewTrackRequest
 */
export interface TracksUploadNewTrackRequest {
    /**
     * 
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[title]': string;
    /**
     * 
     * @type {Uint8Array | File | buffer.File}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[asset_data]': Uint8Array | File | buffer.File;
    /**
     * 
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[permalink]'?: string;
    /**
     * 
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[sharing]'?: TracksUploadNewTrackRequestTrackSharingEnum;
    /**
     * who can embed this track \"all\", \"me\", or \"none\"
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[embeddable_by]'?: TracksUploadNewTrackRequestTrackEmbeddableByEnum;
    /**
     * 
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[purchase_url]'?: string;
    /**
     * 
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[description]'?: string;
    /**
     * 
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[genre]'?: string;
    /**
     * The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[tag_list]'?: string;
    /**
     * 
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[label_name]'?: string;
    /**
     * 
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[release]'?: string;
    /**
     * string, formatted as yyyy-mm-dd, representing release date
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[release_date]'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[streamable]'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[downloadable]'?: boolean;
    /**
     * Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[license]'?: TracksUploadNewTrackRequestTrackLicenseEnum;
    /**
     * 
     * @type {boolean}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[commentable]'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[isrc]'?: string;
    /**
     * 
     * @type {Uint8Array | File | buffer.File}
     * @memberof TracksUploadNewTrackRequest
     */
    'track[artwork_data]'?: Uint8Array | File | buffer.File;
}

type TracksUploadNewTrackRequestTrackSharingEnum = 'public' | 'private'
type TracksUploadNewTrackRequestTrackEmbeddableByEnum = 'all' | 'me' | 'none'
type TracksUploadNewTrackRequestTrackLicenseEnum = 'no-rights-reserved' | 'all-rights-reserved' | 'cc-by' | 'cc-by-nc' | 'cc-by-nd' | 'cc-by-sa' | 'cc-by-nc-nd' | 'cc-by-nc-sa'


