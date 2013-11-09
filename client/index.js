var service =  "/EventOnWidgetService.asmx/";



function Campaign(id) {
  this.id = id;
  this.data = {};
}

function Campaigner(id) {
  this.id = id;
}



function Collection(collectionid) {
  this.collectionid = collectionid;
  $.getJSON("/geofeed.json", function(data) {
    this.geodata = data;
    console.log(data);
  }.bind(this));
}
Collection.prototype.getActiveCampaigns = function(callback)  {
  $.get(
    service + "GetActiveCampaignIds?collectionId=" + this.collectionid
    , function(data) {
      var campaigns = {};
      var ids = $(data).find("int").map(
        function(index, value) {
          return parseInt($(value).html());
        });
      $(ids).each(function(i, id) {
        campaigns[id] = new Campaign(id);
      });
      var l = ids.length;
      for (var i = 0; i < ids.length ; i+=100) {
        $.get(
          service + "GetCampaignsByIds?idsToGetString=" + $.makeArray(ids).splice(i, 100).join(",")
          , function(data) {
            $(data).find("Campaign").each(function(index, d) {
              var id =  parseInt($(d).find("CampaignId").html());
              campaigns[id].data = $(d);
              l--;
            });
            if(l == 0) {
              callback(campaigns);
            }
          }
        );
      }
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
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(map);

  var collection  = new Collection(4);
  collection.getActiveCampaigns(function(result) {

  });

  collection.getActiveCampaigners(function(result) {

  });

});
