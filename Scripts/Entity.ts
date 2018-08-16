function GetEntityToken(params: any, context: IPlayFabContext): void {
    var getTokenRequest: PlayFabAuthenticationModels.GetEntityTokenRequest = {};
    var getTokenResponse: PlayFabAuthenticationModels.GetEntityTokenResponse = entity.GetEntityToken(getTokenRequest);
    var entityId: string = getTokenResponse.Entity.Id;
    var entityType: string = getTokenResponse.Entity.Type;
}
handlers.GetEntityToken = GetEntityToken;

function GetObjects(params: any, context: IPlayFabContext) {
    var getObjRequest: PlayFabDataModels.GetObjectsRequest = {
        Entity: {
            Id: params.entityId,
            Type: params.entityType
        }
    };
    var getObjResponse: PlayFabDataModels.GetObjectsResponse = entity.GetObjects(getObjRequest);
    var entityId: string = getObjResponse.Entity.Id;
    var entityType: string = getObjResponse.Entity.Type;
    var entityObjs: PlayFabDataModels.ObjectResult = getObjResponse.Objects["testKey"];
}
handlers.GetObjects = GetObjects;

