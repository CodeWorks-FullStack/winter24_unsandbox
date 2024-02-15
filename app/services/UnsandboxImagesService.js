import { AppState } from "../AppState.js";
import { UnsandboxImage } from "../models/UnsandboxImage.js";
import { unsandboxAPI } from "./AxiosService.js"

const randomImage = {
  "id": "lKH2LsNG5WY",
  "slug": "a-boat-traveling-down-a-river-under-a-cloudy-sky-lKH2LsNG5WY",
  "created_at": "2024-01-24T02:16:08Z",
  "updated_at": "2024-02-15T06:53:10Z",
  "promoted_at": "2024-01-24T14:03:23Z",
  "width": 6016,
  "height": 4016,
  "color": "#262626",
  "blur_hash": "LOCGMo?bRORj.Tx]RioLpex]jsof",
  "description": null,
  "alt_description": "a boat traveling down a river under a cloudy sky",
  "breadcrumbs": [],
  "urls": {
    "raw": "https://images.unsplash.com/photo-1706059924488-29e13a25b07b?ixid=M3wzMTA1MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDgwMjAxNDd8&ixlib=rb-4.0.3",
    "full": "https://images.unsplash.com/photo-1706059924488-29e13a25b07b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDgwMjAxNDd8&ixlib=rb-4.0.3&q=85",
    "regular": "https://images.unsplash.com/photo-1706059924488-29e13a25b07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDgwMjAxNDd8&ixlib=rb-4.0.3&q=80&w=1080",
    "small": "https://images.unsplash.com/photo-1706059924488-29e13a25b07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDgwMjAxNDd8&ixlib=rb-4.0.3&q=80&w=400",
    "thumb": "https://images.unsplash.com/photo-1706059924488-29e13a25b07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDgwMjAxNDd8&ixlib=rb-4.0.3&q=80&w=200",
    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706059924488-29e13a25b07b"
  },
  "links": {
    "self": "https://api.unsplash.com/photos/a-boat-traveling-down-a-river-under-a-cloudy-sky-lKH2LsNG5WY",
    "html": "https://unsplash.com/photos/a-boat-traveling-down-a-river-under-a-cloudy-sky-lKH2LsNG5WY",
    "download": "https://unsplash.com/photos/lKH2LsNG5WY/download?ixid=M3wzMTA1MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDgwMjAxNDd8",
    "download_location": "https://api.unsplash.com/photos/lKH2LsNG5WY/download?ixid=M3wzMTA1MjZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDgwMjAxNDd8"
  },
  "likes": 66,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {},
  "user": {
    "id": "17vHHjjLFKA",
    "updated_at": "2024-01-30T18:51:34Z",
    "username": "miekelauren",
    "name": "Mieke Campbell",
    "first_name": "Mieke",
    "last_name": "Campbell",
    "twitter_username": null,
    "portfolio_url": null,
    "bio": "Hi 💫 I'd love your feedback and challenges! Message me or find me on Instagram @miekelauren",
    "location": "Tasmania",
    "links": {
      "self": "https://api.unsplash.com/users/miekelauren",
      "html": "https://unsplash.com/@miekelauren",
      "photos": "https://api.unsplash.com/users/miekelauren/photos",
      "likes": "https://api.unsplash.com/users/miekelauren/likes",
      "portfolio": "https://api.unsplash.com/users/miekelauren/portfolio",
      "following": "https://api.unsplash.com/users/miekelauren/following",
      "followers": "https://api.unsplash.com/users/miekelauren/followers"
    },
    "profile_image": {
      "small": "https://images.unsplash.com/profile-1610710036312-5f11f3d12790image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
      "medium": "https://images.unsplash.com/profile-1610710036312-5f11f3d12790image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
      "large": "https://images.unsplash.com/profile-1610710036312-5f11f3d12790image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    },
    "instagram_username": "miekelauren",
    "total_collections": 12,
    "total_likes": 226,
    "total_photos": 267,
    "total_promoted_photos": 34,
    "accepted_tos": true,
    "for_hire": true,
    "social": {
      "instagram_username": "miekelauren",
      "portfolio_url": null,
      "twitter_username": null,
      "paypal_email": null
    }
  },
  "exif": {
    "make": "NIKON CORPORATION",
    "model": "NIKON Z 5",
    "name": "NIKON CORPORATION, NIKON Z 5",
    "exposure_time": "8",
    "aperture": "14.0",
    "focal_length": "28.0",
    "iso": 50
  },
  "location": {
    "name": null,
    "city": null,
    "country": null,
    "position": {
      "latitude": 0,
      "longitude": 0
    }
  },
  "meta": {
    "index": true
  },
  "public_domain": false,
  "tags": [
    {
      "type": "search",
      "title": "amsterdam hotel"
    },
    {
      "type": "search",
      "title": "amsterdam houses"
    },
    {
      "type": "search",
      "title": "netherlands"
    },
    {
      "type": "search",
      "title": "canal house"
    },
    {
      "type": "search",
      "title": "canal lights"
    },
    {
      "type": "search",
      "title": "canals at night"
    },
    {
      "type": "search",
      "title": "canals"
    },
    {
      "type": "search",
      "title": "amsterdam"
    },
    {
      "type": "search",
      "title": "cityscape"
    },
    {
      "type": "search",
      "title": "building"
    },
    {
      "type": "landing_page",
      "title": "city",
      "source": {
        "ancestry": {
          "type": {
            "slug": "wallpapers",
            "pretty_slug": "HD Wallpapers"
          },
          "category": {
            "slug": "travel",
            "pretty_slug": "Travel"
          },
          "subcategory": {
            "slug": "city",
            "pretty_slug": "City"
          }
        },
        "title": "Hd city wallpapers",
        "subtitle": "Download free city wallpapers",
        "description": "Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.",
        "meta_title": "City Wallpapers: Free HD Download [500+ HQ] | Unsplash",
        "meta_description": "Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.",
        "cover_photo": {
          "id": "Nyvq2juw4_o",
          "slug": "white-and-brown-city-buildings-during-daytime-Nyvq2juw4_o",
          "created_at": "2016-11-01T00:26:28Z",
          "updated_at": "2024-02-07T23:58:32Z",
          "promoted_at": "2016-11-01T00:26:28Z",
          "width": 3465,
          "height": 2131,
          "color": "#0c2640",
          "blur_hash": "LhEMa,W=WVWW_4kBjtW=?bkBaefR",
          "description": "City architecture and skyscrapers near waterfront",
          "alt_description": "white and brown city buildings during daytime",
          "breadcrumbs": [
            {
              "slug": "wallpapers",
              "title": "HD Wallpapers",
              "index": 0,
              "type": "landing_page"
            },
            {
              "slug": "travel",
              "title": "HD Travel Wallpapers",
              "index": 1,
              "type": "landing_page"
            },
            {
              "slug": "chicago",
              "title": "HD Chicago Wallpapers",
              "index": 2,
              "type": "landing_page"
            }
          ],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
            "regular": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "small": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
            "thumb": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477959858617-67f85cf4f1df"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/white-and-brown-city-buildings-during-daytime-Nyvq2juw4_o",
            "html": "https://unsplash.com/photos/white-and-brown-city-buildings-during-daytime-Nyvq2juw4_o",
            "download": "https://unsplash.com/photos/Nyvq2juw4_o/download",
            "download_location": "https://api.unsplash.com/photos/Nyvq2juw4_o/download"
          },
          "likes": 3696,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {},
          "premium": false,
          "plus": false,
          "user": {
            "id": "1--L3vNK0TA",
            "updated_at": "2024-01-12T16:07:15Z",
            "username": "peterlaster",
            "name": "Pedro Lastra",
            "first_name": "Pedro",
            "last_name": "Lastra",
            "twitter_username": null,
            "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
            "bio": null,
            "location": null,
            "links": {
              "self": "https://api.unsplash.com/users/peterlaster",
              "html": "https://unsplash.com/@peterlaster",
              "photos": "https://api.unsplash.com/users/peterlaster/photos",
              "likes": "https://api.unsplash.com/users/peterlaster/likes",
              "portfolio": "https://api.unsplash.com/users/peterlaster/portfolio",
              "following": "https://api.unsplash.com/users/peterlaster/following",
              "followers": "https://api.unsplash.com/users/peterlaster/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": null,
            "total_collections": 10,
            "total_likes": 46,
            "total_photos": 85,
            "total_promoted_photos": 23,
            "accepted_tos": false,
            "for_hire": false,
            "social": {
              "instagram_username": null,
              "portfolio_url": "https://www.flickr.com/photos/lastingimages/",
              "twitter_username": null,
              "paypal_email": null
            }
          }
        }
      }
    },
    {
      "type": "search",
      "title": "outdoors"
    },
    {
      "type": "landing_page",
      "title": "Nature",
      "source": {
        "ancestry": {
          "type": {
            "slug": "images",
            "pretty_slug": "Images"
          },
          "category": {
            "slug": "nature",
            "pretty_slug": "Nature"
          }
        },
        "title": "Nature images",
        "subtitle": "Download free nature images",
        "description": "Nature produces the most astoundingly beautiful images: the swirling lava of a volcano, palm trees against a blue sky, snow-capped mountains towering above. Unsplash has magnificent , high-quality photos of all the delights that nature has to offer.",
        "meta_title": "100+ Nature Pictures | Download Free Images & Stock Photos on Unsplash",
        "meta_description": "Choose from hundreds of free nature pictures. Download HD nature photos for free on Unsplash.",
        "cover_photo": {
          "id": "VE5FRc7uiC4",
          "slug": "star-in-space-VE5FRc7uiC4",
          "created_at": "2018-10-15T08:58:20Z",
          "updated_at": "2024-02-07T16:10:09Z",
          "promoted_at": "2018-10-15T12:23:00Z",
          "width": 4640,
          "height": 3480,
          "color": "#262640",
          "blur_hash": "L21o;CogI7WARNaxt9j]Mvaxxwof",
          "description": "lost in the sky",
          "alt_description": "star in space",
          "breadcrumbs": [
            {
              "slug": "images",
              "title": "1,000,000+ Free Images",
              "index": 0,
              "type": "landing_page"
            },
            {
              "slug": "nature",
              "title": "Nature Images",
              "index": 1,
              "type": "landing_page"
            }
          ],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
            "regular": "https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "small": "https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
            "thumb": "https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1539593395743-7da5ee10ff07"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/star-in-space-VE5FRc7uiC4",
            "html": "https://unsplash.com/photos/star-in-space-VE5FRc7uiC4",
            "download": "https://unsplash.com/photos/VE5FRc7uiC4/download",
            "download_location": "https://api.unsplash.com/photos/VE5FRc7uiC4/download"
          },
          "likes": 126,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {
            "nature": {
              "status": "approved",
              "approved_on": "2020-04-06T14:20:12Z"
            }
          },
          "premium": false,
          "plus": false,
          "user": {
            "id": "PvaYY7qgvqU",
            "updated_at": "2024-01-28T18:35:15Z",
            "username": "akin",
            "name": "Akin Cakiner",
            "first_name": "Akin",
            "last_name": "Cakiner",
            "twitter_username": "pausyworld",
            "portfolio_url": "https://akincakiner.com/",
            "bio": "Get your beautiful photos featured on Instagram!\r\nCheck out my page @creatpix   Create the moment #creatpix ",
            "location": "almelo",
            "links": {
              "self": "https://api.unsplash.com/users/akin",
              "html": "https://unsplash.com/@akin",
              "photos": "https://api.unsplash.com/users/akin/photos",
              "likes": "https://api.unsplash.com/users/akin/likes",
              "portfolio": "https://api.unsplash.com/users/akin/portfolio",
              "following": "https://api.unsplash.com/users/akin/following",
              "followers": "https://api.unsplash.com/users/akin/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1655048539859-cd496ee39bd9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1655048539859-cd496ee39bd9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1655048539859-cd496ee39bd9image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "akinvisualz",
            "total_collections": 0,
            "total_likes": 32,
            "total_photos": 315,
            "total_promoted_photos": 26,
            "accepted_tos": true,
            "for_hire": true,
            "social": {
              "instagram_username": "akinvisualz",
              "portfolio_url": "https://akincakiner.com/",
              "twitter_username": "pausyworld",
              "paypal_email": null
            }
          }
        }
      }
    },
    {
      "type": "landing_page",
      "title": "scenery",
      "source": {
        "ancestry": {
          "type": {
            "slug": "wallpapers",
            "pretty_slug": "HD Wallpapers"
          },
          "category": {
            "slug": "nature",
            "pretty_slug": "Nature"
          },
          "subcategory": {
            "slug": "scenery",
            "pretty_slug": "Scenery"
          }
        },
        "title": "Hd scenery wallpapers",
        "subtitle": "Download free scenery wallpapers",
        "description": "Choose from a curated selection of scenery wallpapers for your mobile and desktop screens. Always free on Unsplash.",
        "meta_title": "Scenery Wallpapers: Free HD Download [500+ HQ] | Unsplash",
        "meta_description": "Choose from hundreds of free scenery wallpapers. Download HD wallpapers for free on Unsplash.",
        "cover_photo": {
          "id": "txtWlEUyW2Y",
          "slug": "brown-mountain-under-clear-blue-sky-txtWlEUyW2Y",
          "created_at": "2017-07-17T20:21:51Z",
          "updated_at": "2024-02-12T19:48:50Z",
          "promoted_at": "2017-07-19T12:00:45Z",
          "width": 6000,
          "height": 4000,
          "color": "#d9d9f3",
          "blur_hash": "L{Ez8JR.WCaxyGaeWVa$RjWCoJjt",
          "description": null,
          "alt_description": "brown mountain under clear blue sky",
          "breadcrumbs": [],
          "urls": {
            "raw": "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3",
            "full": "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
            "regular": "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "small": "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
            "thumb": "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1500322969630-a26ab6eb64cc"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/brown-mountain-under-clear-blue-sky-txtWlEUyW2Y",
            "html": "https://unsplash.com/photos/brown-mountain-under-clear-blue-sky-txtWlEUyW2Y",
            "download": "https://unsplash.com/photos/txtWlEUyW2Y/download",
            "download_location": "https://api.unsplash.com/photos/txtWlEUyW2Y/download"
          },
          "likes": 394,
          "liked_by_user": false,
          "current_user_collections": [],
          "sponsorship": null,
          "topic_submissions": {},
          "premium": false,
          "plus": false,
          "user": {
            "id": "qC-urTD_62E",
            "updated_at": "2024-01-23T18:01:33Z",
            "username": "huguesdb",
            "name": "Hugues de BUYER-MIMEURE",
            "first_name": "Hugues",
            "last_name": "de BUYER-MIMEURE",
            "twitter_username": null,
            "portfolio_url": "http://instagram.com/huguesdbm/",
            "bio": "Hi, I'm a french photographer with Sony Alpha 7IV based in Lyon, France.",
            "location": "Lyon",
            "links": {
              "self": "https://api.unsplash.com/users/huguesdb",
              "html": "https://unsplash.com/@huguesdb",
              "photos": "https://api.unsplash.com/users/huguesdb/photos",
              "likes": "https://api.unsplash.com/users/huguesdb/likes",
              "portfolio": "https://api.unsplash.com/users/huguesdb/portfolio",
              "following": "https://api.unsplash.com/users/huguesdb/following",
              "followers": "https://api.unsplash.com/users/huguesdb/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1500389500141-d453d040335c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
              "medium": "https://images.unsplash.com/profile-1500389500141-d453d040335c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
              "large": "https://images.unsplash.com/profile-1500389500141-d453d040335c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            },
            "instagram_username": "huguesdbm",
            "total_collections": 0,
            "total_likes": 43,
            "total_photos": 64,
            "total_promoted_photos": 15,
            "accepted_tos": true,
            "for_hire": false,
            "social": {
              "instagram_username": "huguesdbm",
              "portfolio_url": "http://instagram.com/huguesdbm/",
              "twitter_username": null,
              "paypal_email": null
            }
          }
        }
      }
    },
    {
      "type": "search",
      "title": "bridge"
    },
    {
      "type": "search",
      "title": "pont neuf"
    },
    {
      "type": "search",
      "title": "landmark"
    },
    {
      "type": "search",
      "title": "arched"
    },
    {
      "type": "search",
      "title": "arch"
    },
    {
      "type": "search",
      "title": "canal"
    }
  ],
  "tags_preview": [
    {
      "type": "search",
      "title": "amsterdam hotel"
    },
    {
      "type": "search",
      "title": "amsterdam houses"
    },
    {
      "type": "search",
      "title": "netherlands"
    }
  ],
  "views": 366972,
  "downloads": 7635,
  "topics": []
}

class UnsandboxImagesService {
  async getRandomImage() {
    const response = await unsandboxAPI.get('api/images/random')
    console.log('📡 got random image', response.data);
    // NOTE we get a single object here, not an array. No mapping!
    const newImage = new UnsandboxImage(response.data)
    // const newImage = new UnsandboxImage(randomImage)
    console.log('new image', newImage);
    AppState.unsandboxImage = newImage
  }
}

export const unsandboxImagesService = new UnsandboxImagesService()