const SELL_PRICE_RATIO: number = 0.75;

function SellItem_internal(soldItemInstanceId: string, requestedVcType: string) {
    var inventory = server.GetUserInventory({ PlayFabId: currentPlayerId });
    var itemInstance: PlayFabServerModels.ItemInstance = null;
    for (var i = 0; i < inventory.Inventory.length; i++) {
        if (inventory.Inventory[i].ItemInstanceId === soldItemInstanceId)
            itemInstance = inventory.Inventory[i];
    }
    if (!itemInstance) throw "Item instance not found"; // Protection against client providing incorrect data

    var catalog = server.GetCatalogItems({ CatalogVersion: itemInstance.CatalogVersion });
    var catalogItem: PlayFabServerModels.CatalogItem = null;
    for (var c = 0; c < catalog.Catalog.length; c++) {
        if (itemInstance.ItemId === catalog.Catalog[c].ItemId)
            catalogItem = catalog.Catalog[c];
    }
    if (!catalogItem) throw "Catalog Item not found"; // Title catalog consistency check (You should never remove a catalog/catalogItem if any player owns that item

    var buyPrice: number = 0;
    if (catalogItem.VirtualCurrencyPrices.hasOwnProperty(requestedVcType))
        buyPrice = catalogItem.VirtualCurrencyPrices[requestedVcType];
    if (buyPrice <= 0)
        throw "Cannot redeem this item for: " + requestedVcType; // The client requested a virtual currency which doesn't apply to this item

    // Once we get here all safety checks are passed - Perform the sell
    var sellPrice: number = Math.floor(buyPrice * SELL_PRICE_RATIO);
    server.AddUserVirtualCurrency({ PlayFabId: currentPlayerId, Amount: sellPrice, VirtualCurrency: requestedVcType });
    server.RevokeInventoryItem({ PlayFabId: currentPlayerId, ItemInstanceId: soldItemInstanceId });
}

interface ISellItemArgs {
    soldItemInstanceId: string;
    requestedVcType: string;
};
handlers.SellItem = function (args: ISellItemArgs) {
    if (!args || !args.soldItemInstanceId || !args.requestedVcType)
        throw "Invalid input parameters, expected soldItemInstanceId and requestedVcType";
    SellItem_internal(args.soldItemInstanceId, args.requestedVcType);
}

// Publisher data Examples
const PUBLISHER_USED_TITLES_KEY = "playedTitleIds";
handlers.TrackTitleUsage = function() {
    // Get the User Publisher Data for this player, and convert it into our expected format
    var getRequest: PlayFabServerModels.GetUserDataRequest = { Keys: [PUBLISHER_USED_TITLES_KEY], PlayFabId: currentPlayerId };
    var getResult: PlayFabServerModels.GetUserDataResult = server.GetUserPublisherInternalData(getRequest);
    var playedTitlesList: Array<string> = JSON.parse(getResult.Data[PUBLISHER_USED_TITLES_KEY].Value); // format is arbitrary, but this example assumes Array<string>
    if (!playedTitlesList)
        playedTitlesList = [];

    // Check if we've played this title already
    var alreadyPlayed: boolean = false;
    for (var i = 0; i < playedTitlesList.length; i++)
        alreadyPlayed = alreadyPlayed || playedTitlesList[i] === script.titleId;
    if (alreadyPlayed)
        return; // Nothing to do

    // Update the list of played titles, and re-save
    playedTitlesList.push(script.titleId);
    var setRequest: PlayFabServerModels.UpdateUserDataRequest = { PlayFabId: currentPlayerId, Data: { PUBLISHER_USED_TITLES_KEY: JSON.stringify(playedTitlesList) } };
    server.UpdateUserPublisherInternalData(setRequest);
}
