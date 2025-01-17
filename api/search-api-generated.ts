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
import { MeGetLikedPlaylistsResponse } from '../models';
// @ts-ignore
import { MeListLikedTracksResponse } from '../models';
// @ts-ignore
import { SearchByQueryBpmParameter } from '../models';
// @ts-ignore
import { SearchByQueryCreatedAtParameter } from '../models';
// @ts-ignore
import { SearchByQueryDurationParameter } from '../models';
// @ts-ignore
import { Users } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SearchApi - axios parameter creator
 * @export
 */
export const SearchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Performs a track search based on a query
         * @param {string} [q] search
         * @param {string} [ids] A comma separated list of track ids to filter on
         * @param {string} [genres] A comma separated list of genres
         * @param {string} [tags] A comma separated list of tags
         * @param {SearchByQueryBpmParameter} [bpm] Return tracks with a specified bpm[from], bpm[to]
         * @param {SearchByQueryDurationParameter} [duration] Return tracks within a specified duration range
         * @param {SearchByQueryCreatedAtParameter} [createdAt] (yyyy-mm-dd hh:mm:ss) return tracks created within the specified dates
         * @param {Array<'playable' | 'preview' | 'blocked'>} [access] Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\&#39;d like to see all possible tracks. See &#x60;Track#access&#x60; schema for more details. 
         * @param {number} [limit] Number of results to return in the collection.
         * @param {number} [offset] Offset of first result. Deprecated, use &#x60;linked_partitioning&#x60; instead.
         * @param {boolean} [linkedPartitioning] Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        byQuery: async (q?: string, ids?: string, genres?: string, tags?: string, bpm?: SearchByQueryBpmParameter, duration?: SearchByQueryDurationParameter, createdAt?: SearchByQueryCreatedAtParameter, access?: Array<'playable' | 'preview' | 'blocked'>, limit?: number, offset?: number, linkedPartitioning?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tracks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authHeader", configuration })
            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }

            if (genres !== undefined) {
                localVarQueryParameter['genres'] = genres;
            }

            if (tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            if (bpm !== undefined) {
                localVarQueryParameter['bpm'] = bpm;
            }

            if (duration !== undefined) {
                localVarQueryParameter['duration'] = duration;
            }

            if (createdAt !== undefined) {
                localVarQueryParameter['created_at'] = createdAt;
            }

            if (access) {
                localVarQueryParameter['access'] = access.join(COLLECTION_FORMATS.csv);
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (linkedPartitioning !== undefined) {
                localVarQueryParameter['linked_partitioning'] = linkedPartitioning;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/tracks',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Performs a playlist search based on a query
         * @param {string} [q] search
         * @param {Array<'playable' | 'preview' | 'blocked'>} [access] Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\&#39;d like to see all possible tracks. See &#x60;Track#access&#x60; schema for more details. 
         * @param {boolean} [showTracks] A boolean flag to request a playlist with or without tracks. Default is &#x60;true&#x60;.
         * @param {number} [limit] Number of results to return in the collection.
         * @param {number} [offset] Offset of first result. Deprecated, use &#x60;linked_partitioning&#x60; instead.
         * @param {boolean} [linkedPartitioning] Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        byQuery_1: async (q?: string, access?: Array<'playable' | 'preview' | 'blocked'>, showTracks?: boolean, limit?: number, offset?: number, linkedPartitioning?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/playlists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authHeader", configuration })
            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (access) {
                localVarQueryParameter['access'] = access.join(COLLECTION_FORMATS.csv);
            }

            if (showTracks !== undefined) {
                localVarQueryParameter['show_tracks'] = showTracks;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (linkedPartitioning !== undefined) {
                localVarQueryParameter['linked_partitioning'] = linkedPartitioning;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/playlists',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Performs a user search based on a query
         * @param {string} [q] search
         * @param {string} [ids] A comma separated list of track ids to filter on
         * @param {number} [limit] Number of results to return in the collection.
         * @param {number} [offset] Offset of first result. Deprecated, use &#x60;linked_partitioning&#x60; instead.
         * @param {boolean} [linkedPartitioning] Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userQuery: async (q?: string, ids?: string, limit?: number, offset?: number, linkedPartitioning?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "authHeader", configuration })
            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (linkedPartitioning !== undefined) {
                localVarQueryParameter['linked_partitioning'] = linkedPartitioning;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/users',
                httpMethod: 'GET'
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
 * SearchApi - functional programming interface
 * @export
 */
export const SearchApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SearchApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Performs a track search based on a query
         * @param {SearchApiByQueryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async byQuery(requestParameters: SearchApiByQueryRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MeListLikedTracksResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.byQuery(requestParameters.q, requestParameters.ids, requestParameters.genres, requestParameters.tags, requestParameters.bpm, requestParameters.duration, requestParameters.createdAt, requestParameters.access, requestParameters.limit, requestParameters.offset, requestParameters.linkedPartitioning, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Performs a playlist search based on a query
         * @param {SearchApiByQuery0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async byQuery_1(requestParameters: SearchApiByQuery0Request = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MeGetLikedPlaylistsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.byQuery_1(requestParameters.q, requestParameters.access, requestParameters.showTracks, requestParameters.limit, requestParameters.offset, requestParameters.linkedPartitioning, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Performs a user search based on a query
         * @param {SearchApiUserQueryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userQuery(requestParameters: SearchApiUserQueryRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Users>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userQuery(requestParameters.q, requestParameters.ids, requestParameters.limit, requestParameters.offset, requestParameters.linkedPartitioning, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SearchApi - factory interface
 * @export
 */
export const SearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SearchApiFp(configuration)
    return {
        /**
         * 
         * @summary Performs a track search based on a query
         * @param {SearchApiByQueryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        byQuery(requestParameters: SearchApiByQueryRequest = {}, options?: AxiosRequestConfig): AxiosPromise<MeListLikedTracksResponse> {
            return localVarFp.byQuery(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Performs a playlist search based on a query
         * @param {SearchApiByQuery0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        byQuery_1(requestParameters: SearchApiByQuery0Request = {}, options?: AxiosRequestConfig): AxiosPromise<MeGetLikedPlaylistsResponse> {
            return localVarFp.byQuery_1(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Performs a user search based on a query
         * @param {SearchApiUserQueryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userQuery(requestParameters: SearchApiUserQueryRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Users> {
            return localVarFp.userQuery(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for byQuery operation in SearchApi.
 * @export
 * @interface SearchApiByQueryRequest
 */
export type SearchApiByQueryRequest = {
    
    /**
    * search
    * @type {string}
    * @memberof SearchApiByQuery
    */
    readonly q?: string
    
    /**
    * A comma separated list of track ids to filter on
    * @type {string}
    * @memberof SearchApiByQuery
    */
    readonly ids?: string
    
    /**
    * A comma separated list of genres
    * @type {string}
    * @memberof SearchApiByQuery
    */
    readonly genres?: string
    
    /**
    * A comma separated list of tags
    * @type {string}
    * @memberof SearchApiByQuery
    */
    readonly tags?: string
    
    /**
    * Return tracks with a specified bpm[from], bpm[to]
    * @type {SearchByQueryBpmParameter}
    * @memberof SearchApiByQuery
    */
    readonly bpm?: SearchByQueryBpmParameter
    
    /**
    * Return tracks within a specified duration range
    * @type {SearchByQueryDurationParameter}
    * @memberof SearchApiByQuery
    */
    readonly duration?: SearchByQueryDurationParameter
    
    /**
    * (yyyy-mm-dd hh:mm:ss) return tracks created within the specified dates
    * @type {SearchByQueryCreatedAtParameter}
    * @memberof SearchApiByQuery
    */
    readonly createdAt?: SearchByQueryCreatedAtParameter
    
    /**
    * Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 
    * @type {Array<'playable' | 'preview' | 'blocked'>}
    * @memberof SearchApiByQuery
    */
    readonly access?: Array<'playable' | 'preview' | 'blocked'>
    
    /**
    * Number of results to return in the collection.
    * @type {number}
    * @memberof SearchApiByQuery
    */
    readonly limit?: number
    
    /**
    * Offset of first result. Deprecated, use `linked_partitioning` instead.
    * @type {number}
    * @memberof SearchApiByQuery
    */
    readonly offset?: number
    
    /**
    * Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
    * @type {boolean}
    * @memberof SearchApiByQuery
    */
    readonly linkedPartitioning?: boolean
    
}

/**
 * Request parameters for byQuery_1 operation in SearchApi.
 * @export
 * @interface SearchApiByQuery0Request
 */
export type SearchApiByQuery0Request = {
    
    /**
    * search
    * @type {string}
    * @memberof SearchApiByQuery0
    */
    readonly q?: string
    
    /**
    * Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 
    * @type {Array<'playable' | 'preview' | 'blocked'>}
    * @memberof SearchApiByQuery0
    */
    readonly access?: Array<'playable' | 'preview' | 'blocked'>
    
    /**
    * A boolean flag to request a playlist with or without tracks. Default is `true`.
    * @type {boolean}
    * @memberof SearchApiByQuery0
    */
    readonly showTracks?: boolean
    
    /**
    * Number of results to return in the collection.
    * @type {number}
    * @memberof SearchApiByQuery0
    */
    readonly limit?: number
    
    /**
    * Offset of first result. Deprecated, use `linked_partitioning` instead.
    * @type {number}
    * @memberof SearchApiByQuery0
    */
    readonly offset?: number
    
    /**
    * Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
    * @type {boolean}
    * @memberof SearchApiByQuery0
    */
    readonly linkedPartitioning?: boolean
    
}

/**
 * Request parameters for userQuery operation in SearchApi.
 * @export
 * @interface SearchApiUserQueryRequest
 */
export type SearchApiUserQueryRequest = {
    
    /**
    * search
    * @type {string}
    * @memberof SearchApiUserQuery
    */
    readonly q?: string
    
    /**
    * A comma separated list of track ids to filter on
    * @type {string}
    * @memberof SearchApiUserQuery
    */
    readonly ids?: string
    
    /**
    * Number of results to return in the collection.
    * @type {number}
    * @memberof SearchApiUserQuery
    */
    readonly limit?: number
    
    /**
    * Offset of first result. Deprecated, use `linked_partitioning` instead.
    * @type {number}
    * @memberof SearchApiUserQuery
    */
    readonly offset?: number
    
    /**
    * Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)
    * @type {boolean}
    * @memberof SearchApiUserQuery
    */
    readonly linkedPartitioning?: boolean
    
}

/**
 * SearchApiGenerated - object-oriented interface
 * @export
 * @class SearchApiGenerated
 * @extends {BaseAPI}
 */
export class SearchApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Performs a track search based on a query
     * @param {SearchApiByQueryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApiGenerated
     */
    public byQuery(requestParameters: SearchApiByQueryRequest = {}, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).byQuery(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Performs a playlist search based on a query
     * @param {SearchApiByQuery0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApiGenerated
     */
    public byQuery_1(requestParameters: SearchApiByQuery0Request = {}, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).byQuery_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Performs a user search based on a query
     * @param {SearchApiUserQueryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApiGenerated
     */
    public userQuery(requestParameters: SearchApiUserQueryRequest = {}, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).userQuery(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
