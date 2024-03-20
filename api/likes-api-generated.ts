/* tslint:disable */
/* eslint-disable */
/*
SoundCloud Public API Specification

Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { TooManyRequests } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * LikesApi - axios parameter creator
 * @export
 */
export const LikesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Likes a playlist.
         * @param {number} playlistId SoundCloud playlist id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlist: async (playlistId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('playlist', 'playlistId', playlistId)
            const localVarPath = `/likes/playlists/{playlist_id}`
                .replace(`{${"playlist_id"}}`, encodeURIComponent(String(playlistId !== undefined ? playlistId : `-playlist_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authHeader", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/likes/playlists/{playlist_id}',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Likes a track.
         * @param {number} trackId SoundCloud Track id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trackAction: async (trackId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trackId' is not null or undefined
            assertParamExists('trackAction', 'trackId', trackId)
            const localVarPath = `/likes/tracks/{track_id}`
                .replace(`{${"track_id"}}`, encodeURIComponent(String(trackId !== undefined ? trackId : `-track_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authHeader", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/likes/tracks/{track_id}',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Unlikes a playlist.
         * @param {number} playlistId SoundCloud playlist id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlikePlaylist: async (playlistId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'playlistId' is not null or undefined
            assertParamExists('unlikePlaylist', 'playlistId', playlistId)
            const localVarPath = `/likes/playlists/{playlist_id}`
                .replace(`{${"playlist_id"}}`, encodeURIComponent(String(playlistId !== undefined ? playlistId : `-playlist_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authHeader", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/likes/playlists/{playlist_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Unlikes a track.
         * @param {number} trackId SoundCloud Track id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlikeTrack: async (trackId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trackId' is not null or undefined
            assertParamExists('unlikeTrack', 'trackId', trackId)
            const localVarPath = `/likes/tracks/{track_id}`
                .replace(`{${"track_id"}}`, encodeURIComponent(String(trackId !== undefined ? trackId : `-track_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authHeader", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/likes/tracks/{track_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LikesApi - functional programming interface
 * @export
 */
export const LikesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LikesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Likes a playlist.
         * @param {LikesApiPlaylistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async playlist(requestParameters: LikesApiPlaylistRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.playlist(requestParameters.playlistId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Likes a track.
         * @param {LikesApiTrackActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trackAction(requestParameters: LikesApiTrackActionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.trackAction(requestParameters.trackId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Unlikes a playlist.
         * @param {LikesApiUnlikePlaylistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unlikePlaylist(requestParameters: LikesApiUnlikePlaylistRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlikePlaylist(requestParameters.playlistId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Unlikes a track.
         * @param {LikesApiUnlikeTrackRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unlikeTrack(requestParameters: LikesApiUnlikeTrackRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlikeTrack(requestParameters.trackId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LikesApi - factory interface
 * @export
 */
export const LikesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LikesApiFp(configuration)
    return {
        /**
         * 
         * @summary Likes a playlist.
         * @param {LikesApiPlaylistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        playlist(requestParameters: LikesApiPlaylistRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.playlist(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Likes a track.
         * @param {LikesApiTrackActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trackAction(requestParameters: LikesApiTrackActionRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.trackAction(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Unlikes a playlist.
         * @param {LikesApiUnlikePlaylistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlikePlaylist(requestParameters: LikesApiUnlikePlaylistRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.unlikePlaylist(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Unlikes a track.
         * @param {LikesApiUnlikeTrackRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlikeTrack(requestParameters: LikesApiUnlikeTrackRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.unlikeTrack(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for playlist operation in LikesApi.
 * @export
 * @interface LikesApiPlaylistRequest
 */
export type LikesApiPlaylistRequest = {
    
    /**
    * SoundCloud playlist id
    * @type {number}
    * @memberof LikesApiPlaylist
    */
    readonly playlistId: number
    
}

/**
 * Request parameters for trackAction operation in LikesApi.
 * @export
 * @interface LikesApiTrackActionRequest
 */
export type LikesApiTrackActionRequest = {
    
    /**
    * SoundCloud Track id
    * @type {number}
    * @memberof LikesApiTrackAction
    */
    readonly trackId: number
    
}

/**
 * Request parameters for unlikePlaylist operation in LikesApi.
 * @export
 * @interface LikesApiUnlikePlaylistRequest
 */
export type LikesApiUnlikePlaylistRequest = {
    
    /**
    * SoundCloud playlist id
    * @type {number}
    * @memberof LikesApiUnlikePlaylist
    */
    readonly playlistId: number
    
}

/**
 * Request parameters for unlikeTrack operation in LikesApi.
 * @export
 * @interface LikesApiUnlikeTrackRequest
 */
export type LikesApiUnlikeTrackRequest = {
    
    /**
    * SoundCloud Track id
    * @type {number}
    * @memberof LikesApiUnlikeTrack
    */
    readonly trackId: number
    
}

/**
 * LikesApiGenerated - object-oriented interface
 * @export
 * @class LikesApiGenerated
 * @extends {BaseAPI}
 */
export class LikesApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Likes a playlist.
     * @param {LikesApiPlaylistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LikesApiGenerated
     */
    public playlist(requestParameters: LikesApiPlaylistRequest, options?: AxiosRequestConfig) {
        return LikesApiFp(this.configuration).playlist(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Likes a track.
     * @param {LikesApiTrackActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LikesApiGenerated
     */
    public trackAction(requestParameters: LikesApiTrackActionRequest, options?: AxiosRequestConfig) {
        return LikesApiFp(this.configuration).trackAction(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Unlikes a playlist.
     * @param {LikesApiUnlikePlaylistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LikesApiGenerated
     */
    public unlikePlaylist(requestParameters: LikesApiUnlikePlaylistRequest, options?: AxiosRequestConfig) {
        return LikesApiFp(this.configuration).unlikePlaylist(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Unlikes a track.
     * @param {LikesApiUnlikeTrackRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LikesApiGenerated
     */
    public unlikeTrack(requestParameters: LikesApiUnlikeTrackRequest, options?: AxiosRequestConfig) {
        return LikesApiFp(this.configuration).unlikeTrack(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}