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
};
Campaign.prototype.getCampaigners = function() {
  return this.collection.getCampaigners(this.id);
};

function Campaigner(id) {
  this.id = id;
}

function Collection(collectionid) {
  this.collectionid = collectionid;
  this.callbacks = [];
  $.getJSON("/geofeed.json", function(data) {
    this.geodata = {};
    $.each(data, function(i,value) {
      this.geodata[parseInt(value.id)] = value;
    }.bind(this));
    var c = this.callbacks.pop();
    while (c) {
      c();
      c = this.callbacks.pop();
    }
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
Collection.prototype.getCampaign = function(id, callback) {
  this.getActiveActiveCampaigns(function() {
  });
};
Collection.prototype.getActiveCampaigns = function(callback)  {
  if (this.campaigns) {
    callback(this.campaigns);
  } else {
    $.get(
      service + "GetActiveCampaignIds?collectionId=" + this.collectionid
      , function(data) {
        this.campaigns = {};
        var ids = $(data).find("int").map(
          function(index, value) {
            return parseInt($(value).html());
          });
        $(ids).each(function(i, id) {
          this.campaigns[id] = new Campaign(this, id);
        }.bind(this));
        var l = ids.length;
        for (var i = 0; i < ids.length ; i+=100) {
          $.get(
            service + "GetCampaignsByIds?idsToGetString=" + $.makeArray(ids).splice(i, 100).join(",")
            , function(data) {
              $(data).find("Campaign").each(function(index, d) {
                var id =  parseInt($(d).find("CampaignId").html());
                this.campaigns[id].data = $(d);
                l--;
              }.bind(this));
              if(l == 0) {
                if (this.geodata) {
                  callback(this.campaigns);
                } else {
                  this.callbacks.add(function() {
                    callback(this.compaigns);
                  }.bind(this));
                }
              }
            }.bind(this)
          );
        }
      }.bind(this));
  }
};
Collection.prototype.getActiveCampaigners = function(callback)  {
  if (this.campaigners) {
    callback(this.campaigerns);
  } else {
    $.get(
      service + "GetActiveCampaignerIds?collectionId=" + this.collectionid
      , function(data) {
        this.campaigers = {};
        var ids = $(data).find("int").map(
          function(index, value) {
            return parseInt($(value).html());
          });
        $(ids).each(function(i, id) {
          this.campaigners[id] = new Campaigner(id);
        }.bind(this));
        var l = ids.length;
        for (var i = 0; i < ids.length ; i+=100) {
          $.get(
            service + "GetCampaignerssByIds?idsToGetString=" + $.makeArray(ids).splice(i, 100).join(",")
            , function(data) {
              $(data).find("Campaigner").each(function(index, d) {
                var id =  parseInt($(d).find("PersonId").html());
                this.campaigners[id].data = $(d);
                l--;
              }.bind(this));
              if(l == 0) {
                if (this.geodata) {
                  callback(this.campaigners);
                } else {
                  this.callbacks.add(function() {
                    callback(this.compaigners);
                  }.bind(this));
                }
              }
            }.bind(this)
          );
        }
      }.bind(this));
  }
};


function Map(collection) {
  this.map = L.map('map').setView([52.197, 5.438], 8);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14, minZoom: 7,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(this.map);
  collection.getActiveCampaigns(function(result) {
    $.each(result, function(index, value) {
      if (value.getLatLong()) {
        var latlong = value.getLatLong().split(", ").map(parseFloat);
        var marker = L.marker(latlong);
        var icon = L.icon({
          iconSize : [Math.random() * 200, Math.random() * 200]
        });
        marker.setIcon(icon);
        marker.addTo(this.map);
	marker.bindPopup(value.getHtml());
      }
    }.bind(this));
  }.bind(this));

};

$(function() {


  var collection  = new Collection(4);
  new Map(collection);

});
