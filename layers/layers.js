var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_StamenTonerLite_1 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });
var format_Landmark_2 = new ol.format.GeoJSON();
var features_Landmark_2 = format_Landmark_2.readFeatures(json_Landmark_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landmark_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landmark_2.addFeatures(features_Landmark_2);cluster_Landmark_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Landmark_2
});
var lyr_Landmark_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Landmark_2, 
                style: style_Landmark_2,
                interactive: true,
                title: '<img src="styles/legend/Landmark_2.png" /> Landmark'
            });
var format_Drains_3 = new ol.format.GeoJSON();
var features_Drains_3 = format_Drains_3.readFeatures(json_Drains_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drains_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drains_3.addFeatures(features_Drains_3);
var lyr_Drains_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drains_3, 
                style: style_Drains_3,
                interactive: true,
                title: '<img src="styles/legend/Drains_3.png" /> Drains'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_StamenTonerLite_1.setVisible(true);lyr_Landmark_2.setVisible(true);lyr_Drains_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_StamenTonerLite_1,lyr_Landmark_2,lyr_Drains_3];
lyr_Landmark_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Type': 'Type', 'Name': 'Name', 'Built Year': 'Built Year', 'Description': 'Description', 'Image': 'Image', 'url': 'url', });
lyr_Drains_3.set('fieldAliases', {'fid': 'fid', 'DEPTH': 'DEPTH', 'Width': 'Width', 'Type': 'Type', 'Note': 'Note', });
lyr_Landmark_2.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Type': 'Hidden', 'Name': 'Hidden', 'Built Year': 'Hidden', 'Description': 'TextEdit', 'Image': 'ExternalResource', 'url': 'Hidden', });
lyr_Drains_3.set('fieldImages', {'fid': 'Hidden', 'DEPTH': 'TextEdit', 'Width': 'TextEdit', 'Type': 'ValueMap', 'Note': 'TextEdit', });
lyr_Landmark_2.set('fieldLabels', {'Description': 'inline label', 'Image': 'no label', });
lyr_Drains_3.set('fieldLabels', {'DEPTH': 'inline label', 'Width': 'inline label', 'Type': 'inline label', 'Note': 'inline label', });
lyr_Drains_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});