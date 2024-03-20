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
import { Found } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * MiscellaneousApi - axios parameter creator
 * @export
 */
export const MiscellaneousApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Resolves soundcloud.com and on.soundcloud.com URLs to Resource URLs to use with the API.
         * @param {string} url SoundCloud URL
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resolveSoundcloudUrls: async (url: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'url' is not null or undefined
            assertParamExists('resolveSoundcloudUrls', 'url', url)
            const localVarPath = `/resolve`;
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
            if (url !== undefined) {
                localVarQueryParameter['url'] = url;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/resolve',
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
 * MiscellaneousApi - functional programming interface
 * @export
 */
export const MiscellaneousApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MiscellaneousApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Resolves soundcloud.com and on.soundcloud.com URLs to Resource URLs to use with the API.
         * @param {MiscellaneousApiResolveSoundcloudUrlsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resolveSoundcloudUrls(requestParameters: MiscellaneousApiResolveSoundcloudUrlsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resolveSoundcloudUrls(requestParameters.url, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MiscellaneousApi - factory interface
 * @export
 */
export const MiscellaneousApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MiscellaneousApiFp(configuration)
    return {
        /**
         * 
         * @summary Resolves soundcloud.com and on.soundcloud.com URLs to Resource URLs to use with the API.
         * @param {MiscellaneousApiResolveSoundcloudUrlsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resolveSoundcloudUrls(requestParameters: MiscellaneousApiResolveSoundcloudUrlsRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.resolveSoundcloudUrls(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for resolveSoundcloudUrls operation in MiscellaneousApi.
 * @export
 * @interface MiscellaneousApiResolveSoundcloudUrlsRequest
 */
export type MiscellaneousApiResolveSoundcloudUrlsRequest = {
    
    /**
    * SoundCloud URL
    * @type {string}
    * @memberof MiscellaneousApiResolveSoundcloudUrls
    */
    readonly url: string
    
}

/**
 * MiscellaneousApiGenerated - object-oriented interface
 * @export
 * @class MiscellaneousApiGenerated
 * @extends {BaseAPI}
 */
export class MiscellaneousApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Resolves soundcloud.com and on.soundcloud.com URLs to Resource URLs to use with the API.
     * @param {MiscellaneousApiResolveSoundcloudUrlsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApiGenerated
     */
    public resolveSoundcloudUrls(requestParameters: MiscellaneousApiResolveSoundcloudUrlsRequest, options?: AxiosRequestConfig) {
        return MiscellaneousApiFp(this.configuration).resolveSoundcloudUrls(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
