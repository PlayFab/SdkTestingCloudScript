interface StoreCycleTitleData { [key: string]: string[] }
// It's important for this example to have a clear idea of what this data looks like
// Your real data would only be in TitleData, stored as a json string in the "activeEvents" key
var EXAMPLE_STORE_CYCLE: StoreCycleTitleData = {
    "daily": ["daily_monday", "daily_tuesday", "daily_wednesday", "daily_thursday", "daily_friday", "daily_saturday", "daily_sunday"],
    "weekly": ["weekly_red", "weekly_green", "weekly_blue"],
    "holiday": [null, "Thanksgiving"]
}
var DEBUG_ENABLED = true; // Allows you to call manually with ExecuteCloudScript. Set this to false in production

// Read TitleData, getting live active events, and the static information about event cycles
function GetTitleEventInfo() {
    var titleRequest: PlayFabServerModels.GetTitleDataRequest = { Keys: ["activeEvents", "storeCycles"] };
    var titleResponse = server.GetTitleData(titleRequest);


    var activeEvents: string[] = null;
    if (titleResponse.Data.hasOwnProperty("activeEvents"))
        activeEvents = JSON.parse(titleResponse.Data["activeEvents"]);
    if (!activeEvents)
        activeEvents = [];

    var storeCycles: StoreCycleTitleData = null;
    if (titleResponse.Data.hasOwnProperty("storeCycles"))
        storeCycles = JSON.parse(titleResponse.Data["storeCycles"]);;
    if (!storeCycles)
        storeCycles = EXAMPLE_STORE_CYCLE;

    return {
        activeEvents: activeEvents,
        storeCycles: storeCycles
    };
}

// Update TitleData, setting new live active events
function SetTitleEventInfo(activeEvents: string[]) {
    var titleRequest: PlayFabServerModels.SetTitleDataRequest = { Key: "activeEvents", Value: JSON.stringify(activeEvents) };
    server.SetTitleData(titleRequest);
}

function CycleEvent(cycleType: string, cycleTo: string = null): string[] {
    var eventInfo = GetTitleEventInfo();
    var cycleList = eventInfo.storeCycles[cycleType];

    var prevIndex: number = 0;
    for (var i = 0; i < cycleList.length; i++) {
        for (var j = 0; j < eventInfo.activeEvents.length; j++) {
            if (eventInfo.activeEvents[j] === cycleList[i]) {
                eventInfo.activeEvents.splice(j, 1);
                prevIndex = i;
            }
        }
    }

    if (!cycleTo) // Determine the next event if unspecified
        cycleTo = cycleList[(prevIndex + 1) % cycleList.length];
    if (cycleTo) // Set the next event if defined
        eventInfo.activeEvents.push(cycleTo);

    SetTitleEventInfo(eventInfo.activeEvents);
    return eventInfo.activeEvents;
}

var CycleDailyEvent = function (args: any, context: any) {
    if (!DEBUG_ENABLED && !context) throw "This can only be called from PlayStream"; // Safety check to prevent Clients from changing events, and/or accidents
    return CycleEvent("daily");
}
handlers["CycleDailyEvent"] = CycleDailyEvent;

var CycleWeeklyEvent = function (args: any, context: any) {
    if (!DEBUG_ENABLED && !context) throw "This can only be called from PlayStream"; // Safety check to prevent Clients from changing events, and/or accidents
    return CycleEvent("weekly");
}
handlers["CycleWeeklyEvent"] = CycleWeeklyEvent;

var DisableHoliday = function (args: any, context: any) {
    if (!DEBUG_ENABLED && !context) throw "This can only be called from PlayStream"; // Safety check to prevent Clients from changing events, and/or accidents
    return CycleEvent("holiday", null);
}
handlers["DisableHoliday"] = DisableHoliday;

// Each Holiday-Enable needs its own handler since context cannot contain any parameters.
// You could use additional title-data to determine when to activate/deactivate holidays
var EnableThanksgiving = function (args: any, context: any) {
    if (!DEBUG_ENABLED && !context) throw "This can only be called from PlayStream"; // Safety check to prevent Clients from changing events, and/or accidents
    return CycleEvent("holiday", "Thanksgiving");
}
handlers["EnableThanksgiving"] = EnableThanksgiving;
