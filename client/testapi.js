function GetNumberOfActiveTeams(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNumberOfActiveTeams?collectionId="+collectionId+"", callback);
}
function GetActiveTeams(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveTeams?collectionId="+collectionId+"", callback);
}
function GetActiveTeamByTeamId(teamId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveTeamByTeamId?teamId="+teamId+"", callback);
}
function GetCampaignersByIds(idsToGetString,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetCampaignersByIds?idsToGetString="+idsToGetString+"", callback);
}
function GetTeamsByIds(idsToGetString,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTeamsByIds?idsToGetString="+idsToGetString+"", callback);
}
function GetCampaignsByIds(idsToGetString,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetCampaignsByIds?idsToGetString="+idsToGetString+"", callback);
}
function GetNewTeamsOverview(numberOfResults,numberOfCharsPerResult,divider,linkUrl,ulCssClass,liCssClass,ahrefCssClass,startObjectDetail,startObjectDetailCssClass,endObjectDetail,endObjectDetailCssClass,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNewTeamsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerResult="+numberOfCharsPerResult+"&divider="+divider+"&linkUrl="+linkUrl+"&ulCssClass="+ulCssClass+"&liCssClass="+liCssClass+"&ahrefCssClass="+ahrefCssClass+"&startObjectDetail="+startObjectDetail+"&startObjectDetailCssClass="+startObjectDetailCssClass+"&endObjectDetail="+endObjectDetail+"&endObjectDetailCssClass="+endObjectDetailCssClass+"&collectionId="+collectionId+"", callback);
}
function GetTopTeamsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,includeTeamCaptainName,includeOrganisationName,showLastNameFreeFieldId,teamType,overviewButtonLocation,overviewButtonUrl,overviewButtonCssClass,freeFieldIds,addressessToDisplay,divider,collectionId,showDecimal,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&includeTeamCaptainName="+includeTeamCaptainName+"&includeOrganisationName="+includeOrganisationName+"&showLastNameFreeFieldId="+showLastNameFreeFieldId+"&teamType="+teamType+"&overviewButtonLocation="+overviewButtonLocation+"&overviewButtonUrl="+overviewButtonUrl+"&overviewButtonCssClass="+overviewButtonCssClass+"&freeFieldIds="+freeFieldIds+"&addressessToDisplay="+addressessToDisplay+"&divider="+divider+"&collectionId="+collectionId+"&showDecimal="+showDecimal+"", callback);
}
function GetTopCampaignerTeamsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,includeTeamCaptainName,includeOrganisationName,showLastNameFreeFieldId,overviewButtonLocation,overviewButtonUrl,overviewButtonCssClass,freeFieldIds,addressessToDisplay,divider,collectionId,showDecimal,useNumberedList,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopCampaignerTeamsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&includeTeamCaptainName="+includeTeamCaptainName+"&includeOrganisationName="+includeOrganisationName+"&showLastNameFreeFieldId="+showLastNameFreeFieldId+"&overviewButtonLocation="+overviewButtonLocation+"&overviewButtonUrl="+overviewButtonUrl+"&overviewButtonCssClass="+overviewButtonCssClass+"&freeFieldIds="+freeFieldIds+"&addressessToDisplay="+addressessToDisplay+"&divider="+divider+"&collectionId="+collectionId+"&showDecimal="+showDecimal+"&useNumberedList="+useNumberedList+"", callback);
}
function GetTopTeamSummaryOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,includeTeamCaptainName,includeOrganisationName,showLastNameFreeFieldId,iTeamType,overviewButtonLocation,overviewButtonUrl,overviewButtonCssClass,freeFieldIds,addressessToDisplay,divider,collectionId,showDecimal,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamSummaryOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&includeTeamCaptainName="+includeTeamCaptainName+"&includeOrganisationName="+includeOrganisationName+"&showLastNameFreeFieldId="+showLastNameFreeFieldId+"&iTeamType="+iTeamType+"&overviewButtonLocation="+overviewButtonLocation+"&overviewButtonUrl="+overviewButtonUrl+"&overviewButtonCssClass="+overviewButtonCssClass+"&freeFieldIds="+freeFieldIds+"&addressessToDisplay="+addressessToDisplay+"&divider="+divider+"&collectionId="+collectionId+"&showDecimal="+showDecimal+"", callback);
}
function GetMostRecentTeamsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,includeTeamCaptainName,includeOrganisationName,showLastNameFreeFieldId,teamType,overviewButtonLocation,overviewButtonUrl,overviewButtonCssClass,freeFieldIds,addressessToDisplay,divider,collectionId,showDecimal,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetMostRecentTeamsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&includeTeamCaptainName="+includeTeamCaptainName+"&includeOrganisationName="+includeOrganisationName+"&showLastNameFreeFieldId="+showLastNameFreeFieldId+"&teamType="+teamType+"&overviewButtonLocation="+overviewButtonLocation+"&overviewButtonUrl="+overviewButtonUrl+"&overviewButtonCssClass="+overviewButtonCssClass+"&freeFieldIds="+freeFieldIds+"&addressessToDisplay="+addressessToDisplay+"&divider="+divider+"&collectionId="+collectionId+"&showDecimal="+showDecimal+"", callback);
}
function GetTopTeamViewOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,collectionId,useNumberedList,showDecimal,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamViewOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&collectionId="+collectionId+"&useNumberedList="+useNumberedList+"&showDecimal="+showDecimal+"", callback);
}
function GetTopTeamsByParticipantsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsByParticipantsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&collectionId="+collectionId+"", callback);
}
function GetTopTeamsRelativeToParticipantCount(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsRelativeToParticipantCount?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&collectionId="+collectionId+"", callback);
}
function GetTopTeamsByTeamAndParticipantAmountRelativeToParticipantCount(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsByTeamAndParticipantAmountRelativeToParticipantCount?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&collectionId="+collectionId+"", callback);
}
function GetNumberOfActiveParticipants(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNumberOfActiveParticipants?", callback);
}
function GetNumberOfActiveParticipantsWithOrWithoutSupporters(includeSupporters,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNumberOfActiveParticipantsWithOrWithoutSupporters?includeSupporters="+includeSupporters+"", callback);
}
function GetActiveParticipants(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveParticipants?", callback);
}
function GetActiveParticipantByPersonId(personId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveParticipantByPersonId?personId="+personId+"", callback);
}
function GetNewParticpantsOverview(numberOfResults,numberOfCharsPerResult,divider,linkUrl,ulCssClass,liCssClass,ahrefCssClass,startObjectDetail,startObjectDetailCssClass,endObjectDetail,endObjectDetailCssClass,collecionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNewParticpantsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerResult="+numberOfCharsPerResult+"&divider="+divider+"&linkUrl="+linkUrl+"&ulCssClass="+ulCssClass+"&liCssClass="+liCssClass+"&ahrefCssClass="+ahrefCssClass+"&startObjectDetail="+startObjectDetail+"&startObjectDetailCssClass="+startObjectDetailCssClass+"&endObjectDetail="+endObjectDetail+"&endObjectDetailCssClass="+endObjectDetailCssClass+"&collecionId="+collecionId+"", callback);
}
function GetTopParticipantsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopParticipantsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"", callback);
}
function GetTopParticipantViewsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,collectionId,useNumberedList,showDecimal,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopParticipantViewsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"&useNumberedList="+useNumberedList+"&showDecimal="+showDecimal+"", callback);
}
function GetTopCampaignersOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,collectionId,useNumberedList,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopCampaignersOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"&useNumberedList="+useNumberedList+"", callback);
}
function GetRandomCampaignersOverview(numberOfResults,numberOfCharsPerName,numberOfCharsPerMotivation,ahrefCssClass,infoCssClass,ulCssClass,linkUrl,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetRandomCampaignersOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&numberOfCharsPerMotivation="+numberOfCharsPerMotivation+"&ahrefCssClass="+ahrefCssClass+"&infoCssClass="+infoCssClass+"&ulCssClass="+ulCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"", callback);
}
function GetRandomCampaignerTeamsOverview(numberOfResults,numberOfCharsPerName,numberOfCharsPerMotivation,ahrefCssClass,infoCssClass,ulCssClass,linkUrl,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetRandomCampaignerTeamsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&numberOfCharsPerMotivation="+numberOfCharsPerMotivation+"&ahrefCssClass="+ahrefCssClass+"&infoCssClass="+infoCssClass+"&ulCssClass="+ulCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"", callback);
}
function GetTopVolunteersOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopVolunteersOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"", callback);
}
function GetSponsorMotivationsByReferenceId(referenceId,referenceType,numberOfCharsPerName,numberOfCharsPerQuote,companiesOnly,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSponsorMotivationsByReferenceId?referenceId="+referenceId+"&referenceType="+referenceType+"&numberOfCharsPerName="+numberOfCharsPerName+"&numberOfCharsPerQuote="+numberOfCharsPerQuote+"&companiesOnly="+companiesOnly+"", callback);
}
function GetSponsorPaymentMotivationsByReferenceId(referenceId,referenceType,numberOfCharsPerName,numberOfCharsPerQuote,companiesOnly,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSponsorPaymentMotivationsByReferenceId?referenceId="+referenceId+"&referenceType="+referenceType+"&numberOfCharsPerName="+numberOfCharsPerName+"&numberOfCharsPerQuote="+numberOfCharsPerQuote+"&companiesOnly="+companiesOnly+"", callback);
}
function GetSponsorMessage(personId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSponsorMessage?personId="+personId+"", callback);
}
function GetTopSponsorsOverview3(numberOfResults,numberOfCharsPerName,cssClassBase,linkUrl,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopSponsorsOverview3?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&cssClassBase="+cssClassBase+"&linkUrl="+linkUrl+"", callback);
}
function GetTopSponsorsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopSponsorsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"", callback);
}
function GetActiveSponsorsCount(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveSponsorsCount?", callback);
}
function GetActiveSponsorsCountByCollectionId(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveSponsorsCountByCollectionId?collectionId="+collectionId+"", callback);
}
function GetActiveCampaignersCount(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignersCount?", callback);
}
function GetActiveCampaignersCountByCollectionId(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignersCountByCollectionId?collectionId="+collectionId+"", callback);
}
function GetActiveCampaignerIds(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignerIds?collectionId="+collectionId+"", callback);
}
function GetActiveTeamIds(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveTeamIds?collectionId="+collectionId+"", callback);
}
function GetActiveCampaignIds(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignIds?collectionId="+collectionId+"", callback);
}
function GetActiveCampaignerTeamsCount(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignerTeamsCount?", callback);
}
function GetActiveCampaignerTeamsCountByCollectionId(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignerTeamsCountByCollectionId?collectionId="+collectionId+"", callback);
}
function GetActiveCampaignsCount(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignsCount?", callback);
}
function GetActiveCampaignsCountByCollectionId(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignsCountByCollectionId?collectionId="+collectionId+"", callback);
}
function GetTotalSponsorAmount(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTotalSponsorAmount?", callback);
}
function GetTotalSponsorAmountByCollectionId(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTotalSponsorAmountByCollectionId?collectionId="+collectionId+"", callback);
}
function GetTotalAmountByCollectionId(collectionId,includeDonations,paidOnly,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTotalAmountByCollectionId?collectionId="+collectionId+"&includeDonations="+includeDonations+"&paidOnly="+paidOnly+"", callback);
}
function GetCommunityServiceResponse(serviceUrl,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetCommunityServiceResponse?serviceUrl="+serviceUrl+"", callback);
}
function GetEventThermometerTotal(referenceTypeId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetEventThermometerTotal?referenceTypeId="+referenceTypeId+"", callback);
}
function GetSignUpControl(signUpTypeId,objectTypeId,linkUrl,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSignUpControl?signUpTypeId="+signUpTypeId+"&objectTypeId="+objectTypeId+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"", callback);
}
