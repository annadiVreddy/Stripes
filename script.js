function submitData() {
    "use strict";
    //console.log(document.getElementById('permits-and-fees-checkbox').value);

    var userEnteredWorkAddress = document.getElementById('userEnteredWorkAddressId').value;
    document.getElementById('outputAddressID').innerHTML = userEnteredWorkAddress;

    var totalArea = document.getElementById('totalArea').value;
    var costPerSqF = document.getElementById('costPerSqF').value;

    var totalCost = totalArea * costPerSqF;
    console.log("total Cost " + totalCost);

    var calculateAmountFromPercentage = function (totCost, percent) {
        return (percent / 100) * totCost;
    }
 
    //Preparation Priliminaries
    if (document.getElementById('permits-and-fees-checkbox').checked || document.getElementById('architectur-and-engineering-checkbox').checked || document.getElementById('site-work-checkbox-id').checked || document.getElementById('demolition-checkbox-id').checked || document.getElementById('utility-connection-checkbox-id').checked) {
        $("#preparation-priliminaries-category").show();
    } else {
        $("#preparation-priliminaries-category").hide();
    }
    //Permits and fees
    var permitsAndFeesPercentage = document.getElementById('permitsAndFeesPercentage').value;
    var permitsAndFeesSpecComment = document.getElementById('permitsAndFeesSpecComment').value;
    var permitsAndFeesClientInfo = document.getElementById('permitsAndFeesClientInfo').value;


    var permitsAndFeesValue = calculateAmountFromPercentage(totalCost, permitsAndFeesPercentage);

    document.getElementById('permitandfeesdesc').innerHTML = permitsAndFeesSpecComment;
    document.getElementById('permitandfeesclientdesc').innerHTML = permitsAndFeesClientInfo;
    document.getElementById('permitsanddescvalue').innerHTML = permitsAndFeesValue;

    if (document.getElementById('permits-and-fees-checkbox').checked) {
        $("#permits-fees-part-with-user-values-to-display").show();
    } else {
        $("#permits-fees-part-with-user-values-to-display").hide();
    }

    //console.log("permitsAndFeesValue " + permitsAndFeesValue)


    //Architectural and Engineering
    var architecturalEngineeringUserEnteredPercentage = document.getElementById('architectural-Engineering-user-input-percentage').value;
    var architecturalEngineeringUserEnteredSpecInfo = document.getElementById('architectur-and-engineering-user-input-spec-info').value;
    var architecturalEngineeringUserEnteredClientInfo = document.getElementById('architectur-and-engineering-user-input-client-info').value;


    var architecturalEngineeringValue = calculateAmountFromPercentage(totalCost, architecturalEngineeringUserEnteredPercentage);

    document.getElementById('architectur-and-engineering-spec-info-value').innerHTML = architecturalEngineeringUserEnteredSpecInfo;
    document.getElementById('architectur-and-engineering-client-info-value').innerHTML = architecturalEngineeringUserEnteredClientInfo;
    document.getElementById('architectur-and-engineering-value').innerHTML = architecturalEngineeringValue;

    if (document.getElementById('architectur-and-engineering-checkbox').checked) {
        $("#architectural-Engineering-part-with-user-values-to-display").show();
    } else {
        $("#architectural-Engineering-part-with-user-values-to-display").hide();
    }


    //Site work
    var siteworkUserEnteredPercentage = document.getElementById('site-work-user-input-percentage').value;
    var siteworkUserEnteredSpecInfo = document.getElementById('site-work-user-input-spec-info').value;
    var siteworkUserEnteredClientInfo = document.getElementById('site-work-user-input-client-info').value;


    var siteWorkValue = calculateAmountFromPercentage(totalCost, siteworkUserEnteredPercentage);

    document.getElementById('site-work-spec-info-value').innerHTML = siteworkUserEnteredSpecInfo;
    document.getElementById('site-work-client-info-value').innerHTML = siteworkUserEnteredClientInfo;
    document.getElementById('site-work-value').innerHTML = siteWorkValue;

    if (document.getElementById('site-work-checkbox-id').checked) {
        $("#site-work-part-with-user-values-to-display").show();
    } else {
        $("#site-work-part-with-user-values-to-display").hide();
    }


    //Demolition
    var demolitionUserEnteredPercentage = document.getElementById('demolition-user-entered-Percentage').value;
    var demolitionUserEnteredSpecInfo = document.getElementById('demolition-user-entered-SpecInfo').value;
    var demolitionUserEnteredClientInfo = document.getElementById('demolition-user-entered-ClientInfo').value;

    var demolitionValue = calculateAmountFromPercentage(totalCost, demolitionUserEnteredPercentage);


    document.getElementById('demolitionValue').innerHTML = demolitionValue;
    document.getElementById('demolitionSpecInfovalue').innerHTML = demolitionUserEnteredSpecInfo;
    document.getElementById('demolitionClientInfovalue').innerHTML = demolitionUserEnteredClientInfo;

    if (document.getElementById('demolition-checkbox-id').checked) {
        $("#demolition-part-with-user-values-to-display").show();
    } else {
        $("#demolition-part-with-user-values-to-display").hide();
    }



    //console.log("demolitionValue " + demolitionValue);


    //utility connections
    var utilityConnectionUserEnteredPercentage = document.getElementById('utility-connection-user-entered-Percentage').value;
    var utilityConnectionUserEnteredSpecInfo = document.getElementById('utility-connection-user-entered-SpecInfo').value;
    var utilityConnectionUserEnteredClientInfo = document.getElementById('utility-connection-user-entered-ClientInfo').value;

    var utilityValue = calculateAmountFromPercentage(totalCost, utilityConnectionUserEnteredPercentage);


    document.getElementById('utilityValue').innerHTML = utilityValue;
    document.getElementById('utilitySpecInfovalue').innerHTML = utilityConnectionUserEnteredSpecInfo;
    document.getElementById('utilityClientInfovalue').innerHTML = utilityConnectionUserEnteredClientInfo;

    if (document.getElementById('utility-connection-checkbox-id').checked) {
        $("#utility-connection-part-with-user-values-to-display").show();
    } else {
        $("#utility-connection-part-with-user-values-to-display").hide();
    }
    //console.log("utilityValue " + utilityValue);

    ////////////////////////////////////////////////////////////////   
    ///////////////////Excavation and Foundation///////////////////////
    //////////////////////////////////////////////////////////////////
    if (document.getElementById('excavation-checkbox-id').checked || document.getElementById('footing-and-foundation-checkbox-id').checked || document.getElementById('water-proofing-checkbox-id').checked || document.getElementById('termite-protection-checkbox-id').checked) {
        $("#excavation-and-foundation-category").show();
    } else {
        $("#excavation-and-foundation-category").hide();
    }
    ///////////////////Excavation///////////////////////////////
    var excavationUserEnteredPercentage = document.getElementById('excavation-user-entered-Percentage').value;
    var excavationUserEnteredSpecInfo = document.getElementById('excavation-user-entered-SpecInfo').value;
    var excavationUserEnteredClientInfo = document.getElementById('excavation-user-entered-ClientInfo').value;

    var excavationValue = calculateAmountFromPercentage(totalCost, excavationUserEnteredPercentage);


    document.getElementById('excavation-Value').innerHTML = excavationValue;
    document.getElementById('excavation-spec-info-value').innerHTML = excavationUserEnteredSpecInfo;
    document.getElementById('excavation-client-info-value').innerHTML = excavationUserEnteredClientInfo;

    if (document.getElementById('excavation-checkbox-id').checked) {
        $("#excavation-part-with-user-values-to-display").show();
    } else {
        $("#excavation-part-with-user-values-to-display").hide();
    }

    ///////////////////Footing and Foundation///////////////////////////////
    var footingAndFoundationUserEnteredPercentage = document.getElementById('footing-and-foundation-user-entered-Percentage').value;
    var footingAndFoundationUserEnteredSpecInfo = document.getElementById('footing-and-foundation-user-entered-SpecInfo').value;
    var footingAndFoundationUserEnteredClientInfo = document.getElementById('footing-and-foundation-user-entered-ClientInfo').value;

    var footingAndFoundationValue = calculateAmountFromPercentage(totalCost, footingAndFoundationUserEnteredPercentage);


    document.getElementById('footing-and-foundation-Value').innerHTML = footingAndFoundationValue;
    document.getElementById('footing-and-foundation-spec-info-value').innerHTML = footingAndFoundationUserEnteredSpecInfo;
    document.getElementById('footing-and-foundation-client-info-value').innerHTML = footingAndFoundationUserEnteredClientInfo;

    if (document.getElementById('footing-and-foundation-checkbox-id').checked) {
        $("#footing-and-foundation-part-with-user-values-to-display").show();
    } else {
        $("#footing-and-foundation-part-with-user-values-to-display").hide();
    };

    ///////////////////Water Proofing///////////////////////////////
    var waterProofingUserEnteredPercentage = document.getElementById('water-proofing-user-entered-Percentage').value;
    var waterProofingUserEnteredSpecInfo = document.getElementById('water-proofing-user-entered-SpecInfo').value;
    var waterProofingUserEnteredClientInfo = document.getElementById('water-proofing-user-entered-ClientInfo').value;

    var waterProofingValue = calculateAmountFromPercentage(totalCost, waterProofingUserEnteredPercentage);


    document.getElementById('water-proofing-Value').innerHTML = waterProofingValue;
    document.getElementById('water-proofing-spec-info-value').innerHTML = waterProofingUserEnteredSpecInfo;
    document.getElementById('water-proofing-client-info-value').innerHTML = waterProofingUserEnteredClientInfo;

    if (document.getElementById('water-proofing-checkbox-id').checked) {
        $("#water-proofing-part-with-user-values-to-display").show();
    } else {
        $("#water-proofing-part-with-user-values-to-display").hide();
    };

    ///////////////////Termite Protection///////////////////////////////
    var termiteProtectionUserEnteredPercentage = document.getElementById('termite-protection-user-entered-Percentage').value;
    var termiteProtectionUserEnteredSpecInfo = document.getElementById('termite-protection-user-entered-SpecInfo').value;
    var termiteProtectionUserEnteredClientInfo = document.getElementById('termite-protection-user-entered-ClientInfo').value;

    var termiteProtectionValue = calculateAmountFromPercentage(totalCost, termiteProtectionUserEnteredPercentage);


    document.getElementById('termite-protection-Value').innerHTML = termiteProtectionValue;
    document.getElementById('termite-protection-spec-info-value').innerHTML = termiteProtectionUserEnteredSpecInfo;
    document.getElementById('termite-protection-client-info-value').innerHTML = termiteProtectionUserEnteredClientInfo;

    if (document.getElementById('termite-protection-checkbox-id').checked) {
        $("#termite-protection-part-with-user-values-to-display").show();
    } else {
        $("#termite-protection-part-with-user-values-to-display").hide();
    };

    ////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    ///////////////////Rough Structure///////////////////////////////
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    if (document.getElementById('steel-checkbox-id').checked || document.getElementById('framing-checkbox-id').checked || document.getElementById('concrete-checkbox-id').checked || document.getElementById('sheet-metal-checkbox-id').checked || document.getElementById('rough-plumbing-checkbox-id').checked || document.getElementById('rough-electrical-checkbox-id').checked || document.getElementById('rough-hvac-checkbox-id').checked) {
        $("#rough-structure-category").show();
    } else {
        $("#rough-structure-category").hide();
    }

    ////////////////////steel///////////////////////////////////////
    var steelUserEnteredPercentage = document.getElementById('steel-user-entered-Percentage').value;
    var steelUserEnteredSpecInfo = document.getElementById('steel-user-entered-SpecInfo').value;
    var steelUserEnteredClientInfo = document.getElementById('steel-user-entered-ClientInfo').value;

    var steelValue = calculateAmountFromPercentage(totalCost, steelUserEnteredPercentage);


    document.getElementById('steel-Value').innerHTML = steelValue;
    document.getElementById('steel-spec-info-value').innerHTML = steelUserEnteredSpecInfo;
    document.getElementById('steel-client-info-value').innerHTML = steelUserEnteredClientInfo;

    if (document.getElementById('steel-checkbox-id').checked) {
        $("#steel-part-with-user-values-to-display").show();
    } else {
        $("#steel-part-with-user-values-to-display").hide();
    };


    ////////////////////Framing///////////////////////////////////////
    var framingUserEnteredPercentage = document.getElementById('framing-user-entered-Percentage').value;
    var framingUserEnteredSpecInfo = document.getElementById('framing-user-entered-SpecInfo').value;
    var framingUserEnteredClientInfo = document.getElementById('framing-user-entered-ClientInfo').value;

    var framingValue = calculateAmountFromPercentage(totalCost, framingUserEnteredPercentage);


    document.getElementById('framing-Value').innerHTML = framingValue;
    document.getElementById('framing-spec-info-value').innerHTML = framingUserEnteredSpecInfo;
    document.getElementById('framing-client-info-value').innerHTML = framingUserEnteredClientInfo;

    if (document.getElementById('framing-checkbox-id').checked) {
        $("#framing-part-with-user-values-to-display").show();
    } else {
        $("#framing-part-with-user-values-to-display").hide();
    };

    ////////////////////Concrete///////////////////////////////////////
    var concreteUserEnteredPercentage = document.getElementById('concrete-user-entered-Percentage').value;
    var concreteUserEnteredSpecInfo = document.getElementById('concrete-user-entered-SpecInfo').value;
    var concreteUserEnteredClientInfo = document.getElementById('concrete-user-entered-ClientInfo').value;

    var concreteValue = calculateAmountFromPercentage(totalCost, concreteUserEnteredPercentage);


    document.getElementById('concrete-Value').innerHTML = concreteValue;
    document.getElementById('concrete-spec-info-value').innerHTML = concreteUserEnteredSpecInfo;
    document.getElementById('concrete-client-info-value').innerHTML = concreteUserEnteredClientInfo;

    if (document.getElementById('concrete-checkbox-id').checked) {
        $("#concrete-part-with-user-values-to-display").show();
    } else {
        $("#concrete-part-with-user-values-to-display").hide();
    };

    ////////////////////Sheet Metal/////////////////////////////////////
    var sheetMetalUserEnteredPercentage = document.getElementById('sheet-metal-user-entered-Percentage').value;
    var sheetMetalUserEnteredSpecInfo = document.getElementById('sheet-metal-user-entered-SpecInfo').value;
    var sheetMetalUserEnteredClientInfo = document.getElementById('sheet-metal-user-entered-ClientInfo').value;

    var sheetMetalValue = calculateAmountFromPercentage(totalCost, sheetMetalUserEnteredPercentage);


    document.getElementById('sheet-metal-Value').innerHTML = sheetMetalValue;
    document.getElementById('sheet-metal-spec-info-value').innerHTML = sheetMetalUserEnteredSpecInfo;
    document.getElementById('sheet-metal-client-info-value').innerHTML = sheetMetalUserEnteredClientInfo;

    if (document.getElementById('sheet-metal-checkbox-id').checked) {
        $("#sheet-metal-part-with-user-values-to-display").show();
    } else {
        $("#sheet-metal-part-with-user-values-to-display").hide();
    };

    ////////////////////Rough Plumbing//////////////////////////////////
    var roughPlumbingUserEnteredPercentage = document.getElementById('rough-plumbing-user-entered-Percentage').value;
    var roughPlumbingUserEnteredSpecInfo = document.getElementById('rough-plumbing-user-entered-SpecInfo').value;
    var roughPlumbingUserEnteredClientInfo = document.getElementById('rough-plumbing-user-entered-ClientInfo').value;

    var roughPlumbingValue = calculateAmountFromPercentage(totalCost, roughPlumbingUserEnteredPercentage);


    document.getElementById('rough-plumbing-Value').innerHTML = roughPlumbingValue;
    document.getElementById('rough-plumbing-spec-info-value').innerHTML = roughPlumbingUserEnteredSpecInfo;
    document.getElementById('rough-plumbing-client-info-value').innerHTML = roughPlumbingUserEnteredClientInfo;

    if (document.getElementById('rough-plumbing-checkbox-id').checked) {
        $("#rough-plumbing-part-with-user-values-to-display").show();
    } else {
        $("#rough-plumbing-part-with-user-values-to-display").hide();
    };

    ////////////////////Rough Electrical////////////////////////////////
    var roughElectricalUserEnteredPercentage = document.getElementById('rough-electrical-user-entered-Percentage').value;
    var roughElectricalUserEnteredSpecInfo = document.getElementById('rough-electrical-user-entered-SpecInfo').value;
    var roughElectricalUserEnteredClientInfo = document.getElementById('rough-electrical-user-entered-ClientInfo').value;

    var roughElectricalValue = calculateAmountFromPercentage(totalCost, roughElectricalUserEnteredPercentage);


    document.getElementById('rough-electrical-Value').innerHTML = roughElectricalValue;
    document.getElementById('rough-electrical-spec-info-value').innerHTML = roughElectricalUserEnteredSpecInfo;
    document.getElementById('rough-electrical-client-info-value').innerHTML = roughElectricalUserEnteredClientInfo;

    if (document.getElementById('rough-electrical-checkbox-id').checked) {
        $("#rough-electrical-part-with-user-values-to-display").show();
    } else {
        $("#rough-electrical-part-with-user-values-to-display").hide();
    };


    ////////////////////Rough HVAC////////////////////////////////
    var roughHvacUserEnteredPercentage = document.getElementById('rough-hvac-user-entered-Percentage').value;
    var roughHvacUserEnteredSpecInfo = document.getElementById('rough-hvac-user-entered-SpecInfo').value;
    var roughHvacUserEnteredClientInfo = document.getElementById('rough-hvac-user-entered-ClientInfo').value;

    var roughHvacValue = calculateAmountFromPercentage(totalCost, roughHvacUserEnteredPercentage);


    document.getElementById('rough-hvac-Value').innerHTML = roughHvacValue;
    document.getElementById('rough-hvac-spec-info-value').innerHTML = roughHvacUserEnteredSpecInfo;
    document.getElementById('rough-hvac-client-info-value').innerHTML = roughHvacUserEnteredClientInfo;

    if (document.getElementById('rough-hvac-checkbox-id').checked) {
        $("#rough-hvac-part-with-user-values-to-display").show();
    } else {
        $("#rough-hvac-part-with-user-values-to-display").hide();
    };



    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    /////////////////////Roofing/////////////////////////////////
    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    if (document.getElementById('roofing-specifications-checkbox-id').checked || document.getElementById('roofing-material-checkbox-id').checked) {
        $("#roofing-category").show();
    } else {
        $("#roofing-category").hide();
    };

    ///////////////////////Roofing Specifications////////////////
    var roofingSpecificationsUserEnteredPercentage = document.getElementById('roofing-specifications-user-entered-Percentage').value;
    var roofingSpecificationsUserEnteredSpecInfo = document.getElementById('roofing-specifications-user-entered-SpecInfo').value;
    var roofingSpecificationsUserEnteredClientInfo = document.getElementById('roofing-specifications-user-entered-ClientInfo').value;

    var roofingSpecificationsValue = calculateAmountFromPercentage(totalCost, roofingSpecificationsUserEnteredPercentage);


    document.getElementById('roofing-specifications-Value').innerHTML = roofingSpecificationsValue;
    document.getElementById('roofing-specifications-spec-info-value').innerHTML = roofingSpecificationsUserEnteredSpecInfo;
    document.getElementById('roofing-specifications-client-info-value').innerHTML = roofingSpecificationsUserEnteredClientInfo;

    if (document.getElementById('roofing-specifications-checkbox-id').checked) {
        $("#roofing-specifications-part-with-user-values-to-display").show();
    } else {
        $("#roofing-specifications-part-with-user-values-to-display").hide();
    };


    ///////////////////////Roofing Material////////////////
    var roofingMaterialUserEnteredPercentage = document.getElementById('roofing-material-user-entered-Percentage').value;
    var roofingMaterialUserEnteredSpecInfo = document.getElementById('roofing-material-user-entered-SpecInfo').value;
    var roofingMaterialUserEnteredClientInfo = document.getElementById('roofing-material-user-entered-ClientInfo').value;

    var roofingMaterialValue = calculateAmountFromPercentage(totalCost, roofingMaterialUserEnteredPercentage);


    document.getElementById('roofing-material-Value').innerHTML = roofingMaterialValue;
    document.getElementById('roofing-material-spec-info-value').innerHTML = roofingMaterialUserEnteredSpecInfo;
    document.getElementById('roofing-material-client-info-value').innerHTML = roofingMaterialUserEnteredClientInfo;

    if (document.getElementById('roofing-material-checkbox-id').checked) {
        $("#roofing-material-part-with-user-values-to-display").show();
    } else {
        $("#roofing-material-part-with-user-values-to-display").hide();
    };


    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////Masnory/////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    if (document.getElementById('masonry-specifications-checkbox-id').checked || document.getElementById('chimney-material-checkbox-id').checked || document.getElementById('fireplace-checkbox-id').checked || document.getElementById('brick-veneer-checkbox-id').checked || document.getElementById('masonryWallMaterial-checkbox-id').checked || document.getElementById('masonryFlooringMaterial-checkbox-id').checked) {
        $("#masonry-category").show();
    } else {
        $("#masonry-category").hide();
    };

    ///////////////////////Masnory Specifications///////
    var masnorySpecificationsUserEnteredPercentage = document.getElementById('masonry-specifications-user-entered-Percentage').value;
    var masnorySpecificationsUserEnteredSpecInfo = document.getElementById('masonry-specifications-user-entered-SpecInfo').value;
    var masnorySpecificationsUserEnteredClientInfo = document.getElementById('masonry-specifications-user-entered-ClientInfo').value;

    var masnorySpecificationsValue = calculateAmountFromPercentage(totalCost, masnorySpecificationsUserEnteredPercentage);


    document.getElementById('masonry-specifications-Value').innerHTML = masnorySpecificationsValue;
    document.getElementById('masonry-specifications-spec-info-value').innerHTML = masnorySpecificationsUserEnteredSpecInfo;
    document.getElementById('masonry-specifications-client-info-value').innerHTML = masnorySpecificationsUserEnteredClientInfo;

    if (document.getElementById('masonry-specifications-checkbox-id').checked) {
        $("#masonry-specifications-part-with-user-values-to-display").show();
    } else {
        $("#masonry-specifications-part-with-user-values-to-display").hide();
    };

    ///////////////////////Chimney Material//////////
    var chimneyMaterialUserEnteredPercentage = document.getElementById('chimney-material-user-entered-Percentage').value;
    var chimneyMaterialUserEnteredSpecInfo = document.getElementById('chimney-material-user-entered-SpecInfo').value;
    var chimneyMaterialUserEnteredClientInfo = document.getElementById('chimney-material-user-entered-ClientInfo').value;

    var chimneyMaterialValue = calculateAmountFromPercentage(totalCost, chimneyMaterialUserEnteredPercentage);


    document.getElementById('chimney-material-Value').innerHTML = chimneyMaterialValue;
    document.getElementById('chimney-material-spec-info-value').innerHTML = chimneyMaterialUserEnteredSpecInfo;
    document.getElementById('chimney-material-client-info-value').innerHTML = chimneyMaterialUserEnteredClientInfo;

    if (document.getElementById('chimney-material-checkbox-id').checked) {
        $("#chimney-material-part-with-user-values-to-display").show();
    } else {
        $("#chimney-material-part-with-user-values-to-display").hide();
    };

    /////////////////////////fireplace///////////////////

    var fireplaceUserEnteredPercentage = document.getElementById('fireplace-user-entered-Percentage').value;
    var fireplaceUserEnteredSpecInfo = document.getElementById('fireplace-user-entered-SpecInfo').value;
    var fireplaceUserEnteredClientInfo = document.getElementById('fireplace-user-entered-ClientInfo').value;

    var fireplaceValue = calculateAmountFromPercentage(totalCost, fireplaceUserEnteredPercentage);


    document.getElementById('fireplace-Value').innerHTML = fireplaceValue;
    document.getElementById('fireplace-spec-info-value').innerHTML = fireplaceUserEnteredSpecInfo;
    document.getElementById('fireplace-client-info-value').innerHTML = fireplaceUserEnteredClientInfo;

    if (document.getElementById('fireplace-checkbox-id').checked) {
        $("#fireplace-part-with-user-values-to-display").show();
    } else {
        $("#fireplace-part-with-user-values-to-display").hide();
    };




    //console.log("fireplaceValue " + fireplaceValue);

    /////////////////////////brick veneer///////////////////

    var brickVeneerUserEnteredPercentage = document.getElementById('brick-veneer-user-entered-Percentage').value;
    var brickVeneerUserEnteredSpecInfo = document.getElementById('brick-veneer-user-entered-SpecInfo').value;
    var brickVeneerUserEnteredClientInfo = document.getElementById('brick-veneer-user-entered-ClientInfo').value;

    var brickVeneerValue = calculateAmountFromPercentage(totalCost, brickVeneerUserEnteredPercentage);


    document.getElementById('brick-veneer-Value').innerHTML = brickVeneerValue;
    document.getElementById('brick-veneer-spec-info-value').innerHTML = brickVeneerUserEnteredSpecInfo;
    document.getElementById('brick-veneer-client-info-value').innerHTML = brickVeneerUserEnteredClientInfo;

    if (document.getElementById('brick-veneer-checkbox-id').checked) {
        $("#brick-veneer-part-with-user-values-to-display").show();
    } else {
        $("#brick-veneer-part-with-user-values-to-display").hide();
    };
    //console.log("brickVinValue " + brickVinValue);

    /////////////////////////Masonry Wall Material///////////////////

    var masonryWallMaterialUserEnteredPercentage = document.getElementById('masonryWallMaterial-user-entered-Percentage').value;
    var masonryWallMaterialUserEnteredSpecInfo = document.getElementById('masonryWallMaterial-user-entered-SpecInfo').value;
    var masonryWallMaterialUserEnteredClientInfo = document.getElementById('masonryWallMaterial-user-entered-ClientInfo').value;

    var masonryWallMaterialValue = calculateAmountFromPercentage(totalCost, masonryWallMaterialUserEnteredPercentage);


    document.getElementById('masonryWallMaterial-Value').innerHTML = masonryWallMaterialValue;
    document.getElementById('masonryWallMaterial-spec-info-value').innerHTML = masonryWallMaterialUserEnteredSpecInfo;
    document.getElementById('masonryWallMaterial-client-info-value').innerHTML = masonryWallMaterialUserEnteredClientInfo;

    if (document.getElementById('masonryWallMaterial-checkbox-id').checked) {
        $("#masonryWallMaterial-part-with-user-values-to-display").show();
    } else {
        $("#masonryWallMaterial-part-with-user-values-to-display").hide();
    };

    /////////////////////Masonry Flooring Material///////////////////

    var masonryFlooringMaterialUserEnteredPercentage = document.getElementById('masonryFlooringMaterial-user-entered-Percentage').value;
    var masonryFlooringMaterialUserEnteredSpecInfo = document.getElementById('masonryFlooringMaterial-user-entered-SpecInfo').value;
    var masonryFlooringMaterialUserEnteredClientInfo = document.getElementById('masonryFlooringMaterial-user-entered-ClientInfo').value;

    var masonryFlooringMaterialValue = calculateAmountFromPercentage(totalCost, masonryFlooringMaterialUserEnteredPercentage);


    document.getElementById('masonryFlooringMaterial-Value').innerHTML = masonryFlooringMaterialValue;
    document.getElementById('masonryFlooringMaterial-spec-info-value').innerHTML = masonryFlooringMaterialUserEnteredSpecInfo;
    document.getElementById('masonryFlooringMaterial-client-info-value').innerHTML = masonryFlooringMaterialUserEnteredClientInfo;

    if (document.getElementById('masonryFlooringMaterial-checkbox-id').checked) {
        $("#masonryFlooringMaterial-part-with-user-values-to-display").show();
    } else {
        $("#masonryFlooringMaterial-part-with-user-values-to-display").hide();
    };



    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    //////////Windows and Doors/////////////////////////
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    if (document.getElementById('windows-checkbox-id').checked || document.getElementById('skylights-checkbox-id').checked || document.getElementById('stromWindowsAndDoors-checkbox-id').checked || document.getElementById('frontDoor-checkbox-id').checked || document.getElementById('otherExteriorDoors-checkbox-id').checked || document.getElementById('interiorDoors-checkbox-id').checked || document.getElementById('slidingGlassDoors-checkbox-id').checked || document.getElementById('garageDoor-checkbox-id').checked || document.getElementById('windowAndDoorHardware-checkbox-id').checked) {
        $("#doors-and-windows-category").show();
    } else {
        $("#doors-and-windows-category").hide();
    };


    //////////////////Windows////////////////////// 

    var windowsUserEnteredPercentage = document.getElementById('windows-user-entered-Percentage').value;
    var windowsUserEnteredSpecInfo = document.getElementById('windows-user-entered-SpecInfo').value;
    var windowsUserEnteredClientInfo = document.getElementById('windows-user-entered-ClientInfo').value;

    var windowsValue = calculateAmountFromPercentage(totalCost, windowsUserEnteredPercentage);


    document.getElementById('windows-Value').innerHTML = windowsValue;
    document.getElementById('windows-spec-info-value').innerHTML = windowsUserEnteredSpecInfo;
    document.getElementById('windows-client-info-value').innerHTML = windowsUserEnteredClientInfo;

    if (document.getElementById('windows-checkbox-id').checked) {
        $("#windows-part-with-user-values-to-display").show();
    } else {
        $("#windows-part-with-user-values-to-display").hide();
    };

    //////////////////Skylights////////////////////// 

    var skylightsUserEnteredPercentage = document.getElementById('skylights-user-entered-Percentage').value;
    var skylightsUserEnteredSpecInfo = document.getElementById('skylights-user-entered-SpecInfo').value;
    var skylightsUserEnteredClientInfo = document.getElementById('skylights-user-entered-ClientInfo').value;

    var skylightsValue = calculateAmountFromPercentage(totalCost, skylightsUserEnteredPercentage);


    document.getElementById('skylights-Value').innerHTML = skylightsValue;
    document.getElementById('skylights-spec-info-value').innerHTML = skylightsUserEnteredSpecInfo;
    document.getElementById('skylights-client-info-value').innerHTML = skylightsUserEnteredClientInfo;

    if (document.getElementById('skylights-checkbox-id').checked) {
        $("#skylights-part-with-user-values-to-display").show();
    } else {
        $("#skylights-part-with-user-values-to-display").hide();
    };


    //////////////////Strom Windows and Doors////////////////////// 

    var stromWindowsAndDoorsUserEnteredPercentage = document.getElementById('stromWindowsAndDoors-user-entered-Percentage').value;
    var stromWindowsAndDoorsUserEnteredSpecInfo = document.getElementById('stromWindowsAndDoors-user-entered-SpecInfo').value;
    var stromWindowsAndDoorsUserEnteredClientInfo = document.getElementById('stromWindowsAndDoors-user-entered-ClientInfo').value;

    var stromWindowsAndDoorsValue = calculateAmountFromPercentage(totalCost, stromWindowsAndDoorsUserEnteredPercentage);


    document.getElementById('stromWindowsAndDoors-Value').innerHTML = stromWindowsAndDoorsValue;
    document.getElementById('stromWindowsAndDoors-spec-info-value').innerHTML = stromWindowsAndDoorsUserEnteredSpecInfo;
    document.getElementById('stromWindowsAndDoors-client-info-value').innerHTML = stromWindowsAndDoorsUserEnteredClientInfo;

    if (document.getElementById('stromWindowsAndDoors-checkbox-id').checked) {
        $("#stromWindowsAndDoors-part-with-user-values-to-display").show();
    } else {
        $("#stromWindowsAndDoors-part-with-user-values-to-display").hide();
    };


    //////////////////Front Door////////////////////// 

    var frontDoorUserEnteredPercentage = document.getElementById('frontDoor-user-entered-Percentage').value;
    var frontDoorUserEnteredSpecInfo = document.getElementById('frontDoor-user-entered-SpecInfo').value;
    var frontDoorUserEnteredClientInfo = document.getElementById('frontDoor-user-entered-ClientInfo').value;

    var frontDoorValue = calculateAmountFromPercentage(totalCost, frontDoorUserEnteredPercentage);


    document.getElementById('frontDoor-Value').innerHTML = frontDoorValue;
    document.getElementById('frontDoor-spec-info-value').innerHTML = frontDoorUserEnteredSpecInfo;
    document.getElementById('frontDoor-client-info-value').innerHTML = frontDoorUserEnteredClientInfo;

    if (document.getElementById('frontDoor-checkbox-id').checked) {
        $("#frontDoor-part-with-user-values-to-display").show();
    } else {
        $("#frontDoor-part-with-user-values-to-display").hide();
    };


    //////////////////Other Exterior Doors////////////////////// 

    var otherExteriorDoorsUserEnteredPercentage = document.getElementById('otherExteriorDoors-user-entered-Percentage').value;
    var otherExteriorDoorsUserEnteredSpecInfo = document.getElementById('otherExteriorDoors-user-entered-SpecInfo').value;
    var otherExteriorDoorsUserEnteredClientInfo = document.getElementById('otherExteriorDoors-user-entered-ClientInfo').value;

    var otherExteriorDoorsValue = calculateAmountFromPercentage(totalCost, otherExteriorDoorsUserEnteredPercentage);


    document.getElementById('otherExteriorDoors-Value').innerHTML = otherExteriorDoorsValue;
    document.getElementById('otherExteriorDoors-spec-info-value').innerHTML = otherExteriorDoorsUserEnteredSpecInfo;
    document.getElementById('otherExteriorDoors-client-info-value').innerHTML = otherExteriorDoorsUserEnteredClientInfo;

    if (document.getElementById('otherExteriorDoors-checkbox-id').checked) {
        $("#otherExteriorDoors-part-with-user-values-to-display").show();
    } else {
        $("#otherExteriorDoors-part-with-user-values-to-display").hide();
    };


    //////////////////Interior Doors////////////////////// 

    var interiorDoorsUserEnteredPercentage = document.getElementById('interiorDoors-user-entered-Percentage').value;
    var interiorDoorsUserEnteredSpecInfo = document.getElementById('interiorDoors-user-entered-SpecInfo').value;
    var interiorDoorsUserEnteredClientInfo = document.getElementById('interiorDoors-user-entered-ClientInfo').value;

    var interiorDoorsValue = calculateAmountFromPercentage(totalCost, interiorDoorsUserEnteredPercentage);


    document.getElementById('interiorDoors-Value').innerHTML = interiorDoorsValue;
    document.getElementById('interiorDoors-spec-info-value').innerHTML = interiorDoorsUserEnteredSpecInfo;
    document.getElementById('interiorDoors-client-info-value').innerHTML = interiorDoorsUserEnteredClientInfo;

    if (document.getElementById('interiorDoors-checkbox-id').checked) {
        $("#interiorDoors-part-with-user-values-to-display").show();
    } else {
        $("#interiorDoors-part-with-user-values-to-display").hide();
    };


    //////////////////Sliding Glass Doors////////////////////// 

    var slidingGlassDoorsUserEnteredPercentage = document.getElementById('slidingGlassDoors-user-entered-Percentage').value;
    var slidingGlassDoorsUserEnteredSpecInfo = document.getElementById('slidingGlassDoors-user-entered-SpecInfo').value;
    var slidingGlassDoorsUserEnteredClientInfo = document.getElementById('slidingGlassDoors-user-entered-ClientInfo').value;

    var slidingGlassDoorsValue = calculateAmountFromPercentage(totalCost, slidingGlassDoorsUserEnteredPercentage);


    document.getElementById('slidingGlassDoors-Value').innerHTML = slidingGlassDoorsValue;
    document.getElementById('slidingGlassDoors-spec-info-value').innerHTML = slidingGlassDoorsUserEnteredSpecInfo;
    document.getElementById('slidingGlassDoors-client-info-value').innerHTML = slidingGlassDoorsUserEnteredClientInfo;

    if (document.getElementById('slidingGlassDoors-checkbox-id').checked) {
        $("#slidingGlassDoors-part-with-user-values-to-display").show();
    } else {
        $("#slidingGlassDoors-part-with-user-values-to-display").hide();
    };


    //////////////////Garage Door////////////////////// 

    var garageDoorUserEnteredPercentage = document.getElementById('garageDoor-user-entered-Percentage').value;
    var garageDoorUserEnteredSpecInfo = document.getElementById('garageDoor-user-entered-SpecInfo').value;
    var garageDoorUserEnteredClientInfo = document.getElementById('garageDoor-user-entered-ClientInfo').value;

    var garageDoorValue = calculateAmountFromPercentage(totalCost, garageDoorUserEnteredPercentage);


    document.getElementById('garageDoor-Value').innerHTML = garageDoorValue;
    document.getElementById('garageDoor-spec-info-value').innerHTML = garageDoorUserEnteredSpecInfo;
    document.getElementById('garageDoor-client-info-value').innerHTML = garageDoorUserEnteredClientInfo;

    if (document.getElementById('garageDoor-checkbox-id').checked) {
        $("#garageDoor-part-with-user-values-to-display").show();
    } else {
        $("#garageDoor-part-with-user-values-to-display").hide();
    };


    //////////////////Window and Door Hardware////////////////////// 

    var windowAndDoorHardwareUserEnteredPercentage = document.getElementById('windowAndDoorHardware-user-entered-Percentage').value;
    var windowAndDoorHardwareUserEnteredSpecInfo = document.getElementById('windowAndDoorHardware-user-entered-SpecInfo').value;
    var windowAndDoorHardwareUserEnteredClientInfo = document.getElementById('windowAndDoorHardware-user-entered-ClientInfo').value;

    var windowAndDoorHardwareValue = calculateAmountFromPercentage(totalCost, windowAndDoorHardwareUserEnteredPercentage);


    document.getElementById('windowAndDoorHardware-Value').innerHTML = windowAndDoorHardwareValue;
    document.getElementById('windowAndDoorHardware-spec-info-value').innerHTML = windowAndDoorHardwareUserEnteredSpecInfo;
    document.getElementById('windowAndDoorHardware-client-info-value').innerHTML = windowAndDoorHardwareUserEnteredClientInfo;

    if (document.getElementById('windowAndDoorHardware-checkbox-id').checked) {
        $("#windowAndDoorHardware-part-with-user-values-to-display").show();
    } else {
        $("#windowAndDoorHardware-part-with-user-values-to-display").hide();
    };


    //////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    //////////////////////Insulation//////////////////////
    /////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    if (document.getElementById('insulation-checkbox-id').checked) {
        $("#insulation-category").show();
    } else {
        $("#insulation-category").hide();
    };

    ///////////////Insulation///////////////////////////

    var insulationUserEnteredPercentage = document.getElementById('insulation-user-entered-Percentage').value;
    var insulationUserEnteredSpecInfo = document.getElementById('insulation-user-entered-SpecInfo').value;
    var insulationUserEnteredClientInfo = document.getElementById('insulation-user-entered-ClientInfo').value;

    var insulationValue = calculateAmountFromPercentage(totalCost, insulationUserEnteredPercentage);


    document.getElementById('insulation-Value').innerHTML = insulationValue;
    document.getElementById('insulation-spec-info-value').innerHTML = insulationUserEnteredSpecInfo;
    document.getElementById('insulation-client-info-value').innerHTML = insulationUserEnteredClientInfo;

    if (document.getElementById('insulation-checkbox-id').checked) {
        $("#insulation-part-with-user-values-to-display").show();
    } else {
        $("#insulation-part-with-user-values-to-display").hide();
    };



    //////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    //////////////////////Exterior Finishes//////////////////
    /////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    if (document.getElementById('exteriorTrim-checkbox-id').checked || document.getElementById('exteriorPainting-checkbox-id').checked || document.getElementById('exteriorPaint-checkbox-id').checked) {
        $("#exteriorFinishes-category").show();
    } else {
        $("#exteriorFinishes-category").hide();
    };

    ///////////////Exterior Trim///////////////////////////

    var exteriorTrimUserEnteredPercentage = document.getElementById('exteriorTrim-user-entered-Percentage').value;
    var exteriorTrimUserEnteredSpecInfo = document.getElementById('exteriorTrim-user-entered-SpecInfo').value;
    var exteriorTrimUserEnteredClientInfo = document.getElementById('exteriorTrim-user-entered-ClientInfo').value;

    var exteriorTrimValue = calculateAmountFromPercentage(totalCost, exteriorTrimUserEnteredPercentage);


    document.getElementById('exteriorTrim-Value').innerHTML = exteriorTrimValue;
    document.getElementById('exteriorTrim-spec-info-value').innerHTML = exteriorTrimUserEnteredSpecInfo;
    document.getElementById('exteriorTrim-client-info-value').innerHTML = exteriorTrimUserEnteredClientInfo;

    if (document.getElementById('exteriorTrim-checkbox-id').checked) {
        $("#exteriorTrim-part-with-user-values-to-display").show();
    } else {
        $("#exteriorTrim-part-with-user-values-to-display").hide();
    };


    ///////////////Exterior Painting///////////////////////////

    var exteriorPaintingUserEnteredPercentage = document.getElementById('exteriorPainting-user-entered-Percentage').value;
    var exteriorPaintingUserEnteredSpecInfo = document.getElementById('exteriorPainting-user-entered-SpecInfo').value;
    var exteriorPaintingUserEnteredClientInfo = document.getElementById('exteriorPainting-user-entered-ClientInfo').value;

    var exteriorPaintingValue = calculateAmountFromPercentage(totalCost, exteriorPaintingUserEnteredPercentage);


    document.getElementById('exteriorPainting-Value').innerHTML = exteriorPaintingValue;
    document.getElementById('exteriorPainting-spec-info-value').innerHTML = exteriorPaintingUserEnteredSpecInfo;
    document.getElementById('exteriorPainting-client-info-value').innerHTML = exteriorPaintingUserEnteredClientInfo;

    if (document.getElementById('exteriorPainting-checkbox-id').checked) {
        $("#exteriorPainting-part-with-user-values-to-display").show();
    } else {
        $("#exteriorPainting-part-with-user-values-to-display").hide();
    };

    ///////////////Exterior Paint///////////////////////////

    var exteriorPaintUserEnteredPercentage = document.getElementById('exteriorPaint-user-entered-Percentage').value;
    var exteriorPaintUserEnteredSpecInfo = document.getElementById('exteriorPaint-user-entered-SpecInfo').value;
    var exteriorPaintUserEnteredClientInfo = document.getElementById('exteriorPaint-user-entered-ClientInfo').value;

    var exteriorPaintValue = calculateAmountFromPercentage(totalCost, exteriorPaintUserEnteredPercentage);


    document.getElementById('exteriorPaint-Value').innerHTML = exteriorPaintValue;
    document.getElementById('exteriorPaint-spec-info-value').innerHTML = exteriorPaintUserEnteredSpecInfo;
    document.getElementById('exteriorPaint-client-info-value').innerHTML = exteriorPaintUserEnteredClientInfo;

    if (document.getElementById('exteriorPaint-checkbox-id').checked) {
        $("#exteriorPaint-part-with-user-values-to-display").show();
    } else {
        $("#exteriorPaint-part-with-user-values-to-display").hide();
    };


    //////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    //////////////////////Drywall//////////////////
    /////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    if (document.getElementById('drywall-checkbox-id').checked) {
        $("#drywall-category").show();
    } else {
        $("#drywall-category").hide();
    };

    ///////////////drywall///////////////////////////

    var drywallUserEnteredPercentage = document.getElementById('drywall-user-entered-Percentage').value;
    var drywallUserEnteredSpecInfo = document.getElementById('drywall-user-entered-SpecInfo').value;
    var drywallUserEnteredClientInfo = document.getElementById('drywall-user-entered-ClientInfo').value;

    var drywallValue = calculateAmountFromPercentage(totalCost, drywallUserEnteredPercentage);


    document.getElementById('drywall-Value').innerHTML = drywallValue;
    document.getElementById('drywall-spec-info-value').innerHTML = drywallUserEnteredSpecInfo;
    document.getElementById('drywall-client-info-value').innerHTML = drywallUserEnteredClientInfo;

    if (document.getElementById('drywall-checkbox-id').checked) {
        $("#drywall-part-with-user-values-to-display").show();
    } else {
        $("#drywall-part-with-user-values-to-display").hide();
    };




    //////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    //////////////////////Flooring//////////////////
    /////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    if (document.getElementById('flooringSpecifications-checkbox-id').checked || document.getElementById('resilientFlooring-checkbox-id').checked || document.getElementById('carpeting-checkbox-id').checked || document.getElementById('hardwoodFlooring-checkbox-id').checked) {
        $("#flooring-category").show();
    } else {
        $("#flooring-category").hide();
    };

    ///////////////Flooring Specifications///////////////////////////

    var flooringSpecificationsUserEnteredPercentage = document.getElementById('flooringSpecifications-user-entered-Percentage').value;
    var flooringSpecificationsUserEnteredSpecInfo = document.getElementById('flooringSpecifications-user-entered-SpecInfo').value;
    var flooringSpecificationsUserEnteredClientInfo = document.getElementById('flooringSpecifications-user-entered-ClientInfo').value;

    var flooringSpecificationsValue = calculateAmountFromPercentage(totalCost, flooringSpecificationsUserEnteredPercentage);


    document.getElementById('flooringSpecifications-Value').innerHTML = flooringSpecificationsValue;
    document.getElementById('flooringSpecifications-spec-info-value').innerHTML = flooringSpecificationsUserEnteredSpecInfo;
    document.getElementById('flooringSpecifications-client-info-value').innerHTML = flooringSpecificationsUserEnteredClientInfo;

    if (document.getElementById('flooringSpecifications-checkbox-id').checked) {
        $("#flooringSpecifications-part-with-user-values-to-display").show();
    } else {
        $("#flooringSpecifications-part-with-user-values-to-display").hide();
    };

    ///////////////Resilient Flooring///////////////////////////

    var resilientFlooringUserEnteredPercentage = document.getElementById('resilientFlooring-user-entered-Percentage').value;
    var resilientFlooringUserEnteredSpecInfo = document.getElementById('resilientFlooring-user-entered-SpecInfo').value;
    var resilientFlooringUserEnteredClientInfo = document.getElementById('resilientFlooring-user-entered-ClientInfo').value;

    var resilientFlooringValue = calculateAmountFromPercentage(totalCost, resilientFlooringUserEnteredPercentage);


    document.getElementById('resilientFlooring-Value').innerHTML = resilientFlooringValue;
    document.getElementById('resilientFlooring-spec-info-value').innerHTML = resilientFlooringUserEnteredSpecInfo;
    document.getElementById('resilientFlooring-client-info-value').innerHTML = resilientFlooringUserEnteredClientInfo;

    if (document.getElementById('resilientFlooring-checkbox-id').checked) {
        $("#resilientFlooring-part-with-user-values-to-display").show();
    } else {
        $("#resilientFlooring-part-with-user-values-to-display").hide();
    };

    ///////////////Carpeting///////////////////////////

    var carpetingUserEnteredPercentage = document.getElementById('carpeting-user-entered-Percentage').value;
    var carpetingUserEnteredSpecInfo = document.getElementById('carpeting-user-entered-SpecInfo').value;
    var carpetingUserEnteredClientInfo = document.getElementById('carpeting-user-entered-ClientInfo').value;

    var carpetingValue = calculateAmountFromPercentage(totalCost, carpetingUserEnteredPercentage);


    document.getElementById('carpeting-Value').innerHTML = carpetingValue;
    document.getElementById('carpeting-spec-info-value').innerHTML = carpetingUserEnteredSpecInfo;
    document.getElementById('carpeting-client-info-value').innerHTML = carpetingUserEnteredClientInfo;

    if (document.getElementById('carpeting-checkbox-id').checked) {
        $("#carpeting-part-with-user-values-to-display").show();
    } else {
        $("#carpeting-part-with-user-values-to-display").hide();
    };

    ///////////////Hardwood Flooring///////////////////////////

    var hardwoodFlooringUserEnteredPercentage = document.getElementById('hardwoodFlooring-user-entered-Percentage').value;
    var hardwoodFlooringUserEnteredSpecInfo = document.getElementById('hardwoodFlooring-user-entered-SpecInfo').value;
    var hardwoodFlooringUserEnteredClientInfo = document.getElementById('hardwoodFlooring-user-entered-ClientInfo').value;

    var hardwoodFlooringValue = calculateAmountFromPercentage(totalCost, hardwoodFlooringUserEnteredPercentage);


    document.getElementById('hardwoodFlooring-Value').innerHTML = hardwoodFlooringValue;
    document.getElementById('hardwoodFlooring-spec-info-value').innerHTML = hardwoodFlooringUserEnteredSpecInfo;
    document.getElementById('hardwoodFlooring-client-info-value').innerHTML = hardwoodFlooringUserEnteredClientInfo;

    if (document.getElementById('hardwoodFlooring-checkbox-id').checked) {
        $("#hardwoodFlooring-part-with-user-values-to-display").show();
    } else {
        $("#hardwoodFlooring-part-with-user-values-to-display").hide();
    };


    //////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    //////////////////////Interior Trim//////////////////
    /////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    if (document.getElementById('interior-checkbox-id').checked) {
        $("#interiorTrim-category").show();
    } else {
        $("#interiorTrim-category").hide();
    };

    ///////////////Interior///////////////////////////

    var interiorUserEnteredPercentage = document.getElementById('interior-user-entered-Percentage').value;
    var interiorUserEnteredSpecInfo = document.getElementById('interior-user-entered-SpecInfo').value;
    var interiorUserEnteredClientInfo = document.getElementById('interior-user-entered-ClientInfo').value;

    var interiorValue = calculateAmountFromPercentage(totalCost, interiorUserEnteredPercentage);


    document.getElementById('interior-Value').innerHTML = interiorValue;
    document.getElementById('interior-spec-info-value').innerHTML = interiorUserEnteredSpecInfo;
    document.getElementById('interior-client-info-value').innerHTML = interiorUserEnteredClientInfo;

    if (document.getElementById('interior-checkbox-id').checked) {
        $("#interior-part-with-user-values-to-display").show();
    } else {
        $("#interior-part-with-user-values-to-display").hide();
    };




    //////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    //////////////////////Ceramic Tile//////////////////
    /////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    if (document.getElementById('ceramicTileSpecifications-checkbox-id').checked || document.getElementById('ceramicTile-checkbox-id').checked) {
        $("#ceramic-category").show();
    } else {
        $("#ceramic-category").hide();
    };

    ///////////////Ceramic Tile Specifications///////////////////////////

    var ceramicTileSpecificationsUserEnteredPercentage = document.getElementById('ceramicTileSpecifications-user-entered-Percentage').value;
    var ceramicTileSpecificationsUserEnteredSpecInfo = document.getElementById('ceramicTileSpecifications-user-entered-SpecInfo').value;
    var ceramicTileSpecificationsUserEnteredClientInfo = document.getElementById('ceramicTileSpecifications-user-entered-ClientInfo').value;

    var ceramicTileSpecificationsValue = calculateAmountFromPercentage(totalCost, ceramicTileSpecificationsUserEnteredPercentage);


    document.getElementById('ceramicTileSpecifications-Value').innerHTML = ceramicTileSpecificationsValue;
    document.getElementById('ceramicTileSpecifications-spec-info-value').innerHTML = ceramicTileSpecificationsUserEnteredSpecInfo;
    document.getElementById('ceramicTileSpecifications-client-info-value').innerHTML = ceramicTileSpecificationsUserEnteredClientInfo;

    if (document.getElementById('ceramicTileSpecifications-checkbox-id').checked) {
        $("#ceramicTileSpecifications-part-with-user-values-to-display").show();
    } else {
        $("#ceramicTileSpecifications-part-with-user-values-to-display").hide();
    };

    ///////////////Ceramic Tile ///////////////////////////

    var ceramicTileUserEnteredPercentage = document.getElementById('ceramicTile-user-entered-Percentage').value;
    var ceramicTileUserEnteredSpecInfo = document.getElementById('ceramicTile-user-entered-SpecInfo').value;
    var ceramicTileUserEnteredClientInfo = document.getElementById('ceramicTile-user-entered-ClientInfo').value;

    var ceramicTileValue = calculateAmountFromPercentage(totalCost, ceramicTileUserEnteredPercentage);


    document.getElementById('ceramicTile-Value').innerHTML = ceramicTileValue;
    document.getElementById('ceramicTile-spec-info-value').innerHTML = ceramicTileUserEnteredSpecInfo;
    document.getElementById('ceramicTile-client-info-value').innerHTML = ceramicTileUserEnteredClientInfo;

    if (document.getElementById('ceramicTile-checkbox-id').checked) {
        $("#ceramicTile-part-with-user-values-to-display").show();
    } else {
        $("#ceramicTile-part-with-user-values-to-display").hide();
    };



    //////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    //////////////////////Cabinets//////////////////
    /////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    if (document.getElementById('cabinetSpecifications-checkbox-id').checked || document.getElementById('kitchenCabinets-checkbox-id').checked || document.getElementById('counterTops-checkbox-id').checked || document.getElementById('bathroomCabinets-checkbox-id').checked || document.getElementById('cabinetHardware-checkbox-id').checked) {
        $("#cabinet-category").show();
    } else {
        $("#cabinet-category").hide();
    };

    ///////////////Cabinet Specifications///////////////////////////

    var cabinetSpecificationsUserEnteredPercentage = document.getElementById('cabinetSpecifications-user-entered-Percentage').value;
    var cabinetSpecificationsUserEnteredSpecInfo = document.getElementById('cabinetSpecifications-user-entered-SpecInfo').value;
    var cabinetSpecificationsUserEnteredClientInfo = document.getElementById('cabinetSpecifications-user-entered-ClientInfo').value;

    var cabinetSpecificationsValue = calculateAmountFromPercentage(totalCost, cabinetSpecificationsUserEnteredPercentage);


    document.getElementById('cabinetSpecifications-Value').innerHTML = cabinetSpecificationsValue;
    document.getElementById('cabinetSpecifications-spec-info-value').innerHTML = cabinetSpecificationsUserEnteredSpecInfo;
    document.getElementById('cabinetSpecifications-client-info-value').innerHTML = cabinetSpecificationsUserEnteredClientInfo;

    if (document.getElementById('cabinetSpecifications-checkbox-id').checked) {
        $("#cabinetSpecifications-part-with-user-values-to-display").show();
    } else {
        $("#cabinetSpecifications-part-with-user-values-to-display").hide();
    };

    ///////////////Kitchen Cabinets ///////////////////////////

    var kitchenCabinetsUserEnteredPercentage = document.getElementById('kitchenCabinets-user-entered-Percentage').value;
    var kitchenCabinetsUserEnteredSpecInfo = document.getElementById('kitchenCabinets-user-entered-SpecInfo').value;
    var kitchenCabinetsUserEnteredClientInfo = document.getElementById('kitchenCabinets-user-entered-ClientInfo').value;

    var kitchenCabinetsValue = calculateAmountFromPercentage(totalCost, kitchenCabinetsUserEnteredPercentage);


    document.getElementById('kitchenCabinets-Value').innerHTML = kitchenCabinetsValue;
    document.getElementById('kitchenCabinets-spec-info-value').innerHTML = kitchenCabinetsUserEnteredSpecInfo;
    document.getElementById('kitchenCabinets-client-info-value').innerHTML = kitchenCabinetsUserEnteredClientInfo;

    if (document.getElementById('kitchenCabinets-checkbox-id').checked) {
        $("#kitchenCabinets-part-with-user-values-to-display").show();
    } else {
        $("#kitchenCabinets-part-with-user-values-to-display").hide();
    };

    ///////////////Counter Tops ///////////////////////////

    var counterTopsUserEnteredPercentage = document.getElementById('counterTops-user-entered-Percentage').value;
    var counterTopsUserEnteredSpecInfo = document.getElementById('counterTops-user-entered-SpecInfo').value;
    var counterTopsUserEnteredClientInfo = document.getElementById('counterTops-user-entered-ClientInfo').value;

    var counterTopsValue = calculateAmountFromPercentage(totalCost, counterTopsUserEnteredPercentage);


    document.getElementById('counterTops-Value').innerHTML = counterTopsValue;
    document.getElementById('counterTops-spec-info-value').innerHTML = counterTopsUserEnteredSpecInfo;
    document.getElementById('counterTops-client-info-value').innerHTML = counterTopsUserEnteredClientInfo;

    if (document.getElementById('counterTops-checkbox-id').checked) {
        $("#counterTops-part-with-user-values-to-display").show();
    } else {
        $("#counterTops-part-with-user-values-to-display").hide();
    };

    ///////////////Bathroom Cabinets////////////////////////

    var bathroomCabinetsUserEnteredPercentage = document.getElementById('bathroomCabinets-user-entered-Percentage').value;
    var bathroomCabinetsUserEnteredSpecInfo = document.getElementById('bathroomCabinets-user-entered-SpecInfo').value;
    var bathroomCabinetsUserEnteredClientInfo = document.getElementById('bathroomCabinets-user-entered-ClientInfo').value;

    var bathroomCabinetsValue = calculateAmountFromPercentage(totalCost, bathroomCabinetsUserEnteredPercentage);


    document.getElementById('bathroomCabinets-Value').innerHTML = bathroomCabinetsValue;
    document.getElementById('bathroomCabinets-spec-info-value').innerHTML = bathroomCabinetsUserEnteredSpecInfo;
    document.getElementById('bathroomCabinets-client-info-value').innerHTML = bathroomCabinetsUserEnteredClientInfo;

    if (document.getElementById('bathroomCabinets-checkbox-id').checked) {
        $("#bathroomCabinets-part-with-user-values-to-display").show();
    } else {
        $("#bathroomCabinets-part-with-user-values-to-display").hide();
    };
    ///////////////Cabinet Hardware////////////////////////

    var cabinetHardwareUserEnteredPercentage = document.getElementById('cabinetHardware-user-entered-Percentage').value;
    var cabinetHardwareUserEnteredSpecInfo = document.getElementById('cabinetHardware-user-entered-SpecInfo').value;
    var cabinetHardwareUserEnteredClientInfo = document.getElementById('cabinetHardware-user-entered-ClientInfo').value;

    var cabinetHardwareValue = calculateAmountFromPercentage(totalCost, cabinetHardwareUserEnteredPercentage);


    document.getElementById('cabinetHardware-Value').innerHTML = cabinetHardwareValue;
    document.getElementById('cabinetHardware-spec-info-value').innerHTML = cabinetHardwareUserEnteredSpecInfo;
    document.getElementById('cabinetHardware-client-info-value').innerHTML = cabinetHardwareUserEnteredClientInfo;

    if (document.getElementById('cabinetHardware-checkbox-id').checked) {
        $("#cabinetHardware-part-with-user-values-to-display").show();
    } else {
        $("#cabinetHardware-part-with-user-values-to-display").hide();
    };

    //////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    //////////////////////Appliances//////////////////
    /////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    if (document.getElementById('applianceSpecifications-checkbox-id').checked || document.getElementById('range-checkbox-id').checked || document.getElementById('rangeHood-checkbox-id').checked || document.getElementById('disposal-checkbox-id').checked || document.getElementById('dishwasher-checkbox-id').checked || document.getElementById('refrigerator-checkbox-id').checked || document.getElementById('washerAndDryer-checkbox-id').checked || document.getElementById('microwave-checkbox-id').checked || document.getElementById('vacuum-checkbox-id').checked || document.getElementById('otherAppliances-checkbox-id').checked) {
        $("#appliances-category").show();
    } else {
        $("#appliances-category").hide();
    };

    ///////////////Appliance Specifications///////////////////////////

    var applianceSpecificationsUserEnteredPercentage = document.getElementById('applianceSpecifications-user-entered-Percentage').value;
    var applianceSpecificationsUserEnteredSpecInfo = document.getElementById('applianceSpecifications-user-entered-SpecInfo').value;
    var applianceSpecificationsUserEnteredClientInfo = document.getElementById('applianceSpecifications-user-entered-ClientInfo').value;

    var applianceSpecificationsValue = calculateAmountFromPercentage(totalCost, applianceSpecificationsUserEnteredPercentage);


    document.getElementById('applianceSpecifications-Value').innerHTML = applianceSpecificationsValue;
    document.getElementById('applianceSpecifications-spec-info-value').innerHTML = applianceSpecificationsUserEnteredSpecInfo;
    document.getElementById('applianceSpecifications-client-info-value').innerHTML = applianceSpecificationsUserEnteredClientInfo;

    if (document.getElementById('applianceSpecifications-checkbox-id').checked) {
        $("#applianceSpecifications-part-with-user-values-to-display").show();
    } else {
        $("#applianceSpecifications-part-with-user-values-to-display").hide();
    };


    ///////////////Range///////////////////////////

    var rangeUserEnteredPercentage = document.getElementById('range-user-entered-Percentage').value;
    var rangeUserEnteredSpecInfo = document.getElementById('range-user-entered-SpecInfo').value;
    var rangeUserEnteredClientInfo = document.getElementById('range-user-entered-ClientInfo').value;

    var rangeValue = calculateAmountFromPercentage(totalCost, rangeUserEnteredPercentage);


    document.getElementById('range-Value').innerHTML = rangeValue;
    document.getElementById('range-spec-info-value').innerHTML = rangeUserEnteredSpecInfo;
    document.getElementById('range-client-info-value').innerHTML = rangeUserEnteredClientInfo;

    if (document.getElementById('range-checkbox-id').checked) {
        $("#range-part-with-user-values-to-display").show();
    } else {
        $("#range-part-with-user-values-to-display").hide();
    };
    ///////////////Range Hood///////////////////////////

    var rangeHoodUserEnteredPercentage = document.getElementById('rangeHood-user-entered-Percentage').value;
    var rangeHoodUserEnteredSpecInfo = document.getElementById('rangeHood-user-entered-SpecInfo').value;
    var rangeHoodUserEnteredClientInfo = document.getElementById('rangeHood-user-entered-ClientInfo').value;

    var rangeHoodValue = calculateAmountFromPercentage(totalCost, rangeHoodUserEnteredPercentage);


    document.getElementById('rangeHood-Value').innerHTML = rangeHoodValue;
    document.getElementById('rangeHood-spec-info-value').innerHTML = rangeHoodUserEnteredSpecInfo;
    document.getElementById('rangeHood-client-info-value').innerHTML = rangeHoodUserEnteredClientInfo;

    if (document.getElementById('rangeHood-checkbox-id').checked) {
        $("#rangeHood-part-with-user-values-to-display").show();
    } else {
        $("#rangeHood-part-with-user-values-to-display").hide();
    };

    ///////////////Disposal///////////////////////////

    var disposalUserEnteredPercentage = document.getElementById('disposal-user-entered-Percentage').value;
    var disposalUserEnteredSpecInfo = document.getElementById('disposal-user-entered-SpecInfo').value;
    var disposalUserEnteredClientInfo = document.getElementById('disposal-user-entered-ClientInfo').value;

    var disposalValue = calculateAmountFromPercentage(totalCost, disposalUserEnteredPercentage);


    document.getElementById('disposal-Value').innerHTML = disposalValue;
    document.getElementById('disposal-spec-info-value').innerHTML = disposalUserEnteredSpecInfo;
    document.getElementById('disposal-client-info-value').innerHTML = disposalUserEnteredClientInfo;

    if (document.getElementById('disposal-checkbox-id').checked) {
        $("#disposal-part-with-user-values-to-display").show();
    } else {
        $("#disposal-part-with-user-values-to-display").hide();
    };


    ///////////////Dishwasher///////////////////////////

    var dishwasherUserEnteredPercentage = document.getElementById('dishwasher-user-entered-Percentage').value;
    var dishwasherUserEnteredSpecInfo = document.getElementById('dishwasher-user-entered-SpecInfo').value;
    var dishwasherUserEnteredClientInfo = document.getElementById('dishwasher-user-entered-ClientInfo').value;

    var dishwasherValue = calculateAmountFromPercentage(totalCost, dishwasherUserEnteredPercentage);


    document.getElementById('dishwasher-Value').innerHTML = dishwasherValue;
    document.getElementById('dishwasher-spec-info-value').innerHTML = dishwasherUserEnteredSpecInfo;
    document.getElementById('dishwasher-client-info-value').innerHTML = dishwasherUserEnteredClientInfo;

    if (document.getElementById('dishwasher-checkbox-id').checked) {
        $("#dishwasher-part-with-user-values-to-display").show();
    } else {
        $("#dishwasher-part-with-user-values-to-display").hide();
    };



    ///////////////Refrigerator///////////////////////////

    var refrigeratorUserEnteredPercentage = document.getElementById('refrigerator-user-entered-Percentage').value;
    var refrigeratorUserEnteredSpecInfo = document.getElementById('refrigerator-user-entered-SpecInfo').value;
    var refrigeratorUserEnteredClientInfo = document.getElementById('refrigerator-user-entered-ClientInfo').value;

    var refrigeratorValue = calculateAmountFromPercentage(totalCost, refrigeratorUserEnteredPercentage);


    document.getElementById('refrigerator-Value').innerHTML = refrigeratorValue;
    document.getElementById('refrigerator-spec-info-value').innerHTML = refrigeratorUserEnteredSpecInfo;
    document.getElementById('refrigerator-client-info-value').innerHTML = refrigeratorUserEnteredClientInfo;

    if (document.getElementById('refrigerator-checkbox-id').checked) {
        $("#refrigerator-part-with-user-values-to-display").show();
    } else {
        $("#refrigerator-part-with-user-values-to-display").hide();
    };



    ///////////////Washer and Dryer///////////////////////////

    var washerAndDryerUserEnteredPercentage = document.getElementById('washerAndDryer-user-entered-Percentage').value;
    var washerAndDryerUserEnteredSpecInfo = document.getElementById('washerAndDryer-user-entered-SpecInfo').value;
    var washerAndDryerUserEnteredClientInfo = document.getElementById('washerAndDryer-user-entered-ClientInfo').value;

    var washerAndDryerValue = calculateAmountFromPercentage(totalCost, washerAndDryerUserEnteredPercentage);


    document.getElementById('washerAndDryer-Value').innerHTML = washerAndDryerValue;
    document.getElementById('washerAndDryer-spec-info-value').innerHTML = washerAndDryerUserEnteredSpecInfo;
    document.getElementById('washerAndDryer-client-info-value').innerHTML = washerAndDryerUserEnteredClientInfo;

    if (document.getElementById('washerAndDryer-checkbox-id').checked) {
        $("#washerAndDryer-part-with-user-values-to-display").show();
    } else {
        $("#washerAndDryer-part-with-user-values-to-display").hide();
    };



    ///////////////Microwave///////////////////////////

    var microwaveUserEnteredPercentage = document.getElementById('microwave-user-entered-Percentage').value;
    var microwaveUserEnteredSpecInfo = document.getElementById('microwave-user-entered-SpecInfo').value;
    var microwaveUserEnteredClientInfo = document.getElementById('microwave-user-entered-ClientInfo').value;

    var microwaveValue = calculateAmountFromPercentage(totalCost, microwaveUserEnteredPercentage);


    document.getElementById('microwave-Value').innerHTML = microwaveValue;
    document.getElementById('microwave-spec-info-value').innerHTML = microwaveUserEnteredSpecInfo;
    document.getElementById('microwave-client-info-value').innerHTML = microwaveUserEnteredClientInfo;

    if (document.getElementById('microwave-checkbox-id').checked) {
        $("#microwave-part-with-user-values-to-display").show();
    } else {
        $("#microwave-part-with-user-values-to-display").hide();
    };

    ///////////////Vacuum///////////////////////////

    var vacuumUserEnteredPercentage = document.getElementById('vacuum-user-entered-Percentage').value;
    var vacuumUserEnteredSpecInfo = document.getElementById('vacuum-user-entered-SpecInfo').value;
    var vacuumUserEnteredClientInfo = document.getElementById('vacuum-user-entered-ClientInfo').value;

    var vacuumValue = calculateAmountFromPercentage(totalCost, vacuumUserEnteredPercentage);


    document.getElementById('vacuum-Value').innerHTML = vacuumValue;
    document.getElementById('vacuum-spec-info-value').innerHTML = vacuumUserEnteredSpecInfo;
    document.getElementById('vacuum-client-info-value').innerHTML = vacuumUserEnteredClientInfo;

    if (document.getElementById('vacuum-checkbox-id').checked) {
        $("#vacuum-part-with-user-values-to-display").show();
    } else {
        $("#vacuum-part-with-user-values-to-display").hide();
    };

    ///////////////Appliance(s)///////////////////////////

    var appliancesUserEnteredPercentage = document.getElementById('appliances-user-entered-Percentage').value;
    var appliancesUserEnteredSpecInfo = document.getElementById('appliances-user-entered-SpecInfo').value;
    var appliancesUserEnteredClientInfo = document.getElementById('appliances-user-entered-ClientInfo').value;

    var appliancesValue = calculateAmountFromPercentage(totalCost, appliancesUserEnteredPercentage);


    document.getElementById('appliances-Value').innerHTML = appliancesValue;
    document.getElementById('appliances-spec-info-value').innerHTML = appliancesUserEnteredSpecInfo;
    document.getElementById('appliances-client-info-value').innerHTML = appliancesUserEnteredClientInfo;

    if (document.getElementById('otherAppliances-checkbox-id').checked) {
        $("#appliances-part-with-user-values-to-display").show();
    } else {
        $("#appliances-part-with-user-values-to-display").hide();
    };


    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////Finish Plumbing///////////////////
    /////////////////////////////////////////////////
    //////////////////////////////////////////////////

    if (document.getElementById('finishPlumbingSpecifications-checkbox-id').checked || document.getElementById('plumbingFixtures-checkbox-id').checked) {
        $("#finishPlumbing-category").show();
    } else {
        $("#finishPlumbing-category").hide();
    };


    ///////////////Finish Plumbing Specifications////////////////////

    var finishPlumbingSpecificationsUserEnteredPercentage = document.getElementById('finishPlumbingSpecifications-user-entered-Percentage').value;
    var finishPlumbingSpecificationsUserEnteredSpecInfo = document.getElementById('finishPlumbingSpecifications-user-entered-SpecInfo').value;
    var finishPlumbingSpecificationsUserEnteredClientInfo = document.getElementById('finishPlumbingSpecifications-user-entered-ClientInfo').value;

    var finishPlumbingSpecificationsValue = calculateAmountFromPercentage(totalCost, finishPlumbingSpecificationsUserEnteredPercentage);


    document.getElementById('finishPlumbingSpecifications-Value').innerHTML = finishPlumbingSpecificationsValue;
    document.getElementById('finishPlumbingSpecifications-spec-info-value').innerHTML = finishPlumbingSpecificationsUserEnteredSpecInfo;
    document.getElementById('finishPlumbingSpecifications-client-info-value').innerHTML = finishPlumbingSpecificationsUserEnteredClientInfo;

    if (document.getElementById('finishPlumbingSpecifications-checkbox-id').checked) {
        $("#finishPlumbingSpecifications-part-with-user-values-to-display").show();
    } else {
        $("#finishPlumbingSpecifications-part-with-user-values-to-display").hide();
    };

    ///////////////Plumbing Fixtures:////////////////////

    var plumbingFixturesUserEnteredPercentage = document.getElementById('plumbingFixtures-user-entered-Percentage').value;
    var plumbingFixturesUserEnteredSpecInfo = document.getElementById('plumbingFixtures-user-entered-SpecInfo').value;
    var plumbingFixturesUserEnteredClientInfo = document.getElementById('plumbingFixtures-user-entered-ClientInfo').value;

    var plumbingFixturesValue = calculateAmountFromPercentage(totalCost, plumbingFixturesUserEnteredPercentage);


    document.getElementById('plumbingFixtures-Value').innerHTML = plumbingFixturesValue;
    document.getElementById('plumbingFixtures-spec-info-value').innerHTML = plumbingFixturesUserEnteredSpecInfo;
    document.getElementById('plumbingFixtures-client-info-value').innerHTML = plumbingFixturesUserEnteredClientInfo;

    if (document.getElementById('plumbingFixtures-checkbox-id').checked) {
        $("#plumbingFixtures-part-with-user-values-to-display").show();
    } else {
        $("#plumbingFixtures-part-with-user-values-to-display").hide();
    };


    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////Finish Electrical///////////////////
    /////////////////////////////////////////////////
    //////////////////////////////////////////////////

    if (document.getElementById('finishElectricalSpecifications-checkbox-id').checked || document.getElementById('electricalFixtures-checkbox-id').checked) {
        $("#finishElectrical-category").show();
    } else {
        $("#finishElectrical-category").hide();
    };


    ///////////////Finish Electrical Specifications:////////////////////

    var finishElectricalSpecificationsUserEnteredPercentage = document.getElementById('finishElectricalSpecifications-user-entered-Percentage').value;
    var finishElectricalSpecificationsUserEnteredSpecInfo = document.getElementById('finishElectricalSpecifications-user-entered-SpecInfo').value;
    var finishElectricalSpecificationsUserEnteredClientInfo = document.getElementById('finishElectricalSpecifications-user-entered-ClientInfo').value;

    var finishElectricalSpecificationsValue = calculateAmountFromPercentage(totalCost, finishElectricalSpecificationsUserEnteredPercentage);


    document.getElementById('finishElectricalSpecifications-Value').innerHTML = finishElectricalSpecificationsValue;
    document.getElementById('finishElectricalSpecifications-spec-info-value').innerHTML = finishElectricalSpecificationsUserEnteredSpecInfo;
    document.getElementById('finishElectricalSpecifications-client-info-value').innerHTML = finishElectricalSpecificationsUserEnteredClientInfo;

    if (document.getElementById('finishElectricalSpecifications-checkbox-id').checked) {
        $("#finishElectricalSpecifications-part-with-user-values-to-display").show();
    } else {
        $("#finishElectricalSpecifications-part-with-user-values-to-display").hide();
    };

    ///////////////Electrical Fixtures:////////////////////

    var electricalFixturesUserEnteredPercentage = document.getElementById('electricalFixtures-user-entered-Percentage').value;
    var electricalFixturesUserEnteredSpecInfo = document.getElementById('electricalFixtures-user-entered-SpecInfo').value;
    var electricalFixturesUserEnteredClientInfo = document.getElementById('electricalFixtures-user-entered-ClientInfo').value;

    var electricalFixturesValue = calculateAmountFromPercentage(totalCost, electricalFixturesUserEnteredPercentage);


    document.getElementById('electricalFixtures-Value').innerHTML = electricalFixturesValue;
    document.getElementById('electricalFixtures-spec-info-value').innerHTML = electricalFixturesUserEnteredSpecInfo;
    document.getElementById('electricalFixtures-client-info-value').innerHTML = electricalFixturesUserEnteredClientInfo;

    if (document.getElementById('electricalFixtures-checkbox-id').checked) {
        $("#electricalFixtures-part-with-user-values-to-display").show();
    } else {
        $("#electricalFixtures-part-with-user-values-to-display").hide();
    };


    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////Finish HVAC///////////////////
    /////////////////////////////////////////////////
    //////////////////////////////////////////////////

    if (document.getElementById('finishHVAC-checkbox-id').checked) {
        $("#finishHVAC-category").show();
    } else {
        $("#finishHVAC-category").hide();
    };


    ///////////////Finish HVAC ////////////////////

    var finishHVACUserEnteredPercentage = document.getElementById('finishHVAC-user-entered-Percentage').value;
    var finishHVACUserEnteredSpecInfo = document.getElementById('finishHVAC-user-entered-SpecInfo').value;
    var finishHVACUserEnteredClientInfo = document.getElementById('finishHVAC-user-entered-ClientInfo').value;

    var finishHVACValue = calculateAmountFromPercentage(totalCost, finishHVACUserEnteredPercentage);


    document.getElementById('finishHVAC-Value').innerHTML = finishHVACValue;
    document.getElementById('finishHVAC-spec-info-value').innerHTML = finishHVACUserEnteredSpecInfo;
    document.getElementById('finishHVAC-client-info-value').innerHTML = finishHVACUserEnteredClientInfo;

    if (document.getElementById('finishHVAC-checkbox-id').checked) {
        $("#finishHVAC-part-with-user-values-to-display").show();
    } else {
        $("#finishHVAC-part-with-user-values-to-display").hide();
    };



    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////Interior wall coverings///////////
    /////////////////////////////////////////////////
    //////////////////////////////////////////////////

    if (document.getElementById('interiorPaint-checkbox-id').checked || document.getElementById('interiorPaintColor-checkbox-id').checked || document.getElementById('interiorPaintCovering-checkbox-id').checked) {
        $("#interiorWallCoverings-category").show();
    } else {
        $("#interiorWallCoverings-category").hide();
    };


    ///////////////Interior Paint ////////////////////

    var interiorPaintUserEnteredPercentage = document.getElementById('interiorPaint-user-entered-Percentage').value;
    var interiorPaintUserEnteredSpecInfo = document.getElementById('interiorPaint-user-entered-SpecInfo').value;
    var interiorPaintUserEnteredClientInfo = document.getElementById('interiorPaint-user-entered-ClientInfo').value;

    var interiorPaintValue = calculateAmountFromPercentage(totalCost, interiorPaintUserEnteredPercentage);


    document.getElementById('interiorPaint-Value').innerHTML = interiorPaintValue;
    document.getElementById('interiorPaint-spec-info-value').innerHTML = interiorPaintUserEnteredSpecInfo;
    document.getElementById('interiorPaint-client-info-value').innerHTML = interiorPaintUserEnteredClientInfo;

    if (document.getElementById('interiorPaint-checkbox-id').checked) {
        $("#interiorPaint-part-with-user-values-to-display").show();
    } else {
        $("#interiorPaint-part-with-user-values-to-display").hide();
    };

    ///////////////Interior Paint Color(s) ////////////////////

    var interiorPaintColorUserEnteredPercentage = document.getElementById('interiorPaintColor-user-entered-Percentage').value;
    var interiorPaintColorUserEnteredSpecInfo = document.getElementById('interiorPaintColor-user-entered-SpecInfo').value;
    var interiorPaintColorUserEnteredClientInfo = document.getElementById('interiorPaintColor-user-entered-ClientInfo').value;

    var interiorPaintColorValue = calculateAmountFromPercentage(totalCost, interiorPaintColorUserEnteredPercentage);


    document.getElementById('interiorPaintColor-Value').innerHTML = interiorPaintColorValue;
    document.getElementById('interiorPaintColor-spec-info-value').innerHTML = interiorPaintColorUserEnteredSpecInfo;
    document.getElementById('interiorPaintColor-client-info-value').innerHTML = interiorPaintColorUserEnteredClientInfo;

    if (document.getElementById('interiorPaintColor-checkbox-id').checked) {
        $("#interiorPaintColor-part-with-user-values-to-display").show();
    } else {
        $("#interiorPaintColor-part-with-user-values-to-display").hide();
    };

    ///////////////Interior Paint Covering(s) ////////////////////

    var interiorPaintCoveringUserEnteredPercentage = document.getElementById('interiorPaintCovering-user-entered-Percentage').value;
    var interiorPaintCoveringUserEnteredSpecInfo = document.getElementById('interiorPaintCovering-user-entered-SpecInfo').value;
    var interiorPaintCoveringUserEnteredClientInfo = document.getElementById('interiorPaintCovering-user-entered-ClientInfo').value;

    var interiorPaintCoveringValue = calculateAmountFromPercentage(totalCost, interiorPaintCoveringUserEnteredPercentage);


    document.getElementById('interiorPaintCovering-Value').innerHTML = interiorPaintCoveringValue;
    document.getElementById('interiorPaintCovering-spec-info-value').innerHTML = interiorPaintCoveringUserEnteredSpecInfo;
    document.getElementById('interiorPaintCovering-client-info-value').innerHTML = interiorPaintCoveringUserEnteredClientInfo;

    if (document.getElementById('interiorPaintCovering-checkbox-id').checked) {
        $("#interiorPaintCovering-part-with-user-values-to-display").show();
    } else {
        $("#interiorPaintCovering-part-with-user-values-to-display").hide();
    };




    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////Completion///////////////////
    /////////////////////////////////////////////////
    //////////////////////////////////////////////////

    if (document.getElementById('completion-checkbox-id').checked) {
        $("#completion-category").show();
    } else {
        $("#completion-category").hide();
    };


    ///////////////Completion ////////////////////

    var completionUserEnteredPercentage = document.getElementById('completion-user-entered-Percentage').value;
    var completionUserEnteredSpecInfo = document.getElementById('completion-user-entered-SpecInfo').value;
    var completionUserEnteredClientInfo = document.getElementById('completion-user-entered-ClientInfo').value;

    var completionValue = calculateAmountFromPercentage(totalCost, completionUserEnteredPercentage);


    document.getElementById('completion-Value').innerHTML = completionValue;
    document.getElementById('completion-spec-info-value').innerHTML = completionUserEnteredSpecInfo;
    document.getElementById('completion-client-info-value').innerHTML = completionUserEnteredClientInfo;

    if (document.getElementById('completion-checkbox-id').checked) {
        $("#completion-part-with-user-values-to-display").show();
    } else {
        $("#completion-part-with-user-values-to-display").hide();
    };




    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////Landscaping///////////////////
    /////////////////////////////////////////////////
    //////////////////////////////////////////////////

    if (document.getElementById('landscapingSpecifications-checkbox-id').checked || document.getElementById('landscaping-checkbox-id').checked) {
        $("#landscaping-category").show();
    } else {
        $("#landscaping-category").hide();
    };


    ///////////////Landscaping Specifications ////////////////////

    var landscapingSpecificationsUserEnteredPercentage = document.getElementById('landscapingSpecifications-user-entered-Percentage').value;
    var landscapingSpecificationsUserEnteredSpecInfo = document.getElementById('landscapingSpecifications-user-entered-SpecInfo').value;
    var landscapingSpecificationsUserEnteredClientInfo = document.getElementById('landscapingSpecifications-user-entered-ClientInfo').value;

    var landscapingSpecificationsValue = calculateAmountFromPercentage(totalCost, landscapingSpecificationsUserEnteredPercentage);


    document.getElementById('landscapingSpecifications-Value').innerHTML = landscapingSpecificationsValue;
    document.getElementById('landscapingSpecifications-spec-info-value').innerHTML = landscapingSpecificationsUserEnteredSpecInfo;
    document.getElementById('landscapingSpecifications-client-info-value').innerHTML = landscapingSpecificationsUserEnteredClientInfo;

    if (document.getElementById('landscapingSpecifications-checkbox-id').checked) {
        $("#landscapingSpecifications-part-with-user-values-to-display").show();
    } else {
        $("#landscapingSpecifications-part-with-user-values-to-display").hide();
    };



    ///////////////Landscaping ////////////////////

    var landscapingUserEnteredPercentage = document.getElementById('landscaping-user-entered-Percentage').value;
    var landscapingUserEnteredSpecInfo = document.getElementById('landscaping-user-entered-SpecInfo').value;
    var landscapingUserEnteredClientInfo = document.getElementById('landscaping-user-entered-ClientInfo').value;

    var landscapingValue = calculateAmountFromPercentage(totalCost, landscapingUserEnteredPercentage);


    document.getElementById('landscaping-Value').innerHTML = landscapingValue;
    document.getElementById('landscaping-spec-info-value').innerHTML = landscapingUserEnteredSpecInfo;
    document.getElementById('landscaping-client-info-value').innerHTML = landscapingUserEnteredClientInfo;

    if (document.getElementById('landscaping-checkbox-id').checked) {
        $("#landscaping-part-with-user-values-to-display").show();
    } else {
        $("#landscaping-part-with-user-values-to-display").hide();
    };



    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////Driveway///////////////////
    /////////////////////////////////////////////////
    //////////////////////////////////////////////////

    if (document.getElementById('driveway-checkbox-id').checked) {
        $("#driveway-category").show();
    } else {
        $("#driveway-category").hide();
    };


    ///////////////Driveway////////////////////

    var drivewayUserEnteredPercentage = document.getElementById('driveway-user-entered-Percentage').value;
    var drivewayUserEnteredSpecInfo = document.getElementById('driveway-user-entered-SpecInfo').value;
    var drivewayUserEnteredClientInfo = document.getElementById('driveway-user-entered-ClientInfo').value;

    var drivewayValue = calculateAmountFromPercentage(totalCost, drivewayUserEnteredPercentage);


    document.getElementById('driveway-Value').innerHTML = drivewayValue;
    document.getElementById('driveway-spec-info-value').innerHTML = drivewayUserEnteredSpecInfo;
    document.getElementById('driveway-client-info-value').innerHTML = drivewayUserEnteredClientInfo;

    if (document.getElementById('driveway-checkbox-id').checked) {
        $("#driveway-part-with-user-values-to-display").show();
    } else {
        $("#driveway-part-with-user-values-to-display").hide();
    };


    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////Exterior structures///////////////////
    /////////////////////////////////////////////////
    //////////////////////////////////////////////////

    if (document.getElementById('patio-checkbox-id').checked || document.getElementById('sideWalks-checkbox-id').checked || document.getElementById('pads-checkbox-id').checked || document.getElementById('fences-checkbox-id').checked) {
        $("#exteriorStructures-category").show();
    } else {
        $("#exteriorStructures-category").hide();
    };


    ///////////////Patio////////////////////

    var patioUserEnteredPercentage = document.getElementById('patio-user-entered-Percentage').value;
    var patioUserEnteredSpecInfo = document.getElementById('patio-user-entered-SpecInfo').value;
    var patioUserEnteredClientInfo = document.getElementById('patio-user-entered-ClientInfo').value;

    var patioValue = calculateAmountFromPercentage(totalCost, patioUserEnteredPercentage);


    document.getElementById('patio-Value').innerHTML = patioValue;
    document.getElementById('patio-spec-info-value').innerHTML = patioUserEnteredSpecInfo;
    document.getElementById('patio-client-info-value').innerHTML = patioUserEnteredClientInfo;

    if (document.getElementById('patio-checkbox-id').checked) {
        $("#patio-part-with-user-values-to-display").show();
    } else {
        $("#patio-part-with-user-values-to-display").hide();
    };

    ///////////////Side Walks////////////////////

    var sideWalksUserEnteredPercentage = document.getElementById('sideWalks-user-entered-Percentage').value;
    var sideWalksUserEnteredSpecInfo = document.getElementById('sideWalks-user-entered-SpecInfo').value;
    var sideWalksUserEnteredClientInfo = document.getElementById('sideWalks-user-entered-ClientInfo').value;

    var sideWalksValue = calculateAmountFromPercentage(totalCost, sideWalksUserEnteredPercentage);


    document.getElementById('sideWalks-Value').innerHTML = sideWalksValue;
    document.getElementById('sideWalks-spec-info-value').innerHTML = sideWalksUserEnteredSpecInfo;
    document.getElementById('sideWalks-client-info-value').innerHTML = sideWalksUserEnteredClientInfo;

    if (document.getElementById('sideWalks-checkbox-id').checked) {
        $("#sideWalks-part-with-user-values-to-display").show();
    } else {
        $("#sideWalks-part-with-user-values-to-display").hide();
    };

    ///////////////Fences////////////////////

    var fencesUserEnteredPercentage = document.getElementById('fences-user-entered-Percentage').value;
    var fencesUserEnteredSpecInfo = document.getElementById('fences-user-entered-SpecInfo').value;
    var fencesUserEnteredClientInfo = document.getElementById('fences-user-entered-ClientInfo').value;

    var fencesValue = calculateAmountFromPercentage(totalCost, fencesUserEnteredPercentage);


    document.getElementById('fences-Value').innerHTML = fencesValue;
    document.getElementById('fences-spec-info-value').innerHTML = fencesUserEnteredSpecInfo;
    document.getElementById('fences-client-info-value').innerHTML = fencesUserEnteredClientInfo;

    if (document.getElementById('fences-checkbox-id').checked) {
        $("#fences-part-with-user-values-to-display").show();
    } else {
        $("#fences-part-with-user-values-to-display").hide();
    };


    ///////////////Pads////////////////////

    var padsUserEnteredPercentage = document.getElementById('pads-user-entered-Percentage').value;
    var padsUserEnteredSpecInfo = document.getElementById('pads-user-entered-SpecInfo').value;
    var padsUserEnteredClientInfo = document.getElementById('pads-user-entered-ClientInfo').value;

    var padsValue = calculateAmountFromPercentage(totalCost, padsUserEnteredPercentage);


    document.getElementById('pads-Value').innerHTML = padsValue;
    document.getElementById('pads-spec-info-value').innerHTML = padsUserEnteredSpecInfo;
    document.getElementById('pads-client-info-value').innerHTML = padsUserEnteredClientInfo;

    if (document.getElementById('pads-checkbox-id').checked) {
        $("#pads-part-with-user-values-to-display").show();
    } else {
        $("#pads-part-with-user-values-to-display").hide();
    };


    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    ////////////////Final Walkthrough Inspection ///////////////////
    /////////////////////////////////////////////////
    //////////////////////////////////////////////////

    if (document.getElementById('finalWalkThrough-checkbox-id').checked) {
        $("#finalWalkThrough-category").show();
    } else {
        $("#finalWalkThrough-category").hide();
    };


    ///////////////////////////////////

    var finalWalkThroughUserEnteredPercentage = document.getElementById('finalWalkThrough-user-entered-Percentage').value;
    var finalWalkThroughUserEnteredSpecInfo = document.getElementById('finalWalkThrough-user-entered-SpecInfo').value;
    var finalWalkThroughUserEnteredClientInfo = document.getElementById('finalWalkThrough-user-entered-ClientInfo').value;

    var finalWalkThroughValue = calculateAmountFromPercentage(totalCost, finalWalkThroughUserEnteredPercentage);


    document.getElementById('finalWalkThrough-Value').innerHTML = finalWalkThroughValue;
    document.getElementById('finalWalkThrough-spec-info-value').innerHTML = finalWalkThroughUserEnteredSpecInfo;
    document.getElementById('finalWalkThrough-client-info-value').innerHTML = finalWalkThroughUserEnteredClientInfo;

    if (document.getElementById('finalWalkThrough-checkbox-id').checked) {
        $("#finalWalkThrough-part-with-user-values-to-display").show();
    } else {
        $("#finalWalkThrough-part-with-user-values-to-display").hide();
    };






    var totaluserenteredpercentage = permitsAndFeesPercentage + architecturalEngineeringUserEnteredPercentage + siteworkUserEnteredPercentage + demolitionUserEnteredPercentage + utilityConnectionUserEnteredPercentage + excavationUserEnteredPercentage + footingAndFoundationUserEnteredPercentage + waterProofingUserEnteredPercentage + termiteProtectionUserEnteredPercentage + steelUserEnteredPercentage + framingUserEnteredPercentage + concreteUserEnteredPercentage + sheetMetalUserEnteredPercentage + roughPlumbingUserEnteredPercentage + roughElectricalUserEnteredPercentage + roughHvacUserEnteredPercentage + roofingSpecificationsUserEnteredPercentage + roofingMaterialUserEnteredPercentage + masnorySpecificationsUserEnteredPercentage + chimneyMaterialUserEnteredPercentage + fireplaceUserEnteredPercentage + brickVeneerUserEnteredPercentage + masonryWallMaterialUserEnteredPercentage + masonryFlooringMaterialUserEnteredPercentage + windowsUserEnteredPercentage + skylightsUserEnteredPercentage + stromWindowsAndDoorsUserEnteredPercentage + frontDoorUserEnteredPercentage + otherExteriorDoorsUserEnteredPercentage + interiorDoorsUserEnteredPercentage + slidingGlassDoorsUserEnteredPercentage + garageDoorUserEnteredPercentage + windowAndDoorHardwareUserEnteredPercentage + insulationUserEnteredPercentage + exteriorTrimUserEnteredPercentage + exteriorPaintingUserEnteredPercentage + exteriorPaintUserEnteredPercentage + drywallUserEnteredPercentage + flooringSpecificationsUserEnteredPercentage + resilientFlooringUserEnteredPercentage + carpetingUserEnteredPercentage + hardwoodFlooringUserEnteredPercentage + interiorUserEnteredPercentage + ceramicTileSpecificationsUserEnteredPercentage + ceramicTileUserEnteredPercentage + cabinetSpecificationsUserEnteredPercentage + kitchenCabinetsUserEnteredPercentage + counterTopsUserEnteredPercentage + bathroomCabinetsUserEnteredPercentage + cabinetHardwareUserEnteredPercentage + applianceSpecificationsUserEnteredPercentage + rangeUserEnteredPercentage + rangeHoodUserEnteredPercentage + disposalUserEnteredPercentage + dishwasherUserEnteredPercentage + refrigeratorUserEnteredPercentage + washerAndDryerUserEnteredPercentage + microwaveUserEnteredPercentage + vacuumUserEnteredPercentage + appliancesUserEnteredPercentage + finishPlumbingSpecificationsUserEnteredPercentage + plumbingFixturesUserEnteredPercentage + finishElectricalSpecificationsUserEnteredPercentage + electricalFixturesUserEnteredPercentage + finishHVACUserEnteredPercentage + interiorPaintUserEnteredPercentage + interiorPaintColorUserEnteredPercentage + interiorPaintCoveringUserEnteredPercentage + completionUserEnteredPercentage + landscapingSpecificationsUserEnteredPercentage + landscapingUserEnteredPercentage + drivewayUserEnteredPercentage + patioUserEnteredPercentage + sideWalksUserEnteredPercentage + +fencesUserEnteredPercentage + padsUserEnteredPercentage + finalWalkThroughUserEnteredPercentage;


    var totalValue = permitsAndFeesValue + architecturalEngineeringValue + siteWorkValue + demolitionValue + utilityValue + excavationValue + footingAndFoundationValue + waterProofingValue + termiteProtectionValue + steelValue + framingValue + concreteValue + sheetMetalValue + roughPlumbingValue + roughElectricalValue + roughHvacValue + roofingSpecificationsValue + roofingMaterialValue + masnorySpecificationsValue + chimneyMaterialValue + fireplaceValue + brickVeneerValue + masonryWallMaterialValue + masonryFlooringMaterialValue + windowsValue + skylightsValue + stromWindowsAndDoorsValue + frontDoorValue + otherExteriorDoorsValue + interiorDoorsValue + slidingGlassDoorsValue + garageDoorValue + windowAndDoorHardwareValue + insulationValue + exteriorTrimValue + exteriorPaintingValue + exteriorPaintValue + drywallValue + flooringSpecificationsValue + resilientFlooringValue + carpetingValue + hardwoodFlooringValue + interiorValue + ceramicTileSpecificationsValue + ceramicTileValue + cabinetSpecificationsValue + kitchenCabinetsValue + counterTopsValue + bathroomCabinetsValue + cabinetHardwareValue + applianceSpecificationsValue + rangeValue + rangeHoodValue + disposalValue + dishwasherValue + refrigeratorValue + washerAndDryerValue + microwaveValue + vacuumValue + appliancesValue + finishPlumbingSpecificationsValue + plumbingFixturesValue + finishElectricalSpecificationsValue + electricalFixturesValue + finishHVACValue + interiorPaintValue + interiorPaintColorValue + interiorPaintCoveringValue + completionValue + landscapingSpecificationsValue + landscapingValue + drivewayValue + patioValue + sideWalksValue + fencesValue + padsValue + finalWalkThroughValue;
    document.getElementById('total').innerHTML = totalValue;

    if (totaluserenteredpercentage != 100) {
        if (confirm("Total not equal to $" + totalCost + " . Would you like to continue?")) {

        } else {
            return false;
        }
    }

    if (document.getElementById('div1')) {

        document.getElementById('div1').style.display = 'none';
        document.getElementById('div2').style.display = 'block';

    }




}

function docuPrint() {
    document.title = document.getElementById('outputAddressID').value;
    window.print();
}
function backToEdit(){
    if (document.getElementById('div2')) {

        document.getElementById('div2').style.display = 'none';
        document.getElementById('div1').style.display = 'block';

    }
}
