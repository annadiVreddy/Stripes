

function submitData(){
    
    var firmName = document.getElementById('firmName').value;
    var contractor = document.getElementById('contractor').value;
    document.getElementById('contractorName').innerHTML = contractor;
    var workAddress = document.getElementById('workAddress').value;
    document.getElementById('address').innerHTML = workAddress;
    
    var totalArea = document.getElementById('totalArea').value;
    var costPerSqF = document.getElementById('costPerSqF').value;
    
    var totalCost = totalArea*costPerSqF;
    console.log("total Cost "+totalCost);
    
     var calculateAmountFromPercentage = function(totCost, percent){
        return (percent/100)*totCost;
    }
    
    //Preparation Priliminaries
    
    //Permits and fees
    var permitsAndFeesPercentage = document.getElementById('permitsAndFeesPercentage').value;
    var permitsAndFeesSpecComment = document.getElementById('permitsAndFeesSpecComment').value;
    var permitsAndFeesClientInfo = document.getElementById('permitsAndFeesClientInfo').value;
    
    
     var permitsAndFeesValue = calculateAmountFromPercentage(totalCost, permitsAndFeesPercentage);
    
    document.getElementById('permitandfeesdesc').innerHTML = permitsAndFeesSpecComment;
    document.getElementById('permitandfeesclientdesc').innerHTML = permitsAndFeesClientInfo;
    document.getElementById('permitsanddescvalue').innerHTML = permitsAndFeesValue;
        
    console.log("permitsAndFeesValue "+permitsAndFeesValue)
    
    
    //Demolition
    var demolitionPercentage = document.getElementById('demolitionPercentage').value;
    var demolitionSpecInfo = document.getElementById('demolitionSpecInfo').value;
    var demolitionClientInfo = document.getElementById('demolitionClientInfo').value;
    
    var demolitionValue = calculateAmountFromPercentage(totalCost, demolitionPercentage);
    
    
    document.getElementById('demolitionValue').innerHTML = demolitionValue;
    document.getElementById('demolitionSpecInfovalue').innerHTML = demolitionSpecInfo;
    document.getElementById('demolitionClientInfovalue').innerHTML = demolitionClientInfo;
    
    
    
    
    
    console.log("demolitionValue "+demolitionValue);
    
    
    //utility connections
    var utilityPercentage = document.getElementById('utilityPercentage').value;
    var utilitySpecInfo = document.getElementById('utilitySpecInfo').value;
    var utilityClientInfo = document.getElementById('utilityClientInfo').value;
    
    var utilityValue = calculateAmountFromPercentage(totalCost, utilityPercentage);
    
    
    document.getElementById('utilityValue').innerHTML = utilityValue;
    document.getElementById('utilitySpecInfovalue').innerHTML = utilitySpecInfo;
    document.getElementById('utilityClientInfovalue').innerHTML = utilityClientInfo;
    
    
    
    console.log("utilityValue "+utilityValue);
    
    //Masnory
    
    //fireplace
    
    var fireplacePercentage = document.getElementById('fireplacePercentage').value;
    var fireplaceClientInfo = document.getElementById('fireplaceClientInfo').value;
    
    var fireplaceValue = calculateAmountFromPercentage(totalCost, fireplacePercentage);
    
    document.getElementById('fireplaceValue').innerHTML = fireplaceValue;
    document.getElementById('fireplaceClientInfoValue').innerHTML = fireplaceClientInfo;
    
    
    
    
    console.log("fireplaceValue "+fireplaceValue);
    
    //Brickvineer
    
    var brickVinPercentage = document.getElementById('brickVinPercentage').value;
    var brickVinClientInfo = document.getElementById('brickVinClientInfo').value;
    
    var brickVinValue = calculateAmountFromPercentage(totalCost, brickVinPercentage);
    
    
    document.getElementById('brickVinValue').innerHTML = brickVinValue;
    document.getElementById('brickVinClientInfoFinalToDisplay').innerHTML = brickVinClientInfo;
    
    
    
    
    
    
    
    console.log("brickVinValue "+brickVinValue);
    
    //windows and doors
    
    //front door
    var frontDoorPercentage = document.getElementById('frontDoorPercentage').value;
    var frontDoorSpecInfo = document.getElementById('frontDoorSpecInfo').value;
    var frontDoorClientInfo = document.getElementById('frontDoorClientInfo').value;
    
    var frontDoorValue = calculateAmountFromPercentage(totalCost, frontDoorPercentage);
    
    document.getElementById('frontDoorValueFinalToDisplay').innerHTML = frontDoorValue;
    document.getElementById('frontDoorSpecInfoFinalToDisplay').innerHTML = frontDoorSpecInfo;
    document.getElementById('frontDoorClientInfoFinalToDisplay').innerHTML = frontDoorClientInfo;
    
    
    console.log("frontDoorValue "+frontDoorValue);
    
    //Other ext doors
    var OtherDoorsPercentage = document.getElementById('OtherDoorsPercentage').value;
    var OtherDoorsSpecInfo = document.getElementById('OtherDoorsSpecInfo').value;
    var OtherDoorsClientInfo = document.getElementById('OtherDoorsClientInfo').value;
    
    var OtherDoorsValue = calculateAmountFromPercentage(totalCost, OtherDoorsPercentage);
    
    document.getElementById('OtherDoorsValueFinalToDisplay').innerHTML = OtherDoorsValue;
    document.getElementById('OtherDoorsSpecInfoFinalToDisplay').innerHTML = OtherDoorsSpecInfo;
    document.getElementById('OtherDoorsClientInfoFinalToDisplay').innerHTML = OtherDoorsClientInfo;
    
    
    console.log("OtherDoorsValue "+OtherDoorsValue);
    
    //Interior doors
    var interiorDoorsPercentage = document.getElementById('interiorDoorsPercentage').value;
    var interiorDoorsCInfo = document.getElementById('interiorDoorsCInfo').value;
    
    var interiorDoorsValue = calculateAmountFromPercentage(totalCost, interiorDoorsPercentage);
    
    document.getElementById('interiorDoorsValueFinalToDisplay').innerHTML = interiorDoorsValue;
    document.getElementById('interiorDoorsCInfoFinalToDisplay').innerHTML = interiorDoorsCInfo;
    
    
    console.log("interiorDoorsValue "+interiorDoorsValue);
    
    
    //Garage doors
    var garagePercentage = document.getElementById('garagePercentage').value;
    var garageSpecInfo = document.getElementById('garageSpecInfo').value;
    var garageClientInfo = document.getElementById('garageClientInfo').value;
    
    var garageValue = calculateAmountFromPercentage(totalCost, garagePercentage);
    
    document.getElementById('garageValueFinalToDisplay').innerHTML = garageValue;
    document.getElementById('garageSpecInfoFinalToDisplay').innerHTML = garageSpecInfo;
    document.getElementById('garageClientInfoFinalToDisplay').innerHTML = garageClientInfo;
    
    
    console.log("garageValue "+garageValue);
    
    
    //window and door hardware
    var windowAndDoorHardwarePercentage = document.getElementById('windowAndDoorHardwarePercentage').value;
    
    var windowAndDoorHardwareValue = calculateAmountFromPercentage(totalCost, windowAndDoorHardwarePercentage);
    console.log("windowAndDoorHardwareValue "+windowAndDoorHardwareValue);
    
    document.getElementById('windowAndDoorHardwareValueFinalToDisplay').innerHTML = windowAndDoorHardwareValue;
    
    
    //Insulation
    var insulationPercentage = document.getElementById('insulationPercentage').value;
    var insulationSInfo = document.getElementById('insulationSInfo').value;
    
    var insulationValue = calculateAmountFromPercentage(totalCost, insulationPercentage);
    
    document.getElementById('insulationValueFinalToDisplay').innerHTML = insulationValue;
    document.getElementById('insulationSInfoFinalToDisplay').innerHTML = insulationSInfo;
    
    console.log("insulationValue "+insulationValue);
    
    
    //Exterior
    //exterior painting
    var exteriorPaintingPercentage = document.getElementById('exteriorPaintingPercentage').value;
    var exteriorPaintingSInfo = document.getElementById('exteriorPaintingSInfo').value;
    
    var exteriorPaintingValue = calculateAmountFromPercentage(totalCost, exteriorPaintingPercentage);
    
    document.getElementById('exteriorPaintingValueFinalToDisplay').innerHTML = exteriorPaintingValue;
    document.getElementById('exteriorPaintingSInfoFinalToDisplay').innerHTML = exteriorPaintingSInfo;
    
    
    console.log("exteriorPaintingValue "+exteriorPaintingValue);
    
    
    //drywall
    var drywallPaintingPercentage = document.getElementById('drywallPaintingPercentage').value;
    var drywallSInfo = document.getElementById('drywallSInfo').value;
    
    var drywallPaintingValue = calculateAmountFromPercentage(totalCost, drywallPaintingPercentage);
    
    document.getElementById('drywallPaintingValueFinalToDisplay').innerHTML = drywallPaintingValue;
    document.getElementById('drywallSInfoFinalToDisplay').innerHTML = drywallSInfo;
    
    
    console.log("drywallPaintingValue "+drywallPaintingValue);
    
    
    
    //Flooring
    //carpet
    var carpetPercentage = document.getElementById('carpetPercentage').value;
    var carpetSInfo = document.getElementById('carpetSInfo').value;
    
    var carpetValue = calculateAmountFromPercentage(totalCost, carpetPercentage);
    
    document.getElementById('carpetValueFinalToDisplay').innerHTML = carpetValue;
    document.getElementById('carpetSInfoFinalToDisplay').innerHTML = carpetSInfo;
    
    
    console.log("carpetValue "+carpetValue);
    
    
    //Interior trim
    var interiorTrimPercentage = document.getElementById('interiorTrimPercentage').value;
    var interiorSInfo = document.getElementById('interiorSInfo').value;
    
    var interiorTrimValue = calculateAmountFromPercentage(totalCost, interiorTrimPercentage);
    
    document.getElementById('interiorTrimValueFinalToDisplay').innerHTML = interiorTrimValue;
    document.getElementById('interiorSInfoFinalToDisplay').innerHTML = interiorSInfo;
    
    
    
    console.log("interiorTrimValue "+interiorTrimValue);
    
    
    //Ceramic Tile
    var ceramicTilePercentage = document.getElementById('ceramicTilePercentage').value;
    var ceramicTileCInfo = document.getElementById('ceramicTileCInfo').value;
    
    var ceramicTileValue = calculateAmountFromPercentage(totalCost, ceramicTilePercentage);
    
    document.getElementById('ceramicTileValueFinalToDisplay').innerHTML = ceramicTileValue;
    document.getElementById('ceramicTileCInfoFinalToDisplay').innerHTML = ceramicTileCInfo;
    
    
    console.log("ceramicTileValue "+ceramicTileValue);
    
    
    //cabinets
     var cabinetsPercentage = document.getElementById('cabinetsPercentage').value;
    var cabinetsSInfo = document.getElementById('cabinetsSInfo').value;
    
    var cabinetsValue = calculateAmountFromPercentage(totalCost, cabinetsPercentage);
    
    document.getElementById('cabinetsValueFinalToDisplay').innerHTML = cabinetsValue;
    document.getElementById('cabinetsSInfoFinalToDisplay').innerHTML = cabinetsSInfo;
    
    
    console.log("cabinetsValue "+cabinetsValue);
    
    
    //Countertops
    
    var counterTopsPercentage = document.getElementById('counterTopsPercentage').value;
    var counterTopsCInfo = document.getElementById('counterTopsCInfo').value;
    
    var counterTopsValue = calculateAmountFromPercentage(totalCost, counterTopsPercentage);
    
    document.getElementById('counterTopsValueFinalToDisplay').innerHTML = counterTopsValue;
    document.getElementById('counterTopsCInfoFinalToDisplay').innerHTML = counterTopsCInfo;
    
    console.log("counterTopsValue "+counterTopsValue);
    
    
    
    //Cabinets Hardware
    var cabinetHardwarePercentage = document.getElementById('cabinetHardwarePercentage').value;
    
    var cabinetHardwareValue = calculateAmountFromPercentage(totalCost, cabinetHardwarePercentage);
    
    document.getElementById('cabinetHardwareValueFinalToDisplay').innerHTML = cabinetHardwareValue;
    
    console.log("cabinetHardwareValue "+cabinetHardwareValue);
    
    
    //Appliances
    var appliancesPercentage = document.getElementById('appliancesPercentage').value;
    var appliancesSInfo = document.getElementById('appliancesSInfo').value;
    
    var appliancesValue = calculateAmountFromPercentage(totalCost, appliancesPercentage);
    
    document.getElementById('appliancesValueValueFinalToDisplay').innerHTML = appliancesValue;
    document.getElementById('appliancesSInfoFinalToDisplay').innerHTML = appliancesSInfo;
    
    
    
    console.log("appliancesValue "+appliancesValue);
    
    
    
    //Range
    var rangePercentage = document.getElementById('rangePercentage').value;
    var rangeValue = calculateAmountFromPercentage(totalCost, rangePercentage);
    
    document.getElementById('rangeValueFinalToDisplay').innerHTML = rangeValue;
    
    console.log("rangeValue "+rangeValue);
    
    
    var rangeHoodPercentage = document.getElementById('rangeHoodPercentage').value;
    var rangeHoodValue = calculateAmountFromPercentage(totalCost, rangeHoodPercentage);
    
    document.getElementById('rangeHoodValueFinalToDisplay').innerHTML = rangeHoodValue;
    
    console.log("rangeHoodValue "+rangeHoodValue);
    
    
    var disposalPercentage = document.getElementById('disposalPercentage').value;
    
    var disposalValue = calculateAmountFromPercentage(totalCost, disposalPercentage);
    
    document.getElementById('disposalValueFinalToDisplay').innerHTML = disposalValue;
    
    console.log("disposalValue "+disposalValue);
    
    
    var dishwasherPercentage = document.getElementById('dishwasherPercentage').value;
    
    var dishwasherValue = calculateAmountFromPercentage(totalCost, dishwasherPercentage);
    
    document.getElementById('dishwasherValueFinalToDisplay').innerHTML = dishwasherValue;
    
    console.log("dishwasherValue "+dishwasherValue);
    
    
    var microwavePercentage = document.getElementById('microwavePercentage').value;
    
    var microwaveValue = calculateAmountFromPercentage(totalCost, microwavePercentage);
    
    document.getElementById('microwaveValueFinalToDisplay').innerHTML = microwaveValue;
    
    console.log("microwaveValue "+microwaveValue);
    
    
    //Finish plumbing
    var finishPlumbingPercentage = document.getElementById('finishPlumbingPercentage').value;
    var finishPlumbingSInfo = document.getElementById('finishPlumbingSInfo').value;
    
    var finishPlumbingValue = calculateAmountFromPercentage(totalCost, finishPlumbingPercentage);
    
    document.getElementById('finishPlumbingValueFinalToDisplay').innerHTML = finishPlumbingValue;
    document.getElementById('finishPlumbingSInfoFinalToDisplay').innerHTML = finishPlumbingSInfo;
    
    console.log("finishPlumbingValue "+finishPlumbingValue);
    
    
    //Plumbing fixtures
    var plumbingFixturesPercentage = document.getElementById('plumbingFixturesPercentage').value;
    var plumbingFixturesCInfo = document.getElementById('plumbingFixturesCInfo').value;
    
    var plumbingFixturesValue = calculateAmountFromPercentage(totalCost, plumbingFixturesPercentage);
    
    document.getElementById('plumbingFixturesValueFinalToDisplay').innerHTML = plumbingFixturesValue;
    document.getElementById('plumbingFixturesCInfoFinalToDisplay').innerHTML = plumbingFixturesCInfo;
    
    console.log("plumbingFixturesValue "+plumbingFixturesValue);
    
    
    //Finish Electrical 
    var finishElectricalPercentage = document.getElementById('finishElectricalPercentage').value;
    var finishElectricalSInfo = document.getElementById('finishElectricalSInfo').value;
    
    var finishElectricalValue = calculateAmountFromPercentage(totalCost, finishElectricalPercentage);
    
    document.getElementById('finishElectricalValueFinalToDisplay').innerHTML = finishElectricalValue;
    document.getElementById('finishElectricalSInfoFinalToDisplay').innerHTML = finishElectricalSInfo;
    
    console.log("finishElectricalValue "+finishElectricalValue);
    
    
    //Electrical Fixtures
    var electricalFixturesPercentage = document.getElementById('electricalFixturesPercentage').value;
    var electricalFixturesCInfo = document.getElementById('electricalFixturesCInfo').value;
    
    var electricalFixturesValue = calculateAmountFromPercentage(totalCost, electricalFixturesPercentage);
    
    document.getElementById('electricalFixturesValueFinalToDisplay').innerHTML = electricalFixturesValue;
    document.getElementById('electricalFixturesCInfoFinalToDisplay').innerHTML = electricalFixturesCInfo;
    
    console.log("electricalFixturesValue "+electricalFixturesValue);
    
    
    //Finish HVAC
    var finishHVACPercentage = document.getElementById('finishHVACPercentage').value;
    var finishHVACSInfo = document.getElementById('finishHVACSInfo').value;
    
    var finishHVACValue = calculateAmountFromPercentage(totalCost, finishHVACPercentage);
    
    document.getElementById('finishHVACValueFinalToDisplay').innerHTML = finishHVACValue;
    document.getElementById('finishHVACSInfoFinalToDisplay').innerHTML = finishHVACSInfo;
    
    console.log("finishHVACValue "+finishHVACValue);
    
    
    //Interior walls
    var interiorPaintPercentage = document.getElementById('interiorPaintPercentage').value;
    var interiorPaintSInfo = document.getElementById('interiorPaintSInfo').value;
    
    var interiorPaintValue = calculateAmountFromPercentage(totalCost, interiorPaintPercentage);
    
    document.getElementById('interiorPaintValueFinalToDisplay').innerHTML = interiorPaintValue;
    document.getElementById('finteriorPaintSInfoFinalToDisplay').innerHTML = interiorPaintSInfo;
    
    console.log("interiorPaintValue "+interiorPaintValue);
    
    
    //Completion
    var completionPercentage = document.getElementById('completionPercentage').value;
    var completionSInfo = document.getElementById('completionSInfo').value;
    
    var completionValue = calculateAmountFromPercentage(totalCost, completionPercentage);
    
    document.getElementById('completionValueFinalToDisplay').innerHTML = completionValue;
    document.getElementById('completionSInfoFinalToDisplay').innerHTML = completionSInfo;
    
    console.log("completionValue "+completionValue);
    
    
    
    //Landscaping
    var landscapingPercentage = document.getElementById('landscapingPercentage').value;
    var landscapingSInfo = document.getElementById('landscapingSInfo').value;
    
    var landscapingValue = calculateAmountFromPercentage(totalCost, landscapingPercentage);
    
    document.getElementById('landscapingValueFinalToDisplay').innerHTML = landscapingValue;
    document.getElementById('landscapingSInfoFinalToDisplay').innerHTML = landscapingSInfo;
    
    console.log("landscapingValue "+landscapingValue);
    
    
    
    //Walkthrough Inspection
    var walkthroughSInfo = document.getElementById('walkthroughSInfo').value;
    var walkthroughPercentage = document.getElementById('walkthroughPercentage').value;
    
    var walkthroughValue = calculateAmountFromPercentage(totalCost, walkthroughPercentage);
    
    
    document.getElementById('walkthroughValueFinalToDisplay').innerHTML = walkthroughValue;
    document.getElementById('walkthroughSInfoFinalToDisplay').innerHTML = walkthroughSInfo;
    console.log("walkthroughValue "+walkthroughValue);
    
    
    var totalValue = permitsAndFeesValue+demolitionValue+utilityValue+
fireplaceValue+brickVinValue+
frontDoorValue+OtherDoorsValue+
interiorDoorsValue+garageValue+
windowAndDoorHardwareValue+insulationValue+
exteriorPaintingValue+drywallPaintingValue+
carpetValue+interiorTrimValue+
ceramicTileValue+
cabinetsValue+
counterTopsValue+
cabinetHardwareValue+
appliancesValue+
rangeValue+
rangeHoodValue+
disposalValue+
dishwasherValue+
microwaveValue+
finishPlumbingValue+
plumbingFixturesValue+
finishElectricalValue+electricalFixturesValue+finishHVACValue+interiorPaintValue+completionValue+landscapingValue+walkthroughValue;
    document.getElementById('total').innerHTML= totalValue;
    
    if(document.getElementById('div1')){
        
            document.getElementById('div1').style.display = 'none';
            document.getElementById('div2').style.display = 'block';
        
    }
    

}
