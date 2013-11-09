SeriousRequest
==============

App voor de hackathon

communicatie
------------

https://groups.google.com/forum/?hl=en#!forum/3fmseriousrequesthackathon

API's
-----

We gebruiken in principe deze API

  http://www.kominactie.nl/EventOnWidgetService.asmx

De geodata ontbreekt hierin helaas nog. Deze php scrapet het van de site:

  http://live.3fm.nl/_test/kia/geofeed.php

en die gebruiken we nou in deze app.

In server staat een node.js-applicatie die deze 2 api's proxiet, zodat we deze zonder gedoe met cors 
en zo kunnen gebruiken via ajax-calls. In principe is dat niet nodig als de kominactie.nl-api cors ondersteunt.
