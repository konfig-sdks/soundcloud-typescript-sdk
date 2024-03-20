/*
SoundCloud Public API Specification

Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * SoundCloud User object
 * @export
 * @interface CommentUser
 */
export interface CommentUser {
    /**
     * unique identifier
     * @type {number}
     * @memberof CommentUser
     */
    'id'?: number;
    /**
     * kind of resource.
     * @type {string}
     * @memberof CommentUser
     */
    'kind'?: string;
    /**
     * permalink of the resource.
     * @type {string}
     * @memberof CommentUser
     */
    'permalink'?: string;
    /**
     * username
     * @type {string}
     * @memberof CommentUser
     */
    'username'?: string;
    /**
     * last modified timestamp.
     * @type {string}
     * @memberof CommentUser
     */
    'last_modified'?: string;
    /**
     * API resource URL.
     * @type {string}
     * @memberof CommentUser
     */
    'uri'?: string;
    /**
     * URL to the SoundCloud.com page.
     * @type {string}
     * @memberof CommentUser
     */
    'permalink_url'?: string;
    /**
     * URL to a JPEG image.
     * @type {string}
     * @memberof CommentUser
     */
    'avatar_url'?: string;
    /**
     * number of followers.
     * @type {number}
     * @memberof CommentUser
     */
    'followers_count'?: number;
    /**
     * number of followed users.
     * @type {number}
     * @memberof CommentUser
     */
    'followings_count'?: number;
    /**
     * number of reposts from user
     * @type {number}
     * @memberof CommentUser
     */
    'reposts_count'?: number;
}

