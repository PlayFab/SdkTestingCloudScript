// Special key in the Title Data that contains an array of AB buckets that participate in the testing
var TITLE_AB_TEST_TITLE_KEY = "TitleDataAbTestSegmentIds";

var GetTitleDataAB = function (args, ctx): string {
    // The data key the player originally requested.
    var dataKey: string = args.TitleKey;

    // A variable to store AB segment of the player, if any
    var currentAbTestSegmentId: string = null;

    /*
     * We store a list of bucket IDs that participate in the AB testing in the title data.
     * This line extracts an array of such ids
     */
    var requestedTitleData = server.GetTitleData({ Keys: [TITLE_AB_TEST_TITLE_KEY, dataKey] });
    var defaultValue: string = requestedTitleData.Data.hasOwnProperty(dataKey) ? requestedTitleData.Data[dataKey] : null;
    var segmentIdJson: string = requestedTitleData.Data.hasOwnProperty(TITLE_AB_TEST_TITLE_KEY) ? requestedTitleData.Data[TITLE_AB_TEST_TITLE_KEY] : null;
    var abTestSegmentIds: string[] = JSON.parse(segmentIdJson);

    // This line extracts all the segments current player belongs to
    var playerSegments = server.GetPlayerSegments({ PlayFabId: currentPlayerId }).Segments;

    // Locate first ABTest segment the player belongs to
    for (var i = 0; i < playerSegments.length; i++) {
        var playerSegmentId: string = playerSegments[i].Id;
        if (abTestSegmentIds.indexOf(playerSegmentId) !== -1)
            currentAbTestSegmentId = playerSegmentId;
    }

    // If player does not belong to any tested segment, return a value for the original key
    if (!currentAbTestSegmentId)
        return defaultValue;

    /*
     * If player belongs to one of AB tested segments
     * we use ID of this segment to construct special key
     * First part of this key is the original key
     * Followed by underscore ('-') we add a suffix, which is ID of the bucket the player belongs to.
     */
    var abTestedKey: string = dataKey + "_" + currentAbTestSegmentId;

    // We try to get a value using our special key
    var result = server.GetTitleData({ Keys: [abTestedKey] });

    if (result.Data[abTestedKey]) // if we have data defined for this bucket, we return it
        return result.Data[abTestedKey];
    else // Otherwise, we return the value for the original key
        return defaultValue;
}
handlers["GetTitleDataAB"] = GetTitleDataAB;