/*
SoundCloud Public API Specification

Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  LikesApi,
  MeApi,
  MiscellaneousApi,
  OauthApi,
  PlaylistsApi,
  RepostsApi,
  SearchApi,
  TracksApi,
  UsersApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { SoundCloudCustom } from "./client-custom";

export class SoundCloud extends SoundCloudCustom {
  readonly likes: LikesApi;
  readonly me: MeApi;
  readonly miscellaneous: MiscellaneousApi;
  readonly oauth: OauthApi;
  readonly playlists: PlaylistsApi;
  readonly reposts: RepostsApi;
  readonly search: SearchApi;
  readonly tracks: TracksApi;
  readonly users: UsersApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.likes = new LikesApi(configuration);
    this.me = new MeApi(configuration);
    this.miscellaneous = new MiscellaneousApi(configuration);
    this.oauth = new OauthApi(configuration);
    this.playlists = new PlaylistsApi(configuration);
    this.reposts = new RepostsApi(configuration);
    this.search = new SearchApi(configuration);
    this.tracks = new TracksApi(configuration);
    this.users = new UsersApi(configuration);
  }

}
