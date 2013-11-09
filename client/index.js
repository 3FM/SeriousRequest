var service =  "/EventOnWidgetService.asmx/";

function Campaign(id) {
  this.id = id;
}

function Campaigner(id) {
  this.id = id;
}



function Collection(collectionid) {
  this.collectionid = collectionid;

}
Collection.prototype.getActiveCampaigns = function(callback)  {
  $.get(
    service + "GetActiveCampaignIds?collectionId=" + this.collectionid
    , function(data) {
      var ids = $(data).find("int").map(
        function(index, value) {
          return parseInt($(value).html());
        });
      console.log(ids);
      $.get(
        service + "GetCampaignsByIds?idsToGetString=" + $.makeArray(ids).join(",")
        , function(data) {
           console.log(data);
        }
      );
  });
};
Collection.prototype.getActiveCampaigners = function(callback)  {
  $.get(
    service + "GetActiveCampaignerIds?collectionId=" + this.collectionid
    , function(data) {
      callback($(data).find("int").map(
        function(index, value) {
          return new Campaigner(parseInt($(value).html()));
        }
      ));
  });
};


$(function() {
  var map = L.map('map').setView([52.197, 5.438], 7);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14, minZoom: 7,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  var collection  = new Collection(4);
  collection.getActiveCampaigns(function(result) {
    console.log(result);
  });

  collection.getActiveCampaigners(function(result) {
    console.log(result);
  });

});
