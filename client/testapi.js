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
function GetActiveTeamByTeamIdResponse(GetActiveTeamByTeamIdResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveTeamByTeamIdResponse?GetActiveTeamByTeamIdResult="+GetActiveTeamByTeamIdResult+"", callback);
}
function GetCampaignersByIds(idsToGetString,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetCampaignersByIds?idsToGetString="+idsToGetString+"", callback);
}
function GetCampaignersByIdsResponse(GetCampaignersByIdsResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetCampaignersByIdsResponse?GetCampaignersByIdsResult="+GetCampaignersByIdsResult+"", callback);
}
function GetTeamsByIds(idsToGetString,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTeamsByIds?idsToGetString="+idsToGetString+"", callback);
}
function GetTeamsByIdsResponse(GetTeamsByIdsResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTeamsByIdsResponse?GetTeamsByIdsResult="+GetTeamsByIdsResult+"", callback);
}
function GetCampaignsByIds(idsToGetString,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetCampaignsByIds?idsToGetString="+idsToGetString+"", callback);
}
function GetCampaignsByIdsResponse(GetCampaignsByIdsResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetCampaignsByIdsResponse?GetCampaignsByIdsResult="+GetCampaignsByIdsResult+"", callback);
}
function GetNewTeamsOverview(numberOfResults,numberOfCharsPerResult,divider,linkUrl,ulCssClass,liCssClass,ahrefCssClass,startObjectDetail,startObjectDetailCssClass,endObjectDetail,endObjectDetailCssClass,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNewTeamsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerResult="+numberOfCharsPerResult+"&divider="+divider+"&linkUrl="+linkUrl+"&ulCssClass="+ulCssClass+"&liCssClass="+liCssClass+"&ahrefCssClass="+ahrefCssClass+"&startObjectDetail="+startObjectDetail+"&startObjectDetailCssClass="+startObjectDetailCssClass+"&endObjectDetail="+endObjectDetail+"&endObjectDetailCssClass="+endObjectDetailCssClass+"&collectionId="+collectionId+"", callback);
}
function GetNewTeamsOverviewResponse(GetNewTeamsOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNewTeamsOverviewResponse?GetNewTeamsOverviewResult="+GetNewTeamsOverviewResult+"", callback);
}
function GetTopTeamsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,includeTeamCaptainName,includeOrganisationName,showLastNameFreeFieldId,teamType,overviewButtonLocation,overviewButtonUrl,overviewButtonCssClass,freeFieldIds,addressessToDisplay,divider,collectionId,showDecimal,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&includeTeamCaptainName="+includeTeamCaptainName+"&includeOrganisationName="+includeOrganisationName+"&showLastNameFreeFieldId="+showLastNameFreeFieldId+"&teamType="+teamType+"&overviewButtonLocation="+overviewButtonLocation+"&overviewButtonUrl="+overviewButtonUrl+"&overviewButtonCssClass="+overviewButtonCssClass+"&freeFieldIds="+freeFieldIds+"&addressessToDisplay="+addressessToDisplay+"&divider="+divider+"&collectionId="+collectionId+"&showDecimal="+showDecimal+"", callback);
}
function GetTopTeamsOverviewResponse(GetTopTeamsOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsOverviewResponse?GetTopTeamsOverviewResult="+GetTopTeamsOverviewResult+"", callback);
}
function GetTopCampaignerTeamsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,includeTeamCaptainName,includeOrganisationName,showLastNameFreeFieldId,overviewButtonLocation,overviewButtonUrl,overviewButtonCssClass,freeFieldIds,addressessToDisplay,divider,collectionId,showDecimal,useNumberedList,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopCampaignerTeamsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&includeTeamCaptainName="+includeTeamCaptainName+"&includeOrganisationName="+includeOrganisationName+"&showLastNameFreeFieldId="+showLastNameFreeFieldId+"&overviewButtonLocation="+overviewButtonLocation+"&overviewButtonUrl="+overviewButtonUrl+"&overviewButtonCssClass="+overviewButtonCssClass+"&freeFieldIds="+freeFieldIds+"&addressessToDisplay="+addressessToDisplay+"&divider="+divider+"&collectionId="+collectionId+"&showDecimal="+showDecimal+"&useNumberedList="+useNumberedList+"", callback);
}
function GetTopCampaignerTeamsOverviewResponse(GetTopCampaignerTeamsOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopCampaignerTeamsOverviewResponse?GetTopCampaignerTeamsOverviewResult="+GetTopCampaignerTeamsOverviewResult+"", callback);
}
function GetTopTeamSummaryOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,includeTeamCaptainName,includeOrganisationName,showLastNameFreeFieldId,iTeamType,overviewButtonLocation,overviewButtonUrl,overviewButtonCssClass,freeFieldIds,addressessToDisplay,divider,collectionId,showDecimal,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamSummaryOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&includeTeamCaptainName="+includeTeamCaptainName+"&includeOrganisationName="+includeOrganisationName+"&showLastNameFreeFieldId="+showLastNameFreeFieldId+"&iTeamType="+iTeamType+"&overviewButtonLocation="+overviewButtonLocation+"&overviewButtonUrl="+overviewButtonUrl+"&overviewButtonCssClass="+overviewButtonCssClass+"&freeFieldIds="+freeFieldIds+"&addressessToDisplay="+addressessToDisplay+"&divider="+divider+"&collectionId="+collectionId+"&showDecimal="+showDecimal+"", callback);
}
function GetTopTeamSummaryOverviewResponse(GetTopTeamSummaryOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamSummaryOverviewResponse?GetTopTeamSummaryOverviewResult="+GetTopTeamSummaryOverviewResult+"", callback);
}
function GetMostRecentTeamsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,includeTeamCaptainName,includeOrganisationName,showLastNameFreeFieldId,teamType,overviewButtonLocation,overviewButtonUrl,overviewButtonCssClass,freeFieldIds,addressessToDisplay,divider,collectionId,showDecimal,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetMostRecentTeamsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&includeTeamCaptainName="+includeTeamCaptainName+"&includeOrganisationName="+includeOrganisationName+"&showLastNameFreeFieldId="+showLastNameFreeFieldId+"&teamType="+teamType+"&overviewButtonLocation="+overviewButtonLocation+"&overviewButtonUrl="+overviewButtonUrl+"&overviewButtonCssClass="+overviewButtonCssClass+"&freeFieldIds="+freeFieldIds+"&addressessToDisplay="+addressessToDisplay+"&divider="+divider+"&collectionId="+collectionId+"&showDecimal="+showDecimal+"", callback);
}
function GetMostRecentTeamsOverviewResponse(GetMostRecentTeamsOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetMostRecentTeamsOverviewResponse?GetMostRecentTeamsOverviewResult="+GetMostRecentTeamsOverviewResult+"", callback);
}
function GetTopTeamViewOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,collectionId,useNumberedList,showDecimal,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamViewOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&collectionId="+collectionId+"&useNumberedList="+useNumberedList+"&showDecimal="+showDecimal+"", callback);
}
function GetTopTeamViewOverviewResponse(GetTopTeamViewOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamViewOverviewResponse?GetTopTeamViewOverviewResult="+GetTopTeamViewOverviewResult+"", callback);
}
function GetTopTeamsByParticipantsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsByParticipantsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&collectionId="+collectionId+"", callback);
}
function GetTopTeamsByParticipantsOverviewResponse(GetTopTeamsByParticipantsOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsByParticipantsOverviewResponse?GetTopTeamsByParticipantsOverviewResult="+GetTopTeamsByParticipantsOverviewResult+"", callback);
}
function GetTopTeamsRelativeToParticipantCount(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsRelativeToParticipantCount?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&collectionId="+collectionId+"", callback);
}
function GetTopTeamsRelativeToParticipantCountResponse(GetTopTeamsRelativeToParticipantCountResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsRelativeToParticipantCountResponse?GetTopTeamsRelativeToParticipantCountResult="+GetTopTeamsRelativeToParticipantCountResult+"", callback);
}
function GetTopTeamsByTeamAndParticipantAmountRelativeToParticipantCount(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,filterKey,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsByTeamAndParticipantAmountRelativeToParticipantCount?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&filterKey="+filterKey+"&collectionId="+collectionId+"", callback);
}
function GetTopTeamsByTeamAndParticipantAmountRelativeToParticipantCountResponse(GetTopTeamsByTeamAndParticipantAmountRelativeToParticipantCountResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopTeamsByTeamAndParticipantAmountRelativeToParticipantCountResponse?GetTopTeamsByTeamAndParticipantAmountRelativeToParticipantCountResult="+GetTopTeamsByTeamAndParticipantAmountRelativeToParticipantCountResult+"", callback);
}
function GetNumberOfActiveParticipants(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNumberOfActiveParticipants?", callback);
}
function GetNumberOfActiveParticipantsResponse(GetNumberOfActiveParticipantsResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNumberOfActiveParticipantsResponse?GetNumberOfActiveParticipantsResult="+GetNumberOfActiveParticipantsResult+"", callback);
}
function GetNumberOfActiveParticipantsWithOrWithoutSupporters(includeSupporters,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNumberOfActiveParticipantsWithOrWithoutSupporters?includeSupporters="+includeSupporters+"", callback);
}
function GetNumberOfActiveParticipantsWithOrWithoutSupportersResponse(GetNumberOfActiveParticipantsWithOrWithoutSupportersResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNumberOfActiveParticipantsWithOrWithoutSupportersResponse?GetNumberOfActiveParticipantsWithOrWithoutSupportersResult="+GetNumberOfActiveParticipantsWithOrWithoutSupportersResult+"", callback);
}
function GetActiveParticipants(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveParticipants?", callback);
}
function GetActiveParticipantsResponse(GetActiveParticipantsResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveParticipantsResponse?GetActiveParticipantsResult="+GetActiveParticipantsResult+"", callback);
}
function GetActiveParticipantByPersonId(personId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveParticipantByPersonId?personId="+personId+"", callback);
}
function GetActiveParticipantByPersonIdResponse(GetActiveParticipantByPersonIdResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveParticipantByPersonIdResponse?GetActiveParticipantByPersonIdResult="+GetActiveParticipantByPersonIdResult+"", callback);
}
function GetNewParticpantsOverview(numberOfResults,numberOfCharsPerResult,divider,linkUrl,ulCssClass,liCssClass,ahrefCssClass,startObjectDetail,startObjectDetailCssClass,endObjectDetail,endObjectDetailCssClass,collecionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNewParticpantsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerResult="+numberOfCharsPerResult+"&divider="+divider+"&linkUrl="+linkUrl+"&ulCssClass="+ulCssClass+"&liCssClass="+liCssClass+"&ahrefCssClass="+ahrefCssClass+"&startObjectDetail="+startObjectDetail+"&startObjectDetailCssClass="+startObjectDetailCssClass+"&endObjectDetail="+endObjectDetail+"&endObjectDetailCssClass="+endObjectDetailCssClass+"&collecionId="+collecionId+"", callback);
}
function GetNewParticpantsOverviewResponse(GetNewParticpantsOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetNewParticpantsOverviewResponse?GetNewParticpantsOverviewResult="+GetNewParticpantsOverviewResult+"", callback);
}
function GetTopParticipantsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopParticipantsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"", callback);
}
function GetTopParticipantsOverviewResponse(GetTopParticipantsOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopParticipantsOverviewResponse?GetTopParticipantsOverviewResult="+GetTopParticipantsOverviewResult+"", callback);
}
function GetTopParticipantViewsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,collectionId,useNumberedList,showDecimal,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopParticipantViewsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"&useNumberedList="+useNumberedList+"&showDecimal="+showDecimal+"", callback);
}
function GetTopParticipantViewsOverviewResponse(GetTopParticipantViewsOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopParticipantViewsOverviewResponse?GetTopParticipantViewsOverviewResult="+GetTopParticipantViewsOverviewResult+"", callback);
}
function GetTopCampaignersOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,collectionId,useNumberedList,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopCampaignersOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"&useNumberedList="+useNumberedList+"", callback);
}
function GetTopCampaignersOverviewResponse(GetTopCampaignersOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopCampaignersOverviewResponse?GetTopCampaignersOverviewResult="+GetTopCampaignersOverviewResult+"", callback);
}
function GetRandomCampaignersOverview(numberOfResults,numberOfCharsPerName,numberOfCharsPerMotivation,ahrefCssClass,infoCssClass,ulCssClass,linkUrl,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetRandomCampaignersOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&numberOfCharsPerMotivation="+numberOfCharsPerMotivation+"&ahrefCssClass="+ahrefCssClass+"&infoCssClass="+infoCssClass+"&ulCssClass="+ulCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"", callback);
}
function GetRandomCampaignersOverviewResponse(GetRandomCampaignersOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetRandomCampaignersOverviewResponse?GetRandomCampaignersOverviewResult="+GetRandomCampaignersOverviewResult+"", callback);
}
function GetRandomCampaignerTeamsOverview(numberOfResults,numberOfCharsPerName,numberOfCharsPerMotivation,ahrefCssClass,infoCssClass,ulCssClass,linkUrl,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetRandomCampaignerTeamsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&numberOfCharsPerMotivation="+numberOfCharsPerMotivation+"&ahrefCssClass="+ahrefCssClass+"&infoCssClass="+infoCssClass+"&ulCssClass="+ulCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"", callback);
}
function GetRandomCampaignerTeamsOverviewResponse(GetRandomCampaignerTeamsOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetRandomCampaignerTeamsOverviewResponse?GetRandomCampaignerTeamsOverviewResult="+GetRandomCampaignerTeamsOverviewResult+"", callback);
}
function GetTopVolunteersOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopVolunteersOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"", callback);
}
function GetTopVolunteersOverviewResponse(GetTopVolunteersOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopVolunteersOverviewResponse?GetTopVolunteersOverviewResult="+GetTopVolunteersOverviewResult+"", callback);
}
function GetSponsorMotivationsByReferenceId(referenceId,referenceType,numberOfCharsPerName,numberOfCharsPerQuote,companiesOnly,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSponsorMotivationsByReferenceId?referenceId="+referenceId+"&referenceType="+referenceType+"&numberOfCharsPerName="+numberOfCharsPerName+"&numberOfCharsPerQuote="+numberOfCharsPerQuote+"&companiesOnly="+companiesOnly+"", callback);
}
function GetSponsorMotivationsByReferenceIdResponse(GetSponsorMotivationsByReferenceIdResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSponsorMotivationsByReferenceIdResponse?GetSponsorMotivationsByReferenceIdResult="+GetSponsorMotivationsByReferenceIdResult+"", callback);
}
function GetSponsorPaymentMotivationsByReferenceId(referenceId,referenceType,numberOfCharsPerName,numberOfCharsPerQuote,companiesOnly,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSponsorPaymentMotivationsByReferenceId?referenceId="+referenceId+"&referenceType="+referenceType+"&numberOfCharsPerName="+numberOfCharsPerName+"&numberOfCharsPerQuote="+numberOfCharsPerQuote+"&companiesOnly="+companiesOnly+"", callback);
}
function GetSponsorPaymentMotivationsByReferenceIdResponse(GetSponsorPaymentMotivationsByReferenceIdResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSponsorPaymentMotivationsByReferenceIdResponse?GetSponsorPaymentMotivationsByReferenceIdResult="+GetSponsorPaymentMotivationsByReferenceIdResult+"", callback);
}
function GetSponsorMessage(personId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSponsorMessage?personId="+personId+"", callback);
}
function GetSponsorMessageResponse(GetSponsorMessageResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSponsorMessageResponse?GetSponsorMessageResult="+GetSponsorMessageResult+"", callback);
}
function GetTopSponsorsOverview3(numberOfResults,numberOfCharsPerName,cssClassBase,linkUrl,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopSponsorsOverview3?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&cssClassBase="+cssClassBase+"&linkUrl="+linkUrl+"", callback);
}
function GetTopSponsorsOverview3Response(GetTopSponsorsOverview3Result,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopSponsorsOverview3Response?GetTopSponsorsOverview3Result="+GetTopSponsorsOverview3Result+"", callback);
}
function GetTopSponsorsOverview(numberOfResults,numberOfCharsPerName,ahrefCssClass,nameCssClass,amountCssClass,linkUrl,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopSponsorsOverview?numberOfResults="+numberOfResults+"&numberOfCharsPerName="+numberOfCharsPerName+"&ahrefCssClass="+ahrefCssClass+"&nameCssClass="+nameCssClass+"&amountCssClass="+amountCssClass+"&linkUrl="+linkUrl+"", callback);
}
function GetTopSponsorsOverviewResponse(GetTopSponsorsOverviewResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTopSponsorsOverviewResponse?GetTopSponsorsOverviewResult="+GetTopSponsorsOverviewResult+"", callback);
}
function GetActiveSponsorsCount(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveSponsorsCount?", callback);
}
function GetActiveSponsorsCountResponse(GetActiveSponsorsCountResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveSponsorsCountResponse?GetActiveSponsorsCountResult="+GetActiveSponsorsCountResult+"", callback);
}
function GetActiveSponsorsCountByCollectionId(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveSponsorsCountByCollectionId?collectionId="+collectionId+"", callback);
}
function GetActiveSponsorsCountByCollectionIdResponse(GetActiveSponsorsCountByCollectionIdResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveSponsorsCountByCollectionIdResponse?GetActiveSponsorsCountByCollectionIdResult="+GetActiveSponsorsCountByCollectionIdResult+"", callback);
}
function GetActiveCampaignersCount(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignersCount?", callback);
}
function GetActiveCampaignersCountResponse(GetActiveCampaignersCountResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignersCountResponse?GetActiveCampaignersCountResult="+GetActiveCampaignersCountResult+"", callback);
}
function GetActiveCampaignersCountByCollectionId(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignersCountByCollectionId?collectionId="+collectionId+"", callback);
}
function GetActiveCampaignersCountByCollectionIdResponse(GetActiveCampaignersCountByCollectionIdResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignersCountByCollectionIdResponse?GetActiveCampaignersCountByCollectionIdResult="+GetActiveCampaignersCountByCollectionIdResult+"", callback);
}
function GetActiveCampaignerIds(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignerIds?collectionId="+collectionId+"", callback);
}
function GetActiveCampaignerIdsResponse(GetActiveCampaignerIdsResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignerIdsResponse?GetActiveCampaignerIdsResult="+GetActiveCampaignerIdsResult+"", callback);
}
function GetActiveTeamIds(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveTeamIds?collectionId="+collectionId+"", callback);
}
function GetActiveTeamIdsResponse(GetActiveTeamIdsResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveTeamIdsResponse?GetActiveTeamIdsResult="+GetActiveTeamIdsResult+"", callback);
}
function GetActiveCampaignIds(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignIds?collectionId="+collectionId+"", callback);
}
function GetActiveCampaignIdsResponse(GetActiveCampaignIdsResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignIdsResponse?GetActiveCampaignIdsResult="+GetActiveCampaignIdsResult+"", callback);
}
function GetActiveCampaignerTeamsCount(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignerTeamsCount?", callback);
}
function GetActiveCampaignerTeamsCountResponse(GetActiveCampaignerTeamsCountResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignerTeamsCountResponse?GetActiveCampaignerTeamsCountResult="+GetActiveCampaignerTeamsCountResult+"", callback);
}
function GetActiveCampaignerTeamsCountByCollectionId(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignerTeamsCountByCollectionId?collectionId="+collectionId+"", callback);
}
function GetActiveCampaignerTeamsCountByCollectionIdResponse(GetActiveCampaignerTeamsCountByCollectionIdResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignerTeamsCountByCollectionIdResponse?GetActiveCampaignerTeamsCountByCollectionIdResult="+GetActiveCampaignerTeamsCountByCollectionIdResult+"", callback);
}
function GetActiveCampaignsCount(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignsCount?", callback);
}
function GetActiveCampaignsCountResponse(GetActiveCampaignsCountResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignsCountResponse?GetActiveCampaignsCountResult="+GetActiveCampaignsCountResult+"", callback);
}
function GetActiveCampaignsCountByCollectionId(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignsCountByCollectionId?collectionId="+collectionId+"", callback);
}
function GetActiveCampaignsCountByCollectionIdResponse(GetActiveCampaignsCountByCollectionIdResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetActiveCampaignsCountByCollectionIdResponse?GetActiveCampaignsCountByCollectionIdResult="+GetActiveCampaignsCountByCollectionIdResult+"", callback);
}
function GetTotalSponsorAmount(callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTotalSponsorAmount?", callback);
}
function GetTotalSponsorAmountResponse(GetTotalSponsorAmountResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTotalSponsorAmountResponse?GetTotalSponsorAmountResult="+GetTotalSponsorAmountResult+"", callback);
}
function GetTotalSponsorAmountByCollectionId(collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTotalSponsorAmountByCollectionId?collectionId="+collectionId+"", callback);
}
function GetTotalSponsorAmountByCollectionIdResponse(GetTotalSponsorAmountByCollectionIdResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTotalSponsorAmountByCollectionIdResponse?GetTotalSponsorAmountByCollectionIdResult="+GetTotalSponsorAmountByCollectionIdResult+"", callback);
}
function GetTotalAmountByCollectionId(collectionId,includeDonations,paidOnly,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTotalAmountByCollectionId?collectionId="+collectionId+"&includeDonations="+includeDonations+"&paidOnly="+paidOnly+"", callback);
}
function GetTotalAmountByCollectionIdResponse(GetTotalAmountByCollectionIdResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetTotalAmountByCollectionIdResponse?GetTotalAmountByCollectionIdResult="+GetTotalAmountByCollectionIdResult+"", callback);
}
function GetCommunityServiceResponse(serviceUrl,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetCommunityServiceResponse?serviceUrl="+serviceUrl+"", callback);
}
function GetCommunityServiceResponseResponse(GetCommunityServiceResponseResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetCommunityServiceResponseResponse?GetCommunityServiceResponseResult="+GetCommunityServiceResponseResult+"", callback);
}
function GetEventThermometerTotal(referenceTypeId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetEventThermometerTotal?referenceTypeId="+referenceTypeId+"", callback);
}
function GetEventThermometerTotalResponse(GetEventThermometerTotalResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetEventThermometerTotalResponse?GetEventThermometerTotalResult="+GetEventThermometerTotalResult+"", callback);
}
function GetSignUpControl(signUpTypeId,objectTypeId,linkUrl,collectionId,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSignUpControl?signUpTypeId="+signUpTypeId+"&objectTypeId="+objectTypeId+"&linkUrl="+linkUrl+"&collectionId="+collectionId+"", callback);
}
function GetSignUpControlResponse(GetSignUpControlResult,callback)
 {
    $.get("/EventOnWidgetService.asmx/GetSignUpControlResponse?GetSignUpControlResult="+GetSignUpControlResult+"", callback);
}
function string(callback)
 {
    $.get("/EventOnWidgetService.asmx/string?", callback);
}
function ArrayOfTeam(callback)
 {
    $.get("/EventOnWidgetService.asmx/ArrayOfTeam?", callback);
}
function Team(callback)
 {
    $.get("/EventOnWidgetService.asmx/Team?", callback);
}
function ArrayOfCampaigner(callback)
 {
    $.get("/EventOnWidgetService.asmx/ArrayOfCampaigner?", callback);
}
function ArrayOfCampaign(callback)
 {
    $.get("/EventOnWidgetService.asmx/ArrayOfCampaign?", callback);
}
function ArrayOfParticipant(callback)
 {
    $.get("/EventOnWidgetService.asmx/ArrayOfParticipant?", callback);
}
function Participant(callback)
 {
    $.get("/EventOnWidgetService.asmx/Participant?", callback);
}
function int(callback)
 {
    $.get("/EventOnWidgetService.asmx/int?", callback);
}
function ArrayOfInt(callback)
 {
    $.get("/EventOnWidgetService.asmx/ArrayOfInt?", callback);
}
function decimal(callback)
 {
    $.get("/EventOnWidgetService.asmx/decimal?", callback);
}
