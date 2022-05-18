# Sdk-Testing Cloud Script README

Cloud Script example, and TypeScript typings for PlayFab Cloud Script Environment

Cloud Script is optional.  It allows you to define logic that runs on a secure PlayFab server.  TypeScript is additionally optional, as it allows you to write your Cloud Script with additional validation.


## 1. Community Support

This is a community supported set of samples.

For new and existing users, you can use the current version as it is. The team at Microsoft would no longer be providing official support for those using this SDK. You can continue to get community support and updates at [PlayFab forums](https://community.playfab.com/index.html).

We are currently looking for reliable community partners to provide long-term support for this SDK. If you are interested to take ownership and provide future maintenance, let us know. 

What you have to do: 
* Fork this repo
* Push your updates
* Make sure you follow the Apache License, Version 2.0 guidelines for reproduction and modification, and document that Microsoft PlayFab is the original creator
* Go to [PlayFab forums](https://community.playfab.com/index.html)
* Write a post with a link to your forked repo so everyone knows about them

We're excited to hear from you. Thank you for your support and happy coding.

## 2. Overview:

This project serves several purposes:

1. Demonstrate a repository linked to your PlayFab title, which automatically populates the Cloud Script for your title
  * All *.js files are merged, and then that merged file becomes your title's Cloud Script
2. Provide you a working [Cloud Script file](ExampleCloudScript.js)
3. Demonstrate the [Cloud Script typings file](https://github.com/PlayFab/SdkTestingCloudScript/blob/master/Scripts/typings/PlayFab/CloudScript.d.ts) which will define the PlayFab environment for you


## 3. Using Cloud Script

For more information about Cloud Script, consult [our guide](https://api.playfab.com/docs/using-cloud-script/)


## 4. TypeScript

The PlayFab Cloud Script feature does not utilize TypeScript directly.  TypeScript is a superset of JavaScript, which provides strong typing and validation for JavaScript.  You can write your Cloud Script in TypeScript, generate the corresponding JavaScript, and submit the JavaScript to your title.

[Here is a starting place if you wish to learn TypeScript](http://www.typescriptlang.org/)


## 5. Acknowledgements

[CloudScript.d.ts](https://github.com/PlayFab/SdkTestingCloudScript/blob/master/Scripts/typings/PlayFab/CloudScript.d.ts) was created using our SdkGenerator by [Joshua Strunk](https://joshuastrunk.com/) @ [Flying Car Games Inc](http://flyingcargames.com/)


## 6. Troubleshooting:

Our Developer Success Team can assist with answering any questions as well as process any feedback you have about PlayFab services.

[Forums, Support and Knowledge Base](https://community.playfab.com/index.html)


## 7. Copyright and Licensing Information:

  Apache License -- 
  Version 2.0, January 2004
  http://www.apache.org/licenses/

  Full details available within the LICENSE file.
