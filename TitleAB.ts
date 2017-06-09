var TITLE_AB_TEST_TITLE_KEY = "TitleDataAbTestSegmentIds";

handlers.GetTitleDataAB = function (args, ctx): { [key: string]: string } {
    var dataKey: string = args.TitleKey;
    var currentAbTestSegmentId: string = null;

    var abTestSegmentIds: string[] = JSON.parse(server.GetTitleData({ Keys: [TITLE_AB_TEST_TITLE_KEY] })[TITLE_AB_TEST_TITLE_KEY]);

    var playerSegments = server.GetPlayerSegments({ PlayFabId: currentPlayerId }).Segments;

    // Locate first ABTest segment the player belongs to
    for (var i = 0; i < playerSegments.length; i++) {
        var playerSegmentId: string = playerSegments[i].Id;
        if (abTestSegmentIds.indexOf(playerSegmentId) !== -1)
            currentAbTestSegmentId = playerSegmentId;
    }

    //If player does not belong to any tested segment, return 
    if (!currentAbTestSegmentId)
        return server.GetTitleData({ Keys: [dataKey] }).Data;

    // If player belongs to AB tested segment
    var abTestedKey: string = dataKey + "_" + currentAbTestSegmentId;
    var result = server.GetTitleData({ Keys: [abTestedKey] });

    if (result.Data[abTestedKey]) // If there is a/b tested data
        return result.Data;
    else //if no a/b tested data defined
        return server.GetTitleData({ Keys: [dataKey] }).Data;
}
