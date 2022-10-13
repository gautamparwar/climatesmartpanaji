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
var format_Ward28_2 = new ol.format.GeoJSON();
var features_Ward28_2 = format_Ward28_2.readFeatures(json_Ward28_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ward28_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ward28_2.addFeatures(features_Ward28_2);
var lyr_Ward28_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ward28_2, 
                style: style_Ward28_2,
                interactive: true,
    title: 'Ward28<br />\
    <img src="styles/legend/Ward28_2_0.png" /> Patto<br />\
    <img src="styles/legend/Ward28_2_1.png" /> Ribander<br />'
        });
var format_Ward19_3 = new ol.format.GeoJSON();
var features_Ward19_3 = format_Ward19_3.readFeatures(json_Ward19_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ward19_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ward19_3.addFeatures(features_Ward19_3);
var lyr_Ward19_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ward19_3, 
                style: style_Ward19_3,
                interactive: true,
                title: '<img src="styles/legend/Ward19_3.png" /> Ward19'
            });
var format_Ward20_4 = new ol.format.GeoJSON();
var features_Ward20_4 = format_Ward20_4.readFeatures(json_Ward20_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ward20_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ward20_4.addFeatures(features_Ward20_4);
var lyr_Ward20_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ward20_4, 
                style: style_Ward20_4,
                interactive: true,
                title: '<img src="styles/legend/Ward20_4.png" /> Ward20'
            });
var format_Features_5 = new ol.format.GeoJSON();
var features_Features_5 = format_Features_5.readFeatures(json_Features_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Features_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Features_5.addFeatures(features_Features_5);
var lyr_Features_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Features_5, 
                style: style_Features_5,
                interactive: true,
    title: 'Features<br />\
    <img src="styles/legend/Features_5_0.png" /> AQI Station<br />\
    <img src="styles/legend/Features_5_1.png" /> Bus Stand<br />\
    <img src="styles/legend/Features_5_2.png" /> Cross<br />\
    <img src="styles/legend/Features_5_3.png" /> Damodar Temple<br />\
    <img src="styles/legend/Features_5_4.png" /> Drain<br />\
    <img src="styles/legend/Features_5_5.png" /> Fonte Phoenix Spring<br />\
    <img src="styles/legend/Features_5_6.png" /> Health Hazard<br />\
    <img src="styles/legend/Features_5_7.png" /> Interstate Bus Terminus<br />\
    <img src="styles/legend/Features_5_8.png" /> Library<br />\
    <img src="styles/legend/Features_5_9.png" /> Mala Lake<br />\
    <img src="styles/legend/Features_5_10.png" /> Maruti Temple<br />\
    <img src="styles/legend/Features_5_11.png" /> Petrol Pump<br />\
    <img src="styles/legend/Features_5_12.png" /> Sewage Treatment Plant<br />\
    <img src="styles/legend/Features_5_13.png" /> St. Francis Xavier Chapel<br />\
    <img src="styles/legend/Features_5_14.png" /> St. Xavier Community Centre<br />\
    <img src="styles/legend/Features_5_15.png" /> Sulabh Toilet<br />\
    <img src="styles/legend/Features_5_16.png" /> Transformer<br />\
    <img src="styles/legend/Features_5_17.png" /> Waste Collection<br />\
    <img src="styles/legend/Features_5_18.png" /> Waster Segregation Yard<br />'
        });
var format_DrainsandSidewalks_6 = new ol.format.GeoJSON();
var features_DrainsandSidewalks_6 = format_DrainsandSidewalks_6.readFeatures(json_DrainsandSidewalks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrainsandSidewalks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainsandSidewalks_6.addFeatures(features_DrainsandSidewalks_6);
var lyr_DrainsandSidewalks_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DrainsandSidewalks_6, 
                style: style_DrainsandSidewalks_6,
                interactive: true,
    title: 'DrainsandSidewalks<br />\
    <img src="styles/legend/DrainsandSidewalks_6_0.png" /> Covered<br />\
    <img src="styles/legend/DrainsandSidewalks_6_1.png" /> Natural<br />\
    <img src="styles/legend/DrainsandSidewalks_6_2.png" /> Open<br />'
        });

lyr_GoogleSatellite_0.setVisible(false);lyr_StamenTonerLite_1.setVisible(true);lyr_Ward28_2.setVisible(false);lyr_Ward19_3.setVisible(false);lyr_Ward20_4.setVisible(false);lyr_Features_5.setVisible(true);lyr_DrainsandSidewalks_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_StamenTonerLite_1,lyr_Ward28_2,lyr_Ward19_3,lyr_Ward20_4,lyr_Features_5,lyr_DrainsandSidewalks_6];
lyr_Ward28_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Ward No': 'Ward No', 'Area': 'Area', });
lyr_Ward19_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ward no': 'ward no', });
lyr_Ward20_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ward no': 'ward no', });
lyr_Features_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Type': 'Type', 'Name': 'Name', 'Built Year': 'Built Year', 'Description': 'Description', 'Image': 'Image', 'url': 'url', });
lyr_DrainsandSidewalks_6.set('fieldAliases', {'fid': 'fid', 'DEPTH': 'DEPTH', 'Width': 'Width', 'Type': 'Type', 'Note': 'Note', });
lyr_Ward28_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Ward No': 'TextEdit', 'Area': 'TextEdit', });
lyr_Ward19_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ward no': 'TextEdit', });
lyr_Ward20_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ward no': 'TextEdit', });
lyr_Features_5.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Type': 'Hidden', 'Name': 'TextEdit', 'Built Year': 'Hidden', 'Description': 'TextEdit', 'Image': 'ExternalResource', 'url': 'Hidden', });
lyr_DrainsandSidewalks_6.set('fieldImages', {'fid': 'Hidden', 'DEPTH': 'TextEdit', 'Width': 'TextEdit', 'Type': 'ValueMap', 'Note': 'TextEdit', });
lyr_Ward28_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Ward No': 'no label', 'Area': 'no label', });
lyr_Ward19_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'ward no': 'no label', });
lyr_Ward20_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'ward no': 'no label', });
lyr_Features_5.set('fieldLabels', {'Name': 'no label', 'Description': 'no label', 'Image': 'no label', });
lyr_DrainsandSidewalks_6.set('fieldLabels', {'DEPTH': 'inline label', 'Width': 'inline label', 'Type': 'no label', 'Note': 'no label', });
lyr_DrainsandSidewalks_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});