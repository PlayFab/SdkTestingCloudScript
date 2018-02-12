# Sdk-Testing Cloud Script README

Cloud Script example, and TypeScript typings for PlayFab Cloud Script Environment

Cloud Script is optional.  It allows you to define logic that runs on a secure PlayFab server.  TypeScript is additionally optional, as it allows you to write your Cloud Script with additional validation.


## 1. Overview:

This project serves several purposes:

1. Demonstrate a repository linked to your PlayFab title, which automatically populates the Cloud Script for your title
  * All *.js files are merged, and then that merged file becomes your title's Cloud Script
2. Provide you a working [Cloud Script file](ExampleCloudScript.js)
3. Demonstrate the [Cloud Script typings file](https://github.com/PlayFab/SdkTestingCloudScript/blob/master/Scripts/typings/PlayFab/CloudScript.d.ts) which will define the PlayFab environment for you


## 2. Using Cloud Script

For more information about Cloud Script, consult [our guide](https://api.playfab.com/docs/using-cloud-script/)


## 3. TypeScript

The PlayFab Cloud Script feature does not utilize TypeScript directly.  TypeScript is a superset of JavaScript, which provides strong typing and validation for JavaScript.  You can write your Cloud Script in TypeScript, generate the corresponding JavaScript, and submit the JavaScript to your title.

[Here is a starting place if you wish to learn TypeScript](http://www.typescriptlang.org/)


## 4. Acknowledgements

[CloudScript.d.ts](https://github.com/PlayFab/SdkTestingCloudScript/blob/master/Scripts/typings/PlayFab/CloudScript.d.ts) was created using our SdkGenerator by [Joshua Strunk](https://joshuastrunk.com/) @ [Flying Car Games Inc](http://flyingcargames.com/)


## 5. Troubleshooting:

Our Developer Success Team can assist with answering any questions as well as process any feedback you have about PlayFab services.

[Forums, Support and Knowledge Base](https://community.playfab.com/index.html)


## 6. Copyright and Licensing Information:

  Apache License -- 
  Version 2.0, January 2004
  http://www.apache.org/licenses/

  Full details available within the LICENSE file.
