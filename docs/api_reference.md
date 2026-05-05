---
id: api-reference
title: API Reference (Example)
slug: /api-reference
---

# GitHub API Reference

This document provides a technical reference for three core GitHub API endpoints. All requests should use the base URL:

`https://api.github.com`

## 1. Get User Profile

Retrieves public profile information for a specific GitHub account.

- HTTP Method: `GET`
- URL: `/users/{username}`

### Parameters

| Name     | Type   | Required | Description                                   |
| -------- | ------ | -------- | --------------------------------------------- |
| username | String | Yes      | The unique GitHub handle (e.g., `kizmelvin`). |

### Example Request

```http
GET https://api.github.com/users/kizmelvin
```

### Example Response (200 OK)

```json
{
  "login": "Kizmelvin",
  "id": 49063484,
  "node_id": "MDQ6VXNlcjQ5MDYzNDg0",
  "avatar_url": "https://avatars.githubusercontent.com/u/49063484?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Kizmelvin",
  "html_url": "https://github.com/Kizmelvin",
  "type": "User",
  "site_admin": false,
  "name": "Chidi Eze",
  "company": "Hackmamba",
  "blog": "https://chidieze.com"
}
```

### Error Codes

| Code | Description                                        |
| ---- | -------------------------------------------------- |
| 404  | The specified username does not exist.             |
| 304  | There is no new data to return since last request. |

## 2. List User Repositories

Lists all public repositories for a specified user, with options for sorting and filtering.

- HTTP Method: `GET`
- URL: `/users/{username}/repos`

### Parameters

| Name     | Type    | Required | Description                                                     |
| -------- | ------- | -------- | --------------------------------------------------------------- |
| username | String  | Yes      | The handle of the user whose repos you want to list.            |
| type     | String  | No       | Can be `all`, `owner`, or `member`. Default: `owner`.           |
| sort     | String  | No       | Can be `created`, `updated`, or `pushed`. Default: `full_name`. |
| per_page | Integer | No       | Number of results per page (max 100). Default: `30`.            |

### Example Request

```http
GET https://api.github.com/users/kizmelvin/repos?sort=created&per_page=1
```

### Example Response (200 OK)

```json
{
  "id": 1211962663,
  "node_id": "R_kgDOSD0VJw",
  "name": "yeildprime",
  "full_name": "Kizmelvin/yeildprime",
  "private": false,
  "owner": {
    "login": "Kizmelvin",
    "id": 49063484,
    "node_id": "MDQ6VXNlcjQ5MDYzNDg0",
    "avatar_url": "https://avatars.githubusercontent.com/u/49063484?v=4",
    "html_url": "https://github.com/Kizmelvin",
    "followers_url": "https://api.github.com/users/Kizmelvin/followers",
    "following_url": "https://api.github.com/users/Kizmelvin/following{/other_user}",
    "gists_url": "https://api.github.com/users/Kizmelvin/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Kizmelvin/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Kizmelvin/subscriptions",
    "organizations_url": "https://api.github.com/users/Kizmelvin/orgs",
    "repos_url": "https://api.github.com/users/Kizmelvin/repos",
    "events_url": "https://api.github.com/users/Kizmelvin/events{/privacy}",
    "type": "User",
    "site_admin": false
  }
}
```

### Error Codes

| Code | Description                                  |
| ---- | -------------------------------------------- |
| 404  | User not found.                              |
| 403  | API rate limit exceeded for your IP address. |

## 3. Create a Gist

Creates a new Gist with one or more files. This endpoint requires authentication.

- HTTP Method: `POST`
- URL: `/gists`

### Request Body (JSON)

| Name        | Type    | Required | Description                                                              |
| ----------- | ------- | -------- | ------------------------------------------------------------------------ |
| description | String  | No       | A short description for the gist.                                        |
| public      | Boolean | Yes      | Set to `true` to make the gist searchable, or `false` to keep it secret. |
| files       | Object  | Yes      | One or more files with filename and content definitions.                 |

### Example Request

```http
POST https://api.github.com/gists
Authorization: Bearer YOUR_GITHUB_TOKEN
Content-Type: application/json

{
  "description": "Creating a Gist from Postman",
  "public": true,
  "files": {
    "hello.txt": {
      "content": "Document three endpoints of a public API (e.g., GitHub API, OpenWeather API, or a Hackmamba client API if available)"
    }
  }
}
```

### Example Response (201 Created)

```json
{
  "id": "7423cd827ce8d213bbf3cce36e3c4f68",
  "node_id": "G_kwDOAuymPNoAIDc0MjNjZDgyN2NlOGQyMTNiYmYzY2NlMzZlM2M0ZjY4",
  "files": {
    "hello.txt": {
      "filename": "hello.txt",
      "type": "text/plain",
      "language": "Text",
      "size": 116,
      "truncated": false,
      "content": "Document three endpoints of a public API (e.g., GitHub API, OpenWeather API, or a Hackmamba client API if available)",
      "encoding": "utf-8"
    }
  },
  "public": true,
  "created_at": "2026-04-30T00:25:03Z",
  "updated_at": "2026-04-30T00:25:04Z",
  "description": "Creating a Gist from Postman"
}
```

### Error Codes

| Code | Description                                           |
| ---- | ----------------------------------------------------- |
| 401  | Missing or invalid Personal Access Token.             |
| 422  | Validation failed (e.g., missing the `files` object). |
