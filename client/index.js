var service =  "/EventOnWidgetService.asmx/";

function Campaign(collection, id) {
  this.id = id;
  this.collection = collection;
  this.data = {};
}

Campaign.prototype.getLatLong = function() {
  return this.collection.getLatLon(this.id);
};

Campaign.prototype.getName = function() {
  return this.collection.getName(this.id);
};

Campaign.prototype.getCity = function() {
  return this.collection.getCity(this.id);
};

Campaign.prototype.getURL = function() {
  return this.collection.getURL(this.id);
};

Campaign.prototype.getSponsorAmount = function() {
  return parseFloat($(this.data).find("totalsponsoramount").html());
};

Campaign.prototype.getHtml = function() {
  var amount = this.getSponsorAmount();
  return this.getName() + (amount > 0 ? " &euro;" + this.getSponsorAmount() : "");
}

function Campaigner(id) {
  this.id = id;
}

function Collection(collectionid) {
  this.collectionid = collectionid;
  $.getJSON("/geofeed.json", function(data) {
    this.geodata = {};
    $.each(data, function(i,value) {
      this.geodata[parseInt(value.id)] = value;
    }.bind(this));
    if (this.callback) this.callback();
  }.bind(this));
}
Collection.prototype.getLatLon = function(campaignId)  {
  return (this.geodata[campaignId] || {latLong: null}) .latLong;
};

Collection.prototype.getName = function(campaignId)  {
  return (this.geodata[campaignId] || {name: null}) .name;
};

Collection.prototype.getCity = function(campaignId)  {
  return (this.geodata[campaignId] || {city: null}) .city;
};
Collection.prototype.getURL = function(campaignId)  {
  return (this.geodata[campaignId] || {URL: null}) .URL;
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


function Map(collection) {
  this.map = L.map('map').setView([52.197, 5.438], 7);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14, minZoom: 7,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(this.map);
  collection.getActiveCampaigns(function(result) {
    $.each(result, function(index, value) {
      if (value.getLatLong()) {
        var latlong = value.getLatLong().split(", ").map(parseFloat);
        var marker = L.marker(latlong).addTo(this.map);
	marker.bindPopup( value.getHtml() );
      }
    }.bind(this));
  }.bind(this));
};

$(function() {


  var collection  = new Collection(4);
  new Map(collection);

});
