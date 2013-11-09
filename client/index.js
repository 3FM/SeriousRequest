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
    "/EventOnWidgetService.asmx/GetActiveCampaignIds?collectionId=" + this.collectionid
    , function(data) {
      callback($(data).find("int").map(
        function(index, value) {
          return new Campaign($(value).html());
        }
      ));
  });
};
Collection.prototype.getActiveCampaigners = function(callback)  {
  $.get(
    "/EventOnWidgetService.asmx/GetActiveCampaignersIds?collectionId=" + this.collectionid
    , function(data) {
      callback($(data).find("int").map(
        function(index, value) {
          return new Campaigner($(value).html());
        }
      ));
  });
};


$(function() {
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(map);

  var collection  = new Collection(4);
  collection.getActiveCampaigns(function(result) {
    console.log(result);
  });

});
