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
 * @interface TrackDataRequest
 */
export interface TrackDataRequest {
    /**
     * 
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[title]'?: string;
    /**
     * 
     * @type {Uint8Array | File | buffer.File}
     * @memberof TrackDataRequest
     */
    'track[asset_data]'?: Uint8Array | File | buffer.File;
    /**
     * 
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[permalink]'?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[sharing]'?: TrackDataRequestTrackSharingEnum;
    /**
     * who can embed this track \"all\", \"me\", or \"none\"
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[embeddable_by]'?: TrackDataRequestTrackEmbeddableByEnum;
    /**
     * 
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[purchase_url]'?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[description]'?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[genre]'?: string;
    /**
     * The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[tag_list]'?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[label_name]'?: string;
    /**
     * 
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[release]'?: string;
    /**
     * string, formatted as yyyy-mm-dd, representing release date
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[release_date]'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TrackDataRequest
     */
    'track[streamable]'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TrackDataRequest
     */
    'track[downloadable]'?: boolean;
    /**
     * Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[license]'?: TrackDataRequestTrackLicenseEnum;
    /**
     * 
     * @type {boolean}
     * @memberof TrackDataRequest
     */
    'track[commentable]'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TrackDataRequest
     */
    'track[isrc]'?: string;
    /**
     * 
     * @type {Uint8Array | File | buffer.File}
     * @memberof TrackDataRequest
     */
    'track[artwork_data]'?: Uint8Array | File | buffer.File;
}

type TrackDataRequestTrackSharingEnum = 'public' | 'private'
type TrackDataRequestTrackEmbeddableByEnum = 'all' | 'me' | 'none'
type TrackDataRequestTrackLicenseEnum = 'no-rights-reserved' | 'all-rights-reserved' | 'cc-by' | 'cc-by-nc' | 'cc-by-nd' | 'cc-by-sa' | 'cc-by-nc-nd' | 'cc-by-nc-sa'


