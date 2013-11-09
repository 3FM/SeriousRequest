var service =  "/EventOnWidgetService.asmx/";



function Campaign(collection, id) {
  this.id = id;
  this.collection = collection;
  this.data = {};
}
Campaign.prototype.getLatLong = function() {
  return this.collection.getLatLon(this.id);
};

function Campaigner(id) {
  this.id = id;
}



function Collection(collectionid) {
  this.collectionid = collectionid;
  $.getJSON("/geofeed.json", function(data) {
    this.geodata = {};
    $.each(data, function(i,value) {
      this.geodata[value.id] = value;
    }.bind(this));
    if (this.callback) this.callback();
  }.bind(this));
}
Collection.prototype.getLatLon = function(campaignId)  {
  return this.geodata[campaignId].latLong;
};
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
        campaigns[id] = new Campaign(this, id);
      }.bind(this));
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
                if (this.geodata) {
                  callback(campaigns);
                } else {
                  this.callback = function() {
                    callback(compaigns);
                  };
                }
            }
          }.bind(this)
        );
      }
  }.bind(this));
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


function Map() {
  var map = L.map('map').setView([52.197, 5.438], 7);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14, minZoom: 7,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

};

$(function() {


  var collection  = new Collection(4);
  collection.getActiveCampaigns(function(result) {
    console.log(result[35].getLatLong());
  });

  collection.getActiveCampaigners(function(result) {

  });


});
