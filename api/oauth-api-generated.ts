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
import { OAuthToken } from '../models';
// @ts-ignore
import { OauthProvisionAccessToken401Response } from '../models';
// @ts-ignore
import { OauthProvisionAccessTokenResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * OauthApi - axios parameter creator
 * @export
 */
export const OauthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <h3>Security Advice</h3> * [OAuth Authorization Code flow](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-16#section-2.1.1) (`response_type=code`) is the only allowed method of authorization. * Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token. 
         * @summary The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
         * @param {string} clientId The client id belonging to your application
         * @param {string} redirectUri The redirect uri you have configured for your application
         * @param {'code'} responseType Support only the Authorization Code Flow
         * @param {string} [state] Any value included here will be appended to the redirect URI. Use this for CSRF protection.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorizeUser: async (clientId: string, redirectUri: string, responseType: 'code', state?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('authorizeUser', 'clientId', clientId)
            // verify required parameter 'redirectUri' is not null or undefined
            assertParamExists('authorizeUser', 'redirectUri', redirectUri)
            // verify required parameter 'responseType' is not null or undefined
            assertParamExists('authorizeUser', 'responseType', responseType)
            const localVarPath = `/connect`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (clientId !== undefined) {
                localVarQueryParameter['client_id'] = clientId;
            }

            if (redirectUri !== undefined) {
                localVarQueryParameter['redirect_uri'] = redirectUri;
            }

            if (responseType !== undefined) {
                localVarQueryParameter['response_type'] = responseType;
            }

            if (state !== undefined) {
                localVarQueryParameter['state'] = state;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/connect',
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
         * @summary This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.
         * @param {string} grantType One of &#x60;authorization_code&#x60;, &#x60;client_credentials&#x60;, &#x60;refresh_token&#x60;
         * @param {string} clientId Client ID
         * @param {string} clientSecret Client secret
         * @param {OAuthToken} oAuthToken 
         * @param {string} [code] Authorization code. Required on &#x60;grant_type &#x3D; authorization_code&#x60;.
         * @param {string} [redirectUri] Redirect URI. Required on &#x60;grant_type &#x3D; (authorization_code|refresh_token)&#x60;.
         * @param {string} [refreshToken] Refresh token. Required on &#x60;grant_type &#x3D; refresh_token&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        provisionAccessToken: async (grantType: string, clientId: string, clientSecret: string, oAuthToken: OAuthToken, code?: string, redirectUri?: string, refreshToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'grantType' is not null or undefined
            assertParamExists('provisionAccessToken', 'grantType', grantType)
            // verify required parameter 'clientId' is not null or undefined
            assertParamExists('provisionAccessToken', 'clientId', clientId)
            // verify required parameter 'clientSecret' is not null or undefined
            assertParamExists('provisionAccessToken', 'clientSecret', clientSecret)
            // verify required parameter 'oAuthToken' is not null or undefined
            assertParamExists('provisionAccessToken', 'oAuthToken', oAuthToken)
            const localVarPath = `/oauth2/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            const addFormParam = async (name: string, data: any, isBinary: boolean, isPrimitiveType: boolean) => {
                if (isBinary) {
                    if (data instanceof Uint8Array) {
                        // Handle Buffer data
                        const filetype = await fromBuffer(data)
                        const filename = filetype === undefined ? name : `${name}.${filetype.ext}`
                        localVarFormParams.append(name, data as any, filename);
                    } else if ("name" in data) {
                        // File instances in browsers and Node.js have the
                        // "name" property "Duck typing" files to handle browser
                        // File class or Node.js File class
                        // Web: https://developer.mozilla.org/en-US/docs/Web/API/File
                        // Node.js: https://nodejs.org/api/buffer.html#new-bufferfilesources-filename-options
                        if (isBrowser()) {
                            // FormData in browser can accept File/Blob directly
                            localVarFormParams.append(name, data, data.name);
                        } else {
                            // FormData in Node.js can only accept raw Buffer so convert before passing
                            const bytes = await data.arrayBuffer()
                            const buffer = Buffer.from(bytes)
                            localVarFormParams.append(name, buffer, data.name);
                        }
                    }
                } else {
                    if (isPrimitiveType) {
                        /**
                         * FormData can only accept string or Blob so we need to convert
                         * non-string primitives to string. We also need to convert
                         */
                        if (typeof data === "object") {
                          localVarFormParams.append(name, JSON.stringify(data));
                        } else {
                          localVarFormParams.append(name, data);
                        }
                    } else {
                        if (isBrowser()) {
                            localVarFormParams.append(name, new Blob([JSON.stringify(data)], { type: "application/json" }))
                        } else {
                            localVarFormParams.append(name, JSON.stringify(data), { type: "application/json", filename: "data.json" });
                        }
                    }
                }
            }
            if (!isBrowser()) Object.assign(localVarHeaderParameter, localVarFormParams.getHeaders());


            if (grantType !== undefined) {
                await addFormParam('grant_type', grantType, false, true)
            }
    
            if (clientId !== undefined) {
                await addFormParam('client_id', clientId, false, true)
            }
    
            if (clientSecret !== undefined) {
                await addFormParam('client_secret', clientSecret, false, true)
            }
    
            if (code !== undefined) {
                await addFormParam('code', code, false, true)
            }
    
            if (redirectUri !== undefined) {
                await addFormParam('redirect_uri', redirectUri, false, true)
            }
    
            if (refreshToken !== undefined) {
                await addFormParam('refresh_token', refreshToken, false, true)
            }
    
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;
            requestBeforeHook({
                requestBody: oAuthToken,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/oauth2/token',
                httpMethod: 'POST'
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
 * OauthApi - functional programming interface
 * @export
 */
export const OauthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OauthApiAxiosParamCreator(configuration)
    return {
        /**
         * <h3>Security Advice</h3> * [OAuth Authorization Code flow](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-16#section-2.1.1) (`response_type=code`) is the only allowed method of authorization. * Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token. 
         * @summary The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
         * @param {OauthApiAuthorizeUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authorizeUser(requestParameters: OauthApiAuthorizeUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authorizeUser(requestParameters.clientId, requestParameters.redirectUri, requestParameters.responseType, requestParameters.state, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.
         * @param {OauthApiProvisionAccessTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async provisionAccessToken(requestParameters: OauthApiProvisionAccessTokenRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const oAuthToken: OAuthToken = {
                grant_type: requestParameters.grant_type,
                client_id: requestParameters.client_id,
                client_secret: requestParameters.client_secret,
                code: requestParameters.code,
                redirect_uri: requestParameters.redirect_uri,
                refresh_token: requestParameters.refresh_token
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.provisionAccessToken(requestParameters.grantType, requestParameters.clientId, requestParameters.clientSecret, oAuthToken, requestParameters.code, requestParameters.redirectUri, requestParameters.refreshToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OauthApi - factory interface
 * @export
 */
export const OauthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OauthApiFp(configuration)
    return {
        /**
         * <h3>Security Advice</h3> * [OAuth Authorization Code flow](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-16#section-2.1.1) (`response_type=code`) is the only allowed method of authorization. * Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token. 
         * @summary The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
         * @param {OauthApiAuthorizeUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authorizeUser(requestParameters: OauthApiAuthorizeUserRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.authorizeUser(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.
         * @param {OauthApiProvisionAccessTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        provisionAccessToken(requestParameters: OauthApiProvisionAccessTokenRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.provisionAccessToken(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for authorizeUser operation in OauthApi.
 * @export
 * @interface OauthApiAuthorizeUserRequest
 */
export type OauthApiAuthorizeUserRequest = {
    
    /**
    * The client id belonging to your application
    * @type {string}
    * @memberof OauthApiAuthorizeUser
    */
    readonly clientId: string
    
    /**
    * The redirect uri you have configured for your application
    * @type {string}
    * @memberof OauthApiAuthorizeUser
    */
    readonly redirectUri: string
    
    /**
    * Support only the Authorization Code Flow
    * @type {'code'}
    * @memberof OauthApiAuthorizeUser
    */
    readonly responseType: 'code'
    
    /**
    * Any value included here will be appended to the redirect URI. Use this for CSRF protection.
    * @type {string}
    * @memberof OauthApiAuthorizeUser
    */
    readonly state?: string
    
}

/**
 * Request parameters for provisionAccessToken operation in OauthApi.
 * @export
 * @interface OauthApiProvisionAccessTokenRequest
 */
export type OauthApiProvisionAccessTokenRequest = {
    
    /**
    * One of `authorization_code`, `client_credentials`, `refresh_token`
    * @type {string}
    * @memberof OauthApiProvisionAccessToken
    */
    readonly grantType: string
    
    /**
    * Client ID
    * @type {string}
    * @memberof OauthApiProvisionAccessToken
    */
    readonly clientId: string
    
    /**
    * Client secret
    * @type {string}
    * @memberof OauthApiProvisionAccessToken
    */
    readonly clientSecret: string
    
    /**
    * Authorization code. Required on `grant_type = authorization_code`.
    * @type {string}
    * @memberof OauthApiProvisionAccessToken
    */
    readonly code?: string
    
    /**
    * Redirect URI. Required on `grant_type = (authorization_code|refresh_token)`.
    * @type {string}
    * @memberof OauthApiProvisionAccessToken
    */
    readonly redirectUri?: string
    
    /**
    * Refresh token. Required on `grant_type = refresh_token`.
    * @type {string}
    * @memberof OauthApiProvisionAccessToken
    */
    readonly refreshToken?: string
    
} & OAuthToken

/**
 * OauthApiGenerated - object-oriented interface
 * @export
 * @class OauthApiGenerated
 * @extends {BaseAPI}
 */
export class OauthApiGenerated extends BaseAPI {
    /**
     * <h3>Security Advice</h3> * [OAuth Authorization Code flow](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-16#section-2.1.1) (`response_type=code`) is the only allowed method of authorization. * Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token. 
     * @summary The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
     * @param {OauthApiAuthorizeUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OauthApiGenerated
     */
    public authorizeUser(requestParameters: OauthApiAuthorizeUserRequest, options?: AxiosRequestConfig) {
        return OauthApiFp(this.configuration).authorizeUser(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.
     * @param {OauthApiProvisionAccessTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OauthApiGenerated
     */
    public provisionAccessToken(requestParameters: OauthApiProvisionAccessTokenRequest, options?: AxiosRequestConfig) {
        return OauthApiFp(this.configuration).provisionAccessToken(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
