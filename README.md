<div align="left">

[![Visit Soundcloud](./header.png)](https://developers.soundcloud.com)

# [Soundcloud](https://developers.soundcloud.com)<a id="soundcloud"></a>

Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`soundcloud.likes.playlist`](#soundcloudlikesplaylist)
  * [`soundcloud.likes.trackAction`](#soundcloudlikestrackaction)
  * [`soundcloud.likes.unlikePlaylist`](#soundcloudlikesunlikeplaylist)
  * [`soundcloud.likes.unlikeTrack`](#soundcloudlikesunliketrack)
  * [`soundcloud.me.deleteFollowedUser`](#soundcloudmedeletefolloweduser)
  * [`soundcloud.me.followUser`](#soundcloudmefollowuser)
  * [`soundcloud.me.getActivities`](#soundcloudmegetactivities)
  * [`soundcloud.me.getFollowedUser`](#soundcloudmegetfolloweduser)
  * [`soundcloud.me.getFollowedUsers`](#soundcloudmegetfollowedusers)
  * [`soundcloud.me.getFollowerById`](#soundcloudmegetfollowerbyid)
  * [`soundcloud.me.getFollowersList`](#soundcloudmegetfollowerslist)
  * [`soundcloud.me.getLikedPlaylists`](#soundcloudmegetlikedplaylists)
  * [`soundcloud.me.getRecentActivities`](#soundcloudmegetrecentactivities)
  * [`soundcloud.me.getRecentTracks`](#soundcloudmegetrecenttracks)
  * [`soundcloud.me.getUserInformation`](#soundcloudmegetuserinformation)
  * [`soundcloud.me.listFollowedTracks`](#soundcloudmelistfollowedtracks)
  * [`soundcloud.me.listLikedTracks`](#soundcloudmelistlikedtracks)
  * [`soundcloud.me.listPlaylistsInfoTracksOwner`](#soundcloudmelistplaylistsinfotracksowner)
  * [`soundcloud.me.listUserTracks`](#soundcloudmelistusertracks)
  * [`soundcloud.miscellaneous.resolveSoundcloudUrls`](#soundcloudmiscellaneousresolvesoundcloudurls)
  * [`soundcloud.oauth.authorizeUser`](#soundcloudoauthauthorizeuser)
  * [`soundcloud.oauth.provisionAccessToken`](#soundcloudoauthprovisionaccesstoken)
  * [`soundcloud.playlists.createNewPlaylist`](#soundcloudplaylistscreatenewplaylist)
  * [`soundcloud.playlists.deletePlaylist`](#soundcloudplaylistsdeleteplaylist)
  * [`soundcloud.playlists.getPlaylistById`](#soundcloudplaylistsgetplaylistbyid)
  * [`soundcloud.playlists.getTracks`](#soundcloudplaylistsgettracks)
  * [`soundcloud.playlists.listReposters`](#soundcloudplaylistslistreposters)
  * [`soundcloud.playlists.updatePlaylistById`](#soundcloudplaylistsupdateplaylistbyid)
  * [`soundcloud.reposts.playlistAsAuthenticatedUser`](#soundcloudrepostsplaylistasauthenticateduser)
  * [`soundcloud.reposts.removeRepost`](#soundcloudrepostsremoverepost)
  * [`soundcloud.reposts.removeRepostOnPlaylist`](#soundcloudrepostsremoverepostonplaylist)
  * [`soundcloud.reposts.trackAsAuthenticatedUser`](#soundcloudrepoststrackasauthenticateduser)
  * [`soundcloud.search.byQuery`](#soundcloudsearchbyquery)
  * [`soundcloud.search.byQuery_0`](#soundcloudsearchbyquery_0)
  * [`soundcloud.search.userQuery`](#soundcloudsearchuserquery)
  * [`soundcloud.tracks.createComment`](#soundcloudtrackscreatecomment)
  * [`soundcloud.tracks.deleteTrack`](#soundcloudtracksdeletetrack)
  * [`soundcloud.tracks.getById`](#soundcloudtracksgetbyid)
  * [`soundcloud.tracks.getComments`](#soundcloudtracksgetcomments)
  * [`soundcloud.tracks.getFavoriters`](#soundcloudtracksgetfavoriters)
  * [`soundcloud.tracks.getRelatedTracks`](#soundcloudtracksgetrelatedtracks)
  * [`soundcloud.tracks.getStreamableUrls`](#soundcloudtracksgetstreamableurls)
  * [`soundcloud.tracks.listReposters`](#soundcloudtrackslistreposters)
  * [`soundcloud.tracks.updateTrackInformation`](#soundcloudtracksupdatetrackinformation)
  * [`soundcloud.tracks.uploadNewTrack`](#soundcloudtracksuploadnewtrack)
  * [`soundcloud.users.getFollowers`](#soundcloudusersgetfollowers)
  * [`soundcloud.users.getFollowingById`](#soundcloudusersgetfollowingbyid)
  * [`soundcloud.users.getUser`](#soundcloudusersgetuser)
  * [`soundcloud.users.getUserFollowings`](#soundcloudusersgetuserfollowings)
  * [`soundcloud.users.getUserPlaylists`](#soundcloudusersgetuserplaylists)
  * [`soundcloud.users.getUserTracks`](#soundcloudusersgetusertracks)
  * [`soundcloud.users.getUserWebProfiles`](#soundcloudusersgetuserwebprofiles)
  * [`soundcloud.users.listFavorites`](#soundclouduserslistfavorites)
  * [`soundcloud.users.listLikedPlaylists`](#soundclouduserslistlikedplaylists)
  * [`soundcloud.users.listLikedTracks`](#soundclouduserslistlikedtracks)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=SoundCloud&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { SoundCloud } from "soundcloud-typescript-sdk";

const soundcloud = new SoundCloud({
  // Defining the base path is optional and defaults to https://api.soundcloud.com
  // basePath: "https://api.soundcloud.com",
  apiKey: "API_KEY",
});

const playlistResponse = await soundcloud.likes.playlist({
  playlistId: 1,
});

console.log(playlistResponse);
```

## Reference<a id="reference"></a>


### `soundcloud.likes.playlist`<a id="soundcloudlikesplaylist"></a>

Likes a playlist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const playlistResponse = await soundcloud.likes.playlist({
  playlistId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playlistId: `number`<a id="playlistid-number"></a>

SoundCloud playlist id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/likes/playlists/{playlist_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.likes.trackAction`<a id="soundcloudlikestrackaction"></a>

Likes a track.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const trackActionResponse = await soundcloud.likes.trackAction({
  trackId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/likes/tracks/{track_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.likes.unlikePlaylist`<a id="soundcloudlikesunlikeplaylist"></a>

Unlikes a playlist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unlikePlaylistResponse = await soundcloud.likes.unlikePlaylist({
  playlistId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playlistId: `number`<a id="playlistid-number"></a>

SoundCloud playlist id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/likes/playlists/{playlist_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.likes.unlikeTrack`<a id="soundcloudlikesunliketrack"></a>

Unlikes a track.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unlikeTrackResponse = await soundcloud.likes.unlikeTrack({
  trackId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/likes/tracks/{track_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.deleteFollowedUser`<a id="soundcloudmedeletefolloweduser"></a>

Deletes a user who is followed by the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFollowedUserResponse = await soundcloud.me.deleteFollowedUser({
  userId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/followings/{user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.followUser`<a id="soundcloudmefollowuser"></a>

Follows a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const followUserResponse = await soundcloud.me.followUser({
  userId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/followings/{user_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.getActivities`<a id="soundcloudmegetactivities"></a>

Returns the authenticated user\&#39;s activities.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getActivitiesResponse = await soundcloud.me.getActivities({
  access: ["playable,preview"],
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

#### 🔄 Return<a id="🔄-return"></a>

[Activities](./models/activities.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/activities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.getFollowedUser`<a id="soundcloudmegetfolloweduser"></a>

Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFollowedUserResponse = await soundcloud.me.getFollowedUser({
  userId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/followings/{user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.getFollowedUsers`<a id="soundcloudmegetfollowedusers"></a>

Returns a list of users who are followed by the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFollowedUsersResponse = await soundcloud.me.getFollowedUsers({
  limit: 50,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### offset: `number`<a id="offset-number"></a>

Offset of first result. Deprecated, use `linked_partitioning` instead.

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/followings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.getFollowerById`<a id="soundcloudmegetfollowerbyid"></a>

Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFollowerByIdResponse = await soundcloud.me.getFollowerById({
  followerId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### followerId: `number`<a id="followerid-number"></a>

SoundCloud User id to denote a Follower

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/followers/{follower_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.getFollowersList`<a id="soundcloudmegetfollowerslist"></a>

Returns a list of users who are following the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFollowersListResponse = await soundcloud.me.getFollowersList({
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/followers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.getLikedPlaylists`<a id="soundcloudmegetlikedplaylists"></a>

Returns a list of favorited or liked playlists of the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLikedPlaylistsResponse = await soundcloud.me.getLikedPlaylists({
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeGetLikedPlaylistsResponse](./models/me-get-liked-playlists-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/likes/playlists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.getRecentActivities`<a id="soundcloudmegetrecentactivities"></a>

Recent the authenticated user\&#39;s activities.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentActivitiesResponse = await soundcloud.me.getRecentActivities({
  access: ["playable,preview"],
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

#### 🔄 Return<a id="🔄-return"></a>

[Activities](./models/activities.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/activities/all/own` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.getRecentTracks`<a id="soundcloudmegetrecenttracks"></a>

Returns the authenticated user\&#39;s recent track related activities.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentTracksResponse = await soundcloud.me.getRecentTracks({
  access: ["playable,preview"],
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

#### 🔄 Return<a id="🔄-return"></a>

[Activities](./models/activities.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/activities/tracks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.getUserInformation`<a id="soundcloudmegetuserinformation"></a>

Returns the authenticated user’s information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserInformationResponse = await soundcloud.me.getUserInformation();
```

#### 🔄 Return<a id="🔄-return"></a>

[Me](./models/me.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.listFollowedTracks`<a id="soundcloudmelistfollowedtracks"></a>

Returns a list of recent tracks from users followed by the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFollowedTracksResponse = await soundcloud.me.listFollowedTracks({
  access: ["playable,preview"],
  limit: 50,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### offset: `number`<a id="offset-number"></a>

Offset of first result. Deprecated, use `linked_partitioning` instead.

#### 🔄 Return<a id="🔄-return"></a>

[Track](./models/track.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/followings/tracks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.listLikedTracks`<a id="soundcloudmelistlikedtracks"></a>

Returns a list of favorited or liked tracks of the authenticated user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLikedTracksResponse = await soundcloud.me.listLikedTracks({
  limit: 50,
  access: ["playable,preview,blocked"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeListLikedTracksResponse](./models/me-list-liked-tracks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/likes/tracks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.listPlaylistsInfoTracksOwner`<a id="soundcloudmelistplaylistsinfotracksowner"></a>

Returns playlist info, playlist tracks and tracks owner info.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPlaylistsInfoTracksOwnerResponse =
  await soundcloud.me.listPlaylistsInfoTracksOwner({
    limit: 50,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### showTracks: `boolean`<a id="showtracks-boolean"></a>

A boolean flag to request a playlist with or without tracks. Default is `true`.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

#### 🔄 Return<a id="🔄-return"></a>

[MeGetLikedPlaylistsResponse](./models/me-get-liked-playlists-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/playlists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.me.listUserTracks`<a id="soundcloudmelistusertracks"></a>

Returns a list of user\&#39;s tracks.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserTracksResponse = await soundcloud.me.listUserTracks({
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeListLikedTracksResponse](./models/me-list-liked-tracks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me/tracks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.miscellaneous.resolveSoundcloudUrls`<a id="soundcloudmiscellaneousresolvesoundcloudurls"></a>

Resolves soundcloud.com and on.soundcloud.com URLs to Resource URLs to use with the API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resolveSoundcloudUrlsResponse =
  await soundcloud.miscellaneous.resolveSoundcloudUrls({
    url: "url_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

SoundCloud URL

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/resolve` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.oauth.authorizeUser`<a id="soundcloudoauthauthorizeuser"></a>

<h3>Security Advice</h3>
* [OAuth Authorization Code flow](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-16#section-2.1.1) (`response_type=code`) is the only allowed method of authorization.
* Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const authorizeUserResponse = await soundcloud.oauth.authorizeUser({
  clientId: "clientId_example",
  redirectUri: "redirectUri_example",
  responseType: "code",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### clientId: `string`<a id="clientid-string"></a>

The client id belonging to your application

##### redirectUri: `string`<a id="redirecturi-string"></a>

The redirect uri you have configured for your application

##### responseType: `'code'`<a id="responsetype-code"></a>

Support only the Authorization Code Flow

##### state: `string`<a id="state-string"></a>

Any value included here will be appended to the redirect URI. Use this for CSRF protection.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connect` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.oauth.provisionAccessToken`<a id="soundcloudoauthprovisionaccesstoken"></a>

This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const provisionAccessTokenResponse =
  await soundcloud.oauth.provisionAccessToken({
    grant_type: "authorization_code",
    client_id: "CLIENT_ID",
    client_secret: "CLIENT_SECRET",
    code: "1-123456-12345678-FAbcfbe9ir2wdj0",
    redirect_uri: "https://mywebsite/auth/soundcloud",
    refresh_token: "1234c331329477150e7b6056ff212345",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### grantType: `string`<a id="granttype-string"></a>

One of `authorization_code`, `client_credentials`, `refresh_token`

##### clientId: `string`<a id="clientid-string"></a>

Client ID

##### clientSecret: `string`<a id="clientsecret-string"></a>

Client secret

##### code: `string`<a id="code-string"></a>

Authorization code. Required on `grant_type = authorization_code`.

##### redirectUri: `string`<a id="redirecturi-string"></a>

Redirect URI. Required on `grant_type = (authorization_code|refresh_token)`.

##### refreshToken: `string`<a id="refreshtoken-string"></a>

Refresh token. Required on `grant_type = refresh_token`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth2/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.playlists.createNewPlaylist`<a id="soundcloudplaylistscreatenewplaylist"></a>

Creates a playlist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewPlaylistResponse = await soundcloud.playlists.createNewPlaylist(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playlist: [`CreateUpdatePlaylistRequestPlaylist`](./models/create-update-playlist-request-playlist.ts)<a id="playlist-createupdateplaylistrequestplaylistmodelscreate-update-playlist-request-playlistts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Playlist](./models/playlist.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/playlists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.playlists.deletePlaylist`<a id="soundcloudplaylistsdeleteplaylist"></a>

Deletes a playlist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePlaylistResponse = await soundcloud.playlists.deletePlaylist({
  playlistId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playlistId: `number`<a id="playlistid-number"></a>

SoundCloud playlist id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/playlists/{playlist_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.playlists.getPlaylistById`<a id="soundcloudplaylistsgetplaylistbyid"></a>

Returns a playlist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPlaylistByIdResponse = await soundcloud.playlists.getPlaylistById({
  playlistId: 1,
  access: ["playable,preview"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playlistId: `number`<a id="playlistid-number"></a>

SoundCloud playlist id

##### secretToken: `string`<a id="secrettoken-string"></a>

A secret token to fetch private playlists/tracks

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### showTracks: `boolean`<a id="showtracks-boolean"></a>

A boolean flag to request a playlist with or without tracks. Default is `true`.

#### 🔄 Return<a id="🔄-return"></a>

[Playlist](./models/playlist.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/playlists/{playlist_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.playlists.getTracks`<a id="soundcloudplaylistsgettracks"></a>

Returns tracks under a playlist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTracksResponse = await soundcloud.playlists.getTracks({
  playlistId: 1,
  access: ["playable,preview"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playlistId: `number`<a id="playlistid-number"></a>

SoundCloud playlist id

##### secretToken: `string`<a id="secrettoken-string"></a>

A secret token to fetch private playlists/tracks

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeListLikedTracksResponse](./models/me-list-liked-tracks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/playlists/{playlist_id}/tracks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.playlists.listReposters`<a id="soundcloudplaylistslistreposters"></a>

Returns a collection of playlist\&#39;s reposters.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRepostersResponse = await soundcloud.playlists.listReposters({
  playlistId: 1,
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playlistId: `number`<a id="playlistid-number"></a>

SoundCloud playlist id

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/playlists/{playlist_id}/reposters` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.playlists.updatePlaylistById`<a id="soundcloudplaylistsupdateplaylistbyid"></a>

Updates a playlist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePlaylistByIdResponse =
  await soundcloud.playlists.updatePlaylistById({
    playlistId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playlistId: `number`<a id="playlistid-number"></a>

SoundCloud playlist id

##### playlist: [`CreateUpdatePlaylistRequestPlaylist`](./models/create-update-playlist-request-playlist.ts)<a id="playlist-createupdateplaylistrequestplaylistmodelscreate-update-playlist-request-playlistts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Playlist](./models/playlist.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/playlists/{playlist_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.reposts.playlistAsAuthenticatedUser`<a id="soundcloudrepostsplaylistasauthenticateduser"></a>

Reposts a playlist as the authenticated user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const playlistAsAuthenticatedUserResponse =
  await soundcloud.reposts.playlistAsAuthenticatedUser({
    playlistId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playlistId: `number`<a id="playlistid-number"></a>

SoundCloud playlist id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reposts/playlists/{playlist_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.reposts.removeRepost`<a id="soundcloudrepostsremoverepost"></a>

Removes a repost on a track as the authenticated user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeRepostResponse = await soundcloud.reposts.removeRepost({
  trackId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reposts/tracks/{track_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.reposts.removeRepostOnPlaylist`<a id="soundcloudrepostsremoverepostonplaylist"></a>

Removes a repost on a playlist as the authenticated user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeRepostOnPlaylistResponse =
  await soundcloud.reposts.removeRepostOnPlaylist({
    playlistId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### playlistId: `number`<a id="playlistid-number"></a>

SoundCloud playlist id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reposts/playlists/{playlist_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.reposts.trackAsAuthenticatedUser`<a id="soundcloudrepoststrackasauthenticateduser"></a>

Reposts a track as the authenticated user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const trackAsAuthenticatedUserResponse =
  await soundcloud.reposts.trackAsAuthenticatedUser({
    trackId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reposts/tracks/{track_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.search.byQuery`<a id="soundcloudsearchbyquery"></a>

Performs a track search based on a query

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const byQueryResponse = await soundcloud.search.byQuery({
  access: ["playable,preview"],
  limit: 50,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

search

##### ids: `string`<a id="ids-string"></a>

A comma separated list of track ids to filter on

##### genres: `string`<a id="genres-string"></a>

A comma separated list of genres

##### tags: `string`<a id="tags-string"></a>

A comma separated list of tags

##### bpm: [`SearchByQueryBpmParameter`](./models/search-by-query-bpm-parameter.ts)<a id="bpm-searchbyquerybpmparametermodelssearch-by-query-bpm-parameterts"></a>

Return tracks with a specified bpm[from], bpm[to]

##### duration: [`SearchByQueryDurationParameter`](./models/search-by-query-duration-parameter.ts)<a id="duration-searchbyquerydurationparametermodelssearch-by-query-duration-parameterts"></a>

Return tracks within a specified duration range

##### createdAt: [`SearchByQueryCreatedAtParameter`](./models/search-by-query-created-at-parameter.ts)<a id="createdat-searchbyquerycreatedatparametermodelssearch-by-query-created-at-parameterts"></a>

(yyyy-mm-dd hh:mm:ss) return tracks created within the specified dates

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### offset: `number`<a id="offset-number"></a>

Offset of first result. Deprecated, use `linked_partitioning` instead.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeListLikedTracksResponse](./models/me-list-liked-tracks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.search.byQuery_0`<a id="soundcloudsearchbyquery_0"></a>

Performs a playlist search based on a query

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const byQuery_0Response = await soundcloud.search.byQuery_0({
  access: ["playable,preview"],
  limit: 50,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

search

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### showTracks: `boolean`<a id="showtracks-boolean"></a>

A boolean flag to request a playlist with or without tracks. Default is `true`.

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### offset: `number`<a id="offset-number"></a>

Offset of first result. Deprecated, use `linked_partitioning` instead.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeGetLikedPlaylistsResponse](./models/me-get-liked-playlists-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/playlists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.search.userQuery`<a id="soundcloudsearchuserquery"></a>

Performs a user search based on a query

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const userQueryResponse = await soundcloud.search.userQuery({
  limit: 50,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

search

##### ids: `string`<a id="ids-string"></a>

A comma separated list of track ids to filter on

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### offset: `number`<a id="offset-number"></a>

Offset of first result. Deprecated, use `linked_partitioning` instead.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.tracks.createComment`<a id="soundcloudtrackscreatecomment"></a>

Returns the newly created comment on success

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCommentResponse = await soundcloud.tracks.createComment({
  trackId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

##### comment: [`TracksCreateCommentRequestComment`](./models/tracks-create-comment-request-comment.ts)<a id="comment-trackscreatecommentrequestcommentmodelstracks-create-comment-request-commentts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Comment](./models/comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks/{track_id}/comments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.tracks.deleteTrack`<a id="soundcloudtracksdeletetrack"></a>

Deletes a track.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTrackResponse = await soundcloud.tracks.deleteTrack({
  trackId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks/{track_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.tracks.getById`<a id="soundcloudtracksgetbyid"></a>

Returns a track.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await soundcloud.tracks.getById({
  trackId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

##### secretToken: `string`<a id="secrettoken-string"></a>

A secret token to fetch private playlists/tracks

#### 🔄 Return<a id="🔄-return"></a>

[Track](./models/track.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks/{track_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.tracks.getComments`<a id="soundcloudtracksgetcomments"></a>

Returns the comments posted on the track(track_id).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentsResponse = await soundcloud.tracks.getComments({
  trackId: 1,
  limit: 50,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### offset: `number`<a id="offset-number"></a>

Offset of first result. Deprecated, use `linked_partitioning` instead.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[Comments](./models/comments.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks/{track_id}/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.tracks.getFavoriters`<a id="soundcloudtracksgetfavoriters"></a>

Returns a list of users who have favorited or liked the track.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFavoritersResponse = await soundcloud.tracks.getFavoriters({
  trackId: 1,
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks/{track_id}/favoriters` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.tracks.getRelatedTracks`<a id="soundcloudtracksgetrelatedtracks"></a>

Returns all related tracks of track on SoundCloud.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRelatedTracksResponse = await soundcloud.tracks.getRelatedTracks({
  trackId: 1,
  access: ["playable,preview"],
  limit: 50,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### offset: `number`<a id="offset-number"></a>

Offset of first result. Deprecated, use `linked_partitioning` instead.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeListLikedTracksResponse](./models/me-list-liked-tracks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks/{track_id}/related` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.tracks.getStreamableUrls`<a id="soundcloudtracksgetstreamableurls"></a>

Returns a track\&#39;s streamable URLs

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStreamableUrlsResponse = await soundcloud.tracks.getStreamableUrls({
  trackId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

##### secretToken: `string`<a id="secrettoken-string"></a>

A secret token to fetch private playlists/tracks

#### 🔄 Return<a id="🔄-return"></a>

[Streams](./models/streams.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks/{track_id}/streams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.tracks.listReposters`<a id="soundcloudtrackslistreposters"></a>

Returns a collection of track\&#39;s reposters.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRepostersResponse = await soundcloud.tracks.listReposters({
  trackId: 1,
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks/{track_id}/reposters` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.tracks.updateTrackInformation`<a id="soundcloudtracksupdatetrackinformation"></a>

Updates a track\&#39;s information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTrackInformationResponse =
  await soundcloud.tracks.updateTrackInformation({
    trackId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackId: `number`<a id="trackid-number"></a>

SoundCloud Track id

##### track: [`TrackMetadataRequestTrack`](./models/track-metadata-request-track.ts)<a id="track-trackmetadatarequesttrackmodelstrack-metadata-request-trackts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Track](./models/track.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks/{track_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.tracks.uploadNewTrack`<a id="soundcloudtracksuploadnewtrack"></a>

Uploads a new track.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadNewTrackResponse = await soundcloud.tracks.uploadNewTrack({
  track_sharing: "public",
  track_embeddable_by: "all",
  track_streamable: true,
  track_downloadable: true,
  track_license: "no-rights-reserved",
  track_commentable: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trackTitle: `string`<a id="tracktitle-string"></a>

##### trackAssetData: `Uint8Array | File | buffer.File`<a id="trackassetdata-uint8array--file--bufferfile"></a>

##### trackPermalink: `string`<a id="trackpermalink-string"></a>

##### trackSharing: `string`<a id="tracksharing-string"></a>

##### trackEmbeddableBy: `string`<a id="trackembeddableby-string"></a>

who can embed this track \\\"all\\\", \\\"me\\\", or \\\"none\\\"

##### trackPurchaseUrl: `string`<a id="trackpurchaseurl-string"></a>

##### trackDescription: `string`<a id="trackdescription-string"></a>

##### trackGenre: `string`<a id="trackgenre-string"></a>

##### trackTagList: `string`<a id="tracktaglist-string"></a>

The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.

##### trackLabelName: `string`<a id="tracklabelname-string"></a>

##### trackRelease: `string`<a id="trackrelease-string"></a>

##### trackReleaseDate: `string`<a id="trackreleasedate-string"></a>

string, formatted as yyyy-mm-dd, representing release date

##### trackStreamable: `boolean`<a id="trackstreamable-boolean"></a>

##### trackDownloadable: `boolean`<a id="trackdownloadable-boolean"></a>

##### trackLicense: `string`<a id="tracklicense-string"></a>

Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa

##### trackCommentable: `boolean`<a id="trackcommentable-boolean"></a>

##### trackIsrc: `string`<a id="trackisrc-string"></a>

##### trackArtworkData: `Uint8Array | File | buffer.File`<a id="trackartworkdata-uint8array--file--bufferfile"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Track](./models/track.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tracks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.users.getFollowers`<a id="soundcloudusersgetfollowers"></a>

Returns a list of users that follows (user_id).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFollowersResponse = await soundcloud.users.getFollowers({
  userId: 1,
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/followers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.users.getFollowingById`<a id="soundcloudusersgetfollowingbyid"></a>

Returns (following_id) that is followed by (user_id).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFollowingByIdResponse = await soundcloud.users.getFollowingById({
  userId: 1,
  followingId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

##### followingId: `number`<a id="followingid-number"></a>

SoundCloud User id to denote a Following of a user

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/followings/{following_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.users.getUser`<a id="soundcloudusersgetuser"></a>

Returns a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserResponse = await soundcloud.users.getUser({
  userId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.users.getUserFollowings`<a id="soundcloudusersgetuserfollowings"></a>

Returns list of users that (user_id) follows.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserFollowingsResponse = await soundcloud.users.getUserFollowings({
  userId: 1,
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/followings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.users.getUserPlaylists`<a id="soundcloudusersgetuserplaylists"></a>

Returns a list of user\&#39;s playlists.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPlaylistsResponse = await soundcloud.users.getUserPlaylists({
  userId: 1,
  access: ["playable,preview"],
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### showTracks: `boolean`<a id="showtracks-boolean"></a>

A boolean flag to request a playlist with or without tracks. Default is `true`.

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeGetLikedPlaylistsResponse](./models/me-get-liked-playlists-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/playlists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.users.getUserTracks`<a id="soundcloudusersgetusertracks"></a>

Returns a list of user\&#39;s tracks.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserTracksResponse = await soundcloud.users.getUserTracks({
  userId: 1,
  access: ["playable,preview"],
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeListLikedTracksResponse](./models/me-list-liked-tracks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/tracks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.users.getUserWebProfiles`<a id="soundcloudusersgetuserwebprofiles"></a>

Returns list of user\&#39;s links added to their profile (website, facebook, instagram).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserWebProfilesResponse = await soundcloud.users.getUserWebProfiles({
  userId: 1,
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

#### 🔄 Return<a id="🔄-return"></a>

[WebProfilesInner](./models/web-profiles-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/web-profiles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.users.listFavorites`<a id="soundclouduserslistfavorites"></a>

Returns a list of user\&#39;s favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user\&#39;s likes)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFavoritesResponse = await soundcloud.users.listFavorites({
  userId: 1,
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeListLikedTracksResponse](./models/me-list-liked-tracks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/favorites` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.users.listLikedPlaylists`<a id="soundclouduserslistlikedplaylists"></a>

Returns a list of user\&#39;s liked playlists.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLikedPlaylistsResponse = await soundcloud.users.listLikedPlaylists({
  userId: 1,
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeGetLikedPlaylistsResponse](./models/me-get-liked-playlists-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/likes/playlists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `soundcloud.users.listLikedTracks`<a id="soundclouduserslistlikedtracks"></a>

Returns a list of user\&#39;s liked tracks.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLikedTracksResponse = await soundcloud.users.listLikedTracks({
  userId: 1,
  access: ["playable,preview"],
  limit: 50,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `number`<a id="userid-number"></a>

SoundCloud User id

##### access: `string`[]<a id="access-string"></a>

Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you\'d like to see all possible tracks. See `Track#access` schema for more details. 

##### limit: `number`<a id="limit-number"></a>

Number of results to return in the collection.

##### linkedPartitioning: `boolean`<a id="linkedpartitioning-boolean"></a>

Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)

#### 🔄 Return<a id="🔄-return"></a>

[MeListLikedTracksResponse](./models/me-list-liked-tracks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/likes/tracks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
